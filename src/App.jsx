// Import CSS
import "./assets/css/App.css";

// Import components (top-level and leaf components) and data
import { Header } from "./components/Header.jsx";
//import { AboutMe } from "./components/AboutMe.jsx";
import { Contact } from "./components/Contact.jsx";
//import { Project } from "./components/Project.jsx";
import { Footer } from "./components/Footer.jsx";
//import { projectsData, aboutMeData, contactData } from "./data/data.jsx";

function App() {
  return (
    <>
      <Header></Header>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
