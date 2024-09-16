import React, { useEffect, useState } from "react";
import Card from "./Card";
import Menu from "./Menu";
import Apisummary from "../backendUrl/backendUrl";
import { toast } from "react-toastify";
const DrawingList = () => {
  const [data, setData] = useState([]);
  const [sample, setSample] = useState([]);

  console.log("sample", sample);

  //Get all drawing
  const fetchdrawData = async () => {
    const fetchData = await fetch(Apisummary.allDrawing.url);
    const responseData = await fetchData.json();
    setData(responseData.data);
  };
  const handleCategoryWiseDrawing = async (category) => {
    const postData = await fetch(Apisummary.category.url, {
      method: Apisummary.category.method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ category: category }),
    });
    const responseData = await postData.json();
    if (responseData.success) {
      setData(responseData.data);
    }
    if (responseData.error) {
      toast.error(responseData.message);
    }
  };
  // handleSearch
  const handleSearch = async (id) => {
    const postData = await fetch(Apisummary.search.url, {
      method: Apisummary.search.method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    const responseData = await postData.json();
    if (responseData.success) {
      setData([responseData.data]);
    }
    if (responseData.error) {
      toast.error(responseData.message);
    }
  };
  // latest drawing
  const latestDrawing = async () => {
    const fetchData = await fetch(Apisummary.latest.url);
    const responseData = await fetchData.json();
    setData(responseData.data);
  };
  //load sample drawing
  const loadSampleDrawing = async () => {
    const fetchData = await fetch(Apisummary.sample.url);
    const responseData = await fetchData.json();
    setSample(responseData.data);
  };
  useEffect(() => {
    fetchdrawData();
  }, []);
  return (
    <div className="w-full px-4 md:px-8 lg:px-16 py-8">
      <Menu
        handleCategoryWiseDrawing={handleCategoryWiseDrawing}
        handleSearch={handleSearch}
        latestDrawing={latestDrawing}
        loadSampleDrawing={loadSampleDrawing}
      />
      <center className="py-2 text-xl">
        <h2>Show resut {data.length || sample.length}</h2>
      </center>
      <div className=" py-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10">
        {data.length > 0
          ? data.map((drawing, index) => {
              return (
                <Card
                  category={drawing.category}
                  _id={drawing._id}
                  image={drawing.imageUrl}
                  fetchdrawData={fetchdrawData}
                  key={index}
                />
              );
            })
          : sample.map((drawing, index) => {
              return (
                <Card
                  category={drawing.category}
                  _id={drawing._id}
                  image={drawing.imageUrl}
                  fetchdrawData={fetchdrawData}
                  key={index}
                />
              );
            })}
      </div>
    </div>
  );
};

export default DrawingList;
