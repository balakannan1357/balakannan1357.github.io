import "./App.css";
import About from "./components/About";
import DrawerAppBar from "./components/AppBar";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <DrawerAppBar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Blogs />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
