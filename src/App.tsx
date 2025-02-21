import "./App.css";
import About from "./components/About";
import DrawerAppBar from "./components/AppBar";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Home from "./components/Home";
import SplashCursor from "./components/SplashCursor";

function App() {
  return (
    <>
      <SplashCursor />
      <DrawerAppBar />
      <Home />
      <About />
      <Blogs />
      <Contact />
    </>
  );
}

export default App;
