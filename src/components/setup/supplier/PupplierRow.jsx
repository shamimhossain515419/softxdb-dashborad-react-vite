import { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdDelete, MdModeEditOutline } from 'react-icons/md';
import CommonModal from '../../../ui/commonModal/commonModal';
import DeleteSupplier from './DeleteSupplier';
import UpdateSupplier from './UpdateSupplier';

const SupplierRow = ({ index, item, refetch }) => {
  const [active, setActive] = useState(false);
  const [activeEditModal, setActiveEditModal] = useState(false);
  const [deleteModal, setDeleteOpenModal] = useState();
  const { name, photo, nid, address, email, phone, closing_balance } =
    item || {};
  const handleRemoveAction = () => {
    if (active) {
      setActive(false);
      return;
    }
  };

  return (
    <>
      {/* delete modal  */}
      <DeleteSupplier
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
        <td className="px-6 py-4 whitespace-nowrap">
          <div className=" h-[80px] w-[80px] overflow-hidden">
            <img
              className=" h-full  rounded-full  object-contain"
              src={`${import.meta.env.VITE_BASE_URL}/api/v1/images/${photo}`}
              alt=""
            />
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap"> {name} </td>
        <td className="px-6 py-4 whitespace-nowrap"> {phone} </td>
        <td className="px-6 py-4 whitespace-nowrap"> {email} </td>
        <td className="px-6 py-4 whitespace-nowrap"> {address} </td>
        <td className="px-6 py-4 whitespace-nowrap"> {nid} </td>
        <td className="px-6 py-4 whitespace-nowrap"> {closing_balance} </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div
            onClick={() => setActive(!active)}
            className={`${
              index % 2 === 0
                ? 'hover:bg-primary-base'
                : 'hover:bg-primary-muted'
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
        <UpdateSupplier
          refetch={refetch}
          active={activeEditModal}
          setActive={setActiveEditModal}
        ></UpdateSupplier>
      </CommonModal>
    </>
  );
};

export default SupplierRow;
