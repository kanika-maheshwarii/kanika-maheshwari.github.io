import React, {useRef} from "react";
import './contact.css';
import github from '../../assets/githubicon.png';
import linkedin from '../../assets/linkedin.png'; 
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_am3r5zy', 'template_z593tnn', form.current, 'V_U1vyNVS81XxcRjO')
            .then((result) => {
                console.log('Email sent successfully:', result);
                e.target.reset();
                alert('Email Sent!');
            })
               
            .catch((error) => {
                console.error('Error sending email:', error);
            });
        };
    return(
        <section id="contactPage">
            <div id="contact">
                <h1 className="contactPageTitle"> Contact Me </h1>
                <span className="contactDesc"> Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name="your_name"></input>
                    <input type="email" className="email" placeholder="Your Email" name="your_email"></input>
                    <textarea className="msg" name="message" rows="5" placeholder="Your Message" ></textarea>                
                    <button type="submit" value= 'Send' className="submitBtn"> Submit </button>               
                    <div className="links">
                        <a href="https://github.com/kanika-maheshwarii" target="_blank">
                        <img src={github} alt="github" className="link"/> 
                        </a>
                        <a href="https://www.linkedin.com/in/kanika-maheshwarii/" target="_blank">
                        <img src={linkedin} alt="linkedin" className="link"/>  
                        </a>  
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;