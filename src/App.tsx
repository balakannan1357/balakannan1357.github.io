import "./App.css";
import About from "./components/About";
import DrawerAppBar from "./components/AppBar";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <DrawerAppBar />
      <Home />
      <About />
      <Blogs />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
