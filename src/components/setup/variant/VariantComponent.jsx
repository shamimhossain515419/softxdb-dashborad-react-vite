import { useState } from "react";
import Loader from "../../../ui/loader/Loader";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import CommonModal from "../../../ui/commonModal/commonModal";
import AddNewVariant from "./AddNewVariant";
import { useGetVariantQuery } from "../../../redux/features/api/variant/VariantApi";
import VariantRow from "./VariantRow";

const VariantComponent = () => {
  const { data: VariantData, refetch, isLoading } = useGetVariantQuery();
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
        <Link to={"/setup/color"} className="text-white-base">
          Variant
        </Link>
      </div>
      {/* items Variant  */}
      <div className="py-5 flex flex-col lg:flex-row justify-between lg:items-center gap-6">
        <h1 className="text-white-base  text-[30px] font-bold"> Variant </h1>
        <div className=" flex gap-3 items-center ">
          <div>
            <button
              onClick={() => setActive(true)}
              className="border-[1.5px] border-[#4d75ff] rounded-md inline-block  text-white-base tex-[14px] px-4 py-2 overflow-hidden"
            >
              Add new Variant
            </button>
          </div>
        </div>
      </div>
      {/* color Variant  */}
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
                Values
              </th>
              <th className="px-6 py-5   bg-blue-base text-left text-xs font-medium text-white-base uppercase tracking-wider">
                Action
              </th>
              {/* Add more table headers here */}
            </tr>
          </thead>
          <tbody className="bg-primary-muted  text-white-base">
            {VariantData?.map((item, index) => (
              <VariantRow
                refetch={refetch}
                index={index}
                item={item}
                key={index}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* add new color  component  */}
      <CommonModal
        title={"Add new Variant"}
        active={active}
        setActive={setActive}
      >
        <AddNewVariant refetch={refetch} setActive={setActive} />
      </CommonModal>
    </div>
  );
};

export default VariantComponent;
