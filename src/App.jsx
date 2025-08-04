import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Bookmark from "./components/Bookmark";
import Watched from "./components/Watched";
import About from "./components/About";
import Home from "./components/Home";
import { Link } from "react-router-dom"; 
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
            <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Bookmark" element={<Bookmark />} />
          <Route path="/Watched" element={<Watched />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;