import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/about">A propos</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <main className="App-body">
        <p>Body</p>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </main>
      <footer className="App-footer">
        <p>Footer</p>
      </footer>
    </div>

  );
}


