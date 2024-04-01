import { TableData } from '../../utility/tableData/TableData';
import DireactDaleRow from './DireactDaleRow';

const DirectSaleTable = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full  rounded-md overflow-hidden">
          <thead>
            <tr className="">
              <th className="px-6 py-5   bg-blue-base text-left text-xs font-medium text-white-base uppercase tracking-wider">
                order number
              </th>
              <th className="px-6 py-5   bg-blue-base text-left text-xs font-medium text-white-base uppercase tracking-wider">
                sale date
              </th>
              <th className="px-6 py-5   bg-blue-base text-left text-xs font-medium text-white-base uppercase tracking-wider">
                customer
              </th>
              <th className="px-6 py-5   bg-blue-base text-left text-xs font-medium text-white-base uppercase tracking-wider">
                sub total
              </th>
              <th className="px-6 py-5   bg-blue-base text-left text-xs font-medium text-white-base uppercase tracking-wider">
                total tax
              </th>
              <th className="px-6 py-5   bg-blue-base text-left text-xs font-medium text-white-base uppercase tracking-wider">
                grand total
              </th>
              <th className="px-6 py-5   bg-blue-base text-left text-xs font-medium text-white-base uppercase tracking-wider">
                grand total
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
            {TableData.map((item, index) => <DireactDaleRow index={index} item={item} key={index}/> )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DirectSaleTable;
