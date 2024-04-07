import { FaArrowRight } from 'react-icons/fa6';
import Selectitem from '../../../ui/selectitem/Selectitem';
import { CategoryData } from '../../../utility/selectItems/SelectItemsData';
import { useState } from 'react';
import Input from '../../../ui/inputField/Input';
import AddToStockTable from './AddToStockTable';
import { Link } from 'react-router-dom';
import AddStockFrom from './AddStockFrom';
import { useGetProductQuery } from '../../../redux/features/api/product/productApi';

const ManageStockComponent = () => {
  const Categoryinfo = CategoryData;

  const [category, setCategory] = useState({
    name: 'Select category',
    id: 0,
  });
  return (
    <>
      <div className="flex items-center gap-3">
        <Link to={'/'} className="text-white-muted">
          Home
        </Link>
        <FaArrowRight className="text-[18px] text-blue-muted" />
        <Link to={'/'} className="text-white-muted">
          Stock
        </Link>
        <FaArrowRight className="text-[18px] text-blue-base" />
        <Link to={'/stock/manage-stock'} className="text-white-base">
          Add to Stock
        </Link>
      </div>
      {/* items button  */}
      <div className="py-5 flex flex-col lg:flex-row justify-between lg:items-center gap-6">
        <h1 className="text-white-base"> Add to cart </h1>
      </div>

      <div className=" lg:flex gap-8 items-start">
        <AddStockFrom />

        <div className=" pt-4 lg:pt-0 lg:w-[80%]">
          <AddToStockTable />
          {/* total  summary  */}
          <div className=" flex justify-end items-center pt-9">
            <div className="bg-primary-muted text-white-base p-4 space-y-4 rounded-md ">
              <div className=" grid grid-cols-2 gap-10 border-b border-[#4D75FF] pb-2">
                <p>Total Quantity</p>
                <p>20 pcs</p>
              </div>
              <div className="grid grid-cols-2 gap-10 border-b border-[#4D75FF] pb-2">
                <p>Total Discount</p>
                <p>1000.00</p>
              </div>
              <div className="grid grid-cols-2 gap-10 border-b border-[#4D75FF] pb-2">
                <p>Total Price</p>
                <p>1000.00</p>
              </div>
              <div className="grid grid-cols-2 gap-10 border-b border-[#4D75FF] pb-2">
                <p>Grand Total Price</p>
                <p>1000.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ManageStockComponent;
