import React, { useContext, useState } from "react";
import { Context } from "../store/store";

const FilterMenu = () => {
  const [select, setSelect] = useState();
  const { handleCategory } = useContext(Context);
  const handleSelect = (e) => {
    const { value } = e.target;
    setSelect(value);
    handleCategory(value);
  };

  return (
    <div>
      <div className="w-full flex flex-col sm:flex-row    items-center justify-center gap-4 py-6 sm:py-2  rounded-md">
        <div>
          <h2 className="text-xl md:text-2xl font-medium">Choose Whiteboard</h2>
        </div>
        <div>
          <select
            onClick={handleSelect}
            className=" outline-none px-4 py-1 rounded-md ring-1 ring-gray-400"
          >
            <option value="shape">Shape</option>
            <option value="annotation">Annotation</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterMenu;
