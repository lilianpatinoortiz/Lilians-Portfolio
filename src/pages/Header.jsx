// Import logos
import reactLogo from "../assets/img/react.svg";
import { useState } from "react";
import { NavLinkList } from "../components/NavLink";

/* In our component: Rename the data prop array, for better understanding */
function Header({ data: links }) {
  return (
    <>
      <div id="header">
        <div id="name">
          <h1></h1>
        </div>
        <div className="menu">
          <NavLinkList data={links}></NavLinkList>
        </div>
      </div>
    </>
  );
}

export { Header };
