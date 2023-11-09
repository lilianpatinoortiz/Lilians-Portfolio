// Import CSS
import "./assets/css/App.css";
import "./assets/css/stars.css";
import "./assets/css/sunny.css";

// Import components (top-level and leaf components)
import { AboutMe } from "./pages/AboutMe.jsx";
import { Contact } from "./pages/Contact.jsx";
import { Projects } from "./pages/Project.jsx";
import { Header } from "./pages/Header.jsx";
import { Footer } from "./pages/Footer.jsx";

// Import the data so we can send it to the components
import {
  headerData,
  projectsData,
  aboutData,
  contactData,
  footerData,
} from "./data/data.jsx";

function App() {
  return (
    <>
      <div className="suncontainer">
        <div className="cloud front">
          <span className="left-front"></span>
          <span className="right-front"></span>
        </div>
        <span className="sun sunshine"></span>
        <span className="sun"></span>
        <div className="cloud back">
          <span className="left-back"></span>
          <span className="right-back"></span>
        </div>
      </div>
      <div className="starscontainer">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
      <Header data={headerData}></Header>
      <AboutMe data={aboutData}></AboutMe>
      <Projects data={projectsData}></Projects>
      <Contact data={contactData}></Contact>
      <Footer data={footerData}></Footer>
    </>
  );
}

export default App;
