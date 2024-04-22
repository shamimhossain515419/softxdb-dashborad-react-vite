import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import CommonModal from "../../../ui/commonModal/commonModal";
import { useGetCategoryQuery } from "../../../redux/features/api/category/CategoryApi";
import AddNewCategory from "./AddNewCategory";
import CategoryRow from "./CategoryRow";
import Loader from "../../../ui/loader/Loader";
const CategoryComponent = () => {
  const { data: brandData, isLoading, error, refetch } = useGetCategoryQuery();
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
        <Link to={"/setup/category"} className="text-white-base">
          Category
        </Link>
      </div>
      {/* items Category  */}
      <div className="py-5 flex flex-col lg:flex-row justify-between lg:items-center gap-6">
        <h1 className="text-white-base  text-[30px] font-bold"> Category </h1>
        <div className=" flex gap-3 items-center ">
          {/* <div
            onClick={() => setActiveUpload(false)}
            className={` ${activeUpload == false
                ? ' bg-blue-base'
                : ' border  border-[#4d75ff] '
              }  p-[10px] rounded-full cursor-pointer`}
          >
            <FaCloudUploadAlt className={`text-[18px] text-white-base`} />
          </div>
          <div
            onClick={() => setActiveUpload(true)}
            className={` ${activeUpload == true
                ? ' bg-blue-base'
                : ' border  border-[#4d75ff] '
              }  p-[10px] rounded-full cursor-pointer`}
          >
            <FaCloudUploadAlt
              className={`text-[18px] rotate-180 text-white-base`}
            />
          </div> */}

          <div>
            <button
              onClick={() => setActive(true)}
              className="border-[1.5px] border-[#4d75ff] rounded-md inline-block  text-white-base tex-[14px] px-4 py-2 overflow-hidden"
            >
              Add new Category
            </button>
          </div>
        </div>
      </div>

      {/* Category table  */}
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
                category code
              </th>
              <th className="px-6 py-5   bg-blue-base text-left text-xs font-medium text-white-base uppercase tracking-wider">
                description
              </th>
              <th className="px-6 py-5   bg-blue-base text-left text-xs font-medium text-white-base uppercase tracking-wider">
                Action
              </th>
              {/* Add more table headers here */}
            </tr>
          </thead>
          <tbody className="bg-primary-muted  text-white-base">
            {brandData?.map((item, index) => (
              <CategoryRow
                refetch={refetch}
                index={index}
                item={item}
                key={index}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* add new category  component  */}
      <CommonModal
        title={"Add new Category"}
        active={active}
        setActive={setActive}
      >
        <AddNewCategory refetch={refetch} setActive={setActive} />
      </CommonModal>
    </div>
  );
};

export default CategoryComponent;
