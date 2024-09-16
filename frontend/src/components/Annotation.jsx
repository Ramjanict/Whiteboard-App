import React, { useContext, useEffect, useRef, useState } from "react";
import Apisummary from "../backendUrl/backendUrl";
import { toast } from "react-toastify";
import { FaCloudUploadAlt } from "react-icons/fa";
import { Context } from "../store/store";
const Annotation = () => {
  const { fetchdrawData, selectCategory } = useContext(Context);
  const canvasReference = useRef(null);
  const contextReference = useRef(null);
  const [data, setData] = useState({
    imageUrl: "",
    category: selectCategory.category,
    fontSize: "",
    text: "",
    color: "",
    id: 1,
  });

  // Calling Api
  const handleUpload = async () => {
    const postData = await fetch(Apisummary.upload.url, {
      method: Apisummary.upload.method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
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

  const handleOnchange = (e) => {
    const { value, name } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  // save drawing
  const handleSave = () => {
    setData((prev) => {
      return {
        ...prev,
        imageUrl: contextReference.current.canvas.toDataURL(),
        id: data.id + 2,
      };
    });
  };
  // clear Canvas
  const handleClearCanvas = () => {
    const canvas = canvasReference.current;
    const context = canvas.getContext("2d");
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
    setData((data.imageUrl = ""));
  };

  useEffect(() => {
    const canvas = canvasReference.current;
    const context = canvas.getContext("2d");
    context.canvas.width = 300;
    context.canvas.height = 300;
    context.strokeStyle = data.color;
    context.font = `bold italic  ${data.fontSize + "px"} Arial`;
    context.textAlign = "center";
    context.strokeText(`${data.text}`, canvas.width / 2, canvas.height / 2);
    contextReference.current = context;
  }, [data]);

  return (
    <div className=" pb-8 flex flex-col md:flex-row  justify-evenly  gap-10  ">
      <div className="flex flex-col items-center gap-4 ">
        <center className="my-2 text-3xl font-medium">Annotation board</center>
        <canvas
          ref={canvasReference}
          className="ring-2 ring-black rounded-md  "
        />

        <div className=" flex items-center justify-between gap-2">
          <input
            onChange={handleOnchange}
            className="p-2 outline-none rounded-md ring-1 ring-slate-300"
            type="text"
            placeholder="Add your annotation text"
            value={data.text}
            name="text"
            required
          />
          <select
            onChange={handleOnchange}
            name="fontSize"
            className="p-2 outline-none rounded-md ring-1 ring-slate-300"
          >
            <option value="">Choose font</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
            <option value="60">60</option>
          </select>
        </div>

        <div className="flex items-center justify-center gap-2 w-full md:w-1/4">
          <button
            onClick={handleClearCanvas}
            className="px-4 py-1 bg-red-600 text-white rounded-md "
          >
            Reset
          </button>
          <div className="flex items-center gap-1 ">
            <input
              className="cursor-pointer rounded-md"
              onChange={handleOnchange}
              name="color"
              type="color"
              id="color"
            />
            <label
              className="cursor-pointer text-sm font-medium "
              htmlFor="color"
            >
              colors
            </label>
          </div>
          <button
            onClick={handleSave}
            className="px-4 py-1 bg-green-600 text-white rounded-md "
          >
            Save
          </button>
        </div>
      </div>
      {data.imageUrl && (
        <div className="flex  flex-col gap-4">
          <center className="my-2 text-3xl font-medium">Upload Drawing</center>
          <div className="mx-auto w-[300px] h-[300px] flex flex-col items-center gap-4">
            <img
              className="ring-2 ring-black rounded-md "
              src={data.imageUrl}
              alt="photo"
            />
            <button
              onClick={handleUpload}
              className="px-4 py-1 bg-green-600 text-white rounded-md flex items-center gap-2  "
            >
              Upload
              <span>
                <FaCloudUploadAlt />
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Annotation;
