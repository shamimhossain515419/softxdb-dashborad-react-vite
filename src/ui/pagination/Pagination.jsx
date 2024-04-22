import { BsThreeDots } from "react-icons/bs";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaChevronDown,
} from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const Pagination = ({ totalResult, setPage, per_page }) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(totalResult);
  // Get a specific query parameter
  const currentPage = searchParams.get("page");
  const data = Array.from({ length: totalResult }, (_, i) => `${i + 1}`);

  const totalPages = Math.ceil(data.length / parseInt(per_page));
  let page;
  if (totalPages > 3) {
    page = 3;
  } else {
    page = totalPages;
  }
  const nextPage = () => {
    navigate(`?page=${parseInt(currentPage) + 1}`);
  };

  const prevPage = () => {
    navigate(`?page=${parseInt(currentPage) - 1}`);
  };
  return (
    <div>
      {/* pagination defult  */}
      <div className="pt-10 flex flex-col lg:flex-row justify-between lg:items-center gap-6 py-9">
        <div>
          <p className="text-white-base text-[14px] ">
            Showing {per_page} of {totalResult} entries
          </p>
        </div>
        <div>
          <div className=" text-white-base flex items-center gap-5">
            <div className=" hidden md:flex items-center gap-2">
              <SiMinutemailer className="text-[20px]" />
              <p className="text-[14px]">Jump to</p>
            </div>
            <div className=" flex items-center   border border-[#4d75ff] px-3 rounded overflow-auto">
              <Link
                to={"?page=1"}
                className="hidden sm:block text-[14px] font-normal px-3 cursor-pointer  border-r border-[#4d75ff] py-2 pr-2"
              >
                {" "}
                First
              </Link>
              <button
                disabled={currentPage == "1"}
                onClick={prevPage}
                className=" border-r px-3 border-[#4d75ff] py-2 pr-2 "
              >
                <FaAngleDoubleLeft className="text-[16px]" />
              </button>
              {[...Array(page)].map((_, i) => (
                <Link className="" key={i} to={`?page=${i + 1}`}>
                  <div
                    className={`${
                      currentPage == i + 1 && "text-white-base bg-blue-base"
                    } text-[16px] font-medium cursor-pointer px-3  border-r border-[#4d75ff] py-2 pr-2`}
                  >
                    {i + 1}
                  </div>
                </Link>
              ))}
              {totalPages > 3 && (
                <>
                  <div className="cursor-pointer  border-r px-3 border-[#4d75ff] py-2 pr-2">
                    <BsThreeDots />
                  </div>
                  <Link
                    className={`${
                      currentPage == totalPages &&
                      "text-white-base bg-blue-base"
                    } text-[16px] px-3 font-medium cursor-pointer border-r border-[#4d75ff] py-2 pr-2 `}
                    to={`?page=${totalPages}`}
                  >
                    {totalPages - 1}
                  </Link>
                </>
              )}

              <button
                disabled={parseInt(currentPage) === totalPages}
                onClick={nextPage}
                className={`px-3 sm:border-r border-[#4d75ff] py-2 pr-2`}
              >
                <FaAngleDoubleRight className="text-[16px]" />
              </button>
              <Link
                to={`?page=${totalPages}`}
                className=" hidden sm:block text-[14px] px-3 font-normal cursor-pointer"
              >
                Last
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
