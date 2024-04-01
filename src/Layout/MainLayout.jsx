
import { Outlet } from 'react-router-dom';
import Navbar from '../share/navbar/Navbar';
import Sidebar from '../share/sidebar/Sidebar';

const MainLayout = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex items-start gap-4 mt-[75px]">
        <Sidebar />
        <div className=" ml-3 lg:ml-10 mr-5 min-w-[50%] w-full p-2 lg:p-3 overflow-hidden  h-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
