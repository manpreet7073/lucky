import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../style/images/logo.png'


function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
<div className="wrap">
			<div className="container">
				<div className="row justify-content-between">
						<div className="col-12 col-md d-flex align-items-center">
							<p className="mb-0 phone"><span className="mailus">Phone no:</span> <a href="tel:0424-654-233">0424 654 233</a> or <span className="mailus">email us:</span> <a href="mailto:cleaningwithlucky@gmail.com">cleaningwithlucky@gmail.com</a></p>
						</div>
						<div className="col-12 col-md d-flex justify-content-md-end">
							<div className="social-media">
				    		<p className="mb-0 d-flex">
				    			<Link to="/" className="d-flex align-items-center justify-content-center"><span className="fa fa-facebook"><i className="sr-only">Facebook</i></span></Link>
				    			<Link to="/" className="d-flex align-items-center justify-content-center"><span className="fa fa-twitter"><i className="sr-only">Twitter</i></span></Link>
				    			<Link to="/" className="d-flex align-items-center justify-content-center"><span className="fa fa-instagram"><i className="sr-only">Instagram</i></span></Link>
				    			<Link to="/" className="d-flex align-items-center justify-content-center"><span className="fa fa-dribbble"><i className="sr-only">Dribbble</i></span></Link>
				    		</p>
			        </div>
						</div>
				</div>
			</div>
		</div>
    <nav className="navbar navbar-expand-lg navbar-dark ftco-navbar-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img className="w-10" src={logo} alt="Logo" />
          </Link>
          <Link  className="navbar-toggler"
            type="button"
            onClick={toggleMobileMenu}
            aria-controls="navbarNav"
            aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
            aria-label="Toggle navigation">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </Link>
         
          <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" activeclassname="active" onClick={toggleMobileMenu}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about-us" className="nav-link" activeclassname="active" onClick={toggleMobileMenu}>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services" className="nav-link" activeclassname="active" onClick={toggleMobileMenu}>
                  Services
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink to="/pricing" className="nav-link" activeclassname="active" onClick={toggleMobileMenu}>
                  Pricing
                </NavLink>
              </li> */}
              {/* Additional menu items */}
              <li className="nav-item">
                <NavLink to="/contact-us" className="nav-link" activeclassname="active" onClick={toggleMobileMenu}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </>
  );
}

export default Header;
