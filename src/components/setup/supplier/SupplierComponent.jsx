import { useEffect, useState } from "react";
import { Collapse } from "react-collapse";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { Link, useSearchParams } from "react-router-dom";
import CommonModal from "../../../ui/commonModal/commonModal";

import SupplierRow from "./PupplierRow";
import AddNewSupplier from "./AddNewSupplier";
import { useGetSupplierDataQuery } from "../../../redux/features/api/supplier/supplier";
import Pagination from "../../../ui/pagination/Pagination";
import Loader from "../../../ui/loader/Loader";

const SupplierComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get("page");

  const [showData, setShowData] = useState("10");
  const [page, setPage] = useState(currentPage ? currentPage : "1");
  const [activeLimit, setActiveLimit] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [filterSupplier, setFilterSupllier] = useState({
    keyword: keyword,
    limit: showData,
    page: page,
  });
  const {
    data: suppliertData,

    isLoading,
    refetch,
  } = useGetSupplierDataQuery(filterSupplier);
  const [active, setActive] = useState(false);
  const showDataArray = ["10", "15", "20", "25", "30", "35", "40", "45", "50"];

  useEffect(() => {
    if (showData || page || keyword) {
      setFilterSupllier({
        keyword: keyword,
        limit: showData,
        page: page,
      });
    }
    if (currentPage) {
      setPage(currentPage);
    }
  }, [currentPage, setPage, showData, page, keyword]);

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
        <Link to={"/setup/supplier"} className="text-white-base">
          supplier
        </Link>
      </div>
      {/* items supplier  */}
      <div className="py-5 flex flex-col lg:flex-row justify-between lg:items-center gap-6">
        <h1 className="text-white-base  text-[30px] font-bold"> Supplier </h1>
        <div className=" flex gap-3 items-center ">
          <div>
            <button
              onClick={() => setActive(true)}
              className="border-[1.5px] border-[#4d75ff] rounded-md inline-block  text-white-base tex-[14px] px-4 py-2 overflow-hidden"
            >
              Add new supplier
            </button>
          </div>
        </div>
      </div>
      {/* filter and limit  */}
      <div className=" flex flex-col lg:flex-row lg:items-center justify-between gap-3 py-5">
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
                  className={` ${
                    activeLimit ? " rotate-180" : ""
                  }  duration-200 text-[14px] text-white-base`}
                />
              </div>
            </div>
            <div className="  bg-primary-base z-50  w-[70px] absolute border border-[#4d75ff] rounded-[4px]">
              <Collapse isOpened={activeLimit} className="">
                <div className=" text-white-muted space-y-[2px]  max-h-[250px] sidebarScrool  overflow-y-scroll  pt-3">
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

        {/* Brand data  */}
        <div className="border text-white-base rounded-[4px] border-[#4d75ff] flex items-center gap-4 px-2 py-1">
          <input
            onChange={(e) => setKeyword(e.target.value)}
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

      {/* Brand table  */}
      <div className="overflow-x-auto">
        <table className="min-w-full  rounded-md overflow-hidden">
          <thead>
            <tr className="">
              <th className="px-6 py-5  w-[50px]  bg-blue-base text-left text-xs font-medium text-white-base uppercase ">
                order
              </th>
              <th className="px-6 py-5   bg-blue-base text-left text-xs font-medium text-white-base uppercase tracking-wider">
                photo
              </th>
              <th className="px-6 py-5   bg-blue-base text-left text-xs font-medium text-white-base uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-5   bg-blue-base text-left text-xs font-medium text-white-base uppercase tracking-wider">
                phone
              </th>
              <th className="px-6 py-5   bg-blue-base text-left text-xs font-medium text-white-base uppercase tracking-wider">
                email
              </th>
              <th className="px-6 py-5   bg-blue-base text-left text-xs font-medium text-white-base uppercase tracking-wider">
                address
              </th>
              <th className="px-6 py-5   bg-blue-base text-left text-xs font-medium text-white-base uppercase tracking-wider">
                nid
              </th>
              <th className="px-6 py-5   bg-blue-base text-left text-xs font-medium text-white-base uppercase tracking-wider">
                closing balance
              </th>
              <th className="px-6 py-5   bg-blue-base text-left text-xs font-medium text-white-base uppercase tracking-wider">
                Action
              </th>
              {/* Add more table headers here */}
            </tr>
          </thead>
          <tbody className="bg-primary-muted  text-white-base">
            {suppliertData?.suppliers?.map((item, index) => (
              <SupplierRow
                refetch={refetch}
                index={index}
                item={item}
                key={index}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* pagination  */}

      <Pagination
        setPage={setPage}
        per_page={showData}
        totalResult={suppliertData?.count}
      />
      {/* add new branch  component  */}
      <CommonModal
        title={"Add new Supllier"}
        active={active}
        setActive={setActive}
      >
        <AddNewSupplier refetch={refetch} setActive={setActive} />
      </CommonModal>
    </div>
  );
};

export default SupplierComponent;
