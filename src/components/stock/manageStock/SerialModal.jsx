import { useState } from "react";
import CommonModal from "../../../ui/commonModal/commonModal";

const SerialModal = ({ serials }) => {
  const [active, setActive] = useState(false);
  return (
    <div className=" ">
      <CommonModal
        title={"Add new branch"}
        active={active}
        setActive={setActive}
      >
        <h1>Hello</h1>
      </CommonModal>
    </div>
  );
};

export default SerialModal;
