import React from "react";
import ResetStyles from "./ResetStyles";
import { Route, Routes } from "react-router-dom";
import List from "./pages/List";
import SideBar from "./components/SideBar";
function App() {
  return (
    <>
      <ResetStyles />
      <SideBar />
      <Routes>
        <Route path="/" element={<List />} />
      </Routes>
    </>
  );
}

export default App;
