
import { useState } from "react";
import { Collapse } from "react-collapse";
import { FaChevronDown } from "react-icons/fa";
import { IncomeData } from "../../utility/Income";

const Income = () => {
    const [selectYear, setSelectYear] = useState("Last Year");
    const [active, setActive] = useState(false);
    const selectYearData = [
        "Last Year",
        "2021 Year",
        "2020 Year",
        "2019 Year",
        "2018 Year",
        "2017 Year",
        "2016 Year",
        "2015 Year",
        "2014 Year",
        "2013 Year",
    ];
    return (
        <div className=" bg-primary-muted p-6 rounded-[10px] ">
            <div className=" flex justify-between items-center gap-3">
                <p className="text-[14px] text-white-muted ">Income</p>
                <div className=" relative">
                    <div
                        onClick={() => setActive(!active)}
                        className={` ${active ? " rounded-t-[10px]" : "rounded-3xl "} text-white-muted flex cursor-pointer items-center gap-3 bg-primary-base py-3 px-10 justify-between`}
                    >
                        <h1 className="text-[14px] font-medium"> {selectYear} </h1>
                        <div>
                            <FaChevronDown className="text-[16px]" />
                        </div>
                    </div>
                    <div className="absolute text-white-base bg-primary-base w-full  z-50 rounded-[10px]">
                        <Collapse isOpened={active}>
                            <div className=" space-y-2 p-3">
                                {selectYearData?.map((item, i) => (
                                    <div
                                        className=" hover:text-blue-base cursor-pointer "
                                        onClick={() => { setSelectYear(item), setActive(false) }}
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
            {/* income data  */}

            <div className=" flex items-start gap-2 mt-2">
                {/* limit income  */}
                <div className=" w-[18%] h-[200px] flex flex-col justify-between gap-2">
                    <p className="text-[14px] text-white-muted">$30,000</p>
                    <p className="text-[14px] text-white-muted">$20,000</p>
                    <p className="text-[14px] text-white-muted">$10,000</p>
                    <p className="text-[14px] text-white-muted">$0</p>
                </div>
                <div className=" w-[82%]">
                    {/* income chart  */}
                    <div className=" flex justify-evenly  gap-2 md:gap-5 w-full">

                        {
                            IncomeData?.map((item, i) => <div className="  space-y-3" key={i}>
                                <div className=" h-[200px]">
                                    <div className="h-full rotate-180 w-[17px] bg-primary-base rounded-[100px] overflow-hidden">
                                        <div
                                            className="h-full bg-blue-base transition-all duration-500"
                                            style={{ height: `${item?.amount}%` }}
                                        ></div>
                                    </div>

                                </div>
                                <p className="text-white-muted text-[12px]"> {item?.month} </p>
                            </div>)
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Income;
