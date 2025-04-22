import mapIco from '../assets/images/map.svg';
import geoAltIco from '../assets/images/geo-alt.svg';
import phoneIco from '../assets/images/phone.svg';
import envelopeAtIco from '../assets/images/envelope-at.svg';
import "../assets/css/Contact.css";

const Contact = () => {
    return (
        <div id="main">
            <div id="contact-title">
                <h3>Contact</h3>
                <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
                <hr />
            </div>

            <div id="contact-grid">
                <div id="contact_part-1">
                    <h3>A propos</h3>
                    <form action="#" method="post">
                        <fieldset>
                            <div>
                                <input type="text" placeholder="Votre nom" id="name" required />
                                <label htmlFor="name"></label>
                            </div>
                            <div>
                                <input type="text" placeholder="Votre adresse mail" id="mail" required />
                                <label htmlFor="mail"></label>
                            </div>
                            <div>
                                <input type="text" placeholder="Votre numérode téléphone" id="phone-number" required />
                                <label htmlFor="phone-number"></label>
                            </div>
                            <div>
                                <input type="text" placeholder="Sujet" id="topic" required />
                                <label htmlFor="topic"></label>
                            </div>
                            <textarea name="about" id="about" cols="60" rows="10"
                                placeholder="Saisissez votre message ici" required></textarea>
                        </fieldset>
                        <section id="button">
                            <input type="submit" value="Envoyer" id="validate" />
                            <label htmlFor="validate"></label>
                        </section>
                    </form>
                </div>
                <div id="contact_part-2">
                    <h3>Mes coordonées</h3>
                    <p><strong>John Doe</strong></p>
                    <span className='contact-details_boxes'><img src={mapIco}></img><p>40 rue Laure Diebold</p></span>
                    <span className='contact-details_boxes'><img src={geoAltIco}></img><p>69009 Lyon, France</p></span>
                    <span className='contact-details_boxes'><img src={phoneIco} className='contact_ico'></img><a href="tel:+331020304050" id='mail-to'>10 20 30 40 50</a></span>
                    <span className='contact-details_boxes'><img src={envelopeAtIco} className='contact_ico'></img><a href="mailto:john.doe@gmail.com" id='mail-to'>john.doe@gmail.com</a></span>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6618.234063151213!2d4.792470161155623!3d45.77871212613998!2m3!1f0!2f0!3f0!
                    3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1744464499655!5m2!
                    1sfr!2sfr" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contact;