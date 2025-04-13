import imageHomePage from '../assets/images/john-doe-about.jpg';
import modaleCloseCross from '../assets/images/x.svg';

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
    return (
        <div id="main">
            <dialog id="modale"><p id='modale-title'>Mon profil Github</p>
                <button onClick={modaleButton} id='modale-close'>
                    <img src={modaleCloseCross} id='modale-cross'>
                    </img>
                </button>
                <hr />
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
                        <div class="progress">
                            <div id="progress-bar_html5"></div>
                        </div>
                        <legend>CSS3 80%</legend>
                        <div class="progress">
                            <div id="progress-bar_css3"></div>
                        </div>
                        <legend>JAVASCRIPT 70%</legend>
                        <div class="progress">
                            <div id="progress-bar_javascript"></div>
                        </div>
                        <legend>PHP 60%</legend>
                        <div class="progress">
                            <div id="progress-bar_php"></div>
                        </div>
                        <legend>REACT 50%</legend>
                        <div class="progress">
                            <div id="progress-bar_react"></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home;