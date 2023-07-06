import React from "react";
import MainLayout from "../layots/MainLayout";
import HomePage from "../pages/HomePage";
import { Route, Routes } from "react-router-dom";
import UsersPage from "../pages/UsersPage";
import LinkPage from "../pages/LinkPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/link" element={<LinkPage />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
