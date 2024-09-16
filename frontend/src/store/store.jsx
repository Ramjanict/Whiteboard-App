import React, { createContext, useState } from "react";

export const Context = createContext();

const ContextContainer = ({ children }) => {
  const [selectCategory, setSelectCategory] = useState({ category: "shape" });

  const handleCategory = (value) => {
    setSelectCategory((prev) => {
      return { ...prev, category: value };
    });
  };

  return (
    <Context.Provider
      value={{
        selectCategory,
        handleCategory,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default ContextContainer;
