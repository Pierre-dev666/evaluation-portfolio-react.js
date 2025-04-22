import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";
import LegalNotices from "./pages/LegalNotices";
import { slide as Menu } from "react-burger-menu";
import './App.css';
import GithubLink from './assets/images/github.svg';
import TwitterLink from './assets/images/twitter.svg';
import LinkedinLink from './assets/images/linkedin.svg';


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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
function modaleButton(event) {
  let elem = document.getElementById("modale");
  if (event) {
    elem.style = "display: none;";

  }
}
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const handleCloseMenu = (event) => {
    setIsMenuOpen(false);

  };
  const handleStateChange = (state) => {
    setIsMenuOpen(state.isOpen);

  };

  return (
    <div className="App">
      <header className="App-header" onMouseDown={modaleButton}>
        <nav id='navbar' className="navbar navbar-dark bg-dark">
          <NavLink to="/" activeclassname="active" className="navbar-brand mb-0 h1" id='logo'>JOHN DOE</NavLink>
          <div id='with-burger-menu'>

            <Menu pageWrapId={"page-wrap"} right width={'102%'} styles={styles} isOpen={isMenuOpen} onStateChange={handleStateChange}>
              <NavLink to="/" activeclassname="active" onClick={handleCloseMenu}>Accueil</NavLink>
              <NavLink to="/services" activeclassname="active" onClick={handleCloseMenu}>Services</NavLink>
              <NavLink to="/achievements" activeclassname="active" onClick={handleCloseMenu}>Réalisations</NavLink>
              <NavLink to="/contact" activeclassname="active" onClick={handleCloseMenu}>Contact</NavLink>
              <NavLink to="/legal-notices" activeclassname="active" onClick={handleCloseMenu}>Mentions légales</NavLink>

            </Menu>
          </div>
          <div id='no-burger-menu'>
            <NavLink to="/" activeclassname="active" >Accueil</NavLink>
            <NavLink to="/services" activeclassname="active">Services</NavLink>
            <NavLink to="/achievements" activeclassname="active">Réalisations</NavLink>
            <NavLink to="/contact" activeclassname="active">Contact</NavLink>
            <NavLink to="/legal-notices" activeclassname="active">Mentions légales</NavLink>

          </div>
        </nav>
      </header>
      <main className="Appbody" id="page-wrap" onClick={handleCloseMenu}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/achievements" element={<Achievements />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/legal-notices" element={<LegalNotices />}></Route>

        </Routes>
      </main >
      <footer className="App-footer" onMouseDown={modaleButton}>
        <div id='footer-1'>
          <p><strong>John Doe</strong></p>
          <p>40 rue Laure Diebold</p>
          <p>69009 Lyon, France</p>
          <a href="tel:+331020304050" id='mail-to'>10 20 30 40 50</a>
          <a href="mailto:john.doe@gmail.com" id='mail-to'>john.doe@gmail.com</a>
          <span id='social-networks'>
            <a href='https://github.com/github-john-doe' className='social-networks_footer' rel="nofollow" target="_blank"><img src={GithubLink} className='social-networks_image'></img></a>
            <a href='https://x.com/?lang=fr' className='social-networks_footer' rel="nofollow" target="_blank"><img src={TwitterLink} className='social-networks_image'></img></a>
            <a href='https://fr.linkedin.com' className='social-networks_footer' rel="nofollow" target="_blank"><img src={LinkedinLink} className='social-networks_image'></img></a>
          </span>
        </div>
        <div id='footer-2'>
          <p><strong>Liens utiles</strong></p>
          <NavLink to="/" activeclassname="active"><ScrollToTop />Accueil</NavLink>
          <NavLink to="/services" activeclassname="active">Services</NavLink>
          <NavLink to="/achievements" activeclassname="active">Réalisations</NavLink>
          <NavLink to="/contact" activeclassname="active">Contact</NavLink>
          <NavLink to="/legal-notices" activeclassname="active">Mentions légales</NavLink>
        </div>
        <div id='footer-3'>
          <p><strong>Mes dernières réalisations</strong></p>
          <a href="/achievements#achievements_card-1" activeclassname="active">Fresh Food</a>
          <a href="/achievements#achievements_card-2" activeclassname="active">Restaurant Akira</a>
          <a href="/achievements#achievements_card-3" activeclassname="active">Espace bien-être</a>
          <a href="/achievements#achievements_card-4" activeclassname="active">SEO</a>
          <a href="/achievements#achievements_card-5" activeclassname="active">Création d'une API</a>
          <a href="/achievements#achievements_card-6" activeclassname="active">Maquette d'un site web</a>
        </div>
      </footer>
    </div>

  );
}
