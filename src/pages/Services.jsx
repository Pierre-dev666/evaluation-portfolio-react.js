import bannerServicesPage from '../assets/images/banner.jpg';
import brushIco from '../assets/images/brush.svg';
import codeSlashIco from '../assets/images/code-slash.svg';
import searchIco from '../assets/images/search.svg';


const Services = () => {
    return (
        <div id="main">
            <img src={bannerServicesPage} id="image_banner"></img>
            <div id="contact-title">
                <h3>Mon offre de services</h3>
                <p className='services_p'>Voici les prestations sur lesquelles je peux intervenir</p>
                <hr id='service-hr' />
            </div>
            <div id="services-grid">
                <div id="services_card-1">
                    <img src={brushIco} className='services_card-header'></img>
                    <div className='services_card-body'>
                        <h3 className='services_h3'>UX Design</h3>
                        <p className='services_p'>L'ux design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc..)
                            en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible.</p>
                    </div>
                </div>
                <div id="services_card-2">
                    <img src={codeSlashIco} className='services_card-header'></img>
                    <div className='services_card-body'>
                        <h3 className='services_h3'>Développement web</h3>
                        <p className='services_p'>Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, Javascript, PHP, etc..)
                            et des frameworks (Bootstrap, React, Angular, etc..).</p>
                    </div>
                </div>
                <div id="services_card-3">
                    <img src={searchIco} className='services_card-header'></img>
                    <div className='services_card-body'>
                        <h3 className='services_h3'>Référencement</h3>
                        <p className='services_p'>Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche
                            (Google, Bing, Yahoo, etc..). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Services;