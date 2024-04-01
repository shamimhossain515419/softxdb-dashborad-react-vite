import { FaRegSquarePlus } from 'react-icons/fa6';
import { FaChevronLeft } from 'react-icons/fa';
import { useState } from 'react';
import { Collapse } from 'react-collapse';
import { NavLink, useLocation } from 'react-router-dom';
const SidebarComponents = ({ item }) => {
  const [active, setAcive] = useState(false);
  const location = useLocation();

  return (
    <>
      <div
        onClick={() => setAcive(!active)}
        className="flex hover:bg-blue-base py-1 px-2 rounded-lg justify-between cursor-pointer items-center gap-4"
      >
        <div className="flex items-center gap-3">
          <div className="bg-blue-muted p-3 rounded-full">
            <FaRegSquarePlus className="text-[15px] text-white-base" />
          </div>
          <h1 className="text-white-base text-[16px] font-medium  capitalize">
            {item?.title}
          </h1>
        </div>
        <FaChevronLeft
          className={`${
            active ? ' -rotate-90 ' : 'rotate-0'
          } duration-200 text-[15px] text-white-base`}
        />
      </div>
      <Collapse isOpened={active} className="mt-3">
        <div className="  ml-[58px] text-white-muted space-y-1 ">
          {item?.submenu?.map((item, index) => {
            return (
              <NavLink
                key={index}
                to={`${item?.path}`}
                className={({ isActive }) =>
                  isActive
                    ? 'flex hover:text-white-base text-white-base duration-300 items-center gap-3'
                    : 'flex hover:text-white-base duration-300 items-center gap-3'
                }
              >
                <span
                  className={` ${
                    item?.path == location?.pathname ? 'opacity-100' : 'opacity-0'
                  }  w-[8px] h-[8px] bg-blue-base rounded-full`}
                ></span>
                <span>{item?.title}</span>
              </NavLink>
            );
          })}
        </div>
      </Collapse>
    </>
  );
};

export default SidebarComponents;