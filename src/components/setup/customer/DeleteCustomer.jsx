import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useRemoveCustomerMutation } from '../../../redux/features/api/customer/customerApi';

const DeleteCustomer = ({ openModal, setOpenModal, refetch }) => {
  const [removeCustomer, { data }] =
  useRemoveCustomerMutation();
  const deleteUserHandler = () => {
    removeCustomer(openModal?.id);
  };

  useEffect(() => {
    if (data?.status == 'success') {
      toast.success(data?.message);
      refetch();
      setOpenModal()
    }
  }, [data, setOpenModal, refetch]);
 
return (
    <div className="w-72 mx-auto flex items-center justify-center">
      {/* action modal  */}
      <div
        onClick={() => setOpenModal(false)}
        className={`fixed flex justify-center items-center z-[100] ${openModal ? 'visible opacity-1' : 'invisible opacity-0'
          } inset-0 backdrop-blur-sm   bg-[#0000004e] duration-100`}
      >
        <div
          onClick={e_ => e_.stopPropagation()}
          className={`absolute  bg-primary-muted w-80 p-6 text-center bg-white drop-shadow-2xl rounded-lg ${openModal
              ? 'translate-y-0 opacity-1 duration-300'
              : 'translate-y-20 opacity-0 duration-150'
            }`}
        >
          <div className="space-y-3 flex flex-col justify-center items-center">
            <svg
              className={`${openModal
                  ? 'scale-100 rotate-0 duration-200'
                  : 'scale-0 rotate-90'
                } delay-100`}
              width={75}
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
              fill="#e03a45"
            >
              <g strokeWidth="0"></g>
              <g strokeLinecap="round" strokeLinejoin="round"></g>
              <g>
                <path
                  fill="#4d75ff"
                  d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"
                ></path>
              </g>
            </svg>
            <h6 className="font-medium text-center text-white-base">
              <p>
                Are you sure you want to delete{' '}
                <span className="font-bold"> {openModal?.name}</span>?
              </p>
            </h6>
            <button
              onClick={() => deleteUserHandler()}
              className="text-white  bg-blue-base px-6 py-2 rounded-full"
            >
              Delete
            </button>
            <button
              onClick={() => setOpenModal(false)}
              className=" text-white-base hover:bg-red-base  px-6 py-2 border border-[#c51636] rounded-full"
            >
              Not Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteCustomer;
