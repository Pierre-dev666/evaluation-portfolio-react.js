const Home = () => {
    return (
        <div id="main">
            <div id="home_part-1">
                <div id="home-background_part-1">
                    <h1>Bonjour, je suis John Doe</h1>
                    <h2>Développeur web full stack</h2>
                </div></div>
            <div id="home_part-2">
                <div id="home_part-2_subpart-1">
                    <h3>A propos</h3>

                    <div id="image_john-doe-about"></div>
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
                        <legend>HTML5 90%</legend><span className="barre"></span>
                        <span id="barre-html5"></span>
                        <legend>CSS3 80%</legend><span className="barre"></span>
                        <span id="barre-css3"></span>
                        <legend>JAVASCRIPT 70%</legend><span className="barre"></span>
                        <span id="barre-javascript"></span>
                        <legend>PHP 90%</legend><span className="barre"></span>
                        <span id="barre-php"></span>
                        <legend>REACT 90%</legend><span className="barre"></span>
                        <span id="barre-react"></span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home;