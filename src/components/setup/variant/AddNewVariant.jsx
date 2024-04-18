import { useState } from "react";
import toast from "react-hot-toast";
import { FaPlus, FaTrash } from "react-icons/fa6";

const AddNewVariant = ({ setActive, refetch }) => {
  const [values, setValues] = useState([{ name: "" }]);
  const [name, setName] = useState();

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: name,
      items: values,
    };
    console.log(data);

    fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/variant`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setActive(false);
        if (data?.status == "success") {
          toast.success(data?.message);
          refetch();
        } else {
          toast.error(data?.message);
        }
      })
      .catch((err) => {
        console.log(err);
        setActive(false);
        toast.error("Fail to add");
      });
  };

  const addRow = () => {
    setValues([...values, { name: "" }]);
  };

  const removeRow = (index) => {
    const newValues = [...values];
    newValues.splice(index, 1);
    setValues(newValues);
  };

  const handleInputChange = (index, event) => {
    const newValues = [...values];
    newValues[index].name = event.target.value;
    setValues(newValues);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className=" space-y-2">
        <div className=" w-full pb-5">
          <label
            htmlFor=""
            className="text-[16px] font-medium capitalize text-white-base"
          >
            Name
            <span className="text-blue-base">*</span>
          </label>
          <input
            required
            type={"text"}
            className=" w-full text-[14px] text-white-base placeholder:text-white-muted placeholder:text-[12px] border border-blue-base block bg-transparent mt-2 outline-0 px-2 py-[10px] rounded "
            id=""
            placeholder={"Enter name"}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="shadow-xl border-stone-400 border rounded-md  p-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xl  font-bold  capitalize text-white-base">
              Values
            </h2>
            <button type="button" onClick={addRow}>
              <FaPlus color="white" size={20} />
            </button>
          </div>

          {/* Render dynamic rows */}
          {values.map((value, index) => (
            <div
              className="flex items-center gap-2 justify-between w-full py-2"
              key={index}
            >
              <div className="flex-1">
                <input
                  required
                  type={"text"}
                  className="w-full text-[14px] text-white-base placeholder:text-white-muted placeholder:text-[12px] border border-blue-base block bg-transparent mt-2 outline-0 px-2 py-[10px] rounded "
                  id=""
                  placeholder={"Enter name"}
                  value={value.name}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </div>
              <button type="button" onClick={() => removeRow(index)}>
                <FaTrash color="red" size={20} />
              </button>
            </div>
          ))}
        </div>
        <div className=" py-2">
          <button
            className="bg-blue-base px-4 rounded-lg py-1  text-white-base text-[18px]"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewVariant;
