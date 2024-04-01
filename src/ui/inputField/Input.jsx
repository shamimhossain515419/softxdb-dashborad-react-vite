const Input = ({ type, title, placeholder, name, star }) => {
  return (
    <div className=" w-full">
      <label
        htmlFor=""
        className="text-[16px] font-medium capitalize text-white-base"
      >
        {title}
        <span className="text-blue-base "> {star ? '*' : ''}</span>
      </label>
      <input
        type={type}
        className=" w-full text-[14px] text-white-base placeholder:text-white-muted placeholder:text-[12px] border border-blue-base block bg-transparent mt-2 outline-0 px-2 py-[10px] rounded "
        name={name}
        id=""
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
