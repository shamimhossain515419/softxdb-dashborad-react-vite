import { useEffect, useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdDelete, MdModeEditOutline } from 'react-icons/md';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import CommonModal from '../../../ui/commonModal/commonModal';
import { useUpdateColorMutation } from '../../../redux/features/api/color/ColorsApi';
import DeleteColor from './DeleteColor';

const ColorRow = ({ index, item, refetch }) => {
  const [active, setActive] = useState(false);
  const [activeEditModal, setActiveEditModal] = useState(false);
  const [deleteModal, setDeleteOpenModal] = useState();
  const { register, handleSubmit } = useForm();
  const [updateColor, { data: resultUpdate }] = useUpdateColorMutation();
  const { name } = item || {};
  const handleRemoveAction = () => {
    if (active) {
      setActive(false);
      return;
    }
  };

  //  update submit 
  const onSubmit = data => {
    const UpdateData = {
      id: activeEditModal?.id,
      name: data.name,
      added_by: activeEditModal?.added_by,
    };
    updateColor(UpdateData);
  };

  //  respons and result
  useEffect(() => {
    if (resultUpdate?.status == 'success') {
      toast.success(resultUpdate?.message);
      refetch();
      setActiveEditModal(false);
    }
  }, [refetch, resultUpdate, setActiveEditModal]);

  return (
    <>
      {/* delete modal  */}
      <DeleteColor
        openModal={deleteModal}
        setOpenModal={setDeleteOpenModal}
        refetch={refetch}
      />
       {/* table row  */}
      <tr
        onClick={handleRemoveAction}
        key={index}
        className={`${
          index % 2 === 0 ? 'bg-primary-muted' : 'bg-primary-base'
        } relative`}
      >
        <td className="px-6 py-4 whitespace-nowrap"> {index + 1} </td>
        <td className="px-6 py-4 whitespace-nowrap"> {name} </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div
            onClick={() => setActive(!active)}
            className=" cursor-pointer hover:bg-primary-base duration-300   w-[40px] h-[40px] rounded-full flex justify-center items-center gap-1"
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
                  onClick={() => setActiveEditModal(item)}
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
        title={'Edit:' + ' ' + activeEditModal?.name}
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
                {...register('name')}
                type={'text'}
                className=" w-full text-[14px] text-white-base placeholder:text-white-muted placeholder:text-[12px] border border-blue-base block bg-transparent mt-2 outline-0 px-2 py-[10px] rounded "
                id=""
                placeholder={'Enter Branch name'}
                defaultValue={activeEditModal?.name}
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
      </CommonModal>
    </>
  );
};

export default ColorRow;
