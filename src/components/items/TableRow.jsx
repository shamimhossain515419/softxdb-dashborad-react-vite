import { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa6';
import { MdDelete } from 'react-icons/md';
import { MdModeEditOutline } from 'react-icons/md';

const TableRow = ({ item, index }) => {
  const [active, setActive] = useState(false);
  const handleRemoveAction = () => {
    if (active) {
      setActive(false);
      return;
    }
  };
  const handleDelete = item => {
    console.log('dfdf');
  };
  const handleEdit = item => {
    console.log('dfdf');
  };

  return (
    <>
      <tr
        onClick={handleRemoveAction}
        className={`${index % 2 === 0 ? 'bg-primary-muted' : ''} relative `}
      >
        <td className="px-6 py-4 whitespace-nowrap">
          <div className=" border border-[#4d75ff] w-[40px] h-[40px] flex justify-center items-center rounded-full text-blue-base">
            <FaUser className="text-[16px]" />
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">{item?.name}</td>
        <td className="px-6 py-4 whitespace-nowrap">{item?.code}</td>
        <td className="px-6 py-4 whitespace-nowrap">{item?.categories}</td>
        <td className="px-6 py-4 whitespace-nowrap">{item?.type}</td>
        <td className="px-6 py-4 whitespace-nowrap">{item?.brand}</td>
        <td className="px-6 py-4 whitespace-nowrap">
          {item?.color ? (
            <div
              style={{ backgroundColor: `${item?.color}` }}
              className="w-[30px] h-[30px] rounded"
            ></div>
          ) : (
            <>N/A</>
          )}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">{item?.size}</td>
        <td className="px-6 py-4 whitespace-nowrap">{item?.salePrice}</td>
        <td className="px-6 py-4 whitespace-nowrap">
          {item?.availableStock} pc
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          {item?.status == true ? (
            <button className=" bg-active-muted py-1  px-4 rounded-lg text-white-base ">
              Active
            </button>
          ) : (
            <button className=" bg-red-muted py-1  px-4 rounded-lg text-white-base ">
              inactive
            </button>
          )}
        </td>
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
                  onClick={() => handleDelete(item)}
                  className="flex items-center px-6  py-1   gap-2 hover:bg-primary-muted duration-300 cursor-pointer"
                >
                  <MdDelete className="text-[18px] text-red-base" />
                  <span>Delete</span>
                </div>
                <div
                  onClick={() => handleEdit(item)}
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
    </>
  );
};

export default TableRow;
