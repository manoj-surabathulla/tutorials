import { useState } from "react";
import { ChevronDown } from "../../assets/icons";

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const selectDropdown = () => {
    setOpen(!open);
  };
  return (
    <div className="w-[400px] my-[100px] mx-auto">
      <div className="btn rounded" onClick={selectDropdown}>
        <span>choose one</span>
        <ChevronDown />
      </div>
      <div className="absolute">
        <div>React</div>
        <div>Node</div>
      </div>
    </div>
  );
};

export default Dropdown;
