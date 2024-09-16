import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Whiteboard from "./components/Whiteboard";
import DrawingList from "./components/DrawingList";
import ContextContainer from "./store/store";
const App = () => {
  return (
    <ContextContainer>
      <ToastContainer />
      <Whiteboard />
      <DrawingList />
    </ContextContainer>
  );
};

export default App;
