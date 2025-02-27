const CategoryPost = require('../../../../model/post/categoryPost');
const Role = require('../../../../model/role.model');

const softDeleteCategoryPost = async (req, res) => {
  try {

    const adminRole = await Role.findOne({ name: 'admin' });
    if (!adminRole) {
      return res.status(500).json({
        success: false,
        err: 1,
        msg: "Không tìm thấy vai trò quản trị viên",
        status: 500
      });
    }

    if (!req.user || !Array.isArray(req.user.roles)) {
      return res.status(403).json({
        success: false,
        err: 1,
        msg: "Người dùng không có quyền truy cập.",
        status: 403
      });
    }

    // Kiểm tra người dùng có quyền admin không
    const isAdmin = req.user.roles.some(role => role._id.toString() === adminRole._id.toString());
    if (!isAdmin) {
      return res.status(403).json({
        success: false,
        err: 1,
        msg: "Quyền truy cập bị từ chối: Chỉ quản trị viên mới có thể xóa bài đăng",
        status: 403
      });
    }

    // Lấy ID bài đăng từ request
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({
        success: false,
        err: 1,
        msg: "ID bài đăng không hợp lệ",
        status: 400
      });
    }

    // Thực hiện xoá mềm bài đăng bằng cách cập nhật status thành 'disable'
    const softDeletedCategoryPost = await CategoryPost.findByIdAndUpdate(id, { status: 'disable' }, { new: true });
    if (!softDeletedCategoryPost) {
      return res.status(404).json({
        success: false,
        err: 1,
        msg: "Không tìm thấy bài đăng",
        status: 404
      });
    }

    // Trả về kết quả xoá mềm thành công
    res.status(200).json({
      success: true,
      err: 0,
      msg: 'Đã xoá bài đăng thành công',
      status: 200,
      data: softDeletedCategoryPost
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      err: 1,
      msg: "Lỗi server",
      status: 500,
      error: error.message
    });
  }
}

module.exports = {
  softDeleteCategoryPost,
};
