import { useForm } from 'react-hook-form';
import { useCreateBranchMutation } from '../../../redux/features/api/branch/BranchApi';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const AddNewBranch = ({setActive,refetch}) => {
  const { register, handleSubmit } = useForm();
  const [CreateBranch, { data, error }] =
  useCreateBranchMutation();

  const onSubmit = data => {
    const NewData = {
      name: data.name,
      address: data.address,
      email: data.email,
      mobile: data.mobile,
      added_by: 1,
    };
    CreateBranch(NewData);
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
            Email
            <span className="text-blue-base ">*</span>
          </label>
          <input
            {...register('email')}
            type={'email'}
            className=" w-full text-[14px] text-white-base placeholder:text-white-muted placeholder:text-[12px] border border-blue-base block bg-transparent mt-2 outline-0 px-2 py-[10px] rounded "
            id=""
            placeholder={'Enter Email'}
          />
        </div>
        <div className=" w-full">
          <label
            htmlFor=""
            className="text-[16px] font-medium capitalize text-white-base"
          >
            address
            <span className="text-blue-base ">*</span>
          </label>
          <input
            {...register('address')}
            type={'text'}
            className=" w-full text-[14px] text-white-base placeholder:text-white-muted placeholder:text-[12px] border border-blue-base block bg-transparent mt-2 outline-0 px-2 py-[10px] rounded "
            id=""
            placeholder={'Enter address'}
          />
        </div>
        <div className=" w-full">
          <label
            htmlFor=""
            className="text-[16px] font-medium capitalize text-white-base"
          >
            Mobile
            <span className="text-blue-base ">*</span>
          </label>
          <input
            {...register('mobile')}
            type={'number'}
             maxLength={15}
            className=" w-full text-[14px] text-white-base placeholder:text-white-muted placeholder:text-[12px] border border-blue-base block bg-transparent mt-2 outline-0 px-2 py-[10px] rounded "
            id=""
            placeholder={'Enter mobile'}
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

export default AddNewBranch;
