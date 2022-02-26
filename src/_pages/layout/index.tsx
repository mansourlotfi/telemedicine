import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Navbar from "./navbar";

const Index: FC = () => {
  return (
    <>
      <Navbar />
      <div
        style={{ margin: "80px 0 10px 0", minHeight: "calc(100vh - 380px)" }}
      >
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Index;
