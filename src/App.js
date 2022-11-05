import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <div className="bg-image bg-cover bg-center h-screen overflow-scroll snap-y snap-mandatory scroll-smooth flex flex-col text-white">
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
