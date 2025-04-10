import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";
import LegalNotices from "./pages/LegalNotices";
import { slide as Menu } from 'react-burger-menu';
import './App.css';

class Example extends React.Component {
  showSettings(event) {
    event.preventDefault();

  }
}

export default function App() {
  return (
    <div className="App" id="outer-container">

      <header className="App-header">
        <div id='with-burger-menu'><Menu right customBurgerIcon={<img src="img/icon.svg" />}>
          <Link to="/">Accueil</Link>
          <Link to="/services">Services</Link>
          <Link to="/achievements">Réalisations</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/legal-notices">Mentions légales</Link>
        </Menu>
        </div>
        <div id='no-burger-menu'>
          <Link to="/">Accueil</Link>
          <Link to="/services">Services</Link>
          <Link to="/achievements">Réalisations</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/legal-notices">Mentions légales</Link>

        </div>

      </header>
      <main className="App-body">
        <p>Body</p>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/achievements" element={<Achievements />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/legal-notices" element={<LegalNotices />}></Route>
        </Routes>
      </main>
      <footer className="App-footer">
        <p>Footer</p>
      </footer>
    </div>

  );
}
