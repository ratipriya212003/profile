import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Education from "./components/Education";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
        <Navbar />
        <Home/>
        <Education/>
        <About/>
        <Portfolio/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;