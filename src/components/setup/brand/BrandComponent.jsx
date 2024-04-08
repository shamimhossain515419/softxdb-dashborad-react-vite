import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useGetBrandQuery } from '../../../redux/features/api/brand/BrandApi';
import BranchRow from './BrandRow';
import CommonModal from '../../../ui/commonModal/commonModal';
import AddNewBrand from './AddNewBrand';
import Loader from '../../../ui/loader/Loader';
const BrandComponent = () => {
  const { data: brandData, isLoading, error, refetch } = useGetBrandQuery();
  const [active, setActive] = useState(false);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <div className="flex items-center gap-3">
        <Link to={'/'} className="text-white-muted">
          Home
        </Link>
        <FaArrowRight className="text-[18px] text-blue-base" />
        <Link to={'/setup/branch'} className="text-white-base">
          Brand
        </Link>
      </div>
      {/* items Brand  */}
      <div className="py-10 flex flex-col lg:flex-row justify-between lg:items-center gap-6">
        <h1 className="text-white-base  text-[30px] font-bold"> Brand </h1>
        <div className=" flex gap-3 items-center ">
          <div>
            <button
              onClick={() => setActive(true)}
              className="border-[1.5px] border-[#4d75ff] rounded-md inline-block  text-white-base tex-[14px] px-4 py-2 overflow-hidden"
            >
              Add new Brand
            </button>
          </div>
        </div>
      </div>

      {/* Brand table  */}
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
            {brandData?.map((item, index) => (
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
        title={'Add new brand'}
        active={active}
        setActive={setActive}
      >
        <AddNewBrand refetch={refetch} setActive={setActive} />
      </CommonModal>
    </div>
  );
};

export default BrandComponent;
