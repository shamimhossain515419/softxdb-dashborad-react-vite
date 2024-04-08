import { IoClose } from 'react-icons/io5';

const CommonModal = ({ children, active, setActive, title }) => {
  return (
    <>
      {active && (
        <div
          className={`fixed left-0 right-0 top-0 z-50 bg-[#000000a9] w-full h-screen p-3 flex justify-center items-center`}
        >
          <div className=" max-w-[1000px] md:min-w-[600px] xl:min-w-[800px]  min-h-[400px] bg-primary-base p-6 max-h-[80vh]  overflow-y-scroll sidebarScrool  rounded-lg ">
            <div className=" flex justify-between items-center gap-3 pb-6">
              <h1 className="text-[25px] font-medium text-white-base">
                {' '}
                {title}{' '}
              </h1>
              <div onClick={() => setActive(false)} className=" cursor-pointer">
                <IoClose className="text-[22px] text-red-base " />
              </div>
            </div>
            <div>{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default CommonModal;
