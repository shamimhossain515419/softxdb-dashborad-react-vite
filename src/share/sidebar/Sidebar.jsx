import useBooleanStore from "../../store/AppStore";
import { Menubar } from "../../utility/menubar/Menubar";
import SidebarComponents from "./SidebarComponents";
const Sidebar = ({ active, setActive }) => {
  const toggleSitebarValue = useBooleanStore(
    (state) => state.toggleSitebarValue
  );
  console.log(active);
  return (
    <>
      <div className="">
        <div
          className={`${active ? "hidden w-[0px]" : " block"}  duration-700`}
        >
          <div
            className={`${
              toggleSitebarValue
                ? "block w-full sm:w-[300px] left-0 fixed"
                : "hidden"
            } 
           -ml-[3px] left-0  2xl:relative bg-white 2xl:block 2xl:w-[300px] top-14 xl:-top-2 overflow-hidden z-20 `}
          >
            <div className="flex gap-2">
              <div className={` bg-primary-muted w-[300px] fixed h-full pt-4`}>
                <div className="flex">
                  <div
                    className={`  w-full space-y-2 h-[90vh] sidebarScrool  overflow-auto  scroll-m-0 pr-2`}
                  >
                    {Menubar?.map((item, i) => (
                      <SidebarComponents key={i} item={item} />
                    ))}
                  </div>
                  <div className="flex  h-[90vh] items-center">
                    <div
                      onClick={() => setActive(!active)}
                      className="w-[8px] h-[150px] bg-[#f3f3f34a] rounded-md cursor-pointer"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" hidden md:flex  h-[90vh] items-center">
          <div
            onClick={() => setActive(!active)}
            className="w-[8px] h-[150px] bg-[#f3f3f34a] rounded-md cursor-pointer"
          ></div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
