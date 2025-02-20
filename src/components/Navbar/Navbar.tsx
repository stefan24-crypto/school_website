import React from "react";
import logo from "../../images/naparima-college-website-header.png";
import Search from "./Search";
import Sidebar from "./Sidebar";
import menu from "../../images/menu.png";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { UIActions } from "../../store/ui-slice";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const showTheSidebar = useAppSelector((state) => state.ui.showSidebar);
  const dispatch = useAppDispatch();
  const location = useLocation();

  const changeSidebarState = (value: boolean) => {
    dispatch(UIActions.setShowSidebar(value));
  };

  return (
    <nav
      className={`p-4 flex justify-between px-10 items-center ${
        location.pathname !== "/contact" && location.pathname !== "/"
          ? "bg-blue-600"
          : null
      }`}
    >
      <div className="f">
        <img className="w-60" src={logo} alt="logo" />
      </div>

      {!showTheSidebar ? (
        <div className="flex justify-between gap-10 ">
          <Search />
          <div onClick={() => changeSidebarState(true)}>
            <img className="w-8 cursor-pointer" src={menu} alt="menu" />
          </div>
        </div>
      ) : (
        <Sidebar />
      )}
    </nav>
  );
};

export default Navbar;
