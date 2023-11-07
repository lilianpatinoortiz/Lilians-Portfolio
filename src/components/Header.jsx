// Import logos
import reactLogo from "../assets/img/react.svg";
import { useState } from "react";
import { NavLink } from "../components/NavLink";

/* In our component: Rename the data prop array, for better understanding */
function Header({ data: links }) {
  const [count, setCount] = useState(0);
  /* Iterate through each link  and create a list of links */
  const listLinks = links.map((link) => (
    /* Each element in a list has to have a unique key */
    <NavLink key={link.link} {...link} />
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
