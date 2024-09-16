import React, { useState } from "react";
const Menu = ({
  handleCategoryWiseDrawing,
  handleSearch,
  latestDrawing,
  loadSampleDrawing,
}) => {
  const [search, setSearch] = useState("");
  const handleId = (e) => {
    const { value } = e.target;
    setSearch(value);
    handleSearch(value);
  };
  return (
    <div className="h-20 px-4 md:px-8 lg:-10 xl:px-12 2xl:px-16 ring-1 sm:ring-gray-200  ring-transparent ">
      <div className="w-full flex items-center justify-center md:justify-between h-full gap-4 md:gap-8  ">
        <div className="  flex items-center justify-center  gap-12">
          <div className=" items-center gap-3 hidden sm:flex">
            <img src="/logo.png" alt="logo" width={24} height={24} />
            <div className="text-2xl tracking-wide uppercase ">Ramjan</div>
          </div>
          <div className="flex items-center text-lg md:text-2xl gap-2  sm:gap-4">
            <button onClick={latestDrawing}>Latest</button>
            <button
              onClick={() => {
                handleCategoryWiseDrawing("shape");
              }}
            >
              Shap
            </button>
            <button
              onClick={() => {
                handleCategoryWiseDrawing("annotation");
              }}
            >
              Annotation
            </button>
            <button onClick={loadSampleDrawing}>Sample</button>
          </div>
        </div>
        <div className=" sm:flex items-center justify-between gap-4 hidden ">
          <div className="flex justify-between gap-1  bg-gray-100 p-2 rounded-md flex-1">
            <input
              onChange={handleId}
              name="id"
              value={search}
              type="text"
              placeholder="search by id"
              className=" bg-transparent outline-none hidden md:block w-24 lg:w-40 "
            />
            <button className=" cursor-pointer">
              <img src={"/search.png"} width={16} height={16} alt="search " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
