// Import CSS
import "./assets/css/App.css";
import "./assets/css/stars.css";

import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default App;
