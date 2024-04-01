
import Selectitem from "../../ui/selectitem/Selectitem";
import { CategoryData } from "../../utility/selectItems/SelectItemsData";


const Address = () => {
    const Categoryinfo = CategoryData;
    return (
        <>
            <div className="pt-3">
                <p className="text-[15px] text-white-base mt-7">Basic Information</p>
                <div className="py-3 flex items-center gap-4">
                    <div className="flex items-center gap-3">
                        <input
                            className="w-[16px] h-[16px]  checked:p-5  checked:border-blue-500"
                            type="checkbox"
                            name=""
                            id=""
                        />
                        <p className="text-white-base text-[14px]">Billing Address</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <input
                            className="w-[16px] h-[16px] checked:p-5  checked:border-blue-500"
                            type="checkbox"
                            name=""
                            id=""
                        />
                        <p className="text-white-base text-[14px]">Shipping Address</p>
                    </div>
                </div>
                {/* address form  */}
                <div className=" px-6">
                    <form action="">
                        <div className="grid sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-7 py-2">
                            <Selectitem
                                title="Address Type *"
                                CategoryData={Categoryinfo}
                            ></Selectitem>
                        </div>
                        <div className=" grid sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-7 py-14">
                            <Selectitem
                                title="Address  *"
                                CategoryData={Categoryinfo}
                            ></Selectitem>
                            <Selectitem
                                title="Country   *"
                                CategoryData={Categoryinfo}
                            ></Selectitem>
                            <Selectitem
                                title="State/Division*"
                                CategoryData={Categoryinfo}
                            ></Selectitem>
                            <Selectitem
                                title="District*"
                                CategoryData={Categoryinfo}
                            ></Selectitem>
                        </div>
                        <div className=" grid sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-7 py-5">
                            <Selectitem
                                title="Thana *"
                                CategoryData={Categoryinfo}
                            ></Selectitem>
                        </div>
                        <div className=" flex items-center gap-1 justify-between py-3">
                            <p className="text-[15px] text-white-base mt-7">Categoryinfo</p>
                            <p className="text-red-base text-[14px]">Remove</p>
                        </div>
                        <div className=" grid sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-7 py-2">
                            <div className="">
                                <label
                                    htmlFor=""
                                    className="text-[16px] font-medium  text-white-base"
                                >
                                    First Name <span className="text-blue-base">*</span>
                                </label>
                                <input
                                    type="text"
                                    className=" w-full text-[14px] text-white-base placeholder:text-white-muted placeholder:text-[12px] border border-blue-base block bg-transparent mt-2 outline-0 px-2 py-[10px] rounded "
                                    name=""
                                    id=""
                                    placeholder="Enter First Name"
                                />
                            </div>
                            <div className="">
                                <label
                                    htmlFor=""
                                    className="text-[16px] font-medium  text-white-base"
                                >
                                    Last Name <span className="text-blue-base">*</span>
                                </label>
                                <input
                                    type="text"
                                    className=" w-full text-[14px] text-white-base placeholder:text-white-muted placeholder:text-[12px] border border-blue-base block bg-transparent mt-2 outline-0 px-2 py-[10px] rounded "
                                    name=""
                                    id=""
                                    placeholder="Enter Last Name"
                                />
                            </div>
                            <div className="">
                                <label
                                    htmlFor=""
                                    className="text-[16px] font-medium  text-white-base"
                                >
                                    Phone Number <span className="text-blue-base">*</span>
                                </label>
                                <input
                                    type="text"
                                    className=" w-full text-[14px] text-white-base placeholder:text-white-muted placeholder:text-[12px] border border-blue-base block bg-transparent mt-2 outline-0 px-2 py-[10px] rounded "
                                    name=""
                                    id=""
                                    placeholder="Enter Phone Number "
                                />
                            </div>
                            <div className="">
                                <label
                                    htmlFor=""
                                    className="text-[16px] font-medium  text-white-base"
                                >
                                    Email <span className="text-blue-base">*</span>
                                </label>
                                <input
                                    type="text"
                                    className=" w-full text-[14px] text-white-base placeholder:text-white-muted placeholder:text-[12px] border border-blue-base block bg-transparent mt-2 outline-0 px-2 py-[10px] rounded "
                                    name=""
                                    id=""
                                    placeholder="Enter Email Address"
                                />
                            </div>
                        </div>
                        <div className=" h-[1px] w-full bg-blue-base mt-6 mb-4"></div>
                        <div className="py-4">
                            <button
                                type="submit"
                                className=" bg-blue-base px-6 py-2 text-white-base rounded text-[14px]"
                            >
                                Add contact Parson
                            </button>
                        </div>
                    </form>
                </div>
                <div className="py-4 mt-10">
                    <button
                        type="submit"
                        className=" bg-blue-base px-6 py-[10px] text-white-base rounded text-[16px]"
                    >
                        Add Customer Contact Address
                    </button>
                </div>
            </div>
        </>
    );
};

export default Address;
