import React, { useContext, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import Apisummary from "../backendUrl/backendUrl";
import { toast } from "react-toastify";
import { Context } from "../store/store";
import ScrollTop from "../helper/ScrollTop";
const Card = ({ image, category, _id, fetchdrawData }) => {
  const { handleCategory } = useContext(Context);

  const handleUpdate = async (data) => {
    const postData = await fetch(Apisummary.update.url, {
      method: Apisummary.update.method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseData = await postData.json();
    if (responseData.success) {
      toast.success(responseData.message);
    }
    if (responseData.error) {
      toast.error(responseData.message);
    }
  };
  const handleDelete = async (drawingId) => {
    const postData = await fetch(Apisummary.delete.url, {
      method: Apisummary.delete.method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ id: drawingId }),
    });
    const responseData = await postData.json();
    if (responseData.success) {
      toast.success(responseData.message);
      fetchdrawData();
    }
    if (responseData.error) {
      toast.error(responseData.message);
    }
  };
  return (
    <div className="w-[300px] h-[300px]  flex flex-col items-center  gap-y-4 rounded-md ring-2 ring-black px-4 ">
      <div className="w-full h-[80%] flex items-center justify-center">
        <img className="h-full" src={image} alt="" />
      </div>

      <div className="w-full flex items-center justify-between">
        <span
          onClick={() => {
            handleCategory(category);
            ScrollTop();
            handleUpdate(data);
          }}
          className="text-2xl  cursor-pointer  hover:text-green-600 transition-all"
        >
          <FaEdit />
        </span>
        <h2 className=" capitalize text-xl text-green-500">{category}</h2>
        <span
          onClick={() => {
            handleDelete(_id);
          }}
          className="text-2xl  cursor-pointer hover:text-red-600 transition-all"
        >
          <AiFillDelete />
        </span>
      </div>
    </div>
  );
};

export default Card;
