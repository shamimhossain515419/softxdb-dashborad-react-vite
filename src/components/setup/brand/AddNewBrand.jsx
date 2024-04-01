import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useCreateBrandMutation } from '../../../redux/features/api/brand/BrandApi';

const AddNewBrand = ({setActive,refetch}) => {
  const { register, handleSubmit } = useForm();
  const [CreateBrand, { data, error }] =
  useCreateBrandMutation();

  const onSubmit = data => {
    const NewData = {
      name: data.name,
     added_by: 1,
    };
    CreateBrand(NewData);
  };
  useEffect(() => {
    if (data?.status=="success") {
       toast.success(data?.message);
       setActive(false);
       refetch()
    }
  }, [data,setActive,refetch]);
return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className=" space-y-2">
        <div className=" w-full">
          <label
            htmlFor=""
            className="text-[16px] font-medium capitalize text-white-base"
          >
            Name
            <span className="text-blue-base ">*</span>
          </label>
          <input
            {...register('name')}
            type={'text'}
            className=" w-full text-[14px] text-white-base placeholder:text-white-muted placeholder:text-[12px] border border-blue-base block bg-transparent mt-2 outline-0 px-2 py-[10px] rounded "
            id=""
            placeholder={'Enter Branch name'}
          />
        </div>
        
        <div className=" py-2">
          <button
            className="bg-blue-base px-4 rounded-lg py-1  text-white-base text-[18px]"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewBrand;
