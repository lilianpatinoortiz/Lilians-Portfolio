// Import CSS
import "./assets/css/App.css";

// Import components (top-level and leaf components)
import { Header } from "./components/Header.jsx";
import { AboutMe } from "./components/AboutMe.jsx";
import { Contact } from "./components/Contact.jsx";
//import { Project } from "./components/Project.jsx";
import { Footer } from "./components/Footer.jsx";

// Import the data
import { projectsData, aboutData, contactData } from "./data/data.jsx";

function App() {
  return (
    <>
      <Header></Header>
      <AboutMe data={aboutData}></AboutMe>
      <Footer></Footer>
    </>
  );
}

export default App;
