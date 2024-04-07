import { useState } from 'react';
import Selectitem from '../../../ui/selectitem/Selectitem';
import { CategoryData } from '../../../utility/selectItems/SelectItemsData';
import Input from '../../../ui/inputField/Input';
import SelectAndSearch from '../../../ui/selectAndSearch/SelectAndSearch';
import { useGetProductQuery } from '../../../redux/features/api/product/productApi';

const AddStockFrom = () => {
  const Categoryinfo = CategoryData;
  const [searchValue, setSearchValue] = useState('');
  const { data: productData, refetch } = useGetProductQuery(searchValue);

  const setKeyword = word => {
    setSearchValue(word);
    refetch();
  };

  const [category, setCategory] = useState({
    name: 'Select product',
    id: 0,
  });

  return (
    <>
      {/* select  section  */}
      <div className="lg:w-[20%] pt-4 lg:pt-0">
        <div className="  space-y-14">
          <div className=" w-full">
            <SelectAndSearch
              active={category}
              setActive={setCategory}
              title={'Product'}
              data={productData?.products}
              setSearchValue={setKeyword}
            />
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
          </div>
        </div>
        <div className=" flex i items-center gap-4 pt-7">
          <button className="bg-blue-base px-4 py-2 rounded text-white-base">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default AddStockFrom;
