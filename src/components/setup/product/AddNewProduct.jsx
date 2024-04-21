import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useGetCategoryQuery } from "../../../redux/features/api/category/CategoryApi";
import { useGetUnitQuery } from "../../../redux/features/api/unit/UnitApi";
import Selectitem from "../../../ui/selectitem/Selectitem";
import { useGetBrandQuery } from "../../../redux/features/api/brand/BrandApi";
import { FaCheck, FaPlus, FaTrash } from "react-icons/fa";
import { useGetVariantQuery } from "../../../redux/features/api/variant/VariantApi";
const AddNewProduct = ({ setActive, refetch }) => {
  const { register, handleSubmit, reset } = useForm();

  const [category, setCategory] = useState({ name: "Select category", id: 0 });
  const [brand, setBrand] = useState({ name: "Select Brand", id: 0 });
  const [unit, setUnit] = useState({ name: "Select Unit", id: 0 });
  const [photo, setPhoto] = useState("");
  const [serial_status, setSerial_status] = useState(false);
  const [color_status, setColor_status] = useState(false);
  const [size_status, setSize_status] = useState(false);
  const { data: categoryData } = useGetCategoryQuery();
  const { data: brandData } = useGetBrandQuery();
  const { data: UnitData } = useGetUnitQuery();

  //  code for variant

  const { data: variantsData } = useGetVariantQuery();
  const [rows, setRows] = useState([]);

  const addRow = () => {
    setRows([...rows, { selectedVariant: "" }]);
  };

  const removeRow = (index) => {
    const newRows = [...rows];
    newRows.splice(index, 1);
    setRows(newRows);
  };

  // const handleVariantChange = (index, event) => {
  //   const newRows = [...rows];

  //   const myValue = variantsData.find(
  //     (variant) => variant?.id == event.target.value
  //   );

  //   newRows[index].selectedVariant = myValue;
  //   setRows(newRows);
  // };

  const handleVariantChange = (index, event) => {
    const newRows = [...rows];
    const selectedVariantId = event.target.value;
    const selectedVariant = variantsData.find(
      (variant) => variant?.id == selectedVariantId
    );

    // Update the selected variant for the row
    newRows[index].selectedVariant = selectedVariant;

    // If the selected variant has attributes, populate the attributes array for the row
    if (selectedVariant && selectedVariant.attributes) {
      newRows[index].attributes = selectedVariant.attributes;
    } else {
      newRows[index].attributes = []; // Clear attributes if no variant is selected or no attributes are available
    }

    // Reset selected attribute value
    newRows[index].selectedAttribute = "";

    setRows(newRows);
  };

  //
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("name", data?.name);
    formData.append("category_id", category?.id);
    formData.append("brand_id", brand?.id);
    formData.append("unit_id", unit?.id);
    formData.append("selling_price", data?.selling_price);
    formData.append("purchase_price", data?.purchase_price);
    formData.append("product_code", data?.product_code);
    formData.append("description", data?.description);
    formData.append("serial_status", serial_status ? "1" : "0");
    formData.append("color_status", color_status ? "1" : "0");
    formData.append("size_status", size_status ? "1" : "0");
    formData.append("photo", photo);
    formData.append("added_by", "1");

    fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/product`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          toast.success(data?.message);
          setActive(false);
          refetch();
          reset();
        } else {
          toast.error("Failed to Add Product");
          setActive(false);
        }
      })
      .catch((errors) => {
        console.log(errors);
        toast.error("Failed to Product");
        setActive(false);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className=" space-y-2">
        {/* input name  */}
        <div className=" w-full">
          <label
            htmlFor=""
            className="text-[16px] font-medium capitalize text-white-base"
          >
            Name
            <span className="text-blue-base ">*</span>
          </label>
          <input
            {...register("name")}
            required
            type={"text"}
            className=" w-full text-[14px] text-white-base placeholder:text-white-muted placeholder:text-[12px] border border-blue-base block bg-transparent mt-2 outline-0 px-2 py-[10px] rounded "
            id=""
            placeholder={"Enter unit name"}
          />
        </div>
        {/* input Photo  */}
        <div className=" w-full">
          <label
            htmlFor=""
            className="text-[16px] font-medium capitalize text-white-base"
          >
            Photo
            <span className="text-blue-base ">*</span>
          </label>
          <input
            required
            type={"file"}
            onChange={(e) => setPhoto(e.target.files[0])}
            className=" w-full text-[14px] text-white-base placeholder:text-white-muted placeholder:text-[12px] border border-blue-base block bg-transparent mt-2 outline-0 px-2 py-[10px] rounded "
            id=""
          />
        </div>
        {/* input purchase_price  */}
        <div className=" w-full">
          <label
            htmlFor=""
            className="text-[16px] font-medium capitalize text-white-base"
          >
            purchase price
            <span className="text-blue-base ">*</span>
          </label>
          <input
            {...register("purchase_price")}
            required
            type={"number"}
            className=" w-full text-[14px] text-white-base placeholder:text-white-muted placeholder:text-[12px] border border-blue-base block bg-transparent mt-2 outline-0 px-2 py-[10px] rounded "
            id=""
            placeholder={"Enter purchase price"}
          />
        </div>

        {/* input selling_price  */}
        <div className=" w-full">
          <label
            htmlFor=""
            className="text-[16px] font-medium capitalize text-white-base"
          >
            selling price
            <span className="text-blue-base ">*</span>
          </label>
          <input
            {...register("selling_price")}
            required
            type={"number"}
            className=" w-full text-[14px] text-white-base placeholder:text-white-muted placeholder:text-[12px] border border-blue-base block bg-transparent mt-2 outline-0 px-2 py-[10px] rounded "
            id=""
            placeholder={"Enter selling price"}
          />
        </div>

        {/* input product_code  */}
        <div className=" w-full">
          <label
            htmlFor=""
            className="text-[16px] font-medium capitalize text-white-base"
          >
            product code
            <span className="text-blue-base ">*</span>
          </label>
          <input
            {...register("product_code")}
            required
            type={"text"}
            className=" w-full text-[14px] text-white-base placeholder:text-white-muted placeholder:text-[12px] border border-blue-base block bg-transparent mt-2 outline-0 px-2 py-[10px] rounded "
            id=""
            placeholder={"Enter product code"}
          />
        </div>
        <div className=" space-y-14">
          {/* input select category  */}
          <div className=" w-full">
            <Selectitem
              data={categoryData}
              active={category}
              setActive={setCategory}
              title={"Select category"}
              star={true}
            />
          </div>
          {/* input select Brand  */}
          <div className=" w-full">
            <Selectitem
              data={brandData}
              active={brand}
              setActive={setBrand}
              title={"Select Brand"}
              star={true}
            />
          </div>
          {/* input select Unit  */}
          <div className=" w-full">
            <Selectitem
              data={UnitData}
              active={unit}
              setActive={setUnit}
              title={"Select Unit"}
              star={true}
            />
          </div>
        </div>
        <div className="pt-12">
          {/* input description  */}
          <div className=" w-full">
            <label
              htmlFor=""
              className="text-[16px] font-medium capitalize text-white-base"
            >
              description
              <span className="text-blue-base ">*</span>
            </label>
            <textarea
              rows={5}
              {...register("description")}
              type={"text"}
              className=" w-full text-[14px] text-white-base placeholder:text-white-muted placeholder:text-[12px] border border-blue-base block bg-transparent mt-2 outline-0 px-2 py-[10px] rounded "
              id=""
              placeholder={"Enter product code"}
            ></textarea>
          </div>

          <div className=" pt-3">
            <div className=" mt-3 space-y-1">
              <p className="text-[16px] font-normal text-white-base">
                Serial Status:
              </p>
              <div
                onClick={() => setSerial_status(!serial_status)}
                className="bg-blue-base relative flex justify-center items-center  h-[25px] w-[45px]  cursor-pointer px-5 py-1 rounded-full"
              >
                <div
                  className={` ${
                    serial_status
                      ? " right-1 bg-white-base  "
                      : " left-1 bg-primary-base"
                  } w-[20px] absolute  h-[20px]  flex justify-center items-center  rounded-full`}
                >
                  {serial_status && (
                    <FaCheck className="text-[16px] text-blue-base " />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className=" pt-3">
            {/* variant   start*/}
            <div>
              <div className="flex gap-4 text-stone-50">
                <button
                  className="flex items-center  gap-2 border rounded-2xl p-1 px-3"
                  type="button"
                  onClick={addRow}
                >
                  <span> Add Variant</span>
                  <FaPlus color="white" size={20} />
                </button>
              </div>
              <div className="">
                {rows.map((row, index) => {
                  return (
                    <div
                      className="flex items-center gap-2 justify-between w-full py-2"
                      key={index}
                    >
                      <div className="flex ">
                        <select
                          className=" block p-2 focus:outline-none bg-primary-muted text-stone-50"
                          name={`variant_${index}`}
                          defaultValue={row.selectedVariant}
                          onChange={(e) => handleVariantChange(index, e)}
                        >
                          <option className="" value="" disabled>
                            Select
                          </option>
                          {variantsData?.map((variant) => (
                            <option key={variant.id} value={variant?.id}>
                              {variant.name}
                            </option>
                          ))}
                        </select>

                        {row.attributes && (
                          <div className="flex items-center gap-2">
                            <select
                              className=" block p-2 focus:outline-none bg-primary-muted text-stone-50"
                              value={row.selectedAttribute}
                              onChange={(e) => {
                                const newRows = [...rows];
                                newRows[index].selectedAttribute =
                                  e.target.value;
                                setRows(newRows);
                              }}
                            >
                              <option className="" value="" disabled>
                                Select Attribute
                              </option>
                              {row.attributes.map((attribute) => (
                                <option key={attribute.id} value={attribute.id}>
                                  {attribute.name}
                                </option>
                              ))}
                            </select>
                          </div>
                        )}
                      </div>
                      <button type="button" onClick={() => removeRow(index)}>
                        <FaTrash color="red" size={20} />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* variant   end*/}
          </div>
        </div>
        <div className=" py-2 ">
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

export default AddNewProduct;
