import { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdDelete, MdModeEditOutline } from 'react-icons/md';

const DireactDaleRow = ({ item, index }) => {
  const [active, setActive] = useState(false);
  const handleRemoveAction = () => {
    if (active) {
      setActive(false);
      return;
    }
  };
  const handleDelete = (item) => {
    console.log('dfdf');
  };
  const handleEdit = (item) => {
    console.log('dfdf');
  };
  return (
    <>
      <tr
        onClick={handleRemoveAction}
        key={index}
        className={`${index % 2 === 0 ? 'bg-primary-muted' : ''} relative`}
      >
        <td className="px-6 py-4 whitespace-nowrap">DSO-001027</td>
        <td className="px-6 py-4 whitespace-nowrap">24 Mar 2024</td>
        <td className="px-6 py-4 whitespace-nowrap">Nayem uddin</td>
        <td className="px-6 py-4 whitespace-nowrap">৳ 1200.00</td>
        <td className="px-6 py-4 whitespace-nowrap"> ৳ 0.00</td>
        <td className="px-6 py-4 whitespace-nowrap">৳ 450.00</td>
        <td className="px-6 py-4 whitespace-nowrap">৳ 450.00</td>
        <td className="px-6 py-4 whitespace-nowrap text-[12px]">
          {item?.status == true ? (
            <button className=" bg-[#28A745] py-1  px-4 rounded-lg text-white-base ">
              Completed
            </button>
          ) : (
            <button className=" bg-red-muted py-1  px-4 rounded-lg text-white-base ">
              uncompleted
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

export default DireactDaleRow;
