import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import PreNavbar from "./Components/PreNavbar";

function App() {
  return (
    <BrowserRouter>
      <PreNavbar />
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
