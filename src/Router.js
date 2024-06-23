import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import DetailPage from "./pages/DetailPage";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/DetailPage/:prductid" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
