import { useState } from "react";
import { Collapse } from "react-collapse";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import CommonModal from "../../../ui/commonModal/commonModal";
import { useGetSizeQuery } from "../../../redux/features/api/size/sizesApi";
import SizeRow from "./SizeRow";
import AddNewSize from "./AddNewSize";
import Loader from "../../../ui/loader/Loader";

const SizesComponent = () => {
  const { data: SizeData, refetch, isLoading } = useGetSizeQuery();
  const [active, setActive] = useState(false);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <div className="flex items-center gap-3">
        <Link to={"/"} className="text-white-muted">
          Home
        </Link>
        <FaArrowRight className="text-[18px] text-blue-base" />
        <Link to={"/setup/size"} className="text-white-base">
          size
        </Link>
      </div>
      {/* items size  */}
      <div className="py-5 flex flex-col lg:flex-row justify-between lg:items-center gap-6">
        <h1 className="text-white-base  text-[30px] font-bold"> Size </h1>
        <div className=" flex gap-3 items-center ">
          <div>
            <button
              onClick={() => setActive(true)}
              className="border-[1.5px] border-[#4d75ff] rounded-md inline-block  text-white-base tex-[14px] px-4 py-2 overflow-hidden"
            >
              Add new size
            </button>
          </div>
        </div>
      </div>

      {/* size table  */}
      <div className="overflow-x-auto">
        <table className="min-w-full  rounded-md overflow-hidden">
          <thead>
            <tr className="">
              <th className="px-6 py-5   bg-blue-base text-left text-xs font-medium text-white-base uppercase tracking-wider">
                order number
              </th>
              <th className="px-6 py-5   bg-blue-base text-left text-xs font-medium text-white-base uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-5   bg-blue-base text-left text-xs font-medium text-white-base uppercase tracking-wider">
                Action
              </th>
              {/* Add more table headers here */}
            </tr>
          </thead>
          <tbody className="bg-primary-muted  text-white-base">
            {SizeData?.map((item, index) => (
              <SizeRow
                refetch={refetch}
                index={index}
                item={item}
                key={index}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* add new Size  component  */}
      <CommonModal title={"Add new Size"} active={active} setActive={setActive}>
        <AddNewSize refetch={refetch} setActive={setActive} />
      </CommonModal>
    </div>
  );
};

export default SizesComponent;
