// Import logos
import reactLogo from "../assets/img/react.svg";
import { useState } from "react";

function Header() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <header>
          <h1>Lilian Patino Ortiz</h1>
        </header>
        <div>
          <nav>
            <button href="#about-me">About me</button>
            <button href="#my-work">My work</button>
            <button href="#contact-me">Contact me</button>
          </nav>
        </div>
      </div>
    </>
  );
}

export { Header };
