import { FaArrowRight, } from 'react-icons/fa6';
import AddToCartTable from './AddToCartTable';
import { CategoryData } from '../../utility/selectItems/SelectItemsData';
import { Link } from 'react-router-dom';
import Selectitem from '../../ui/selectitem/Selectitem';
import Input from '../../ui/inputField/Input';
import { useState } from 'react';
const AddToCart = () => {
  const Categoryinfo = CategoryData;
  const [category,setCategory]=useState({name:"Select category",id:0})
   return (
    <>
      <div className="flex items-center gap-3">
        <Link to={'/'} className="text-white-muted">
          Home
        </Link>
        <FaArrowRight className="text-[18px] text-blue-base" />
        <Link to={'/direct-sele'} className="text-white-base">
          Add to cart
        </Link>
      </div>
      {/* items button  */}
      <div className="py-10 flex flex-col lg:flex-row justify-between lg:items-center gap-6">
        <h1 className="text-white-base"> Add to cart </h1>
      </div>

      <div className=" lg:flex gap-8 items-start">
        {/* <div>
          <button onClick={()=>setActive(!active)} className=' flex items-center gap-3 bg-blue-base px-4 py-2 rounded text-white-base'>
            <FaPlus />
             <span>Add to Cart</span>
          </button>
        </div> */}
 {/* select  section  */}
        <div className="lg:w-[20%] pt-4 lg:pt-0">
          <div className="  space-y-14">
            <div className=" w-full">
              <Selectitem active={category} setActive={setCategory}  title={'Categories'} data={Categoryinfo} />
            </div>
            <div className=" w-full">
              <Selectitem active={category} setActive={setCategory}  title={'Brands'} data={Categoryinfo} />
            </div>
            <div className=" w-full">
              <Selectitem active={category} setActive={setCategory}  title={'Product'} data={Categoryinfo} />
            </div>
          </div>
          <div className="mt-16">
            <div className=" space-y-5">
              <Input
                title={'Ountity'}
                type={'number'}
                placeholder={'10 pics'}
                name={'quntity'}
              />
              <Input
                title={'Price'}
                type={'number'}
                placeholder={'560 tk.'}
                name={'price'}
              />
              <Input
                title={'Total Price'}
                type={'number'}
                placeholder={'2001 tk.'}
                name={'total-price'}
              />
            </div>
          </div>
          <div className=" flex i items-center gap-4 pt-7">
            <button className="bg-blue-base px-4 py-2 rounded text-white-base">
              Add to Cart
            </button>
            <button className=" hover:bg-blue-base hover:text-white-base bg-transparent border border-blue-base  px-4 py-2 rounded text-blue-base duration-300">
              Clear Cart
            </button>
          </div>
         
        </div>

        <div className=" pt-4 lg:pt-0 lg:w-[80%]">
          <AddToCartTable />
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

export default AddToCart;
