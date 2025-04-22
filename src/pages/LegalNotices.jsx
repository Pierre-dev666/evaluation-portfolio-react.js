import Accordion from 'bootstrap';
import mapIco from '../assets/images/map.svg';
import geoAltIco from '../assets/images/geo-alt.svg';
import phoneIco from '../assets/images/phone.svg';
import envelopeAtIco from '../assets/images/envelope-at.svg';
import globeIco from '../assets/images/globe.svg';
import "../assets/css/LegalNotices.css";



const LegalNotices = () => {
    const metaRobots = document.createElement('meta');
    metaRobots.name = 'robots';
    metaRobots.content = 'noindex';
    document.head.appendChild(metaRobots);
    return (

        <div id="main">
            <div id='legalnotices_main'>
                <h3 id="legalnotices_h3">Mentions légales</h3>
                <div className="accordion" id="myAccordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne">Editeur du site</button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                            <div className="card-body">
                                <p><strong>John Doe</strong></p>
                                <span className='contact-details_boxes'><img src={mapIco}></img><p>40 rue Laure Diebold</p></span>
                                <span className='contact-details_boxes'><img src={geoAltIco}></img><p>69009 Lyon, France</p></span>
                                <span className='contact-details_boxes'><img src={phoneIco} className='contact_ico'></img><a href="tel:+331020304050" id='mail-to'>10 20 30 40 50</a></span>
                                <span className='contact-details_boxes'><img src={envelopeAtIco} className='contact_ico'></img><a href="mailto:john.doe@gmail.com" id='mail-to'>
                                    john.doe@gmail.com</a></span>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button type="button" className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">Hébergeur</button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse show" data-bs-parent="#myAccordion">
                            <div className="card-body">
                                <p><strong>alwaysdata</strong></p>
                                <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
                                <span className='contact-details_boxes'><img src={globeIco} className='contact_ico'></img><a href="mailto:https://www.alwaysdata.com" id='mail-to'>
                                    https://www.alwaysdata.com</a></span>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree">Crédits</button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                            <div className="card-body">
                                <p><strong>Crédits</strong></p>
                                <p>Ce site a été réalisé par John Doe au <a href="https://eleve.centre-europeen-formation.fr" className='site-link' target='blank'>
                                    Centre Européen de formation</a></p>
                                <p><em>Les images utilisées sur ce site sont libres de droits et ont étés obtenues sur le site <a href="https://pixabay.com/" className='site-link'
                                    target='blank'>Pixabay</a></em></p>
                                <p><em>La favicon de ce site a été fournie par <a href="https://www.flaticon.com/de/kostenlose-icons/john-doe" className='site-link' target='blank'>
                                    John Doe Icons erstellt von Freepik - Flaticon</a></em></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LegalNotices;