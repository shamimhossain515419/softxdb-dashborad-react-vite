import { BsThreeDots } from "react-icons/bs";
import { FaLongArrowAltUp } from "react-icons/fa";

const TotalBalance = () => {
    return (
        <div className="bg-primary-muted  rounded-[10px] overflow-hidden">
            <div className="flex items-center justify-between pt-5 px-6">
                {/* cart title  */}
                <h1 className="text-[15px] text-white-muted ">Total balance</h1>
                <div className="text-white-base cursor-pointer">
                    <BsThreeDots className="text-[20px]" />
                </div>
            </div>
             {/* total  amount  */}
            <h1 className="text-[16px] pl-6 lg:text-[19px] text-white-base pt-3 font-medium">
                $ 19,582
            </h1>
            {/* The upcoming dollar */}
            <div className=" flex justify-between items-center gap-2">
                <h1 className="flex pl-6 justify-start gap-2  text-active-base items-center ">
                    {" "}
                    <FaLongArrowAltUp className="text-[14px]" /> <span>10.94</span>{" "}
                </h1>
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className=" h-[80px] "
                        viewBox="0 0 177 67"
                        fill="none"
                    >
                        <path
                            d="M19.8695 47.5251C13.9772 54.5997 9.06707 60.6636 0.228752 59.653V66.7258H176.013V1.03367C175.358 0.359894 172.871 -0.583386 168.157 1.03367C162.265 3.05498 149.498 22.2575 137.714 28.3214C125.929 34.3854 113.163 20.2352 101.378 19.2245C89.594 18.2139 84.6838 37.4164 73.8814 39.4377C63.079 41.459 55.2227 35.3972 44.4203 33.3759C33.618 31.3546 25.7617 40.4505 19.8695 47.5251Z"
                            fill="url(#paint0_linear_54_2359)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_54_2359"
                                x1="141.642"
                                y1="4.18344"
                                x2="139.562"
                                y2="69.8725"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#AC58FF" />
                                <stop offset="1" stop-color="#7B4397" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default TotalBalance;
