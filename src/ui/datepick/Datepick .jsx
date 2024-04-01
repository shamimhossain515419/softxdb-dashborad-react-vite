import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarDays } from "react-icons/fa6";

const Datepick = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  return (
    <div className="relative px-1  pt-8">
           <div className="border border-blue-base flex items-center rounded">
           <ReactDatePicker  className=" w-[100px] outline-0 bg-transparent  py-2  text-white-base px-2 "   placeholderText="From Date"  selected={startDate} onChange={(date) => setStartDate(date)} />
           <ReactDatePicker  className="w-[100px] outline-0 bg-transparent  py-2  text-white-base px-2 "   placeholderText="To Date"  selected={endDate} onChange={(date) => setEndDate(date)} />
           <div className=" bg-blue-base text-white-base w-[40px] h-[40px] flex justify-center items-center gap-2 ">
            <FaRegCalendarDays />
           </div>

           </div>
    </div>
  );
};

export default Datepick;
