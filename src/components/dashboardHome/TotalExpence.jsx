
import { BsThreeDots } from "react-icons/bs";
import { FaLongArrowAltUp } from "react-icons/fa";

const TotalExpence = () => {
    return (
        <div className="bg-primary-muted  rounded-[10px] overflow-hidden">
            <div className="flex items-center justify-between pt-5 px-6">
                {/* cart title  */}
                <h1 className="text-[15px] text-white-muted ">Total Expence</h1>
                <div className="text-white-base cursor-pointer">
                    <BsThreeDots className="text-[20px]" />
                </div>
            </div>
            <h1 className="text-[16px] pl-6 lg:text-[19px] text-white-base pt-3 font-medium">$ 11,348</h1>
            {/* The upcoming dollar */}
            <div className=" flex justify-between items-center gap-2">
                <h1 className="flex pl-6 justify-start gap-2  text-red-base items-center "> <FaLongArrowAltUp className="text-[14px]" /> <span>19.94</span> </h1>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className=" h-[80px] " viewBox="0 0 176 67" fill="none">
                        <path d="M19.8625 47.5251C13.9704 54.5997 9.06034 60.6636 0.222198 59.653V66.7258H176.003V1.03367C175.348 0.359894 172.861 -0.583386 168.147 1.03367C162.255 3.05498 149.489 22.2575 137.704 28.3214C125.92 34.3854 113.154 20.2352 101.37 19.2245C89.5856 18.2139 84.6755 37.4164 73.8734 39.4377C63.0712 41.459 55.2151 35.3972 44.4129 33.3759C33.6107 31.3546 25.7546 40.4505 19.8625 47.5251Z" fill="url(#paint0_linear_54_2370)" />
                        <path d="M17.81 52.1503C18.7866 53.1906 21.7163 54.231 25.6225 50.0695C30.5053 44.8675 33.435 32.3828 45.1537 30.3021C56.8724 28.2213 59.8021 39.6656 74.4505 42.7867C89.0989 45.9079 93.9817 42.7876 101.794 37.5857C109.607 32.3837 118.396 12.6163 132.068 12.6163C145.739 12.6163 150.622 16.7779 160.388 27.1818C168.2 35.5049 174.06 37.5857 176.013 37.5857" stroke="#894BA9" stroke-width="0.5" />
                        <defs>
                            <linearGradient id="paint0_linear_54_2370" x1="141.632" y1="4.18344" x2="139.552" y2="69.8725" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#26B7F4" />
                                <stop offset="1" stop-color="#2E8BA8" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default TotalExpence;