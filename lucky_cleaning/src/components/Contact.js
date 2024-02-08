import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import bg_2 from '../style/images/hill.jpg';
import about from '../style/images/about.jpg';

const sectionStyle = {
    backgroundImage: `url(${bg_2})`
};

const sectionStyle1 = {
    backgroundImage: `url(${about})`
};

function Contact() {
    const form = useRef();
    const [formErrors, setFormErrors] = useState({
        to_name: '',
        user_email: '',
        from_name: '',
        message: ''
    });
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);


    const validateForm = () => {
        let isValid = true;
        const newErrors = { ...formErrors };

        // Validate Full Name
        if (!form.current.to_name.value.trim()) {
            newErrors.to_name = 'Name is required';
            isValid = false;
        } else {
            newErrors.to_name = '';
        }

        // Validate Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!form.current.user_email.value.trim() || !emailRegex.test(form.current.user_email.value)) {
            newErrors.user_email = 'Valid Email is required';
            isValid = false;
        } else {
            newErrors.user_email = '';
        }

        // Validate Subject
        if (!form.current.from_name.value.trim()) {
            newErrors.from_name = 'Subject is required';
            isValid = false;
        } else {
            newErrors.from_name = '';
        }

        // Validate Message
        if (!form.current.message.value.trim()) {
            newErrors.message = 'Message is required';
            isValid = false;
        } else {
            newErrors.message = '';
        }

        setFormErrors(newErrors);
        return isValid;
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (validateForm()) {
            emailjs
                .sendForm('service_pjp2h5h', 'template_8nbkgkh', form.current, 'QYbLXO3Pvzfl1O8No')
                .then(
                    (result) => {
						setIsFormSubmitted(true);
						setIsSubmitting(true);  
                        console.log(result.text);
                        setTimeout(() => {
							setIsFormSubmitted(false);
						}, 3000);
                    },
                    (error) => {
                        console.log(error.text);
						setIsFormSubmitted(false);
                    }
                )
				.finally(() => {
                    setIsSubmitting(false); // Set loading state back to false
                    form.current.reset();
                    // Reset the formErrors state
                    setFormErrors({
                        to_name: '',
                        user_email: '',
                        from_name: '',
                        message: ''
                    });
                });
				
        }
    };

    return (
        <>
            <section className="hero-wrap hero-wrap-2 bg-st" style={sectionStyle} >
                <div className="overlay"></div>
                <div className="container">
                <div className="row no-gutters slider-text align-items-center justify-content-center">
                    <div className="col-md-8 text-center navbar-brand">
                    <h1 className="mb-4">Contact <span className='color-bg'>Us</span></h1>
                    </div>
                </div>
                </div>
            </section>
            <section className="ftco-section bg-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="wrapper">
                                <div className="row mb-5">
                                    <div className="col-md-4">
                                        <div className="dbox w-100 text-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-map-marker"></span>
                                            </div>
                                            <div className="text">
                                                <p>
                                                    <span>Address:</span> 198 West 21th Street, Suite 721 New York NY
                                                    10016
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="dbox w-100 text-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-phone"></span>
                                            </div>
                                            <div className="text">
                                                <p>
                                                    <span>Phone:</span>{' '}
                                                    <a href="tel://0424 654 233">0424 654 233</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="dbox w-100 text-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-paper-plane"></span>
                                            </div>
                                            <div className="text">
                                                <p>
                                                    <span>Email:</span>{' '}
                                                    <a href="mailto:cleaningwithlucky@gmail.com">cleaningwithlucky@gmail.com</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters">
                                    <div className="col-md-7">
                                        <div className="contact-wrap w-100 p-md-5 p-4">
                                            <h3 className="mb-4">Contact Us</h3>
                                            <div id="form-message-warning" className="mb-4"></div>
                                            <div id="form-message-success" className={`mb-4 ${isFormSubmitted ? 'text-success' : 'd-none'}`}>
                                                Your message was sent, thank you!
                                            </div>
											{isSubmitting && <div className="loader">Submitting...</div>}

                                            <form ref={form} onSubmit={sendEmail} id="contactForm" name="contactForm" className="contactForm">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="label" htmlFor="name">
                                                                Full Name
                                                            </label>
                                                            <input type="text" className="form-control" name="to_name" id="name" placeholder="Name" />
                                                            {formErrors.to_name && <p className="text-danger">{formErrors.to_name}</p>}
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="label" htmlFor="email">
                                                                Email Address
                                                            </label>
                                                            <input type="email" className="form-control" name="user_email" id="email" placeholder="Email" />
                                                            {formErrors.user_email && <p className="text-danger">{formErrors.user_email}</p>}
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="label" htmlFor="subject">
                                                                Subject
                                                            </label>
                                                            <input type="text" className="form-control" name="from_name" id="subject" placeholder="Subject" />
                                                            {formErrors.from_name && <p className="text-danger">{formErrors.from_name}</p>}
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="label" htmlFor="#">
                                                                Message
                                                            </label>
                                                            <textarea
                                                                name="message"
                                                                className="form-control"
                                                                id="message"
                                                                cols="30"
                                                                rows="4"
                                                                placeholder="Message"
                                                            ></textarea>
                                                            {formErrors.message && <p className="text-danger">{formErrors.message}</p>}
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <input type="submit" value="Send Message" className="btn btn-primary" />
															{isSubmitting && <div className="loader submitting">Submitting...</div>}
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-md-5 d-flex align-items-stretch">
                                        <div className="info-wrap w-100 p-5 img" style={sectionStyle1}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 mt-5">
                        <iframe
                        title="Google Map"
                        width="100%"
                        height="400"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=57%20Bruce%20St%20Rye,%20Victoria%203941+(cleaning%20with%20lucky)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;
