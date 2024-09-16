import React, { useContext, useState } from "react";
import FilterMenu from "./FilterMenu";
import Shape from "./Shape";
import Annotation from "./Annotation";
import { Context } from "../store/store";

const Whiteboard = () => {
  const { selectCategory, handleCategory } = useContext(Context);
  return (
    <div>
      <FilterMenu handleCategory={handleCategory} />
      {selectCategory.category === "shape" ? <Shape /> : <Annotation />}
    </div>
  );
};

export default Whiteboard;
