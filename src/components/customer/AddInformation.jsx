import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import Address from "./Address";
import { CategoryData } from "../../utility/selectItems/SelectItemsData";
import Selectitem from "../../ui/selectitem/Selectitem";

const AddInformation = () => {
    const Categoryinfo = CategoryData;
    const [active, setActive] = useState(false)
    return (
        <div>
            {/* Basic Information  */}
            <p className='text-[15px] text-white-base mt-7'>Basic Information</p>
            <div className='mt-8 grid  xl:grid-cols-7 gap-9'>
                <div className="xl:col-span-5">
                    <div className="">
                        <form action="">
                            <div className='grid  sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                                <div className=''>
                                    <label htmlFor="" className='text-[16px] font-medium  text-white-base'>Customer Name <span className='text-blue-base'>*</span></label>
                                    <input type="text" className=' w-full text-[14px] text-white-base placeholder:text-white-muted placeholder:text-[12px] border border-blue-base block bg-transparent mt-2 outline-0 px-2 py-[10px] rounded ' name="" id="" placeholder='Enter Customer Name' />
                                </div>
                                <div className=''>
                                    <label htmlFor="" className='text-[16px] font-medium  text-white-base'>Phone Number <span className='text-blue-base'>*</span></label>
                                    <input type="text" className=' w-full text-[14px] text-white-base placeholder:text-white-muted placeholder:text-[12px] border border-blue-base block bg-transparent mt-2 outline-0 px-2 py-[10px] rounded ' name="" id="" placeholder='Enter Phone Number' />
                                </div>
                                <div className=''>
                                    <label htmlFor="" className='text-[16px] font-medium  text-white-base'>Email <span className='text-blue-base'>*</span></label>
                                    <input type="text" className=' w-full text-[14px] text-white-base placeholder:text-white-muted placeholder:text-[12px] border border-blue-base block bg-transparent mt-2 outline-0 px-2 py-[10px] rounded ' name="" id="" placeholder='Enter Email Address' />
                                </div>
                                <div>
                                    <Selectitem title={"Customer Type"} CategoryData={Categoryinfo} />
                                </div>
                                <div className=''>
                                    <label htmlFor="" className='text-[16px] font-medium  text-white-base'>Website <span className='text-blue-base'>*</span></label>
                                    <input type="text" className=' w-full text-[14px] text-white-base placeholder:text-white-muted placeholder:text-[12px] border border-blue-base block bg-transparent mt-2 outline-0 px-2 py-[10px] rounded ' name="" id="" placeholder='Enter Website ' />
                                </div>
                                <div>
                                    <Selectitem title={"As Supplier"} CategoryData={Categoryinfo} />
                                </div>
                            </div>
                            <div className=" h-[1px] w-full bg-blue-base mt-8 mb-4"></div>
                            {/* Opening Balance  */}
                            <div className="pt-4" >
                                <div className=' max-w-[400px]'>
                                    <label htmlFor="" className='text-[16px] font-medium  text-white-base'>Customer Name <span className='text-blue-base'>*</span></label>
                                    <input type="number" className=' w-full text-[14px] text-white-base placeholder:text-white-muted placeholder:text-[12px] border border-blue-base block bg-transparent mt-2 outline-0 px-2 py-[10px] rounded ' name="" id="" placeholder='Enter Customer Name' />
                                </div>
                            </div>
                            <div className=" h-[1px] w-full bg-blue-base mt-6 mb-4"></div>
                        </form>
                    </div>
                </div>
                <div className="xl:col-span-2">
                    <div className="border border-dashed border-blue-500 rounded-lg flex justify-center items-center gap-5  p-4 ">
                        <div>
                            <div className="text-center space-y-3 pt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className=" mx-auto w-[30px] h-[30px]" viewBox="0 0 24 25" fill="none">
                                    <path d="M17.0306 16.5466C17.1714 16.6924 17.2504 16.8902 17.2504 17.0964C17.2504 17.3026 17.1714 17.5004 17.0306 17.6462C16.8899 17.792 16.699 17.8739 16.5 17.8739C16.301 17.8739 16.1101 17.792 15.9694 17.6462L12.75 14.3095L12.75 22.5361C12.75 22.7422 12.671 22.9399 12.5303 23.0856C12.3897 23.2314 12.1989 23.3132 12 23.3132C11.8011 23.3132 11.6103 23.2314 11.4697 23.0856C11.329 22.9399 11.25 22.7422 11.25 22.5361L11.25 14.3095L8.03063 17.6462C7.88989 17.792 7.69902 17.8739 7.5 17.8739C7.30098 17.8739 7.11011 17.792 6.96938 17.6462C6.82864 17.5004 6.74958 17.3026 6.74958 17.0964C6.74958 16.8902 6.82864 16.6924 6.96938 16.5466L11.4694 11.8839C11.539 11.8117 11.6217 11.7544 11.7128 11.7152C11.8038 11.6761 11.9014 11.656 12 11.656C12.0986 11.656 12.1962 11.6761 12.2872 11.7152C12.3783 11.7544 12.461 11.8117 12.5306 11.8839L17.0306 16.5466ZM1.5 11.6566L1.5 5.43975C1.5 5.02755 1.65804 4.63223 1.93934 4.34076C2.22065 4.04928 2.60218 3.88554 3 3.88554L21 3.88554C21.3978 3.88554 21.7794 4.04929 22.0607 4.34076C22.342 4.63223 22.5 5.02755 22.5 5.43975L22.5 11.6566C22.5 12.0688 22.342 12.4641 22.0607 12.7556C21.7794 13.0471 21.3978 13.2108 21 13.2108L16.0875 13.2108C16.0382 13.2109 15.9895 13.2009 15.9439 13.1814C15.8984 13.1619 15.857 13.1333 15.8222 13.0972L13.5938 10.7824C13.3847 10.565 13.1363 10.3926 12.8628 10.2749C12.5894 10.1572 12.2961 10.0967 12 10.0967C11.7039 10.0967 11.4107 10.1572 11.1372 10.2749C10.8637 10.3926 10.6153 10.565 10.4063 10.7824L8.175 13.0943C8.10576 13.1675 8.01141 13.2094 7.9125 13.2108L3 13.2108C2.60218 13.2108 2.22064 13.0471 1.93934 12.7556C1.65804 12.4641 1.5 12.0688 1.5 11.6566ZM5.25 8.54819C5.25 8.77873 5.31598 9.0041 5.4396 9.19579C5.56321 9.38749 5.73892 9.53689 5.94448 9.62512C6.15005 9.71335 6.37625 9.73643 6.59448 9.69145C6.81271 9.64647 7.01316 9.53546 7.1705 9.37243C7.32783 9.20941 7.43498 9.00171 7.47839 8.7756C7.52179 8.54948 7.49951 8.31511 7.41437 8.10211C7.32922 7.88911 7.18502 7.70706 7.00002 7.57897C6.81501 7.45089 6.59751 7.38252 6.375 7.38252C6.07663 7.38252 5.79048 7.50534 5.57951 7.72394C5.36853 7.94254 5.25 8.23903 5.25 8.54819Z" fill="#4D75FF" />
                                </svg>
                                <p className="text-[16px] text-white-base font-medium">Drug and drop file heres</p>
                                <h1 className="text-[16px] text-white-base font-semibold">or</h1>
                            </div>
                            <div className=" pt-10">
                                <div className=" flex flex-col justify-center items-center gap-4 ">
                                    <label htmlFor="file" className=" cursor-pointer">
                                        <input className=" hidden" type="file" name="" id="file" />
                                        <span id="" className="bg-blue-base px-10 py-3 rounded text-white-base text-[16px]">Upload Photo</span>
                                    </label>
                                    <div className="text-white-base text-center">
                                        <p className="text-[13px]">Maximum file size 2MB</p>
                                        <p className="text-[13px] mt-2">Supported Formats: JPG, JPEG, PNG & ICO </p>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* add address toggle button  */}
            <div className="mt-8 grid  xl:grid-cols-7 gap-9">
                <div className=" lg:col-span-5">
                    <div className="  inline-block mt-3">
                        <div onClick={() => setActive(!active)} className="bg-blue-base relative flex justify-center items-center  h-[30px] w-[55px]  cursor-pointer px-5 py-1 rounded-full">
                            <div className={` ${active ? " right-1 bg-white-base  " : " left-1 bg-primary-base"} w-[25px] absolute  h-[25px]  flex justify-center items-center  rounded-full`}>
                                {active && <FaCheck className="text-[16px] text-blue-base " />}
                            </div>
                        </div>
                    </div>
                    {
                        active && <div className=" h-[1px] w-full bg-blue-base mt-6 mb-4"></div>
                    }
                </div>
            </div>


            {
                active && <Address />
            }

            <div className="flex justify-end items-center gap-3 mt-4">
                <div className=" flex items-center gap-6">
                    <button className="text-[14px] text-white-base  bg-blue-base px-6 py-2 rounded ">Cancel</button>
                    <button className="text-[14px] text-white-base  border border-blue-base hover:bg-blue-base duration-300 px-6 py-2 rounded ">Save</button>

                </div>
            </div>
        </div>
    );
};

export default AddInformation;