import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "../components/Nav";
import AddItems from "../pages/AddItems";
import Calendar from "../pages/Calendar";
import Home from "../pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Nav />}>
          <Route path="/" element={<Home />} />
          <Route path="/additem" element={<AddItems />} />
          <Route path="/calendar" element={<Calendar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
