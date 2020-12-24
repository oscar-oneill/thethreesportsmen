import React from 'react';
import '../components/Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('outlook', 'template_uypd0nt', e.target, 'user_SGW7m0gfsrn2z0f25DeBi')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    }

    return (
        <div className="contact__container">
            <div className="contact__header">
                Contact Us
            </div>

            <form onSubmit={sendEmail} className="contact__box">
                <textarea className="box message" placeholder="Your Message Here" type="text" name="message" required />
                <input className="box contact__name" placeholder="Name" type="text" name="name" required />
                <input className="box subject" placeholder="Subject" type="text" name="subject" required />
                <input className="box email" placeholder="Email Address" type="text" name="email" required />
                <button className="box submit" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact
