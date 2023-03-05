import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


/* Importing  all Components */
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import Projects from "./components/Projects";
import About from "./components/About";
import NotFound from "./components/404";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/Projects" element={<Projects />}></Route>
          <Route path="/about" element={<About />}></Route>

          <Route path="*" element={<NotFound />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
