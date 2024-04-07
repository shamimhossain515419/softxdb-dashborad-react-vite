import { useState } from 'react';
import { Collapse } from 'react-collapse';
import { FaCaretDown } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';

const SelectAndSearch = ({
  setSearchValue,
  data,
  title,
  active,
  setActive,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className=" w-full md:w-auto relative">
        <h1 className="text-[14px] pb-2 pl-1 font-semibold text-white-base py-1">
          {' '}
          {title}{' '}
        </h1>
        <div className="relative ">
          <div
            className={`${
              open ? 'z-[500]' : 'z-0'
            } w-full absolute  top-0 text-white-muted overflow-hidden bg-primary-base   border border-[#4d75ff] rounded-[4px]`}
          >
            {open ? (
              <div className=" w-full py-1  border-b border-[#4d75ff]   overflow-hidden flex justify-between items-center gap-4 text-white-base">
                {' '}
                <input
                  onChange={e => setSearchValue(e.target.value)}
                  type="text"
                  placeholder="Please Search"
                  className=" text-[14px] px-2 w-[90%] outline-0  bg-transparent "
                />
                <CiSearch
                  onClick={() => setOpen(false)}
                  className="text-white-base z-50 w-[10%] block text-[24px]"
                />
              </div>
            ) : (
              <div
                onClick={() => setOpen(true)}
                className=" px-2 pt-2 flex justify-between  cursor-pointer items-center gap-3"
              >
                <div className="w-full">
                  {!open && (
                    <h1 className="text-[14px] font-normal text-white-base">
                      {active?.name}
                    </h1>
                  )}
                </div>
                <div>
                  <FaCaretDown
                    className={` ${
                      active ? ' rotate-180' : ''
                    }  duration-200 text-[16px]`}
                  />
                </div>
              </div>
            )}

            <div className="pt-3 px-2 bg-primary-base z-50">
              <Collapse isOpened={open} className="">
                <div className=" text-white-muted space-y-[2px] bg-primary-base  ">
                  {data?.map((item, index) => {
                    return (
                      <div
                        onClick={() => {
                          setActive(item), setOpen(false);
                        }}
                        key={index}
                        className="flex px-2 py-2 cursor-pointer hover:bg-blue-base hover:text-white-base text-white-muted duration-300 items-center gap-3"
                      >
                        <h1 className="text-[12px]">{item?.name}</h1>
                      </div>
                    );
                  })}
                </div>
              </Collapse>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectAndSearch;
