import { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdDelete, MdModeEditOutline } from 'react-icons/md';
import CommonModal from '../../../ui/commonModal/commonModal';
import DeleteProduct from './DeleteProduct';
import UpdateProduct from './UpdateProduct';

const ProductRow = ({ index, item, refetch }) => {
  const [active, setActive] = useState(false);
  const [activeEditModal, setActiveEditModal] = useState(false);
  const [deleteModal, setDeleteOpenModal] = useState();
  const {
    name,
    photo,
    selling_price,
    brand_name,
    unit_name,
    category_name,
    purchase_price,
    product_code,
    size_status,
  } = item || {};
  const handleRemoveAction = () => {
    if (active) {
      setActive(false);
      return;
    }
  };

return (
    <>
      {/* delete modal  */}
      <DeleteProduct
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
           <div className=' max-h-[80px] w-[80px] overflow-hidden'>
            <img className=' h-full  object-contain' src={`${import.meta.env.VITE_BASE_URL}/api/v1/images/${photo}`} alt="" />
           </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap"> {name} </td>
        <td className="px-6 py-4 whitespace-nowrap"> {category_name} </td>
        <td className="px-6 py-4 whitespace-nowrap"> {unit_name} </td>
        <td className="px-6 py-4 whitespace-nowrap"> {brand_name} </td>
        <td className="px-6 py-4 whitespace-nowrap"> {selling_price} </td>
        <td className="px-6 py-4 whitespace-nowrap"> {purchase_price} </td>
        <td className="px-6 py-4 whitespace-nowrap"> {product_code} </td>
        <td className="px-6 py-4 whitespace-nowrap"> {size_status} </td>
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
        <UpdateProduct
          refetch={refetch}
          active={activeEditModal}
          setActive={setActiveEditModal}
        ></UpdateProduct>
      </CommonModal>
    </>
  );
};

export default ProductRow;
