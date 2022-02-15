import React, { FC } from "react";
import Footer from "./footer";
import Navbar from "./navbar";
interface ILayoutProps {
  children: React.ReactNode;
}

const Index: FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div
        style={{ margin: "80px 0 10px 0", minHeight: "calc(100vh - 380px)" }}
      >
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Index;
