import { RiDeleteBin6Fill } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";

import {
  deleteAllProducts,
  deleteProduct,
} from "../../../redux/features/stock/addProductSlice";
import { useState } from "react";
import toast from "react-hot-toast";
import { formattedDate } from "../../../utility/formattedDate/formattedDate";
import { BiEditAlt } from "react-icons/bi";

import CommonModal from "../../../ui/commonModal/commonModal";

const AddToSaleTable = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state?.products);
  // console.log(products);

  // add stock
  const [isLoading, setLoading] = useState(false);
  const [serialModal, setSerialModal] = useState(false);
  const [date, setDate] = useState("");

  const handleAddStock = () => {
    setLoading(true);
    const data = {
      added_by: "1",
      branch_id: "1",
      stock_date: formattedDate(date),
      items: products,
    };

    fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/stock`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        if (data.status === "success") {
          toast.success(data?.message);
          dispatch(deleteAllProducts());
        } else {
          toast.error(data?.message);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log("error", err);
      });
  };

  return (
    <div>
      <CommonModal
        title={"Serials"}
        active={serialModal}
        setActive={setSerialModal}
      >
        {serialModal && (
          <>
            <div className="flex items-center justify-center">
              {serialModal?.map((sl) => {
                return (
                  <span
                    key={sl}
                    className="p-1 px-2 shadow-md border rounded-md mx-1 text-white-base"
                  >
                    {sl}
                  </span>
                );
              })}
            </div>
          </>
        )}
      </CommonModal>
      <div className="overflow-x-auto">
        <table className="min-w-full  rounded-md overflow-hidden">
          <thead>
            <tr className="">
              <th className="px-6 py-5   bg-blue-base text-left text-xs font-medium text-white-base uppercase tracking-wider">
                #SL
              </th>
              <th className="px-6 py-5   bg-blue-base text-left text-xs font-medium text-white-base uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-5   bg-blue-base text-left text-xs font-medium text-white-base uppercase tracking-wider">
                Variants
              </th>

              <th className="px-6 py-5   bg-blue-base text-left text-xs font-medium text-white-base uppercase tracking-wider">
                Serial
              </th>
              <th className="px-6 py-5   bg-blue-base text-left text-xs font-medium text-white-base uppercase tracking-wider">
                Quantity
              </th>
              <th className="px-6 py-5   bg-blue-base text-left text-xs font-medium text-white-base uppercase tracking-wider">
                Price
              </th>

              <th className="px-6 py-5   bg-blue-base text-left text-xs font-medium text-white-base uppercase tracking-wider">
                Remove
              </th>
              {/* Add more table headers here */}
            </tr>
          </thead>
          <tbody className="  bg-transparent  text-white-base">
            {products.map((item, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "" : ""
                } border-b border-[#4D75FF]`}
              >
                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item?.product_name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item?.variants?.map((variant, i) => {
                    return (
                      <span
                        className="p-1 px-2 shadow-md border rounded-md mx-1"
                        key={i}
                      >
                        {variant?.attribute?.name}
                      </span>
                    );
                  })}
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  {item?.serial_status ? (
                    <BiEditAlt
                      onClick={() => setSerialModal(item?.serials)}
                      size={25}
                      className="cursor-pointer"
                    />
                  ) : (
                    <>N/A</>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item?.quantity} pcs
                </td>

                <td className="px-6 py-4 whitespace-nowrap"> {item?.price}</td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <div
                    onClick={() => dispatch(deleteProduct(index))}
                    className="cursor-pointer text-[#FF0000]"
                  >
                    <RiDeleteBin6Fill className="text-[20px]" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex  items-center justify-end gap-4 pt-10">
        <button
          onClick={handleAddStock}
          className="bg-blue-base px-4 py-2 rounded text-white-base"
        >
          {isLoading ? "Loading..." : "Sale"}
        </button>
      </div>
    </div>
  );
};

export default AddToSaleTable;
