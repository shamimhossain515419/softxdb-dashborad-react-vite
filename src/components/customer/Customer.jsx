
import { FaArrowRight } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import AddInformation from "./AddInformation";
import { Link } from "react-router-dom";

const Customer = () => {
    return (
        <>
            <div className="flex items-center gap-3">
                <Link to={"/"} className="text-white-muted">
                    Home
                </Link>
                <FaArrowRight className="text-[18px] text-blue-base" />
                <Link to={"/customer"} className="text-white-base">
                    Items
                </Link>
            </div>
            {/* add new customer  */}
            <div className=" flex items-center justify-between gap-3 bg-blue-muted px-3 py-1 rounded mt-7">
                <div>
                    <h1 className="text-[16px] lg:text-[20px] text-white-base">
                        Add Customer
                    </h1>
                </div>
                <div className=" w-[25px] h-[25px] rounded flex items-center justify-center bg-red-base text-white-base ">
                    <IoMdClose className="text-[17px]" />
                </div>
            </div>
            {/* add information  */}
            <AddInformation />
        </>
    );
};

export default Customer;
