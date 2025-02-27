
import { Link } from 'react-router-dom';
const NotFoundComponent = () => {
  return (
    <main className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col justify-center items-center px-6 mx-auto h-screen xl:px-0 dark:bg-gray-900">
        <div className="block md:max-w-lg">
          <img src="https://firebasestorage.googleapis.com/v0/b/dax-bemoney.appspot.com/o/404%2F404%20error%20with%20a%20tired%20person-amico.png?alt=media&token=c1b8bd8f-b38b-453a-9ce4-f28b89e9326a" alt="astronaut image" />
        </div>
        <div className="text-center xl:max-w-4xl">
          <h1 className="mb-3 text-2xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">  Không tìm thấy trang</h1>
          <p className="mb-5 text-base font-normal text-gray-500 md:text-lg dark:text-gray-400">        Ối! Có vẻ như bạn đã truy cập vào một liên kết xấu. Nếu bạn cho rằng đây là vấn đề với chúng tôi, vui lòng
            cho chúng tôi biết.</p>
          <Link to='/' className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-3 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            Quay lại đăng nhập
          </Link>
        </div>
      </div>
    </main>);

};

export default NotFoundComponent;
