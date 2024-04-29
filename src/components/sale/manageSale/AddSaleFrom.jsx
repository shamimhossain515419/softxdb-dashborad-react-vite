import SelectAndSearch from "../../../ui/selectAndSearch/SelectAndSearch";
import { useGetProductQuery } from "../../../redux/features/api/product/productApi";
import { useGetVariantByProductQuery } from "../../../redux/features/api/color/ColorsApi";

import { MdClose } from "react-icons/md";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../redux/features/stock/addProductSlice";

const AddSaleFrom = () => {
  const [searchValue, setSearchValue] = useState({
    keyword: "",
    limit: "",
    page: "",
  });
  // fetch data starting
  const { data: productData, refetch } = useGetProductQuery(searchValue);

  // fetch data end
  const dispatch = useDispatch();
  const setKeyword = (word) => {
    setSearchValue({
      keyword: word,
      limit: "",
      page: "",
    });
    refetch();
  };

  // all states start
  const [product, setProduct] = useState({
    name: "Select product",
    id: 0,
  });
  const { products } = useSelector((state) => state?.products);

  const [serials, setSerial] = useState([]);

  const [price, setPrice] = useState(product?.selling_price);
  const [quantity, setQuantity] = useState(0);
  // all states end

  let allSerials = [];
  products?.forEach((product) => {
    if (product.serials && product.serials.length > 0) {
      allSerials.push(...product.serials);
    }
  });

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      //check duplicate
      const isExit = serials?.find((item) => item === event.target.value);

      const checkAll = allSerials?.find((item) => item === event.target.value);
      if (checkAll) {
        toast.error("Serial number already exist");
        return;
      }

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

  // variant start
  const { data: variants } = useGetVariantByProductQuery(product?.id);

  const [selectedValues, setSelectedValues] = useState([]);

  const handleSelectChange = (variantId, attributeId, attributeName) => {
    const updatedSelectedValues = [...selectedValues];
    const existingIndex = updatedSelectedValues.findIndex(
      (item) => item.variant.id === variantId
    );
    if (existingIndex !== -1) {
      updatedSelectedValues[existingIndex].attribute = {
        id: attributeId,
        name: attributeName,
      };
    } else {
      updatedSelectedValues.push({
        variant: {
          id: variantId,
          name: variants.find((variant) => variant.variant_id === variantId)
            .variant_name,
        },
        attribute: { id: attributeId, name: attributeName },
      });
    }
    setSelectedValues(updatedSelectedValues);
  };

  // variant end

  //  handle add  product

  const handleAddProduct = () => {
    if (variants.length !== selectedValues?.length) {
      toast.error("Please select all variants");
      return;
    }

    const data = {
      variants: selectedValues,
      product_id: product?.id,
      product_name: product?.name,
      price: parseFloat(price),
      quantity: quantity,
      serials,
      serial_status: product?.serial_status,
    };
    if (!quantity) return toast.error("Please provide a quantity");
    if (!serials) return toast.error("Please provide a Serials number");

    dispatch(addProduct(data));

    setProduct({
      name: "Select product",
      id: 0,
    });
    setQuantity("");
    setSerial([]);
    setPrice(0);
    setSelectedValues([]);
  };

  useEffect(() => {
    setPrice(product?.selling_price);
  }, [product]);

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

        {/*  size */}

        <>
          {product?.id && (
            <div className="text-white-base mt-12 border p-2">
              {variants?.map((variant, i) => (
                <div key={i} className="border p-2 my-3 rounded">
                  <div className="">
                    <h1>{variant?.variant_name}</h1>
                    <select
                      className="bg-primary-base w-full p-1"
                      onChange={(e) =>
                        handleSelectChange(
                          variant.variant_id,
                          e.target.value,
                          e.target.options[e.target.selectedIndex].text
                        )
                      }
                    >
                      <option value="0" disabled selected>
                        Select {variant.variant_name}
                      </option>
                      {variant?.attributes?.map((attr) => (
                        <option key={attr?.id} value={attr.id}>
                          {attr.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              ))}
            </div>
          )}
          {/* Output the selected values */}
        </>

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
                {serials?.map((serial, index) => {
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
                name={"serial"}
                id=""
                onKeyDown={handleKeyPress}
                placeholder="serial"
              />
            </div>
          </div>
        )}
        <div className={`${product?.selling_price ? "mt-8" : "mt-12"}`}>
          <div className="space-y-5">
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
                name={"quantity"}
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
                type="number"
                className=" w-full text-[14px] text-white-base placeholder:text-white-muted placeholder:text-[12px] border border-blue-base block bg-transparent mt-2 outline-0 px-2 py-[10px] rounded "
                name={"price"}
                id=""
                placeholder="00.."
                defaultValue={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className=" flex i items-center gap-4 pt-7">
          <button
            onClick={handleAddProduct}
            className="bg-blue-base px-4 py-2 rounded text-white-base"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default AddSaleFrom;
