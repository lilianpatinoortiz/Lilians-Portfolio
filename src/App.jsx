// Import CSS
import "./assets/css/App.css";

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
      <Header data={headerData}></Header>
      <AboutMe data={aboutData}></AboutMe>
      <Projects data={projectsData}></Projects>
      <Contact data={contactData}></Contact>
      <Footer data={footerData}></Footer>
    </>
  );
}

export default App;
