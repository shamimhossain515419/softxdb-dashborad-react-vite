import SelectAndSearch from "../../../ui/selectAndSearch/SelectAndSearch";
import { useGetProductQuery } from "../../../redux/features/api/product/productApi";
import SelectItem from "../../../ui/selectitem/Selectitem";
import { useGetColorQuery } from "../../../redux/features/api/color/ColorsApi";
import { useGetSizeQuery } from "../../../redux/features/api/size/sizesApi";
import { MdClose } from "react-icons/md";
import toast from "react-hot-toast";
import { useState } from "react";

const AddStockFrom = () => {
  const [searchValue, setSearchValue] = useState("");

  // fetch data starting
  const { data: productData, refetch } = useGetProductQuery(searchValue);
  const { data: colors } = useGetColorQuery();
  const { data: sizes } = useGetSizeQuery();
  // fetch data end

  const setKeyword = (word) => {
    setSearchValue(word);
    refetch();
  };

  // all states start
  const [product, setProduct] = useState({
    name: "Select product",
    id: 0,
  });
  const [color, setColor] = useState({});
  const [size, setSize] = useState({});
  const [serials, setSerial] = useState([]);
  const [price, setPrice] = useState(product?.selling_price);
  const [quantity, setQuantity] = useState(0);
  // all states end

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      //check duplicate
      const isExit = serials?.find((item) => item === event.target.value);

      if (event.target.value == "") {
        toast.error("Serial number is empty");
        return;
      }
      if (isExit) {
        toast.error("This serial is already exited");
        return;
      }
      const newArray = [...serials, event.target.value];
      setSerial(newArray);
      event.target.value = "";
      setQuantity(serials?.length + 1);
    }
  };

  //
  const removeSerial = (item) => {
    const newArray = serials.filter((serial) => serial !== item);
    setSerial(newArray);
    setQuantity(serials?.length - 1);
  };

  return (
    <>
      {/* select  section  */}
      <div className="lg:w-[20%] pt-4 lg:pt-0">
        <div className="  space-y-14">
          <div className=" w-full">
            <SelectAndSearch
              active={product}
              setActive={setProduct}
              title={"Product"}
              data={productData?.products}
              setSearchValue={setKeyword}
            />
          </div>
        </div>
        {/*  colors */}
        {product?.color_status && (
          <div className=" pt-12">
            <SelectItem
              data={colors}
              title={"Select Color"}
              active={color}
              setActive={setColor}
            />
          </div>
        )}

        {/*  size */}
        {product?.size_status && (
          <div className=" pt-12">
            <SelectItem
              data={sizes}
              title={"Select Size"}
              active={size}
              setActive={setSize}
            />
          </div>
        )}

        {/*  serial  */}
        {product?.serial_status && (
          <div className="mt-12">
            <div className=" w-full">
              <label
                htmlFor=""
                className="text-[16px] font-medium capitalize text-white-base"
              >
                Serial
                {/* <span className="text-blue-base "> {star ? "*" : ""}</span> */}
              </label>
              <div className="flex gap-2 flex-wrap items-center justify-center text-white-base">
                {serials.map((serial, index) => {
                  return (
                    <p
                      className="px-2 flex items-center gap-1 bg-stone-600"
                      key={index}
                    >
                      {serial}{" "}
                      <MdClose
                        onClick={() => removeSerial(serial)}
                        className="cursor-pointer"
                      />
                    </p>
                  );
                })}
              </div>
              <input
                type="text"
                className=" w-full text-[14px] text-white-base placeholder:text-white-muted placeholder:text-[12px] border border-blue-base block bg-transparent mt-2 outline-0 px-2 py-[10px] rounded "
                name={name}
                id=""
                onKeyDown={handleKeyPress}
                placeholder="serial"
              />
            </div>
          </div>
        )}
        <div className="mt-12">
          <div className=" space-y-5">
            <div className=" w-full">
              <label
                htmlFor=""
                className="text-[16px] font-medium capitalize text-white-base"
              >
                Quantity
                {/* <span className="text-blue-base "> {star ? "*" : ""}</span> */}
              </label>
              <input
                type="text"
                className=" w-full text-[14px] text-white-base placeholder:text-white-muted placeholder:text-[12px] border border-blue-base block bg-transparent mt-2 outline-0 px-2 py-[10px] rounded "
                name={name}
                id=""
                placeholder="00.."
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className=" w-full">
              <label
                htmlFor=""
                className="text-[16px] font-medium capitalize text-white-base"
              >
                Price
                {/* <span className="text-blue-base "> {star ? "*" : ""}</span> */}
              </label>
              <input
                type="text"
                className=" w-full text-[14px] text-white-base placeholder:text-white-muted placeholder:text-[12px] border border-blue-base block bg-transparent mt-2 outline-0 px-2 py-[10px] rounded "
                name={name}
                id=""
                placeholder="00.."
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className=" flex i items-center gap-4 pt-7">
          <button className="bg-blue-base px-4 py-2 rounded text-white-base">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default AddStockFrom;
