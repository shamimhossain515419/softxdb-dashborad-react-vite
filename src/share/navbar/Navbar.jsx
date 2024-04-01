import { FaBarsStaggered } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { useState } from "react";
import useBooleanStore from "../../store/AppStore";
import { Link } from "react-router-dom";

const Navbar = () => {
    const toggleSitebarHandler = useBooleanStore(
        (state) => state.toggleSitebarHandler
    );
    const [active, setActive] = useState(false)

    return (
        <div className='bg-primary-muted fixed top-0  z-50 w-full px-5 py-4 flex justify-between items-center gap-3 text-white-base'>
            <div  className='flex items-center cursor-pointer gap-2'>
            <FaBarsStaggered  onClick={toggleSitebarHandler}  className="text-[24px]" />
                <Link to={'/'}><h1 className=' hidden lg:block text-[18px] lg:text-[25px] font-bold tracking-[1.5px]'>Soft<span className=' text-[20px] text-blue-base lg:text-[28px]'>x</span>bd</h1>
                </Link>
            </div>
            <div className={` ${active ? "w-[90%] lg:w-[50%] overflow-hidden px-5 py-[4px] border border-[#34e4b5]  rounded-full translate-x-0" : "w-[0px]  translate-x-10"} transition  flex justify-between items-center gap-2   overflow-hidden`}>
                <input type="search" className=" w-full  outline-0 placeholder:text-white-base bg-primary-base px-2 py-1" placeholder="Please Search" />
                <div onClick={() => setActive(!active)} className=" cursor-pointer">
                    <CiSearch className="text-[22px]" />
                </div>
            </div>
            <div className='flex items-center gap-4 '>
                {
                    !active ? <div onClick={() => setActive(!active)} className=" cursor-pointer">
                        <CiSearch className="text-[22px]" />
                    </div> : null
                }

                <div className='relative'>
                    <IoMdNotificationsOutline className="text-[22px]" />
                    <span className='w-[7px] h-[7px] bg-red-base absolute -top-[2px] left-4 rounded-full'></span>
                </div>
                <div>
                    <IoSettingsOutline className="text-[22px]" />
                </div>
                <div>
                    <img className='w-[30px] h-[30px] rounded-full' width={50} height={50} src={"https://i.ibb.co/qBftv7B/DSC-0105-1.png"} alt='image' />
                </div>

            </div>
        </div>
    );
};

export default Navbar;