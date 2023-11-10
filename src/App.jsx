// Import CSS
import "./assets/css/App.css";
import "./assets/css/stars.css";

import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import { Footer } from "./components/Footer";
// Import the data so we can send it to the components
import { footerData } from "./data/data.jsx";

function App() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer data={footerData}></Footer>
    </>
  );
}

export default App;
