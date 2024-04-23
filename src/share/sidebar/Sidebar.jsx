import useBooleanStore from "../../store/AppStore";
import { Menubar } from "../../utility/menubar/Menubar";
import SidebarComponents from "./SidebarComponents";
const Sidebar = ({ active, setActive }) => {
  const toggleSitebarValue = useBooleanStore(
    (state) => state.toggleSitebarValue
  );

  return (
    <>
      <div className=" flex">
        <div
          className={`${
            active
              ? "xl:w-0 bg-primary-muted "
              : "xl:w-[250px] overflow-hidden h-screen"
          }  duration-500 !overflow-hidden `}
        >
          <div
            className={`${
              toggleSitebarValue
                ? "block w-full xl:w-[250px] left-0 fixed z-50 "
                : "hidden"
            } 
           -ml-[3px] left-0 xl:relative bg-white xl:block xl:w-[250px] top-14 xl:-top-2 overflow-hidden z-20 `}
          >
            <div className="flex gap-2">
              <div
                className={` ${
                  active ? "w-0 hidden" : " w-[250px]"
                }  bg-primary-muted w-[250px] fixed h-full pt-4 z-50 `}
              >
                <div className="flex">
                  <div
                    className={`  w-full space-y-2 h-[90vh] sidebarScrool  overflow-auto  scroll-m-0 pr-2`}
                  >
                    {Menubar?.map((item, i) => (
                      <SidebarComponents key={i} item={item} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" hidden  xl:flex  group h-[90vh] items-center">
          <div
            onClick={() => setActive(!active)}
            className="w-[8px] h-[100px] group-hover:h-[130px] duration-300 bg-[#f3f3f34a] rounded-md cursor-pointer"
          ></div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
