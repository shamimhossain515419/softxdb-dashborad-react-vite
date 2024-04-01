import { BsThreeDots } from "react-icons/bs";

const LatestTransactions = () => {
    return (
        <div className=" bg-primary-muted p-6 rounded-[10px]  h-full">
            <div className="flex items-center justify-between">
                <h1 className="text-[16px] text-white-muted ">
                    Latest Transactionssss
                </h1>
                <div className="text-white-base cursor-pointer">
                    <BsThreeDots className="text-[20px]" />
                </div>
            </div>
            <div className="flex items-center justify-between py-8">
                <h1 className="text-[12px] text-white-muted ">Refueling gasoline</h1>
                <p className="text-[12px] text-red-base">-$201.34</p>
            </div>
            <p className="border-b-[2px]  border-[#1D1E2C]"></p>
            <div className="flex items-center justify-between py-8">
                <h1 className="text-[12px] text-white-muted ">Purchase of furniture</h1>
                <p className="text-[12px] text-red-base">-$567.14</p>
            </div>
            <p className="border-b-[2px]  border-[#1D1E2C]"></p>
            <div className="flex items-center justify-between py-8">
                <h1 className="text-[12px] text-white-muted ">
                    Cash refund for tickets
                </h1>
                <p className="text-[12px] text-active-base">+$568.11</p>
            </div>
        </div>
    );
};

export default LatestTransactions;
