import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
const AddNewSupplier = ({ setActive, refetch }) => {
  const { register, handleSubmit, reset } = useForm();
  const [photo, setPhoto] = useState("");
  const [selectImage, setselectImage] = useState("");
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("name", data?.name);
    formData.append("branch_id", "1");
    formData.append("phone", data?.phone);
    formData.append("email", data?.email);
    formData.append("address", data?.address);
    formData.append("closing_balance", data?.closing_balance);
    formData.append("nid", data?.nid);
    formData.append("photo", photo);
    formData.append("added_by", "1");

    fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/supplier`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === "success") {
          toast.success(data?.message);
          setActive(false);
          refetch();
          reset();
          return;
        } else {
          toast.error("Failed to Add Product");
          setActive(false);
        }
      })
      .catch((errors) => {
        console.log(errors);
        setActive(false);
      });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(file);
        setselectImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className=" space-y-2">
        {/* input name  */}
        <div className=" w-full">
          <label
            htmlFor=""
            className="text-[16px] font-medium capitalize text-white-base"
          >
            name
            <span className="text-blue-base ">*</span>
          </label>
          <input
            {...register("name")}
            required
            type={"text"}
            className=" w-full text-[14px] text-white-base placeholder:text-white-muted placeholder:text-[12px] border border-blue-base block bg-transparent mt-2 outline-0 px-2 py-[10px] rounded "
            id=""
            placeholder={"Enter  name"}
          />
        </div>

        <div className=" w-full">
          <label
            htmlFor=""
            className="text-[16px] font-medium capitalize text-white-base"
          >
            phone
            <span className="text-blue-base ">*</span>
          </label>
          <input
            {...register("phone")}
            required
            type={"number"}
            className=" w-full text-[14px] text-white-base placeholder:text-white-muted placeholder:text-[12px] border border-blue-base block bg-transparent mt-2 outline-0 px-2 py-[10px] rounded "
            id=""
            placeholder={"Enter  phone"}
          />
        </div>
        {/* input Photo  */}
        <div className=" w-full">
          <label
            htmlFor=""
            className="text-[16px] font-medium capitalize text-white-base"
          >
            Photo
            <span className="text-blue-base ">*</span>
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className=" w-full text-[14px] text-white-base placeholder:text-white-muted placeholder:text-[12px] border border-blue-base block bg-transparent mt-2 outline-0 px-2 py-[10px] rounded "
            id=""
          />
        </div>

        {selectImage && (
          <div className="h-[150px] w-full  overflow-hidden">
            <img
              className=" w-full  h-full object-contain overflow-hidden"
              src={selectImage}
              alt=""
            />
          </div>
        )}

        {/* input email  */}
        <div className=" w-full">
          <label
            htmlFor=""
            className="text-[16px] font-medium capitalize text-white-base"
          >
            email
            <span className="text-blue-base ">*</span>
          </label>
          <input
            {...register("email")}
            type={"text"}
            className=" w-full text-[14px] text-white-base placeholder:text-white-muted placeholder:text-[12px] border border-blue-base block bg-transparent mt-2 outline-0 px-2 py-[10px] rounded "
            id=""
            placeholder={"Enter email"}
          />
        </div>

        {/* input address  */}
        <div className=" w-full">
          <label
            htmlFor=""
            className="text-[16px] font-medium capitalize text-white-base"
          >
            address
            <span className="text-blue-base ">*</span>
          </label>
          <input
            {...register("address")}
            required
            type={"text"}
            className=" w-full text-[14px] text-white-base placeholder:text-white-muted placeholder:text-[12px] border border-blue-base block bg-transparent mt-2 outline-0 px-2 py-[10px] rounded "
            id=""
            placeholder={"Enter address"}
          />
        </div>

        {/* input nid  */}
        <div className=" w-full">
          <label
            htmlFor=""
            className="text-[16px] font-medium capitalize text-white-base"
          >
            nid
            <span className="text-blue-base ">*</span>
          </label>
          <input
            {...register("nid")}
            type={"number"}
            className=" w-full text-[14px] text-white-base placeholder:text-white-muted placeholder:text-[12px] border border-blue-base block bg-transparent mt-2 outline-0 px-2 py-[10px] rounded "
            id=""
            placeholder={"Enter nid number"}
          />
        </div>
        {/* input closing_balance */}
        <div className=" w-full">
          <label
            htmlFor=""
            className="text-[16px] font-medium capitalize text-white-base"
          >
            closing balance
            <span className="text-blue-base ">*</span>
          </label>
          <input
            {...register("closing_balance")}
            required
            type={"number"}
            className=" w-full text-[14px] text-white-base placeholder:text-white-muted placeholder:text-[12px] border border-blue-base block bg-transparent mt-2 outline-0 px-2 py-[10px] rounded "
            id=""
            placeholder={"Enter closing balance"}
          />
        </div>
        <div className=" py-2 pt-12 ">
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

export default AddNewSupplier;
