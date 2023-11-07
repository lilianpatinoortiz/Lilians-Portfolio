// Import CSS
import "./assets/css/App.css";

// Import components (top-level and leaf components)
import { Header } from "./components/Header.jsx";
import { AboutMe } from "./components/AboutMe.jsx";
import { Contact } from "./components/Contact.jsx";
import { Projects } from "./components/Project.jsx";
import { Footer } from "./components/Footer.jsx";

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
      <Header data={headerData}></Header>
      <AboutMe data={aboutData}></AboutMe>
      <Projects data={projectsData}></Projects>
      <Contact data={contactData}></Contact>
      <Footer data={footerData}></Footer>
    </>
  );
}

export default App;
