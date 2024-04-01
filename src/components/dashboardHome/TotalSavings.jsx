import { BsThreeDots } from "react-icons/bs";
import { FaLongArrowAltUp } from "react-icons/fa";

const TotalSavings = () => {
    return (
        <div className="bg-primary-muted  rounded-[10px] overflow-hidden">
            <div className="flex items-center justify-between pt-5 px-6">
                <h1 className="text-[15px] text-white-muted ">Total Savings</h1>
                <div className="text-white-base cursor-pointer">
                    <BsThreeDots className="text-[20px]" />
                </div>
            </div>
            <h1 className="text-[16px] pl-6 lg:text-[19px] text-white-base pt-3 font-medium">
                $ 8400
            </h1>
            {/* The upcoming dollar */}
            <div className=" flex justify-between items-center gap-2">
                <h1 className="flex pl-6 justify-start gap-2  text-active-base items-center ">
                    {" "}
                    <FaLongArrowAltUp className="text-[14px]" /> <span>19.94</span>{" "}
                </h1>
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-[80px]"
                        viewBox="0 0 176 67"
                        fill="none"
                    >
                        <path
                            d="M19.8563 47.5251C13.9641 54.5997 9.05395 60.6636 0.215637 59.653V66.7258H176V1.03367C175.345 0.359894 172.857 -0.583386 168.144 1.03367C162.251 3.05498 149.485 22.2575 137.701 28.3214C125.916 34.3854 113.15 20.2352 101.365 19.2245C89.5808 18.2139 84.6707 37.4164 73.8683 39.4377C63.0659 41.459 55.2096 35.3972 44.4072 33.3759C33.6048 31.3546 25.7486 40.4505 19.8563 47.5251Z"
                            fill="url(#paint0_linear_54_2335)"
                        />
                        <path
                            d="M17.7916 52.149C18.7682 53.1894 21.6979 54.2298 25.6043 50.0683C30.4872 44.8663 33.4169 32.3816 45.1358 30.3008C56.8548 28.2201 59.7845 39.6644 74.4332 42.7855C89.0819 45.9067 93.9648 42.7864 101.777 37.5844C109.59 32.3825 118.379 12.6151 132.051 12.6151C145.724 12.6151 150.606 16.7766 160.372 27.1805C168.185 35.5037 174.044 37.5844 175.997 37.5844"
                            stroke="#894BA9"
                            stroke-width="0.5"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_54_2335"
                                x1="141.629"
                                y1="4.18344"
                                x2="139.549"
                                y2="69.8725"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#4D75FF" />
                                <stop offset="1" stop-color="#4D75FF" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default TotalSavings;
