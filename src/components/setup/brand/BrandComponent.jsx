import { useState } from 'react';
import { Collapse } from 'react-collapse';
import { FaArrowRight, FaChevronDown, FaCloudUploadAlt } from 'react-icons/fa';
import { IoSearchOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useGetBrandQuery } from '../../../redux/features/api/brand/BrandApi';
import BranchRow from './BrandRow';
import CommonModal from '../../../ui/commonModal/commonModal';
import AddNewBrand from './AddNewBrand';
const BrandComponent = () => {
  const [activeUpload, setActiveUpload] = useState(false);
  const [showData, setShowData] = useState('25');
  const [activeLimit, setActiveLimit] = useState(false);
  const { data: brandData, isLoading, error, refetch } = useGetBrandQuery();
  const [active, setActive] = useState(false);
  const showDataArray = [
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
  ];

  return (
    <div>
      <div className="flex items-center gap-3">
        <Link to={'/'} className="text-white-muted">
          Home
        </Link>
        <FaArrowRight className="text-[18px] text-blue-base" />
        <Link to={'/setup/branch'} className="text-white-base">
          Branch
        </Link>
      </div>
      {/* items Brand  */}
      <div className="py-10 flex flex-col lg:flex-row justify-between lg:items-center gap-6">
        <h1 className="text-white-base  text-[30px] font-bold"> Branch </h1>
        <div className=" flex gap-3 items-center ">
          <div
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
          </div>

          <div>
            <button
              onClick={() => setActive(true)}
              className="border-[1.5px] border-[#4d75ff] rounded-md inline-block  text-white-base tex-[14px] px-4 py-2 overflow-hidden"
            >
              Add new item
            </button>
          </div>
        </div>
      </div>
      {/* filter and limit  */}
      <div className=" flex flex-col lg:flex-row lg:items-center justify-between gap-3 py-10">
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
                  className={` ${activeLimit ? ' rotate-180' : ''
                    }  duration-200 text-[14px] text-white-base`}
                />
              </div>
            </div>
            <div className="  bg-primary-base z-50  w-[70px] absolute border border-[#4d75ff] rounded-[4px]">
              <Collapse isOpened={activeLimit} className="">
                <div className=" text-white-muted space-y-[2px]   pt-3">
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
            className=" w-full bg-transparent placeholder:text-white-base  outline-0 border-none"
            type="search"
            name=""
            id=""
            placeholder="Search..."
          />
          <button className="cursor-pointer">
            {' '}
            <IoSearchOutline className="text-[15px] text-white-base " />
          </button>
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
      <CommonModal title={"Add new brand"} active={active} setActive={setActive}>

        <AddNewBrand refetch={refetch} setActive={setActive} />
      </CommonModal>
    </div>
  );
};

export default BrandComponent;