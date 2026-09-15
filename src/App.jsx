import { useState } from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Vans from "./Pages/Vans";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Link className="link-button" to="/">#VANLIFE</Link>
        <nav>
          <Link className="link-button" to="/">Home</Link>
          <Link className="link-button" to="/about">About</Link>
          <Link className="link-button" to="/vans">Vans</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
