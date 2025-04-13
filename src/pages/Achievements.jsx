import bannerAchievementsPage from '../assets/images/banner.jpg';
import freshFood from '../assets/images/portfolio/fresh-food.jpg';
import japaneseRestaurant from '../assets/images/portfolio/restaurant-japonais.jpg';
import wellnessArea from '../assets/images/portfolio/espace-bien-etre.jpg';
import seo from '../assets/images/portfolio/seo.jpg';
import code from '../assets/images/portfolio/coder.jpg';
import screens from '../assets/images/portfolio/screens.jpg';

const Achievements = () => {
    return (
        <div id="main">
            <img src={bannerAchievementsPage} id="image_banner"></img>
            <div id="contact-title">
                <h3>Mon offre de achievements</h3>
                <p className='achievements_p'>Voici les prestations sur lesquelles je peux intervenir</p>
                <hr id='service-hr' />
            </div>
            <div id="achievements-grid">
                <div id="achievements_card-1">
                    <img src={freshFood} className='achievements_card-header'></img>
                    <div className='achievements_card-body'>
                        <h3 className='achievements_h3'>Fresh Food</h3>
                        <p className='achievements_p'>Site de vente de produirs frais en ligne</p>
                        <div className='achievements_a'>
                            <a href='#'>Voir le site</a>
                        </div>
                    </div>
                    <div className='achievements_card-footer'>
                        <p className='achievements-footer_p'>Site réalisé avec PHP et MySQL</p>
                    </div>
                </div>
                <div id="achievements_card-2">
                    <img src={japaneseRestaurant} className='achievements_card-header'></img>
                    <div className='achievements_card-body'>
                        <h3 className='achievements_h3'>Restaurant Akira</h3>
                        <p className='achievements_p'>Site de vente de produirs frais en ligne</p>
                        <div className='achievements_a'>
                            <a href='#'>Voir le site</a>
                        </div>
                    </div>
                    <div className='achievements_card-footer'>
                        <p className='achievements-footer_p'>Site réalisé avec WordPress</p>
                    </div>
                </div>
                <div id="achievements_card-3">
                    <img src={wellnessArea} className='achievements_card-header'></img>
                    <div className='achievements_card-body'>
                        <h3 className='achievements_h3'>Espace bien-être</h3>
                        <p className='achievements_p'>Site de vente de produirs frais en ligne</p>
                        <div className='achievements_a'>
                            <a href='#'>Voir le site</a>
                        </div>
                    </div>
                    <div className='achievements_card-footer'>
                        <p className='achievements-footer_p'>Site réalisé avec LARAVEL</p>
                    </div>
                </div>
                <div id="achievements_card-4">
                    <img src={seo} className='achievements_card-header'></img>
                    <div className='achievements_card-body'>
                        <h3 className='achievements_h3'>SEO</h3>
                        <p className='achievements_p'>Amélioration du référencement d'un site e-commerce</p>
                        <div className='achievements_a'>
                            <a href='#'>Voir le site</a>
                        </div>
                    </div>
                    <div className='achievements_card-footer'>
                        <p className='achievements-footer_p'>Utilisation des outils SEO</p>
                    </div>

                </div>
                <div id="achievements_card-5">
                    <img src={code} className='achievements_card-header'></img>
                    <div className='achievements_card-body'>
                        <h3 className='achievements_h3'>Création d'une API</h3>
                        <p className='achievements_p'>Création d'une API RESTFULL publique</p>
                        <div className='achievements_a'>
                            <a href='#'>Voir le site</a>
                        </div>
                    </div>
                    <div className='achievements_card-footer'>
                        <p className='achievements-footer_p'>PHP - SYMPHONY</p>
                    </div>
                </div>
                <div id="achievements_card-6">
                    <img src={screens} className='achievements_card-header'></img>
                    <div className='achievements_card-body'>
                        <h3 className='achievements_h3'>Maquette d'un site web</h3>
                        <p className='achievements_p'>Création du prototype d'un site</p>
                        <div className='achievements_a'>
                            <a href='#'>Voir le site</a>
                        </div>
                    </div>
                    <div className='achievements_card-footer'>
                        <p className='achievements-footer_p'>Réalisé avec FIGMA</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Achievements;