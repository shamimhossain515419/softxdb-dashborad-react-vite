import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { BiDetail } from "react-icons/bi";
import { Link } from "react-router-dom";

const StockRow = ({ item, index }) => {
  const [active, setActive] = useState(false);
  const { available_stock, average_price, name } = item || {};
  const handleRemoveAction = () => {
    if (active) {
      setActive(false);
      return;
    }
  };
  return (
    <>
      <tr
        onClick={handleRemoveAction}
        key={index}
        className={`${
          index % 2 === 0 ? "bg-primary-muted" : "bg-primary-base"
        } relative`}
      >
        <td className="px-6 py-4 whitespace-nowrap"> {index + 1} </td>
        <td className="px-6 py-4 whitespace-nowrap"> {name} </td>
        <td className="px-6 py-4 whitespace-nowrap"> {available_stock} </td>
        <td className="px-6 py-4 whitespace-nowrap"> {average_price} </td>
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
                <Link
                  to={"stock/manage-stock/1"}
                  className="flex items-center px-6  py-1   gap-2 hover:bg-primary-muted duration-300 cursor-pointer"
                >
                  <BiDetail className="text-[18px] text-green-600" />
                  <span>Details</span>
                </Link>
                {/* <div
                  // onClick={() => setActiveEditModal(item)}
                  className="flex  justify-start px-6  py-1  items-starts gap-3  hover:bg-primary-muted duration-300 cursor-pointer"
                >
                  <MdModeEditOutline className="text-[18px] text-blue-base" />
                  <span>Edit</span>
                </div> */}
              </div>
            </div>
          )}
        </td>
      </tr>
    </>
  );
};

export default StockRow;
