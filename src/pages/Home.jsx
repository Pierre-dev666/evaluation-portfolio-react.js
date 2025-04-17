import imageHomePage from '../assets/images/john-doe-about.jpg';
import modaleCloseCross from '../assets/images/x.svg';
import personIco from '../assets/images/person.svg';
import geoAltIco from '../assets/images/geo-alt.svg';
import fileText from '../assets/images/file-text.svg';
import boxIco from '../assets/images/box.svg';
import peopleIco from '../assets/images/people.svg';
import React, { useState, useEffect } from 'react';

function homeButton(event) {
    let elem = document.getElementById("modale");
    if (event) {
        elem.style = "display: block;";
    }
}

function modaleButton(event) {
    let elem = document.getElementById("modale");
    if (event) {
        elem.style = "display: none;";
    }
}

const Home = () => {
    const [user, setUsers] = useState([]);


    const getUserInformation = async () => {
        const res = await fetch("https://api.github.com/users/github-john-doe");
        const json = await res.json();
        setUsers(json);
    }
    useEffect(() => {
        getUserInformation();
 
    }, []);
    return (
        <div id="main">
            <dialog id="modale"><p id='modale-title'>Mon profil Github</p>
                <button onClick={modaleButton} id='modale-close'>
                    <img src={modaleCloseCross} id='modale-cross'>
                    </img>
                </button>
                <hr />
                <div id='modale_grid'>
                    <img src="https://avatars.githubusercontent.com/u/19842736?v=4" id='modale_grid-part1'></img>
                    <ul id='modale_grid-part2'>
                        <span className='modale_boxes'><img className='modale-img' src={personIco}/>{user.name}</span>
                        <hr />
                        <span className='modale_boxes'><img className='modale-img' src={geoAltIco}/>{user.location}</span>
                        <hr />
                        <span className='modale_boxes'><img className='modale-img' src={fileText}/>{user.bio}</span>
                        <hr />
                        <span className='modale_boxes'><img className='modale-img' src={boxIco}/>{user.public_repos}</span>
                        <hr />
                        <span className='modale_boxes'><img className='modale-img' src={peopleIco}/>{user.followers}</span>
                        <hr />
                        <span className='modale_boxes'><img className='modale-img' src={peopleIco}/>{user.following}</span>
                    </ul>
                </div>
                <button onClick={modaleButton} id='modale-button'>Fermer</button>
            </dialog>
            <div id="home_part-1">
                <div id="home-background_part-1">
                    <h1>Bonjour, je suis John Doe</h1>
                    <h2>Développeur web full stack</h2>
                </div>
                <button onClick={homeButton} id='home-button'>En savoir plus</button>
            </div>
            <div id="home_part-2">
                <div id="home_part-2_subpart-1">
                    <h3>A propos</h3>
                    <img src={imageHomePage} id="image_john-doe-about"></img>
                    <p>Lorem ipsum dolor sit amet consectetur adiposocong elit. Optio, necessitatibus consectetur tempore perferendis nostrum,
                        ex delectus reiciendis impedit aut iure enim placeat? Natus, neque at?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adiposocong elit. Optio, necessitatibus consectetur tempore perferendis nostrum,
                        ex delectus reiciendis impedit aut iure enim placeat? Natus, neque at?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adiposocong elit. Optio, necessitatibus consectetur tempore perferendis nostrum,
                        ex delectus reiciendis impedit aut iure enim placeat? Natus, neque at?</p>
                </div>
                <div id="home_part-2_subpart-2">
                    <h3>Mes Comprétences</h3>
                    <div className="skill">
                        <legend>HTML5 90%</legend>
                        <div className="progress">
                            <div id="progress-bar_html5"></div>
                        </div>
                        <legend>CSS3 80%</legend>
                        <div className="progress">
                            <div id="progress-bar_css3"></div>
                        </div>
                        <legend>JAVASCRIPT 70%</legend>
                        <div className="progress">
                            <div id="progress-bar_javascript"></div>
                        </div>
                        <legend>PHP 60%</legend>
                        <div className="progress">
                            <div id="progress-bar_php"></div>
                        </div>
                        <legend>REACT 50%</legend>
                        <div className="progress">
                            <div id="progress-bar_react"></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home;