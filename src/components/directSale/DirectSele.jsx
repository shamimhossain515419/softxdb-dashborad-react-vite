import { useState } from "react";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaCloudUploadAlt,
} from "react-icons/fa";
import { FaArrowRight, FaChevronDown } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { Collapse } from "react-collapse";
import DirectSaleTable from "./DirectSaleTable";
import { SiMinutemailer } from "react-icons/si";
import { BsThreeDots } from "react-icons/bs";
import { CategoryData } from "../../utility/selectItems/SelectItemsData";
import Selectitem from "../../ui/selectitem/Selectitem";
import { Link } from "react-router-dom";
import Datepick from "../../ui/datepick/Datepick ";
import CommonModal from "../../ui/commonModal/commonModal";

const DirectSele = () => {
  const [category, setCategory] = useState({ name: "Select category", id: 0 });
  const [active, setActive] = useState(false);
  const [activeUpload, setActiveUpload] = useState(false);
  const Categoryinfo = CategoryData;
  const [showData, setShowData] = useState("25");
  const [activeLimit, setActiveLimit] = useState(false);
  const showDataArray = [
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
  ];
  return (
    <div>
      <div className="flex items-center gap-3">
        <Link to={"/"} className="text-white-muted">
          Home
        </Link>
        <FaArrowRight className="text-[18px] text-blue-base" />
        <Link to={"/direct-sele"} className="text-white-base">
          Items
        </Link>
      </div>
      {/* items button  */}
      <div className="py-5 flex flex-col lg:flex-row justify-between lg:items-center gap-6">
        <h1 className="text-white-base"> Direct Sale </h1>
        <div className=" flex gap-3 items-center ">
          <div
            onClick={() => setActiveUpload(false)}
            className={` ${
              activeUpload == false
                ? " bg-blue-base"
                : " border  border-[#4d75ff] "
            }  p-[10px] rounded-full cursor-pointer`}
          >
            <FaCloudUploadAlt className={`text-[18px] text-white-base`} />
          </div>
          <div
            onClick={() => setActiveUpload(true)}
            className={` ${
              activeUpload == true
                ? " bg-blue-base"
                : " border  border-[#4d75ff] "
            }  p-[10px] rounded-full cursor-pointer`}
          >
            <FaCloudUploadAlt
              className={`text-[18px] rotate-180 text-white-base`}
            />
          </div>

          <div>
            <button
              onClick={() => setActive(true)}
              className="border-[1.5px] border-[#4d75ff] rounded-md inline-block  text-white-base tex-[14px] px-4 py-2 overflow-hidden"
            >
              Add new item
            </button>
          </div>
        </div>
      </div>
      <div className=" border border-blue-base"></div>

      <div className=" pt-9">
        {/* subtotal  */}
        <div className=" grid grid-cols-2  md:grid-cols-3 xl:grid-cols-4 gap-5">
          <div className=" bg-[#EAF6FF]  grid grid-cols-2  rounded p-4">
            <div className=" border-r-[3px] border-[#0088FF] w-[80px]">
              <div className=" bg-[#0088ff57] w-[50px] h-[50px]  rounded-full flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M16.6416 11.3175C16.3528 11.2922 16.0665 11.1862 15.9526 10.8872C15.826 10.6071 15.9565 10.3269 16.1382 10.1081C16.2198 9.99563 16.2057 9.84375 16.1101 9.74531L15.0048 8.64C14.9063 8.54438 14.7545 8.53031 14.642 8.61188L14.4788 8.72719C14.1222 9.00281 13.5248 8.76544 13.4663 8.30813L13.4326 8.10844C13.4219 8.04312 13.3883 7.98374 13.3377 7.94096C13.2872 7.89819 13.2231 7.8748 13.1569 7.875H11.5929C11.4551 7.875 11.3398 7.97344 11.3173 8.10844L11.2835 8.30813C11.2265 8.757 10.6353 9.00844 10.271 8.72719L10.1079 8.61188C9.99542 8.53031 9.84354 8.54438 9.74511 8.64L8.63951 9.74531C8.54389 9.84375 8.52983 9.99563 8.61139 10.1081L8.7267 10.2713C9.00233 10.6279 8.76495 11.225 8.30764 11.2838L8.10795 11.3175C8.04263 11.3282 7.98326 11.3618 7.94048 11.4123C7.8977 11.4628 7.87431 11.5269 7.87451 11.5931V13.1569C7.87451 13.2947 7.97295 13.41 8.10795 13.4325L8.30764 13.4663C8.52701 13.5028 8.70701 13.6463 8.79701 13.8628C8.88139 14.0681 8.85608 14.2988 8.7267 14.4788C8.60689 14.6343 8.46514 14.823 8.63951 15.0047L9.74483 16.11C9.84326 16.2056 9.99514 16.2197 10.1076 16.1381C10.3298 15.9528 10.6066 15.8268 10.898 15.9581C11.1868 16.065 11.2914 16.3578 11.317 16.6416C11.3395 16.7766 11.4548 16.875 11.5926 16.875H13.1567C13.2945 16.875 13.4098 16.7766 13.4323 16.6416L13.466 16.4419C13.5231 15.993 14.1143 15.7416 14.4785 16.0228C14.6341 16.1426 14.8228 16.2844 15.0045 16.11L16.1098 15.0047C16.2054 14.9063 16.2195 14.7544 16.1379 14.6419C15.9529 14.4197 15.8269 14.1429 15.9579 13.8516C16.0651 13.5627 16.3579 13.4584 16.6414 13.4325C16.7067 13.4219 16.7662 13.3883 16.809 13.3378C16.8518 13.2872 16.8753 13.2231 16.8751 13.1569V11.5931C16.8751 11.4553 16.7766 11.34 16.6416 11.3175ZM12.3748 15.0469C10.9444 15.0756 9.67283 13.8085 9.70292 12.375C9.69026 10.0209 12.5987 8.811 14.262 10.4822C15.941 12.148 14.7325 15.0581 12.3748 15.0469Z"
                    fill="#0088FF"
                  />
                  <path
                    d="M12.3747 10.2656C10.8222 10.2288 9.75457 12.0066 10.51 13.3594C11.5444 15.2876 14.4692 14.5654 14.4841 12.375C14.5114 11.2514 13.5042 10.2375 12.3747 10.2656ZM12.2256 12.0937H12.5238C13.4148 12.1092 13.5199 13.3762 12.6559 13.545C12.7029 13.9927 12.0591 14.0068 12.0934 13.5562H11.7728C11.6181 13.5562 11.4916 13.4325 11.4916 13.275C11.4916 13.1203 11.6181 12.9937 11.7728 12.9937H12.5238C12.6194 12.9937 12.6953 12.9178 12.6953 12.825C12.6889 12.5876 12.3761 12.6697 12.2256 12.6562C11.3346 12.6408 11.2294 11.3737 12.0934 11.205C12.0465 10.757 12.6903 10.7432 12.6559 11.1937H12.9766C13.3459 11.1994 13.3467 11.7489 12.9766 11.7562H12.2256C12.0009 11.7574 12.0009 12.0926 12.2256 12.0937Z"
                    fill="#0088FF"
                  />
                  <path
                    d="M8.23992 15.3984C7.87852 15.0272 7.94686 14.5178 8.26805 14.1553C8.29055 14.1244 8.28492 14.0963 8.27648 14.0766C8.2568 14.0288 8.22867 14.0231 8.21461 14.0203C7.72523 13.9888 7.31292 13.6747 7.3118 13.1569V11.5931C7.3118 11.1797 7.60711 10.8309 8.01492 10.7634C8.06498 10.7466 8.25624 10.7494 8.27086 10.6847C8.29336 10.6313 8.27648 10.6087 8.27086 10.6003L8.15274 10.4316C7.91367 10.1053 7.94742 9.64969 8.23711 9.35437L9.34805 8.24344C9.70917 7.8795 10.234 7.947 10.594 8.26875C10.6429 8.31122 10.7332 8.25328 10.729 8.21531C10.7594 7.72734 11.0758 7.31306 11.5924 7.3125H12.4446C11.9018 6.53625 11.1846 5.88375 10.3437 5.43094C10.2248 5.65873 10.0459 5.84965 9.82623 5.98301C9.60661 6.11637 9.35468 6.18709 9.09773 6.1875H6.0293C5.50898 6.1875 5.01961 5.89781 4.78336 5.4225C2.01502 6.90469 0.746579 10.4906 2.00377 13.3791C0.409078 14.3719 1.12627 16.8806 3.01064 16.875H9.71339C9.48558 16.6444 8.48911 15.6507 8.23992 15.3984Z"
                    fill="#0088FF"
                  />
                  <path
                    d="M4.58707 3.67313C4.80925 3.99375 5.068 4.22719 5.28738 4.3875C4.97688 4.92075 5.41366 5.64131 6.02707 5.625H9.09832C9.7106 5.64188 10.1488 4.92159 9.838 4.3875C10.3952 4.00697 10.9079 3.23466 11.0305 2.50875C11.186 1.81603 10.6027 1.10728 9.89425 1.12528H5.23113C4.52266 1.10784 3.9385 1.81575 4.09488 2.50903C4.18207 2.93653 4.34519 3.32719 4.58707 3.67313Z"
                    fill="#0088FF"
                  />
                </svg>
              </div>
            </div>
            <div className=" space-y-1">
              <h1 className="text-[#4682B4] font-bold text-[14px]">
                Sub Total Amount
              </h1>
              <p className="text-[#4682B4] font-medium text-[14px]">
                ৳ 722,038,736.04
              </p>
            </div>
          </div>
          <div className=" bg-[#FFEAEA]  grid grid-cols-2  rounded p-4">
            <div className=" border-r-[3px] border-[#FF3D71] w-[80px]">
              <div className=" bg-[#FFC3C3] w-[50px] h-[50px]  rounded-full flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M14.0625 4.5H16.5431L13.5 1.45688V3.9375C13.5 4.08669 13.5593 4.22976 13.6648 4.33525C13.7702 4.44074 13.9133 4.5 14.0625 4.5Z"
                    fill="#FF3D71"
                  />
                  <path
                    d="M14.0625 5.625C13.6149 5.625 13.1857 5.44721 12.8693 5.13074C12.5528 4.81428 12.375 4.38505 12.375 3.9375V1.125H6.1875C5.73995 1.125 5.31072 1.30279 4.99426 1.61926C4.67779 1.93572 4.5 2.36495 4.5 2.8125V6.8625C5.752 6.60644 7.05388 6.78432 8.1913 7.36687C9.32872 7.94942 10.2339 8.90191 10.7577 10.0675C11.2816 11.2331 11.393 12.5424 11.0735 13.7797C10.754 15.0171 10.0227 16.1087 9 16.875H15.1875C15.6351 16.875 16.0643 16.6972 16.3807 16.3807C16.6972 16.0643 16.875 15.6351 16.875 15.1875V5.625H14.0625ZM10.6875 5.625H7.3125C7.16332 5.625 7.02024 5.56574 6.91475 5.46025C6.80926 5.35476 6.75 5.21168 6.75 5.0625C6.75 4.91332 6.80926 4.77024 6.91475 4.66475C7.02024 4.55926 7.16332 4.5 7.3125 4.5H10.6875C10.8367 4.5 10.9798 4.55926 11.0852 4.66475C11.1907 4.77024 11.25 4.91332 11.25 5.0625C11.25 5.21168 11.1907 5.35476 11.0852 5.46025C10.9798 5.56574 10.8367 5.625 10.6875 5.625ZM14.0625 14.0625H12.9375C12.7883 14.0625 12.6452 14.0032 12.5398 13.8977C12.4343 13.7923 12.375 13.6492 12.375 13.5C12.375 13.3508 12.4343 13.2077 12.5398 13.1023C12.6452 12.9968 12.7883 12.9375 12.9375 12.9375H14.0625C14.2117 12.9375 14.3548 12.9968 14.4602 13.1023C14.5657 13.2077 14.625 13.3508 14.625 13.5C14.625 13.6492 14.5657 13.7923 14.4602 13.8977C14.3548 14.0032 14.2117 14.0625 14.0625 14.0625ZM14.0625 11.25H12.9375C12.7883 11.25 12.6452 11.1907 12.5398 11.0852C12.4343 10.9798 12.375 10.8367 12.375 10.6875C12.375 10.5383 12.4343 10.3952 12.5398 10.2898C12.6452 10.1843 12.7883 10.125 12.9375 10.125H14.0625C14.2117 10.125 14.3548 10.1843 14.4602 10.2898C14.5657 10.3952 14.625 10.5383 14.625 10.6875C14.625 10.8367 14.5657 10.9798 14.4602 11.0852C14.3548 11.1907 14.2117 11.25 14.0625 11.25ZM14.0625 8.4375H11.8125C11.6633 8.4375 11.5202 8.37824 11.4148 8.27275C11.3093 8.16726 11.25 8.02418 11.25 7.875C11.25 7.72582 11.3093 7.58274 11.4148 7.47725C11.5202 7.37176 11.6633 7.3125 11.8125 7.3125H14.0625C14.2117 7.3125 14.3548 7.37176 14.4602 7.47725C14.5657 7.58274 14.625 7.72582 14.625 7.875C14.625 8.02418 14.5657 8.16726 14.4602 8.27275C14.3548 8.37824 14.2117 8.4375 14.0625 8.4375Z"
                    fill="#FF3D71"
                  />
                  <path
                    d="M5.625 7.875C4.73499 7.875 3.86496 8.13892 3.12494 8.63339C2.38491 9.12785 1.80814 9.83066 1.46754 10.6529C1.12695 11.4752 1.03783 12.38 1.21147 13.2529C1.3851 14.1258 1.81369 14.9276 2.44302 15.557C3.07236 16.1863 3.87418 16.6149 4.7471 16.7885C5.62001 16.9622 6.52481 16.8731 7.34708 16.5325C8.16934 16.1919 8.87215 15.6151 9.36662 14.8751C9.86108 14.135 10.125 13.265 10.125 12.375C10.125 11.1815 9.6509 10.0369 8.80698 9.19302C7.96307 8.34911 6.81848 7.875 5.625 7.875ZM4.5 10.6875C4.61125 10.6875 4.72001 10.7205 4.81251 10.7823C4.90501 10.8441 4.97711 10.932 5.01968 11.0347C5.06226 11.1375 5.0734 11.2506 5.05169 11.3597C5.02999 11.4689 4.97642 11.5691 4.89775 11.6477C4.81908 11.7264 4.71885 11.78 4.60974 11.8017C4.50063 11.8234 4.38753 11.8123 4.28474 11.7697C4.18196 11.7271 4.09411 11.655 4.0323 11.5625C3.97049 11.47 3.9375 11.3613 3.9375 11.25C3.9375 11.1008 3.99677 10.9577 4.10225 10.8523C4.20774 10.7468 4.35082 10.6875 4.5 10.6875ZM6.75 14.0625C6.63875 14.0625 6.53 14.0295 6.43749 13.9677C6.34499 13.9059 6.27289 13.818 6.23032 13.7153C6.18775 13.6125 6.17661 13.4994 6.19831 13.3903C6.22001 13.2811 6.27359 13.1809 6.35225 13.1023C6.43092 13.0236 6.53115 12.97 6.64026 12.9483C6.74938 12.9266 6.86248 12.9377 6.96526 12.9803C7.06805 13.0229 7.1559 13.095 7.2177 13.1875C7.27951 13.28 7.3125 13.3887 7.3125 13.5C7.3125 13.6492 7.25324 13.7923 7.14775 13.8977C7.04226 14.0032 6.89919 14.0625 6.75 14.0625ZM7.14938 11.6494L4.89938 13.8994C4.84709 13.9521 4.78487 13.9939 4.71633 14.0225C4.64778 14.0511 4.57426 14.0658 4.5 14.0658C4.42575 14.0658 4.35222 14.0511 4.28368 14.0225C4.21513 13.9939 4.15292 13.9521 4.10063 13.8994C4.0479 13.8471 4.00606 13.7849 3.9775 13.7163C3.94894 13.6478 3.93424 13.5743 3.93424 13.5C3.93424 13.4257 3.94894 13.3522 3.9775 13.2837C4.00606 13.2151 4.0479 13.1529 4.10063 13.1006L6.35063 10.8506C6.45655 10.7447 6.60021 10.6852 6.75 10.6852C6.8998 10.6852 7.04346 10.7447 7.14938 10.8506C7.2553 10.9565 7.3148 11.1002 7.3148 11.25C7.3148 11.3998 7.2553 11.5435 7.14938 11.6494Z"
                    fill="#FF3D71"
                  />
                </svg>
              </div>
            </div>
            <div className=" space-y-1">
              <h1 className="text-[#4682B4] font-bold text-[14px]">
                Total Tax Amount
              </h1>
              <p className="text-[#4682B4] font-medium text-[14px]">
                ৳ 722,038,736.04
              </p>
            </div>
          </div>
          <div className=" bg-[#EAFFF4]  grid grid-cols-2  rounded p-4">
            <div className=" border-r-[3px] border-[#3BE0A8] w-[80px]">
              <div className=" bg-[#C3FFC5] w-[50px] h-[50px]  rounded-full flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M16.6416 11.3175C16.3528 11.2922 16.0665 11.1862 15.9526 10.8872C15.826 10.6071 15.9565 10.3269 16.1382 10.1081C16.2198 9.99563 16.2057 9.84375 16.1101 9.74531L15.0048 8.64C14.9063 8.54438 14.7545 8.53031 14.642 8.61188L14.4788 8.72719C14.1222 9.00281 13.5248 8.76544 13.4663 8.30813L13.4326 8.10844C13.4219 8.04312 13.3883 7.98374 13.3377 7.94096C13.2872 7.89819 13.2231 7.8748 13.1569 7.875H11.5929C11.4551 7.875 11.3398 7.97344 11.3173 8.10844L11.2835 8.30813C11.2265 8.757 10.6353 9.00844 10.271 8.72719L10.1079 8.61188C9.99542 8.53031 9.84354 8.54438 9.74511 8.64L8.63951 9.74531C8.54389 9.84375 8.52983 9.99563 8.61139 10.1081L8.7267 10.2713C9.00233 10.6279 8.76495 11.225 8.30764 11.2838L8.10795 11.3175C8.04263 11.3282 7.98326 11.3618 7.94048 11.4123C7.8977 11.4628 7.87431 11.5269 7.87451 11.5931V13.1569C7.87451 13.2947 7.97295 13.41 8.10795 13.4325L8.30764 13.4663C8.52701 13.5028 8.70701 13.6463 8.79701 13.8628C8.88139 14.0681 8.85608 14.2988 8.7267 14.4788C8.60689 14.6343 8.46514 14.823 8.63951 15.0047L9.74483 16.11C9.84326 16.2056 9.99514 16.2197 10.1076 16.1381C10.3298 15.9528 10.6066 15.8268 10.898 15.9581C11.1868 16.065 11.2914 16.3578 11.317 16.6416C11.3395 16.7766 11.4548 16.875 11.5926 16.875H13.1567C13.2945 16.875 13.4098 16.7766 13.4323 16.6416L13.466 16.4419C13.5231 15.993 14.1143 15.7416 14.4785 16.0228C14.6341 16.1426 14.8228 16.2844 15.0045 16.11L16.1098 15.0047C16.2054 14.9063 16.2195 14.7544 16.1379 14.6419C15.9529 14.4197 15.8269 14.1429 15.9579 13.8516C16.0651 13.5627 16.3579 13.4584 16.6414 13.4325C16.7067 13.4219 16.7662 13.3883 16.809 13.3378C16.8518 13.2872 16.8753 13.2231 16.8751 13.1569V11.5931C16.8751 11.4553 16.7766 11.34 16.6416 11.3175ZM12.3748 15.0469C10.9444 15.0756 9.67283 13.8085 9.70292 12.375C9.69026 10.0209 12.5987 8.811 14.262 10.4822C15.941 12.148 14.7325 15.0581 12.3748 15.0469Z"
                    fill="#0088FF"
                  />
                  <path
                    d="M12.3747 10.2656C10.8222 10.2288 9.75457 12.0066 10.51 13.3594C11.5444 15.2876 14.4692 14.5654 14.4841 12.375C14.5114 11.2514 13.5042 10.2375 12.3747 10.2656ZM12.2256 12.0937H12.5238C13.4148 12.1092 13.5199 13.3762 12.6559 13.545C12.7029 13.9927 12.0591 14.0068 12.0934 13.5562H11.7728C11.6181 13.5562 11.4916 13.4325 11.4916 13.275C11.4916 13.1203 11.6181 12.9937 11.7728 12.9937H12.5238C12.6194 12.9937 12.6953 12.9178 12.6953 12.825C12.6889 12.5876 12.3761 12.6697 12.2256 12.6562C11.3346 12.6408 11.2294 11.3737 12.0934 11.205C12.0465 10.757 12.6903 10.7432 12.6559 11.1937H12.9766C13.3459 11.1994 13.3467 11.7489 12.9766 11.7562H12.2256C12.0009 11.7574 12.0009 12.0926 12.2256 12.0937Z"
                    fill="#0088FF"
                  />
                  <path
                    d="M8.23992 15.3984C7.87852 15.0272 7.94686 14.5178 8.26805 14.1553C8.29055 14.1244 8.28492 14.0963 8.27648 14.0766C8.2568 14.0288 8.22867 14.0231 8.21461 14.0203C7.72523 13.9888 7.31292 13.6747 7.3118 13.1569V11.5931C7.3118 11.1797 7.60711 10.8309 8.01492 10.7634C8.06498 10.7466 8.25624 10.7494 8.27086 10.6847C8.29336 10.6313 8.27648 10.6087 8.27086 10.6003L8.15274 10.4316C7.91367 10.1053 7.94742 9.64969 8.23711 9.35437L9.34805 8.24344C9.70917 7.8795 10.234 7.947 10.594 8.26875C10.6429 8.31122 10.7332 8.25328 10.729 8.21531C10.7594 7.72734 11.0758 7.31306 11.5924 7.3125H12.4446C11.9018 6.53625 11.1846 5.88375 10.3437 5.43094C10.2248 5.65873 10.0459 5.84965 9.82623 5.98301C9.60661 6.11637 9.35468 6.18709 9.09773 6.1875H6.0293C5.50898 6.1875 5.01961 5.89781 4.78336 5.4225C2.01502 6.90469 0.746579 10.4906 2.00377 13.3791C0.409078 14.3719 1.12627 16.8806 3.01064 16.875H9.71339C9.48558 16.6444 8.48911 15.6507 8.23992 15.3984Z"
                    fill="#0088FF"
                  />
                  <path
                    d="M4.58707 3.67313C4.80925 3.99375 5.068 4.22719 5.28738 4.3875C4.97688 4.92075 5.41366 5.64131 6.02707 5.625H9.09832C9.7106 5.64188 10.1488 4.92159 9.838 4.3875C10.3952 4.00697 10.9079 3.23466 11.0305 2.50875C11.186 1.81603 10.6027 1.10728 9.89425 1.12528H5.23113C4.52266 1.10784 3.9385 1.81575 4.09488 2.50903C4.18207 2.93653 4.34519 3.32719 4.58707 3.67313Z"
                    fill="#0088FF"
                  />
                </svg>
              </div>
            </div>
            <div className=" space-y-1">
              <h1 className="text-[#4682B4] font-bold text-[14px]">
                Sub Total Amount
              </h1>
              <p className="text-[#4682B4] font-medium text-[14px]">
                ৳ 722,038,736.04
              </p>
            </div>
          </div>
          <div className=" bg-[#FEE4FE]  grid grid-cols-2  rounded p-4">
            <div className=" border-r-[3px] border-[#FF3D71] w-[80px]">
              <div className=" bg-[#F6BFF6] w-[50px] h-[50px]  rounded-full flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M1.84556 5.37932C1.59328 5.2336 1.27083 5.32012 1.12528 5.57226C0.979559 5.82454 1.06608 6.147 1.31822 6.29254C1.57036 6.43827 1.89295 6.35175 2.0385 6.09961C2.18422 5.84732 2.0977 5.52487 1.84556 5.37932ZM15.2928 4.25404H14.7655V3.7267C14.7655 3.43525 14.5297 3.19936 14.2381 3.19936C13.9467 3.19936 13.7108 3.43525 13.7108 3.7267V4.25404H13.1835C12.892 4.25404 12.6561 4.48994 12.6561 4.78139C12.6561 5.07294 12.892 5.30873 13.1835 5.30873H13.7108V5.83607C13.7108 6.12748 13.9467 6.36342 14.2381 6.36342C14.5297 6.36342 14.7655 6.12748 14.7655 5.83607V5.30873H15.2928C15.5843 5.30873 15.8202 5.07294 15.8202 4.78139C15.8202 4.48994 15.5843 4.25404 15.2928 4.25404ZM1.05469 2.63686C1.05469 2.92841 1.29048 3.1642 1.58203 3.1642C1.87348 3.1642 2.10938 2.92841 2.10938 2.63686V2.10951H2.63672C2.92816 2.10951 3.16406 1.87372 3.16406 1.58217C3.16406 1.29072 2.92816 1.05482 2.63672 1.05482H2.10938V0.527481C2.10938 0.236036 1.87348 0.000137092 1.58203 0.000137092C1.29048 0.000137092 1.05469 0.236036 1.05469 0.527481V1.05482H0.527344C0.235898 1.05482 0 1.29072 0 1.58217C0 1.87372 0.235898 2.10951 0.527344 2.10951H1.05469V2.63686ZM4.3856 0.985883C4.88753 1.99002 5.16632 3.09856 5.23649 4.21885H10.5838C10.6539 3.0987 10.9326 1.99002 11.4346 0.985883L11.5458 0.763414C11.5953 0.664427 11.6124 0.552367 11.5947 0.44312C11.5769 0.333873 11.5252 0.232983 11.4469 0.154754C11.2868 -0.00590979 11.0417 -0.0456012 10.8383 0.0558949L9.0688 0.940567L8.28288 0.154754C8.07687 -0.0512262 7.74316 -0.0512262 7.53718 0.154754L6.75137 0.940567L4.98189 0.0557543C4.77798 -0.0456012 4.53445 -0.00647228 4.37326 0.154754C4.29495 0.232973 4.24326 0.333862 4.22551 0.443111C4.20776 0.552361 4.22485 0.664426 4.27437 0.763414L4.3856 0.985883ZM11.1388 5.30873H4.68127L2.6223 7.80071C1.61142 9.02485 1.05469 10.6094 1.05469 12.1994C1.05469 15.7232 3.74555 18 7.91002 18C12.0747 18 14.7655 15.7232 14.7655 12.1994C14.7655 10.6095 14.2087 9.06001 13.1973 7.83587L11.1388 5.30873ZM7.90439 10.7718C8.77683 10.7718 9.48642 11.4814 9.48642 12.3538C9.48642 13.0383 9.04697 13.6169 8.43736 13.8369V14.3087C8.43736 14.6001 8.20157 14.8361 7.91002 14.8361C7.61861 14.8361 7.38281 14.6001 7.38281 14.3087V13.8404C6.7673 13.6236 6.32236 13.0424 6.32236 12.3538C6.32236 12.0623 6.55826 11.8265 6.8497 11.8265C7.14125 11.8265 7.37705 12.0623 7.37705 12.3538C7.37705 12.6449 7.61351 12.8812 7.90439 12.8812C8.19538 12.8812 8.43173 12.6449 8.43173 12.3538C8.43173 12.0628 8.19538 11.8265 7.90439 11.8265C7.03206 11.8265 6.32236 11.1168 6.32236 10.2445C6.32236 9.55575 6.7673 8.97472 7.38281 8.75788V7.98057C7.38281 7.6892 7.61861 7.45323 7.91002 7.45323C8.20157 7.45323 8.43736 7.6892 8.43736 7.98057V8.76146C9.04697 8.98147 9.48642 9.56004 9.48642 10.2445C9.48642 10.536 9.25063 10.7718 8.95908 10.7718C8.66763 10.7718 8.43173 10.536 8.43173 10.2445C8.43173 9.95361 8.19538 9.71711 7.90439 9.71711C7.61351 9.71711 7.37705 9.95361 7.37705 10.2445C7.37705 10.5355 7.6134 10.7718 7.90439 10.7718Z"
                    fill="#DA35DA"
                  />
                </svg>
              </div>
            </div>
            <div className=" space-y-1">
              <h1 className="text-[#4682B4] font-bold text-[14px]">
                Sub Total Amount
              </h1>
              <p className="text-[#4682B4] font-medium text-[14px]">
                ৳ 722,038,736.04
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* select items  */}
      <div className="my-20 ">
        <div className=" flex  flex-wrap lg:flex-nowrap  items-start  gap-12 xl:gap-8 ">
          <div className=" w-full">
            <Selectitem
              active={category}
              setActive={setCategory}
              title={"Categories"}
              data={Categoryinfo}
            />
          </div>
          <div className=" w-full">
            <Selectitem
              active={category}
              setActive={setCategory}
              title={"Available in"}
              data={Categoryinfo}
            />
          </div>
          <div className=" w-full">
            <Selectitem
              active={category}
              setActive={setCategory}
              title={"Item Type"}
              data={Categoryinfo}
            />
          </div>
          <div className="w-full flex justify-start  items-center gap-2 h-full ">
            <div className="">
              <Datepick />
            </div>
          </div>
          <div className=" w-full">
            <div className=" flex  items-center gap-4 pt-7">
              <button className="bg-blue-base px-4 py-2 rounded text-white-base">
                Apply Filter
              </button>
              <button className=" hover:bg-blue-base hover:text-white-base bg-transparent border border-blue-base  px-4 py-2 rounded text-blue-base duration-300">
                Filter Clear
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flex-col lg:flex-row lg:items-center justify-between gap-3 py-10">
        {/* show  limit data  */}
        <div className=" flex items-center gap-3 text-white-base">
          <h1 className="text-[14px] font-normal">Show</h1>
          <div className="text-white-muted bg-primary-base border border-[#4d75ff] rounded-[4px]">
            <div
              onClick={() => setActiveLimit(!activeLimit)}
              className=" px-2  py-[6px] w-[70px] flex justify-between cursor-pointer items-center gap-3"
            >
              <div>
                <h1 className="text-[14px] font-normal text-white-base">
                  {showData}
                </h1>
              </div>
              <div>
                <FaChevronDown
                  className={` ${
                    activeLimit ? " rotate-180" : ""
                  }  duration-200 text-[14px] text-white-base`}
                />
              </div>
            </div>
            <div className="bg-primary-base  w-[70px] absolute border border-[#4d75ff] rounded-[4px] sidebarScrool  max-h-[250px] overflow-y-auto">
              <Collapse isOpened={activeLimit} className="">
                <div className=" text-white-muted space-y-[2px]   pt-3">
                  {showDataArray?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() => {
                          setShowData(item), setActiveLimit(false);
                        }}
                        className="flex px-2 py-2 cursor-pointer hover:bg-blue-base hover:text-white-base text-white-muted duration-300 items-center gap-3"
                      >
                        <h1 className="text-[12px]  ">{item}</h1>
                      </div>
                    );
                  })}
                </div>
              </Collapse>
            </div>
          </div>
          <h1 className="text-[14px] font-normal">entries</h1>
        </div>

        {/* search data  */}
        <div className="border text-white-base rounded-[4px] border-[#4d75ff] flex items-center gap-4 px-2 py-1">
          <input
            className=" w-full bg-transparent placeholder:text-white-base  outline-0 border-none"
            type="search"
            name=""
            id=""
            placeholder="Search..."
          />
          <button className="cursor-pointer">
            {" "}
            <IoSearchOutline className="text-[15px] text-white-base " />
          </button>
        </div>
      </div>

      {/* Direact table  */}
      <DirectSaleTable />

      {/* pagination defult  */}
      <div className="pt-10 flex flex-col lg:flex-row justify-between lg:items-center gap-6">
        <div>
          <p className="text-white-base text-[14px] ">
            Showing 01 to 05 of 2000 entries
          </p>
        </div>
        <div>
          <div className=" text-white-base flex items-center gap-5">
            <div className=" hidden md:flex items-center gap-2">
              <SiMinutemailer className="text-[20px]" />
              <p className="text-[14px]">Jump to</p>
            </div>
            <div className=" flex items-center   border border-[#4d75ff] px-3 rounded overflow-auto">
              <div className=" text-white-muted text-[16px]  border-r border-[#4d75ff] py-2 pr-2 flex items-center gap-3 font-normal">
                <span>Page</span>
                <FaChevronDown className="text-[14px]" />
              </div>
              <p className="hidden sm:block text-[14px] font-normal px-3 cursor-pointer  border-r border-[#4d75ff] py-2 pr-2">
                {" "}
                First
              </p>
              <div className="cursor-pointer border-r px-3 border-[#4d75ff] py-2 pr-2 ">
                <FaAngleDoubleLeft className="text-[16px]" />
              </div>

              <div className="text-[16px] font-medium cursor-pointer px-3  border-r border-[#4d75ff] py-2 pr-2">
                1
              </div>
              <div className="text-[16px] font-medium cursor-pointer px-3  border-r border-[#4d75ff] py-2  bg-blue-base">
                2
              </div>
              <div className="text-[16px] font-medium cursor-pointer px-3  border-r border-[#4d75ff] py-2 pr-2">
                3
              </div>
              <div className="cursor-pointer  border-r px-3 border-[#4d75ff] py-2 pr-2">
                <BsThreeDots />
              </div>
              <div className="text-[16px] px-3 font-medium cursor-pointer border-r border-[#4d75ff] py-2 pr-2">
                50
              </div>
              <div className="cursor-pointer px-3 sm:border-r border-[#4d75ff] py-2 pr-2">
                <FaAngleDoubleRight className="text-[16px]" />
              </div>
              <h2 className=" hidden sm:block text-[14px] px-3 font-normal cursor-pointer">
                Last
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div>
        <CommonModal active={active} setActive={setActive}>
          <h1 className="text-white-base">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quas
            modi ab quae corporis quam asperiores eius, temporibus voluptate
            cupiditate cum aliquam dicta, possimus quidem! Quisquam fuga
            obcaecati expedita nihil quia quaerat temporibus animi excepturi
            debitis deserunt optio corporis tenetur, asperiores veritatis
            reprehenderit dolores ex eveniet possimus doloremque quam, quasi ea
            doloribus fugiat? Reiciendis explicabo rem, quo obcaecati, tempora
            suscipit animi aliquid tenetur repellendus deserunt quae nulla
            repellat quas? At voluptas commodi architecto neque voluptatibus,
            nisi totam inventore dolorum! Quas, consectetur natus. Odio sit
            exercitationem neque! Blanditiis sapiente quasi aliquid debitis
            asperiores neque, exercitationem ea magnam, necessitatibus itaque
            amet non!
          </h1>
        </CommonModal>
      </div>
    </div>
  );
};

export default DirectSele;
