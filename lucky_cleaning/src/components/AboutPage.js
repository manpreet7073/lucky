import React, { useState } from 'react';
import about from '../style/images/hill.jpg'
import about_bg from '../style/images/cont.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';


// import TeamMember from './TeamMember'; // Assume you have a TeamMember component

const AboutPage = () => {
  const [isExperiencedCollapsed, setIsExperiencedCollapsed] = useState(true);
  const [isCustomizedCollapsed, setIsCustomizedCollapsed] = useState(true);
  const [isEnvironmentallyCollapsed, setIsEnvironmentallyCollapsed] = useState(true);
  const [isSatisfactionCollapsed, setIsSatisfactionCollapsed] = useState(true);

  const toggleCollapse = (collapseFunction) => {
    collapseFunction((prev) => !prev);
  };

  return (
    <div className="about-page">
          <section className="hero-wrap hero-wrap-2 bg-st" style={{ backgroundImage: `url(${about})`, 
           }}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-8 text-center navbar-brand">
              <h1 className="mb-4">About <span className='color-bg'>Us</span></h1>
            </div>
          </div>
        </div>
      </section>


      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h2 className="heading-section text-bold"><span className='bg-none'>Welcome to Cleaning With Lucky</span></h2>
              <p>
                At Cleaning With Lucky, we are dedicated to providing top-notch cleaning services to ensure your spaces
                are not just clean but also a sanctuary of comfort. With a commitment to excellence, we bring a fresh
                approach to cleanliness that goes beyond the surface.
              </p>
              <p>
                Our team of highly skilled and professional cleaners is passionate about transforming your spaces into
                pristine environments. We understand the importance of a clean and healthy living or working space, and
                we take pride in our ability to deliver outstanding results.
              </p>
              <p>
                Whether it's residential cleaning, commercial cleaning, or specialized services, we tailor our
                solutions to meet your unique needs. Your satisfaction is our priority, and we strive to exceed your
                expectations with every service.
              </p>
            </div>
            <div className="col-md-5">
              <img src={about_bg} alt="About Us" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-8 text-center heading-section">
              <h2 className="mb-4">Why Choose Us?</h2>
              <p>
                Choose Cleaning With Lucky - Elevating Cleanliness, Exceeding Expectations.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
          <div className="col-sm-6">
          <div className="collapse-container">
          <button
            onClick={() => toggleCollapse(setIsExperiencedCollapsed)}
            className="collapse-button"
          >
            Experienced Professionals
            <FontAwesomeIcon
              icon={isExperiencedCollapsed ? faChevronDown : faChevronUp}
              className="arrow-icon collapse-left"
            />
          </button>
          <div className={`collapse-content ${isExperiencedCollapsed ? 'collapsed' : ''}`}>
            <p>
              Our team comprises highly trained and experienced cleaning professionals who
              understand the nuances of various cleaning challenges. We bring expertise to every
              project, ensuring thorough and efficient cleaning services.
            </p>
          </div>
        </div>
        </div>
        <div className='col-sm-6'>
        <div className="collapse-container">
          <button
            onClick={() => toggleCollapse(setIsCustomizedCollapsed)}
            className="collapse-button"
          >
            Customized Solutions &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      
            <FontAwesomeIcon
              icon={isCustomizedCollapsed ? faChevronDown : faChevronUp}
              className="arrow-icon collapse-left"
            />
          </button>
          <div className={`collapse-content ${isCustomizedCollapsed ? 'collapsed' : ''}`}>
            <p>
              We recognize that every space is unique, and cleaning requirements vary. That's why
              we offer customized cleaning solutions tailored to your specific needs. Whether it's a
              residential home, office, or commercial establishment, we adapt our services to deliver
              the best results.
            </p>
          </div>
        </div>
        </div>
        <div className='col-sm-6'>
        <div className="collapse-container">
          <button
            onClick={() => toggleCollapse(setIsEnvironmentallyCollapsed)}
            className="collapse-button"
          >
            Environmentally Conscious
            <FontAwesomeIcon
              icon={isEnvironmentallyCollapsed ? faChevronDown : faChevronUp}
              className="arrow-icon collapse-left"
            />
          </button>
          <div className={`collapse-content ${isEnvironmentallyCollapsed ? 'collapsed' : ''}`}>
            <p>
              We are committed to sustainability and the well-being of our planet. Our cleaning
              practices incorporate environmentally friendly products and methods to minimize our
              ecological footprint while ensuring a healthy and safe environment for our clients.
            </p>
          </div>
        </div>
        </div>
        <div className='col-sm-6'>
        <div className="collapse-container">
          <button
            onClick={() => toggleCollapse(setIsSatisfactionCollapsed)}
            className="collapse-button"
          >
            Customer Satisfaction&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon
              icon={isSatisfactionCollapsed ? faChevronDown : faChevronUp}
              className="arrow-icon collapse-left"
            />
          </button>
          <div className={`collapse-content ${isSatisfactionCollapsed ? 'collapsed' : ''}`}>
            <p>
              Your satisfaction is our priority. We strive to build lasting relationships with our
              clients by consistently delivering high-quality cleaning services and maintaining open
              communication. Your feedback is invaluable to us as we continuously improve and evolve.
            </p>
          </div>
          </div>
        </div>
        </div>
        </div>
      </section>


      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
            <div className="col-md-12 text-center heading-section">
              <h2 className="mb-10">Get in Touch</h2>
              <p className='text-center'>
              Ready to experience the difference that Cleaning With Lucky can make in your space? Contact us today for a consultation, and let us take care of the cleaning, so you can focus on what matters most.
              <br/>Thank you for considering Cleaning With Lucky as your trusted cleaning partner!
              </p>
              </div>

            </div>
            {/* <div className="col-md-5">
              <img src={about_bg} alt="About Us" className="img-fluid" />
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
