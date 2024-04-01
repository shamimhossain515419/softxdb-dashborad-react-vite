import { TableData } from "../../utility/tableData/TableData";
import TableRow from "./TableRow";

const ItemsTable = () => {

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full  rounded-md overflow-hidden">
                <thead>
                    <tr className="">
                        <th className="px-6 py-5   bg-blue-base text-left text-xs font-medium text-white-base uppercase tracking-wider">
                            Photo
                        </th>
                        <th className="px-6 py-5   bg-blue-base text-left text-xs font-medium text-white-base uppercase tracking-wider">
                            Name
                        </th>
                        <th className="px-6 py-5   bg-blue-base text-left text-xs font-medium text-white-base uppercase tracking-wider">
                            Code
                        </th>
                        <th className="px-6 py-5   bg-blue-base text-left text-xs font-medium text-white-base uppercase tracking-wider">
                            Categories
                        </th>
                        <th className="px-6 py-5   bg-blue-base text-left text-xs font-medium text-white-base uppercase tracking-wider">
                            Type
                        </th>
                        <th className="px-6 py-5   bg-blue-base text-left text-xs font-medium text-white-base uppercase tracking-wider">
                            Brand
                        </th>
                        <th className="px-6 py-5   bg-blue-base text-left text-xs font-medium text-white-base uppercase tracking-wider">
                            Color
                        </th>
                        <th className="px-6 py-5   bg-blue-base text-left text-xs font-medium text-white-base uppercase tracking-wider">
                            Size
                        </th>
                        <th className="px-6 py-5   bg-blue-base text-left text-xs font-medium text-white-base uppercase tracking-wider">
                            Sale Price
                        </th>
                        <th className="px-6 py-5   bg-blue-base text-left text-xs font-medium text-white-base uppercase tracking-wider">
                            Available Stock
                        </th>
                        <th className="px-6 py-5   bg-blue-base text-left text-xs font-medium text-white-base uppercase tracking-wider">
                            Status
                        </th>
                        <th className="px-6 py-5   bg-blue-base text-left text-xs font-medium text-white-base uppercase tracking-wider">
                            Action
                        </th>
                        {/* Add more table headers here */}
                    </tr>
                </thead>
                <tbody className="bg-primary-muted  text-white-base">
                    {TableData.map((item, index) => <TableRow index={index} key={index} />)}
                </tbody>
            </table>
        </div>
    );
};

export default ItemsTable;