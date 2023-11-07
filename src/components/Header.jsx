// Import logos
import reactLogo from "../assets/img/react.svg";
import { useState } from "react";
import { NavLink } from "../components/NavLink";

function Header({ data: links }) {
  const [count, setCount] = useState(0);
  /* Iterate through each project  and create a list of projects */
  const listLinks = links.map((link) => (
    /* Each element in a list has to have a unique key */
    <NavLink key={link.link} name={link.name} link={link.link} />
  ));

  return (
    <>
      <div id="header">
        <div id="name">
          <h1></h1>
        </div>
        <div className="menu">
          <ul className="nav">{listLinks}</ul>
        </div>
      </div>
    </>
  );
}

export { Header };
