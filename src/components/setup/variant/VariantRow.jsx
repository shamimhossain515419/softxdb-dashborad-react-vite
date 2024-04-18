/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import CommonModal from "../../../ui/commonModal/commonModal";

import DeleteVariant from "./DeleteVariant";
import { FaPlus, FaTrash } from "react-icons/fa6";
import { useUpdateVariantMutation } from "../../../redux/features/api/variant/VariantApi";

const VariantRow = ({ index, item, refetch }) => {
  const [active, setActive] = useState(false);
  const [activeEditModal, setActiveEditModal] = useState(false);
  const [deleteModal, setDeleteOpenModal] = useState();
  const { register, handleSubmit } = useForm();
  const [updateVariant, { data: resultUpdate }] = useUpdateVariantMutation();
  const { name, attributes } = item || {};
  const handleRemoveAction = () => {
    if (active) {
      setActive(false);
      return;
    }
  };
  //  update submit
  const onSubmit = (data) => {
    const UpdateData = {
      id: activeEditModal?.id,
      name: data.name,
      added_by: activeEditModal?.added_by,
    };
    updateVariant(UpdateData);
  };

  //  response and result
  useEffect(() => {
    if (resultUpdate?.status == "success") {
      toast.success(resultUpdate?.message);
      refetch();
      setActiveEditModal(false);
    }
  }, [refetch, resultUpdate, setActiveEditModal]);

  // warks for update
  const [values, setValues] = useState(activeEditModal?.attributes || []);

  const addRow = () => {
    setValues([...values, { name: "" }]);
  };

  const removeRow = (index) => {
    const newValues = [...values];
    newValues.splice(index, 1);
    setValues(newValues);
  };

  const handleInputChange = (index, event) => {
    const newValues = [...values]; // Create a copy of the state array
    newValues[index] = { ...newValues[index], name: event.target.value }; // Update the specific item immutably
    setValues(newValues); // Update the state with the new array
  };

  return (
    <>
      {/* delete modal  */}
      <DeleteVariant
        openModal={deleteModal}
        setOpenModal={setDeleteOpenModal}
        refetch={refetch}
      />
      {/* table row  */}
      <tr
        onClick={handleRemoveAction}
        key={index}
        className={`${
          index % 2 === 0 ? "bg-primary-muted" : "bg-primary-base"
        } relative`}
      >
        <td className="px-6 py-4 whitespace-nowrap"> {index + 1} </td>
        <td className="px-6 py-4 whitespace-nowrap"> {name} </td>
        <td className="px-6 py-4 whitespace-nowrap">
          {attributes?.map((attr) => (
            <span
              className="p-1 px-2 shadow-md border rounded-md mx-1"
              key={attr?.id}
            >
              {attr?.name}
            </span>
          ))}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div
            onClick={() => setActive(!active)}
            className={`${
              index % 2 === 0
                ? "hover:bg-primary-base"
                : "hover:bg-primary-muted"
            } cursor-pointer  duration-300   w-[40px] h-[40px] rounded-full flex justify-center items-center gap-1`}
          >
            <BsThreeDotsVertical className="text-[20px] text-white-base" />
          </div>
          {active && (
            <div>
              <div className=" absolute  top-0 right-5 rounded-[10px] z-50 py-3  bg-primary-base h-full shadow-xl">
                <div
                  onClick={() => setDeleteOpenModal(item)}
                  className="flex items-center px-6  py-1   gap-2 hover:bg-primary-muted duration-300 cursor-pointer"
                >
                  <MdDelete className="text-[18px] text-red-base" />
                  <span>Delete</span>
                </div>
                <div
                  onClick={() => {
                    setValues(item?.attributes);
                    setActiveEditModal(item);
                  }}
                  className="flex  justify-start px-6  py-1  items-starts gap-3  hover:bg-primary-muted duration-300 cursor-pointer"
                >
                  <MdModeEditOutline className="text-[18px] text-blue-base" />
                  <span>Edit</span>
                </div>
              </div>
            </div>
          )}
        </td>
      </tr>

      {/* update modal  */}
      <CommonModal
        title={"Edit:" + " " + activeEditModal?.name}
        active={activeEditModal}
        setActive={setActiveEditModal}
      >
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
                type={"text"}
                className=" w-full text-[14px] text-white-base placeholder:text-white-muted placeholder:text-[12px] border border-blue-base block bg-transparent mt-2 outline-0 px-2 py-[10px] rounded "
                id=""
                placeholder={"Enter Branch name"}
                defaultValue={activeEditModal?.name}
              />
            </div>

            {/*  */}
            <div className="shadow-xl border-stone-400 border rounded-md  p-3">
              <div className="flex items-center justify-between">
                <h2 className="text-xl  font-bold  capitalize text-white-base">
                  Values
                </h2>
                <button type="button" onClick={addRow}>
                  <FaPlus color="white" size={20} />
                </button>
              </div>

              {/* Render dynamic rows */}
              {values.map((value, index) => (
                <div
                  className="flex items-center gap-2 justify-between w-full py-2"
                  key={index}
                >
                  <div className="flex-1">
                    <input
                      required
                      type={"text"}
                      className="w-full text-[14px] text-white-base placeholder:text-white-muted placeholder:text-[12px] border border-blue-base block bg-transparent mt-2 outline-0 px-2 py-[10px] rounded "
                      id=""
                      placeholder={"Enter name"}
                      value={value.name}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </div>
                  <button type="button" onClick={() => removeRow(index)}>
                    <FaTrash color="red" size={20} />
                  </button>
                </div>
              ))}
            </div>
            {/*  */}
            <div className=" py-2">
              <button
                className="bg-blue-base px-4 rounded-lg py-1  text-white-base text-[18px]"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>

          <div className=""></div>
        </div>
      </CommonModal>
    </>
  );
};

export default VariantRow;
