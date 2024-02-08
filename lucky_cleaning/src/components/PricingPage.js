// PricingPage.js
import React from 'react';
import bg_2 from '../style/images/hill.jpg';

const sectionStyle = {
    backgroundImage: `url(${bg_2})`
};
const PricingPage = () => {

  return (
    
    <div>
    <section className="hero-wrap hero-wrap-2" style={sectionStyle}>
                <div className="overlay"></div>
                <div className="container">
                <div className="row no-gutters slider-text align-items-center justify-content-center">
                    <div className="col-md-8 text-center navbar-brand">
                    <h1 className="mb-4 color-bg">Pricing</h1>
                    </div>
                </div>
                </div>
            </section>
            <section className="ftco-section bg-light">
    	<div className="container">
    		<div className="row justify-content-center pb-5 mb-3">
          <div className="col-md-7 heading-section text-center">
          	<span className="subheading mb-3">Price &amp; Plans</span>
            <h2>Choose Your Perfect Plans</h2>
          </div>
        </div>
    		<div className="row">
    			<div className="col-md-6 col-lg-3">
	          <div className="block-7">
	            <div className="text-center">
	            	<div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-shower"></span></div>
	            	<h4 className="heading-2">Starter</h4>
		            <span className="price"><sup>$</sup> <span className="number">49</span></span>
		            
		            <ul className="pricing-text mb-5">
		              <li><span className="fa fa-check mr-2"></span>Bedrooms cleaning</li>
		              <li><span className="fa fa-check mr-2"></span>Vacuuming</li>
		              <li><span className="fa fa-check mr-2"></span>Bathroom cleaning</li>
		              <li><span className="fa fa-check mr-2"></span>Mirrow cleaning</li>
		              <li><span className="fa fa-check mr-2"></span>Livingroom cleaning</li>
		            </ul>

		            <a href="#" className="btn btn-primary px-4 py-3">Get Started</a>
	            </div>
	          </div>
	        </div>
	        <div className="col-md-6 col-lg-3">
	          <div className="block-7 active">
	            <div className="text-center">
	            <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-clone"></span></div>
            	<h4 className="heading-2">Standard</h4>
	            <span className="price"><sup>$</sup> <span className="number">79</span></span>
	            
	            <ul className="pricing-text mb-5">
		              <li><span className="fa fa-check mr-2"></span>Bedrooms cleaning</li>
		              <li><span className="fa fa-check mr-2"></span>Vacuuming</li>
		              <li><span className="fa fa-check mr-2"></span>Bathroom cleaning</li>
		              <li><span className="fa fa-check mr-2"></span>Mirrow cleaning</li>
		              <li><span className="fa fa-check mr-2"></span>Livingroom cleaning</li>
		            </ul>

	            <a href="#" className="btn btn-primary px-4 py-3">Get Started</a>
	            </div>
	          </div>
	        </div>
	        <div className="col-md-6 col-lg-3">
	          <div className="block-7">
	            <div className="text-center">
	            	<div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-snowflake-o"></span></div>
            	<h4 className="heading-2">Premium</h4>
	            <span className="price"><sup>$</sup> <span className="number">109</span></span>
	            
	            <ul className="pricing-text mb-5">
		              <li><span className="fa fa-check mr-2"></span>Bedrooms cleaning</li>
		              <li><span className="fa fa-check mr-2"></span>Vacuuming</li>
		              <li><span className="fa fa-check mr-2"></span>Bathroom cleaning</li>
		              <li><span className="fa fa-check mr-2"></span>Mirrow cleaning</li>
		              <li><span className="fa fa-check mr-2"></span>Livingroom cleaning</li>
		            </ul>

	            <a href="#" className="btn btn-primary px-4 py-3">Get Started</a>
	            </div>
	          </div>
	        </div>
	        <div className="col-md-6 col-lg-3">
	          <div className="block-7">
	            <div className="text-center">
	            	<div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-sign-language"></span></div>
            	<h4 className="heading-2">Platinum</h4>
	            <span className="price"><sup>$</sup> <span className="number">159</span></span>
	            
	            <ul className="pricing-text mb-5">
		              <li><span className="fa fa-check mr-2"></span>Bedrooms cleaning</li>
		              <li><span className="fa fa-check mr-2"></span>Vacuuming</li>
		              <li><span className="fa fa-check mr-2"></span>Bathroom cleaning</li>
		              <li><span className="fa fa-check mr-2"></span>Mirrow cleaning</li>
		              <li><span className="fa fa-check mr-2"></span>Livingroom cleaning</li>
		            </ul>

	            <a href="#" className="btn btn-primary px-4 py-3">Get Started</a>
	            </div>
	          </div>
	        </div>
	      </div>
    	</div>
    </section>
      
    </div>
  );
};

export default PricingPage;
