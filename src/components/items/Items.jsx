"use client";

import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaCloudUploadAlt } from "react-icons/fa";

import { IoSearchOutline } from "react-icons/io5";
import { Collapse } from "react-collapse";
import { FaChevronDown } from "react-icons/fa";
import ItemsTable from "./ItemsTable";
import { SiMinutemailer } from "react-icons/si";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { FaAngleDoubleRight } from "react-icons/fa";
import { CategoryData } from "../../utility/selectItems/SelectItemsData";
import { Link } from "react-router-dom";
import Selectitem from "../../ui/selectitem/Selectitem";

const Items = () => {
    const [activeButton, setActiveButton] = useState(1);
    const [activeUpload, setActiveUpload] = useState(false);
    const Categoryinfo = CategoryData;
    const [showData, setShowData] = useState("25");
    const [activeLimit, setActiveLimit] = useState(false);
    const showDataArray = [
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
    ];
    return (
        <div>
            <div className="flex items-center gap-3">
                <Link to={"/"} className="text-white-muted">
                    Home
                </Link>
                <FaArrowRight className="text-[18px] text-blue-base" />
                <Link to={"/item"} className="text-white-base">
                    Items
                </Link>
            </div>
            {/* items button  */}
            <div className="py-10 flex flex-col lg:flex-row justify-between lg:items-center gap-6">
                <div className="border-[2px] border-[#4d75ff]  rounded-md  flex">
                    <button
                        onClick={() => setActiveButton(1)}
                        className={` ${activeButton == 1 ? "bg-blue-base " : " "
                            } w-[150px] text-[14px]  px-3 py-2 text-white-base`}
                    >
                        item
                    </button>
                    <button
                        onClick={() => setActiveButton(2)}
                        className={`${activeButton == 2 ? "bg-blue-base " : " "
                            }  w-[150px]  text-[14px]  px-3 py-2 text-white-base`}
                    >
                        Group items
                    </button>
                </div>
                <div className=" flex gap-3 items-center ">
                    <div
                        onClick={() => setActiveUpload(false)}
                        className={` ${activeUpload == false
                            ? " bg-blue-base"
                            : " border  border-[#4d75ff] "
                            }  p-[10px] rounded-full cursor-pointer`}
                    >
                        <FaCloudUploadAlt className={`text-[18px] text-white-base`} />
                    </div>
                    <div
                        onClick={() => setActiveUpload(true)}
                        className={` ${activeUpload == true
                            ? " bg-blue-base"
                            : " border  border-[#4d75ff] "
                            }  p-[10px] rounded-full cursor-pointer`}
                    >
                        <FaCloudUploadAlt
                            className={`text-[18px] rotate-180 text-white-base`}
                        />
                    </div>

                    <div>
                        <button className="border-[1.5px] border-[#4d75ff] rounded-md inline-block  text-white-base tex-[14px] px-4 py-2 overflow-hidden">
                            Add new item
                        </button>
                    </div>
                </div>
            </div>

            {/* select items  */}
            <div className=" flex  flex-wrap lg:flex-nowrap  items-start gap-12 xl:gap-8">
                <div className=" w-full">
                    <Selectitem title={"Categories"} CategoryData={Categoryinfo} />
                </div>
                <div className=" w-full">
                    <Selectitem title={"Available in"} CategoryData={Categoryinfo} />
                </div>
                <div className=" w-full">
                    <Selectitem title={"Item Type"} CategoryData={Categoryinfo} />
                </div>
                <div className=" w-full">
                    <Selectitem title={"Brand"} CategoryData={Categoryinfo} />
                </div>
                <div className=" w-full">
                    <Selectitem title={"Status"} CategoryData={Categoryinfo} />
                </div>
            </div>

            {/* filtter  */}

            <div className=" mt-[90px]">
                <div className=" flex  gap-5 pt-5">
                    <button className=" bg-blue-base px-3 text-[14px] py-2 border border-[#4d75ff]  rounded-[4px] text-white-base">
                        Apply Filter
                    </button>
                    <button className=" text-blue-base px-3 text-[14px] py-2 border border-[#4d75ff]  rounded-[4px] ">
                        Clear Filter
                    </button>
                </div>

                <div className=" flex flex-col lg:flex-row lg:items-center justify-between gap-3 py-10">
                    {/* show  limit data  */}
                    <div className=" flex items-center gap-3 text-white-base">
                        <h1 className="text-[14px] font-normal">Show</h1>
                        <div className="text-white-muted bg-primary-base border border-[#4d75ff] rounded-[4px]">
                            <div
                                onClick={() => setActiveLimit(!activeLimit)}
                                className=" px-2  py-[6px] w-[70px] flex justify-between cursor-pointer items-center gap-3"
                            >
                                <div>
                                    <h1 className="text-[14px] font-normal text-white-base">
                                        {showData}
                                    </h1>
                                </div>
                                <div>
                                    <FaChevronDown
                                        className={` ${activeLimit ? " rotate-180" : ""
                                            }  duration-200 text-[14px] text-white-base`}
                                    />
                                </div>
                            </div>
                            <div className="  bg-primary-base z-50  w-[70px] absolute border border-[#4d75ff] rounded-[4px]">
                                <Collapse isOpened={activeLimit} className="">
                                    <div className=" text-white-muted space-y-[2px]   pt-3">
                                        {showDataArray?.map((item, index) => {
                                            return (
                                                <div
                                                    onClick={() => {
                                                        setShowData(item), setActiveLimit(false);
                                                    }}
                                                    key={index}
                                                    className="flex px-2 py-2 cursor-pointer hover:bg-blue-base hover:text-white-base text-white-muted duration-300 items-center gap-3"
                                                >
                                                    <h1 className="text-[12px]  ">{item}</h1>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </Collapse>
                            </div>
                        </div>
                        <h1 className="text-[14px] font-normal">entries</h1>
                    </div>

                    {/* search data  */}
                    <div className="border text-white-base rounded-[4px] border-[#4d75ff] flex items-center gap-4 px-2 py-1">
                        <input
                            className=" w-full bg-transparent placeholder:text-white-base  outline-0 border-none"
                            type="search"
                            name=""
                            id=""
                            placeholder="Search..."
                        />
                        <button className="cursor-pointer">
                            {" "}
                            <IoSearchOutline className="text-[15px] text-white-base " />
                        </button>
                    </div>
                </div>
            </div>

            {/* table  data  */}
            <ItemsTable />

            {/* pagination defult  */}
            <div className="pt-10 flex flex-col lg:flex-row justify-between lg:items-center gap-6">
                <div>
                    <p className="text-white-base text-[14px] ">Showing 01 to 05 of 2000 entries</p>
                </div>
                <div>
                    <div className=" text-white-base flex items-center gap-5">
                        <div className=" hidden md:flex items-center gap-2">
                            <SiMinutemailer className="text-[20px]" />
                            <p className="text-[14px]">Jump to</p>
                        </div>
                        <div className=" flex items-center   border border-[#4d75ff] px-3 rounded overflow-auto">

                            <div className=" text-white-muted text-[16px]  border-r border-[#4d75ff] py-2 pr-2 flex items-center gap-3 font-normal">
                                <span>Page</span>
                                <FaChevronDown className="text-[14px]" />
                            </div>
                            <p className="hidden sm:block text-[14px] font-normal px-3 cursor-pointer  border-r border-[#4d75ff] py-2 pr-2"> First</p>
                            <div className="cursor-pointer border-r px-3 border-[#4d75ff] py-2 pr-2 ">
                                <FaAngleDoubleLeft className="text-[16px]" />
                            </div>

                            <div className="text-[16px] font-medium cursor-pointer px-3  border-r border-[#4d75ff] py-2 pr-2">1</div>
                            <div className="text-[16px] font-medium cursor-pointer px-3  border-r border-[#4d75ff] py-2  bg-blue-base">2</div>
                            <div className="text-[16px] font-medium cursor-pointer px-3  border-r border-[#4d75ff] py-2 pr-2">3</div>
                            <div className="cursor-pointer  border-r px-3 border-[#4d75ff] py-2 pr-2">
                                <BsThreeDots />
                            </div>
                            <div className="text-[16px] px-3 font-medium cursor-pointer border-r border-[#4d75ff] py-2 pr-2">50</div>
                            <div className="cursor-pointer px-3 sm:border-r border-[#4d75ff] py-2 pr-2">
                                <FaAngleDoubleRight className="text-[16px]" />
                            </div>
                            <h2 className=" hidden sm:block text-[14px] px-3 font-normal cursor-pointer">Last</h2>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Items;
