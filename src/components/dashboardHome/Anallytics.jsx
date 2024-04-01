import { useState } from "react";
import { Collapse } from "react-collapse";
import { FaChevronDown } from "react-icons/fa";
import { AnallyticsData } from "../../utility/Anallytics";

const Anallytics = () => {
    const [selectMonth, setSelectMonth] = useState("Last month");
    const [active, setActive] = useState(false);
    const selectMonthData = [
        "Last 1 month",
        "Last 2 months",
        "Last 3 months",
        "Last 4 months",
        "Last 5 months",
        "Last 6 months",
    ];
    return (
        <div className=" bg-primary-muted p-6 rounded-[10px] mt-4">
            <div className=" flex justify-between items-center gap-3">
                <p className="text-[16px]  lg:text-[22px] text-white-muted ">
                    Anallytics
                </p>
                <div className=" relative">
                    <div
                        onClick={() => setActive(!active)}
                        className={` ${active ? " rounded-t-[10px]" : "rounded-3xl "} text-white-muted flex cursor-pointer items-center gap-3 bg-primary-base py-3 px-10 justify-between l`}
                    >
                        <h1 className="text-[14px] font-medium"> {selectMonth} </h1>
                        <div>
                            <FaChevronDown className="text-[16px]" />
                        </div>
                    </div>
                    <div className="absolute text-white-base bg-primary-base w-full  rounded-[10px] ">
                        <Collapse isOpened={active}>
                            <div className=" space-y-2 p-3">
                                {selectMonthData?.map((item, i) => (
                                    <div
                                        className=" hover:text-blue-base cursor-pointer "
                                        onClick={() => {
                                            setSelectMonth(item), setActive(false);
                                        }}
                                        key={i}
                                    >
                                        {" "}
                                        {item}{" "}
                                    </div>
                                ))}
                            </div>
                        </Collapse>
                    </div>
                </div>
            </div>
            {/* Anallytics list  */}
            <div className="pt-4">
                <div className="space-y-4">
                    {AnallyticsData?.map((item, i) => (
                        <div key={i} className=" grid sm:grid-cols-2 gap-3">
                            <p className="text-[14px] text-white-muted capitalize">
                                {item?.name}
                            </p>
                            <div>
                                <div className="h-[17px] w-full bg-primary-base rounded-[100px] overflow-hidden">
                                    <div
                                        className="h-full bg-blue-base transition-all duration-500"
                                        style={{ width: `${item?.value}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Anallytics;
