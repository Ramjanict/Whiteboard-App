import React, { useContext, useEffect, useRef, useState } from "react";
import Apisummary from "../backendUrl/backendUrl";
import { toast } from "react-toastify";
import { FaCloudUploadAlt } from "react-icons/fa";
import { Context } from "../store/store";

const Shape = () => {
  const { fetchdrawData, selectCategory } = useContext(Context);
  const canvasReference = useRef(null);
  const contextReference = useRef(null);
  const [isPressed, setIsPressed] = useState(false);
  const [data, setData] = useState({
    imageUrl: "",
    category: selectCategory.category,
    fontSize: "",
    text: "",
    color: "",
    id: 0,
  });

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
  //color controll
  const handleOnchange = (e) => {
    const { value } = e.target;
    setData((prev) => {
      return { ...prev, color: value };
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

  //start drawing
  const handleStartDraw = (e) => {
    contextReference.current.beginPath();
    contextReference.current.moveTo(
      e.nativeEvent.offsetX,
      e.nativeEvent.offsetY
    );

    setIsPressed(true);
  };
  //update drawing
  const handleUpdateDraw = (e) => {
    if (!isPressed) return;
    contextReference.current.lineTo(
      e.nativeEvent.offsetX,
      e.nativeEvent.offsetY
    );
    contextReference.current.stroke();
  };
  //stop drawing
  const handleStopDraw = () => {
    contextReference.current.closePath();
    setIsPressed(false);
  };
  //clear drawing
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
    context.lineCap = "round";
    context.strokeStyle = data.color;
    context.lineWidth = 5;
    contextReference.current = context;
  }, [data.color]);

  return (
    <div className=" pb-8 flex flex-col md:flex-row  justify-evenly  gap-10  ">
      <div className="flex flex-col items-center gap-4 ">
        <center className="my-2 text-3xl font-medium">Whiteboard App</center>
        <canvas
          ref={canvasReference}
          onMouseDown={handleStartDraw}
          onMouseMove={handleUpdateDraw}
          onMouseUp={handleStopDraw}
          className="ring-2 ring-black rounded-md whiteboard "
        />

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
              type="color"
              id="color"
              name="color"
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
        <div className=" flex  flex-col gap-4">
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

export default Shape;
