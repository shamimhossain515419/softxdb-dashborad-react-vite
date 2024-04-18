import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useCreateColorMutation } from "../../../redux/features/api/color/ColorsApi";
import { useCreateVariantMutation } from "../../../redux/features/api/variant/VariantApi";
const AddNewColor = ({ setActive, refetch }) => {
  const { register, handleSubmit } = useForm();
  const [CreateColor, { data, error }] = useCreateVariantMutation();

  const onSubmit = (data) => {
    const NewData = {
      name: data.name,
      added_by: 1,
    };
    CreateColor(NewData);
  };
  useEffect(() => {
    if (data?.status == "success") {
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
            {...register("name")}
            required
            type={"text"}
            className=" w-full text-[14px] text-white-base placeholder:text-white-muted placeholder:text-[12px] border border-blue-base block bg-transparent mt-2 outline-0 px-2 py-[10px] rounded "
            id=""
            placeholder={"Enter unit name"}
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

export default AddNewColor;
