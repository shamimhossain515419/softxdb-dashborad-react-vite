import { RiDeleteBin6Fill } from 'react-icons/ri';

const AddToStockTable = () => {
  const TableData = [2, 3, 5, 6, 4, 7, 8, 9, 10, 11, 12];
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
                Discount
              </th>
              <th className="px-6 py-5   bg-blue-base text-left text-xs font-medium text-white-base uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-5   bg-blue-base text-left text-xs font-medium text-white-base uppercase tracking-wider">
                Total Price
              </th>
              <th className="px-6 py-5   bg-blue-base text-left text-xs font-medium text-white-base uppercase tracking-wider">
                Remove
              </th>
              {/* Add more table headers here */}
            </tr>
          </thead>
          <tbody className="  bg-transparent  text-white-base">
            {TableData.map((item, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? '' : ''
                } border-b border-[#4D75FF]`}
              >
                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap">2557HU484</td>
                <td className="px-6 py-4 whitespace-nowrap">Red</td>
                <td className="px-6 py-4 whitespace-nowrap">N/A</td>
                <td className="px-6 py-4 whitespace-nowrap">2557HU484</td>
                <td className="px-6 py-4 whitespace-nowrap">20 pcs</td>
                <td className="px-6 py-4 whitespace-nowrap">10%</td>
                <td className="px-6 py-4 whitespace-nowrap">2,35,990.00</td>
                <td className="px-6 py-4 whitespace-nowrap">2,35,990.00</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="cursor-pointer text-[#FF0000]">
                    <RiDeleteBin6Fill className="text-[20px]" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddToStockTable;
