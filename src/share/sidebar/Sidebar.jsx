import useBooleanStore from '../../store/AppStore';
import { Menubar } from '../../utility/menubar/Menubar';
import SidebarComponents from './SidebarComponents';

const Sidebar = () => {
  const toggleSitebarValue = useBooleanStore((state) => state.toggleSitebarValue);
  return (
    <div
      className={`${
        toggleSitebarValue
          ? ' block w-full sm:w-[300px] left-0 fixed  '
          : 'hidden    '
      }  -ml-[3px] left-0  2xl:relative bg-white  2xl:block 2xl:w-[300px]  top-14 xl:-top-2 overflow-hidden z-20 `}
    >
      <div
        className={` ${
          toggleSitebarValue
            ? 'animate_fadeInUpSidebar'
            : ' animate_fadeOutDownSidebar'
        } p-4 bg-primary-muted w-[300px]  fixed h-full`}
      >
        <div className=" w-full space-y-2 h-[93%] sidebarScrool  overflow-auto pr-2 ">
          {Menubar?.map((item, i) => (
            <SidebarComponents key={i} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
