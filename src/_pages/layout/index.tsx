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
      <div style={{ margin: "10px 0" }}>{children}</div>
      <Footer />
    </>
  );
};

export default Index;
