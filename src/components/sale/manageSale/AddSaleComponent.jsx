import { FaArrowRight } from "react-icons/fa6";

import { Link } from "react-router-dom";
import AddSaleFrom from "./AddSaleFrom";
import AddToSaleTable from "./AddToSaleTable";

const AddSaleComponent = () => {
  return (
    <>
      <div className="flex items-center gap-3">
        <Link to={"/"} className="text-white-muted">
          Home
        </Link>
        <FaArrowRight className="text-[18px] text-blue-muted" />
        <Link to={"/"} className="text-white-muted">
          Stock
        </Link>
        <FaArrowRight className="text-[18px] text-blue-base" />
        <Link to={"/stock/manage-stock"} className="text-white-base">
          Sale
        </Link>
      </div>
      {/* items button  */}
      <div className="py-5 flex flex-col lg:flex-row justify-between lg:items-center gap-6">
        <h1 className="text-white-base">Sale </h1>
      </div>

      <div className=" lg:flex gap-8 items-start">
        <AddSaleFrom />

        <div className=" pt-4 lg:pt-0 lg:w-[80%]">
          <AddToSaleTable />
        </div>
      </div>
    </>
  );
};
export default AddSaleComponent;
