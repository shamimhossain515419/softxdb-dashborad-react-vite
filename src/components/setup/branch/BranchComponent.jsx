import { useState } from "react";
import { Collapse } from "react-collapse";
import { FaChevronDown, FaCloudUploadAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useGetBranchQuery } from "../../../redux/features/api/branch/BranchApi";
import BranchRow from "./BranchRow";
import CommonModal from "../../../ui/commonModal/commonModal";
import AddNewBranch from "./AddNewBranch";
import Loader from "../../../ui/loader/Loader";

const BranchComponent = () => {
  const [activeUpload, setActiveUpload] = useState(false);
  const [showData, setShowData] = useState("25");
  const [activeLimit, setActiveLimit] = useState(false);
  const [active, setActive] = useState(false);
  const { data: branchData, isLoading, refetch } = useGetBranchQuery();
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

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="flex items-center gap-3">
        <Link to={"/"} className="text-white-muted">
          Home
        </Link>
        <FaArrowRight className="text-[18px] text-blue-base" />
        <Link to={"/setup/branch"} className="text-white-base">
          Branch
        </Link>
      </div>
      {/* items Branch  */}
      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-6">
        <h1 className="text-white-base  text-[30px] font-bold py-5">
          {" "}
          Branch{" "}
        </h1>
      </div>
      {/* filter and limit  */}
      <div className=" flex flex-col lg:flex-row lg:items-center justify-between gap-3"></div>
      {/* branch table  */}
      <div className="overflow-x-auto">
        <table className="min-w-full  rounded-md overflow-hidden">
          <thead>
            <tr className="">
              <th className="px-6 py-5   bg-blue-base text-left text-xs font-medium text-white-base uppercase tracking-wider">
                #SL
              </th>
              <th className="px-6 py-5   bg-blue-base text-left text-xs font-medium text-white-base uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-5   bg-blue-base text-left text-xs font-medium text-white-base uppercase tracking-wider">
                Address
              </th>
              <th className="px-6 py-5   bg-blue-base text-left text-xs font-medium text-white-base uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-5   bg-blue-base text-left text-xs font-medium text-white-base uppercase tracking-wider">
                Mobile
              </th>
              <th className="px-6 py-5   bg-blue-base text-left text-xs font-medium text-white-base uppercase tracking-wider">
                Action
              </th>
              {/* Add more table headers here */}
            </tr>
          </thead>
          <tbody className="bg-primary-muted  text-white-base">
            {branchData?.map((item, index) => (
              <BranchRow
                refetch={refetch}
                index={index}
                item={item}
                key={index}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* add new branch  component  */}

      <CommonModal
        title={"Add new branch"}
        active={active}
        setActive={setActive}
      >
        <AddNewBranch refetch={refetch} setActive={setActive} />
      </CommonModal>
    </>
  );
};

export default BranchComponent;
