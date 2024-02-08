import about from '../style/images/about.jpg';
import Carousel from './Carousel'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

var sectionStyle1 = {
    backgroundImage: `url(${about})`
};
function Work(){
		const form = useRef();
	  	const [formErrors, setFormErrors] = useState({
		  to_name: '',
		  user_email: '',
		  user_phone: '',
		  user_address: '',
		  user_service: ''
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
			  newErrors.user_email = 'Email is required';
			  isValid = false;
		  } else {
			  newErrors.user_email = '';
		  }

		//   Validate PhoneNumber
			const PhoneNumberpattern = /^(\+\d{1,2}\s?)?(\(\d{1,4}\))?\s?\d{1,}([-.\s]?\d{1,})*$/;
		  if (!form.current.user_phone.value.trim() || !PhoneNumberpattern.test(form.current.user_phone.value)) {
			newErrors.user_phone = 'vaild Phone number';
			isValid = false;
		} else {
			newErrors.user_phone = '';
		}
		
  
		  // Validate Subject
		  if (!form.current.user_address.value.trim()) {
			  newErrors.user_address = 'Address is required';
			  isValid = false;
		  } else {
			  newErrors.user_address = '';
		  }
  
		  // Validate Message
		  if (!form.current.user_service.value.trim()) {
			  newErrors.user_service = 'Service is required';
			  isValid = false;
		  } else {
			  newErrors.user_service = '';
		  }
  
		  setFormErrors(newErrors);
		  return isValid;
	  };
  
	  const sendEmail = (e) => {
		  e.preventDefault();
  
		  if (validateForm()) {
			  emailjs
				  .sendForm('service_pjp2h5h', 'template_ksafen2', form.current, 'QYbLXO3Pvzfl1O8No')
				  .then(
					  (result) => {
						  setIsFormSubmitted(true);
						  setIsSubmitting(true);  
						  console.log(result.text);
						  // Set a timeout to hide the success message after 3000 milliseconds (3 seconds)
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
					  // Reset the form values
					  form.current.reset();
					  // Reset the formErrors state
					  setFormErrors({
						  to_name: '',
						  user_email: '',
						  user_phone: '',
						  user_address: '',
						  user_service: ''
					  });
				  });
				  
		  }
	  };
    return (
        <>
		<Carousel></Carousel>
	  <section className="ftco-appointment ftco-section ftco-no-pt ftco-no-pb">
			<div className="overlay"></div>
    	<div className="container">
    		<div className="row d-md-flex justify-content-center">
    			<div className="col-md-12">
	    			<div className="wrap-appointment bg-white d-md-flex pl-md-4 pb-5 pb-md-0">
	    				<form ref={form} onSubmit={sendEmail} className="appointment w-100">
	    					<div className="row justify-content-center">
									<div className="col-12 col-md d-flex align-items-center pt-4 pt-md-0">
										<div className="form-group py-md-4 py-2 px-4 px-md-0">
											<label htmlFor="name">Name</label>
				              <input type="text" name="to_name" className="form-control" placeholder="Your Name" />
							  {formErrors.to_name && <p className="text-danger">{formErrors.to_name}</p>}

				            </div>
									</div>
									<div className="col-12 col-md d-flex align-items-center pt-4 pt-md-0">
										<div className="form-group py-md-4 py-2 px-4 px-md-0">
											<label htmlFor="name">Email</label>
				              <input type="email" name="user_email" className="form-control" placeholder="Your Email" />
							  {formErrors.user_email && <p className="text-danger">{formErrors.user_email}</p>}

				            </div>
									</div>
									<div className="col-12 col-md d-flex align-items-center">
										<div className="form-group py-md-4 py-2 px-4 px-md-0">
											<label htmlFor="name">Phone number</label>
				              <input type="text" name="user_phone" className="form-control" placeholder="Phone number" />
							  {formErrors.user_phone && <p className="text-danger">{formErrors.user_phone}</p>}

							</div>
									</div>
									<div className="col-12 col-md d-flex align-items-center">
										<div className="form-group py-md-4 py-2 px-4 px-md-0">
											<label htmlFor="name">Select Services</label>
				    					<div className="form-field">
		          					<div className="select-wrap">
		                      <div className="icon"><span className="fa fa-chevron-down"></span></div>
		                      <select name="user_service" id="" className="form-control">
		                      	<option value="">Select Services</option>
		                        <option value="Domestic">Domestic</option>
		                        <option value="Commercial">Commercial</option>
		                        <option value="Airbnb">Airbnb</option>
		                        <option value="Area">Area</option>
		                      </select>
							  {formErrors.user_service && <p className="text-danger">{formErrors.user_service}</p>}

		                    </div>
				              </div>
				    				</div>
									</div>
									<div className="col-12 col-md d-flex align-items-center">
										<div className="form-group py-md-4 py-2 px-4 px-md-0">
											<label htmlFor="name">Address</label>
				              <textarea name="user_address"
										className="form-control"
										id="address"
										cols="30"
										rows="2"
										placeholder="Address" />
							{formErrors.user_address && <p className="text-danger">{formErrors.user_address}</p>}

				            </div>
									</div>
									<div className="col-12 col-md d-flex align-items-center align-items-stretch">
										<div className="form-group py-md-4 py-2 px-4 px-md-0 d-flex align-items-stretch bg-primary">
				              				<input type="submit" value="Make an Appointment" className="btn btn-primary py-3 px-4" />
											  {/* <input type="submit" value="Send Message" className="btn btn-primary" /> */}
										</div>
									</div>
	    						</div>
								<div id="form-message-success" className={`mb-4 ${isFormSubmitted ? 'text-success' : 'd-none'}`}>
                                	Your Appointment email was sent, thank you!
                            	</div>
		          			</form>
		    		</div>
		    	</div>
    		</div>
    	</div>
    </section>

    <section className="ftco-section ftco-no-pt ftco-no-pb">
    	<div className="container">
    		<div className="row d-flex no-gutters">
    			<div className="col-md-6 d-flex">
    				<div className="img d-flex align-items-center justify-content-center py-5 py-md-0" style={sectionStyle1}>
    					<div className="time-open-wrap">
    						<div className="desc p-4">
		    					<h2>Business Hours</h2>
			              <div className="opening-hours">
			              	<h4>Opening Days:</h4>
			              	<p className="pl-3">
			              		<span><strong>Monday – Friday:</strong> 9am to 20 pm</span>
			              		<span><strong>Saturday :</strong> 9am to 17 pm</span>
			              	</p>
			              	<h4>Vacations:</h4>
			              	<p className="pl-3">
			              		<span>All Sunday Days</span>
			              		<span>All Official Holidays</span>
			              	</p>
			              </div>
		    				</div>
								<div className="desc p-4 bg-secondary">
									<h3 className="heading">For Emergency Cases</h3>
									<span className="phone">0424 654 233 </span>
								</div>
    					</div>
    				</div>
    			</div>
    			<div className="col-md-6 pl-md-5 pt-md-5">
    				<div className="row justify-content-start py-5">
		          <div className="col-md-12 heading-section">
		          	<span className="subheading">Welcome to Cleaning Company</span>
		            <h2 className="mb-4">Let's make you fresher than ever</h2>
		            <p>Welcome to Cleaning With Lucky – Where Fresh Beginnings Meet Immaculate Spaces!"</p>
		          </div>
		        </div>
						<div className="row ftco-counter py-5" id="section-counter">
		          <div className="col-md-6 col-lg-4 d-flex justify-content-center counter-wrap">
		            <div className="block-18">
		              <div className="text">
		                <strong className="number" data-number="45">15+</strong>
		              </div>
		              <div className="text">
		              	<span>Years of <br />Experienced</span>
		              </div>
		            </div>
		          </div>
		          <div className="col-md-6 col-lg-4 d-flex justify-content-center counter-wrap">
		            <div className="block-18">
		              <div className="text">
		                <strong className="number" data-number="2342">100+</strong>
		              </div>
		              <div className="text">
		              	<span>Happy <br />Customers</span>
		              </div>
		            </div>
		          </div>
		          <div className="col-md-6 col-lg-4 d-flex justify-content-center counter-wrap">
		            <div className="block-18">
		              <div className="text">
		                <strong className="number" data-number="30">150+</strong>
		              </div>
		              <div className="text">
		              	<span>Building <br />Cleaned</span>
		              </div>
		            </div>
		          </div>
		        </div>
	        </div>
        </div>
    	</div>
    </section>

        </>
    )
}

export default Work;
