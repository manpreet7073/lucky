import React, { useEffect } from 'react';
import bg_2 from '../style/images/hill.jpg'
const sectionStyle = {
  backgroundImage: `url(${bg_2})`
};
function Servicepage(){
  useEffect(() => {
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Australia best cleaning company Cleaning With Lucky';

    document.head.appendChild(metaDescription);

    return () => {
      // Cleanup: Remove the dynamically added meta tag when the component unmounts
      document.head.removeChild(metaDescription);
    };
  }, []);
    return (
        <>
          <section className="hero-wrap hero-wrap-2 bg-st" style={sectionStyle}>
                <div className="overlay"></div>
                <div className="container">
                <div className="row no-gutters slider-text align-items-center justify-content-center">
                    <div className="col-md-8 text-center navbar-brand">
                    <h1 className="mb-4 color-bg">Services</h1>
                    </div>
                </div>
                </div>
            </section>
            <section className="ftco-section">
    	<div className="container">
    		<div className="row justify-content-center pb-5 mb-3">
          <div className="col-md-7 heading-section text-center">
          	<span className="subheading">Services</span>
            <h2>What We Do</h2>
            <p>Welcome to our service! We're excited to explain how it works.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4 services">
            <div className="d-block d-flex">
              <div className="icon d-flex justify-content-center align-items-center">
            		{/* <span className="flaticon-workplace"></span> */}
                    <i className="fa-new fa fa-home display-5" aria-hidden="true"></i>

              </div>
              <div className="media-body pl-3">
                <h3 className="heading">Domestic Cleaning</h3>
                <p>Domestic cleaning generally includes the carrying out of cleaning tasks such as dusting, vacuuming, mopping and cleaning of bathrooms and kitchens.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 services">
          	<div className="d-block d-flex">
              <div className="icon d-flex justify-content-center align-items-center">
            		{/* <span className="flaticon-pool"></span> */}
                    <i className="fa-new fa fa-clone display-5" aria-hidden="true"></i>

              </div>
              <div className="media-body pl-3">
                <h3 className="heading">Commercial Cleaning</h3>
                <p>cleaning that is undertaken by professional cleaners who are hired by a company or organisation</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 services">
            <div className="d-block d-flex">
              <div className="icon d-flex justify-content-center align-items-center">
            		{/* <span className="flaticon-rug></span> */}
                    <i className="fa-new fa fa-briefcase	 display-5" aria-hidden="true"></i>

              </div>
              <div className="media-body pl-3">
                <h3 className="heading">Office Cleaning</h3>
                <p>Gather all necessary cleaning supplies and equipment, including vacuum cleaner, mop, microfiber cloths, all-purpose cleaner, glass cleaner, disinfectant, trash bags, and gloves.</p>
              </div>
            </div> 
          </div>
          <div className="col-md-6 col-lg-4 services">
            <div className="d-block d-flex">
              <div className="icon d-flex justify-content-center align-items-center">
            		{/* <span className="flaticon-rug></span> */}
                    <i className="fa-new fa fa-area-chart display-5" aria-hidden="true"></i>

              </div>
              <div className="media-body pl-3">
                <h3 className="heading">Airbnb Cleaning</h3>
                <p>He charging of a cleaning fee is a common practice on Airbnb.</p>
              </div>
            </div> 
          </div>
          <div className="col-md-6 col-lg-4 services">
            <div className="d-block d-flex">
              <div className="icon d-flex justify-content-center align-items-center">
            		{/* <span className="flaticon-rug></span> */}
                    <i className="fa-new fa fa-heart-o display-5" aria-hidden="true"></i>

              </div>
              <div className="media-body pl-3">
                <h3 className="heading">Aged care Cleaning</h3>
                <p>In the delicate ecosystem of aged care, where comfort and well-being are paramount, cleanliness plays a pivotal role.</p>
              </div>
            </div> 
          </div>
          <div className="col-md-6 col-lg-4 services">
            <div className="d-block d-flex">
              <div className="icon d-flex justify-content-center align-items-center">
            		{/* <span className="flaticon-rug></span> */}
                    <i className="fa-new fa fa-building display-5" aria-hidden="true"></i>

              </div>
              <div className="media-body pl-3">
                <h3 className="heading">Builders Cleaning</h3>
                <p>Clearing and removing construction debris such as wood scraps, packaging materials, nails, screws, and other leftover building materials.</p>
              </div>
            </div> 
          </div>
        </div>
    	</div>
    </section>

        </>
    )
}
export default Servicepage