import { useEffect } from 'react';
import { useCreateUnitMutation } from '../../../redux/features/api/unit/UnitApi';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const AddNewUnit = ({ setActive, refetch }) => {
  const { register, handleSubmit } = useForm();
  const [CreateUnit, { data, error }] = useCreateUnitMutation();

  const onSubmit = data => {
    const NewData = {
      name: data.name,
      short_name: data.short_name,
      added_by: 1,
    };
    console.log(NewData)
    CreateUnit(NewData);
  };
  useEffect(() => {
    if (data?.status == 'success') {
      toast.success(data?.message);
      setActive(false);
      refetch();
    }
  }, [data, setActive, refetch]);
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
            required
            type={'text'}
            className=" w-full text-[14px] text-white-base placeholder:text-white-muted placeholder:text-[12px] border border-blue-base block bg-transparent mt-2 outline-0 px-2 py-[10px] rounded "
            id=""
            placeholder={'Enter unit name'}
          />
        </div>
        <div className=" w-full">
          <label
            htmlFor=""
            className="text-[16px] font-medium capitalize text-white-base"
          >
            Short name
            <span className="text-blue-base ">*</span>
          </label>
          <input
            {...register('short_name')}
            type={'text'}
            className=" w-full text-[14px] text-white-base placeholder:text-white-muted placeholder:text-[12px] border border-blue-base block bg-transparent mt-2 outline-0 px-2 py-[10px] rounded "
            id=""
            placeholder={'Enter short name'}
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

export default AddNewUnit;
