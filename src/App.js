import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";
import LegalNotices from "./pages/LegalNotices";
import { fallDown as Menu } from 'react-burger-menu';
import './App.css';


let styles = {
  bmMenuWrap: {
    height: 'max-content',
    transition: '0.2s ease-in-out',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0)'
  },
  bmPageWrap: {
    background: 'rgba(0, 0, 0, 0)'
  }
}

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


}
export default function App() {
  return (
    <div className="App">

      <header className="App-header">
        <nav id='navbar' className="navbar navbar-dark bg-dark">
          <span className="navbar-brand mb-0 h1" id='logo'>JOHN DOE</span>
          <div id='with-burger-menu'>
            <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} right width={'102%'} styles={styles}>
              <NavLink to="/" activeClassName="active">Accueil</NavLink>
              <NavLink to="/services" activeClassName="active">Services</NavLink>
              <NavLink to="/achievements" activeClassName="active">Réalisations</NavLink>
              <NavLink to="/contact" activeClassName="active">Contact</NavLink>
              <NavLink to="/legal-notices" activeClassName="active">Mentions légales</NavLink>

            </Menu>
          </div>
          <div id='no-burger-menu'>
            <NavLink to="/" activeClassName="active" >Accueil</NavLink>
            <NavLink to="/services" activeClassName="active">Services</NavLink>
            <NavLink to="/achievements" activeClassName="active">Réalisations</NavLink>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
            <NavLink to="/legal-notices" activeClassName="active">Mentions légales</NavLink>

          </div>
        </nav>
      </header>
      <main className="Appbody" id="page-wrap">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/achievements" element={<Achievements />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/legal-notices" element={<LegalNotices />}></Route>
        </Routes>
      </main >
      <footer className="App-footer">
        <div id='footer-1'>
          <p><strong>John Doe</strong></p>
          <p>40 rue Laure Diebold</p>
          <p>69009 Lyon, France</p>
          <p>10 20 30 40 50</p>
          <a href="mailto:john.doe@gmail.com" id='mail-to'>john.doe@gmail.com</a>
        </div>
        <div id='footer-2'>
          <p><strong>Liens utiles</strong></p>
          <ScrollToTop />
          <NavLink to="/" activeClassName="active">Accueil</NavLink>
          <NavLink to="/services" activeClassName="active">Services</NavLink>
          <NavLink to="/achievements" activeClassName="active">Réalisations</NavLink>
          <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          <NavLink to="/legal-notices" activeClassName="active">Mentions légales</NavLink>
        </div>
        <div id='footer-3'>
          <p><strong>Mes dernières réalisations</strong></p>
          <NavLink to="/achievements" activeClassName="active">Réalisation 1</NavLink>
          <NavLink to="/achievements" activeClassName="active">Réalisation 2</NavLink>
          <NavLink to="/achievements" activeClassName="active">Réalisation 3</NavLink>
          <NavLink to="/achievements" activeClassName="active">Réalisation 4</NavLink>
          <NavLink to="/achievements" activeClassName="active">Réalisation 5</NavLink>
          <NavLink to="/achievements" activeClassName="active">Réalisation 6</NavLink>
        </div>
      </footer>
    </div>

  );
}
