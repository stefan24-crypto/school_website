import React, { Children } from "react";
import Navbar from "../Navbar/Navbar";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return <section className="w-full h-full">{children}</section>;
};

export default Layout;
