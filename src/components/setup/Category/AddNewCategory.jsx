import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useCreateCategoryMutation } from '../../../redux/features/api/category/CategoryApi';


const AddNewCategory = ({setActive,refetch}) => {
  const { register, handleSubmit } = useForm();
  const [CreateCategory, { data, error }] =
  useCreateCategoryMutation();

  const onSubmit = data => {
    const NewData = {
      name: data.name,
      category_code: data.category_code,
      description: data.description,
      added_by: 1,
    };
    CreateCategory(NewData);
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
        <div className=" w-full">
          <label
            htmlFor=""
            className="text-[16px] font-medium capitalize text-white-base"
          >
            category code
            <span className="text-blue-base ">*</span>
          </label>
          <input
            {...register('category_code')}
            type={'number'}
            className=" w-full text-[14px] text-white-base placeholder:text-white-muted placeholder:text-[12px] border border-blue-base block bg-transparent mt-2 outline-0 px-2 py-[10px] rounded "
            id=""
            placeholder={'Enter Branch name'}
          />
        </div>
        <div className=" w-full">
          <label
            htmlFor=""
            className="text-[16px] font-medium capitalize text-white-base"
          >
            description
            <span className="text-blue-base ">*</span>
          </label>
          <input
            {...register('description')}
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

export default AddNewCategory;
