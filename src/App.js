import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Importing  All Components */
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Resume from "./components/Resume";
import NotFound from "./components/404";

/* Importing  Page Loader Component */
import Loader from "./components/Loader/Loading";

function App() {
  /* Page Loading Actions */

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);

  /* Page Loading Actions */

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Projects" element={<Projects />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
