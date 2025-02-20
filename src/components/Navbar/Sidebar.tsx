import React from "react";
import Search from "./Search";
import exit from "../../images/exit.png";
import { useAppDispatch } from "../../store/hooks";
import { UIActions } from "../../store/ui-slice";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const dispatch = useAppDispatch();

  return (
    <section className="top-0 fixed w-64 bg-black h-screen right-0 z-10 p-6 text-white">
      <div className="flex justify-between items-center gap-4">
        <Search />
        <div
          className=" cursor-pointer "
          onClick={() => dispatch(UIActions.setShowSidebar(false))}
        >
          <img src={exit} className="w-6" alt="exit" />
        </div>
      </div>
      <main className="flex flex-col gap-8 py-10 p-4">
        <NavLink className="flex items-center justify-start" to={"/home"}>
          Home
        </NavLink>
        <NavLink className="flex items-center justify-start" to={"/about"}>
          About
        </NavLink>
        <NavLink
          className="flex items-center justify-start"
          to={"/forstudents"}
        >
          For Students
        </NavLink>
        <NavLink className="flex items-center justify-start" to={"/forstaff"}>
          For Staff
        </NavLink>
        <NavLink className="flex items-center justify-start" to={"/contact"}>
          Contact
        </NavLink>
        <NavLink className="flex items-center justify-start" to={"/calendar"}>
          Calendar
        </NavLink>
      </main>
    </section>
  );
};

export default Sidebar;
