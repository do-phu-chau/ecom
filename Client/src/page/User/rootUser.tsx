import React from "react";
import { Outlet } from "react-router-dom";
import { UserFooter } from "../../components/User/footer";
import UserHeader from "../../components/User/header";
import UserNav from "../../components/User/navbar";

const User: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800">
      <UserHeader />
      <UserNav />
      <div className="flex pt-11 sm:pt-2 md:pt-4 lg:pt-6 xl:pt-9 overflow-hidden bg-white dark:bg-gray-900">
        <div
          id="main-content"
          className="relative w-full max-w-screen-2xl mx-auto h-full overflow-y-auto bg-white dark:bg-gray-900"
        >
          <main>
            <div className="pt-6 2xl:px-0 ">
              <Outlet />
            </div>
          </main>
          <UserFooter />
        </div>
      </div>
    </div>
  );
};
export default User;
