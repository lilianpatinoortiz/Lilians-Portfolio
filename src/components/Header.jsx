// Import logos
import reactLogo from "../assets/img/react.svg";
import { useState } from "react";
import { NavLink } from "../components/NavLink";

function Header() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="header">
        <div id="name">
          <h1></h1>
        </div>
        <div className="menu">
          <ul className="nav">
            <NavLink link="#about" name="About Me"></NavLink>
            <NavLink link="#portfolio" name="Portfolio"></NavLink>
            <NavLink link="#contact" name="Contact"></NavLink>
            <NavLink
              link="pdf/lilian-patino-ortiz-resume.pdf"
              name="Linkedin"
              download=""
            ></NavLink>
          </ul>
        </div>
      </div>
    </>
  );
}

export { Header };
