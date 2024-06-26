import { BsThreeDots } from 'react-icons/bs';
const MyCard = () => {
    return (
        <div className="bg-primary-muted  rounded-[10px] overflow-hidden p-7">
            <div className="flex items-center justify-between ">
                <h1 className="text-[14px] lg:text-[19px] text-white-muted ">My Card</h1>
                <div className="text-white-base cursor-pointer">
                    <BsThreeDots className="text-[20px]" />
                </div>
            </div>
            <div className='p-6'>
                <div className=' relative bg-gradient-to-r from-[#4D75FF]  to-[#4d75ff80] p-4 rounded-[10px] '>
                    <div className="flex items-center justify-between ">
                        <h1 className="text-[13px] text-white-muted ">Current Balance</h1>
                        <div className="text-white-base cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className=' w-[20px] h-[20px]' viewBox="0 0 21 20" fill="none">
                                <g clip-path="url(#clip0_54_2200)">
                                    <path d="M5.11882 1.70769C2.72488 1.70769 0.723389 3.70387 0.723389 6.0898V13.9109C0.723389 16.2961 2.72564 18.2923 5.11882 18.2923H15.9883C18.3807 18.2923 20.383 16.2961 20.383 13.9102V6.0898C20.383 3.70463 18.3807 1.70769 15.9875 1.70769H5.11882ZM5.11882 3.21538H15.9883C17.527 3.21538 18.8707 4.55496 18.8707 6.0898V6.98461H14.3339C13.9142 6.98461 13.5777 6.64915 13.5777 6.23076C13.5777 5.81238 13.9142 5.47692 14.3339 5.47692C14.5344 5.47692 14.7267 5.3975 14.8685 5.25612C15.0103 5.11475 15.09 4.923 15.09 4.72307C15.09 4.52314 15.0103 4.3314 14.8685 4.19002C14.7267 4.04865 14.5344 3.96923 14.3339 3.96923C13.09 3.96923 12.0655 4.99069 12.0655 6.23076C12.0655 7.20473 12.7036 8.03547 13.5777 8.35133V12.0964C12.6719 12.7101 12.0655 13.7398 12.0655 14.9C12.0655 15.5958 12.287 16.2426 12.656 16.7846H8.45111C8.83334 16.2298 9.03888 15.573 9.0409 14.9C9.0409 13.7406 8.43448 12.7101 7.52863 12.0964V8.35058C8.40272 8.03547 9.0409 7.20473 9.0409 6.23076C9.0409 4.99069 8.01633 3.96923 6.77249 3.96923H5.26021C5.23653 3.96811 5.21282 3.96811 5.18914 3.96923C5.16571 3.96814 5.14224 3.96814 5.11882 3.96923C4.91828 3.98792 4.7334 4.08527 4.60485 4.23986C4.47631 4.39445 4.41463 4.59362 4.43338 4.79356C4.45213 4.99349 4.54977 5.17781 4.70484 5.30596C4.8599 5.43412 5.05967 5.49561 5.26021 5.47692H6.77249C7.19214 5.47692 7.52863 5.81238 7.52863 6.23076C7.52863 6.64915 7.19214 6.98461 6.77249 6.98461H2.23566V6.08904C2.23566 4.55496 3.57932 3.21538 5.11882 3.21538ZM2.23566 8.4923H6.01635V11.5077H2.23566V8.4923ZM15.09 8.4923H18.8707V11.5077H15.09V8.4923ZM2.23566 13.0154H5.63828C6.65075 13.0154 7.52863 13.8906 7.52863 14.9C7.52863 15.9094 6.65075 16.7846 5.63828 16.7846H5.11806C3.57932 16.7846 2.23566 15.445 2.23566 13.9102V13.0154ZM15.4681 13.0154H18.8707V13.9109C18.8707 15.445 17.527 16.7846 15.9875 16.7846H15.4681C14.4556 16.7846 13.5777 15.9094 13.5777 14.9C13.5777 13.8906 14.4556 13.0154 15.4681 13.0154Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_54_2200">
                                        <rect x="0.723389" y="0.199997" width="19.6596" height="19.6" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    {/* total balance    */}
                    <h1 className="text-[17px] lg:text-[22px] text-white-base pt-2 font-semibold">
                        $ 19,582
                    </h1>

                    {/* grap chart  */}

                    <div className=' pt-5'>
                        <div className=' space-y-2 text-white-base'>
                            <p className='text-[14px] font-light'>2357 1689 6251 0380</p>
                            <div className=' flex justify-between items-center gap-2'>
                                <p className='text-[14px] font-light'>06 / 2024</p>
                                <h1 className='text-[35px] uppercase z-50 text-white-base  font-extrabold '>Visa</h1>
                            </div>
                        </div>
                        <div className=' absolute bottom-0 right-0 '>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-full  h-[110px] ' viewBox="0 0 218 68" fill="none">
                                <path d="M217.234 0.199997V59.2679C217.234 63.7437 213.545 67.4 209.029 67.4H2.63235C2.05991 67.4 1.48747 67.337 0.978638 67.2109C2.75956 66.4544 4.54049 65.6349 6.32142 64.8784C17.325 60.0874 27.8197 54.2248 37.424 47.1013C39.523 45.5253 41.7491 44.0754 44.2297 42.7516C47.7916 40.9235 51.9258 39.4105 57.3322 38.3388C59.304 37.9606 61.4665 37.6454 63.8835 37.3932C85.6998 35.2499 86.0815 43.8863 95.1133 37.3932C96.8942 36.1325 98.4207 34.7456 99.7564 33.4848C105.29 28.1895 108.661 23.6507 120.937 26.2353C121.191 26.2983 121.382 26.3613 121.636 26.4244C136.393 29.7655 141.735 36.8259 147.269 34.1782C149.877 32.9174 152.357 29.8285 155.029 26.7396C158.082 23.1463 161.262 19.6161 164.887 19.0488C168.449 18.4814 170.993 18.9227 173.347 20.5617C175.446 21.9486 177.354 24.281 179.644 27.5591C184.541 34.6195 189.312 37.5824 195.608 35.6912C200.252 34.3043 202.096 27.5591 203.686 21.4443C204.259 19.364 204.768 17.3467 205.404 15.7077C207.63 9.27767 210.428 0.641273 217.234 0.199997Z" fill="url(#paint0_linear_54_2194)" />
                                <defs>
                                    <linearGradient id="paint0_linear_54_2194" x1="109.088" y1="0.199997" x2="109.088" y2="75.5712" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.3014" stop-color="#4D75FF" />
                                        <stop offset="1" stop-color="#4D75FF" stop-opacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyCard;