import { RiDeleteBin6Fill } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";

import { deleteProduct } from "../../../redux/features/stock/addProductSlice";
import { useState } from "react";
import toast from "react-hot-toast";
import { formattedDate } from "../../../utility/formattedDate/formattedDate";

const AddToStockTable = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state?.products);

  // add stock
  const [isLoading, setLoading] = useState(false);

  const handleAddStock = () => {
    setLoading(true);
    const data = {
      added_by: "1",
      branch_id: "1",
      stock_date: formattedDate(),
      items: products,
    };

    fetch("http://127.0.0.1:8000/api/v1/stock", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.status === "success") {
          toast.success(data?.message);
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
                Color
              </th>
              <th className="px-6 py-5   bg-blue-base text-left text-xs font-medium text-white-base uppercase tracking-wider">
                Size
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
                  {item?.color_id ? item?.color_name : "N/A"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item?.size_id ? item?.size_name : "N/A"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item?.serials?.[0]}
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
          {isLoading ? "Loading..." : " Add to Stock"}
        </button>
      </div>
    </div>
  );
};

export default AddToStockTable;
