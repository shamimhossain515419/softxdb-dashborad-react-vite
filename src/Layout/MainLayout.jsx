import { Outlet } from "react-router-dom";
import Navbar from "../share/navbar/Navbar";
import Sidebar from "../share/sidebar/Sidebar";
import { useState } from "react";

const MainLayout = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex items-start gap-4 mt-[75px]">
        <Sidebar active={active} setActive={setActive} />
        <div className="  mr-5 min-w-[50%] w-full p-1 lg:p-3 overflow-hidden  h-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
