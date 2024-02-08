import { Link } from "react-router-dom";
import image_1 from '../style/images/image_1.jpg';
import image_2 from '../style/images/image_2.jpg'

var sectionStyle = {
    backgroundImage: `url(${image_1})`
};

var sectionStyle2 = {
    backgroundImage: `url(${image_2})`
  };

function Footer() {
    return (
      <>

<footer className="footer ftco-section">
			<div className="container">
				<div className="row">
					<div className="col-md-6 col-lg-3 mb-4 mb-md-0">
						<h2 className="footer-heading">Cleaning Company</h2>
						<p>Where cleanliness is an art, and your space is the canvas. Perfecting clean, every time.</p>
						<ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-4">
              <li className="ftco-animate"><Link to="/"><span className="fa fa-twitter"></span></Link></li>
              <li className="ftco-animate"><Link to="/"><span className="fa fa-facebook"></span></Link></li>
              <li className="ftco-animate"><Link to="/"><span className="fa fa-instagram"></span></Link></li>
            </ul>
					</div>
          <div className="col-md-6 col-lg-3 pl-lg-5 mb-4 mb-md-0">
						<h2 className="footer-heading">Services</h2>
						<ul className="list-unstyled">
              <li><Link to="/services" className="py-1 d-block">Domestic</Link></li>
              <li><Link to="/services" className="py-1 d-block">Commercial</Link></li>
              <li><Link to="/services" className="py-1 d-block">Airbnb</Link></li>
              <li><Link to="/services" className="py-1 d-block">Area</Link></li>
            </ul>
					</div>
					<div className="col-md-6 col-lg-3 pl-lg-5 mb-4 mb-md-0">
						<h2 className="footer-heading">Quick Links</h2>
						<ul className="list-unstyled">
              <li><Link to="/" className="py-1 d-block">Home</Link></li>
              <li><Link to="/about-us" className="py-1 d-block">About</Link></li>
              <li><Link to="/services" className="py-1 d-block">Services</Link></li>
              <li><Link to="/contact-us" className="py-1 d-block">Contact</Link></li>
            </ul>
					</div>
					<div className="col-md-6 col-lg-3 mb-4 mb-md-0">
						<h2 className="footer-heading">Have a Questions?</h2>
						<div className="block-23 mb-3">
              <ul>
                {/* <li><span className="icon fa fa-map-marker"></span><span className="text">57 Bruce St Rye, Victoria (Australia) 3941</span></li> */}
                <li><a href="tel:0424-654-233"><span className="icon fa fa-phone"></span><span className="text">0424 654 233</span></a></li>
                <li><a href="mailto:cleaningwithlucky@gmail.com"><span className="icon fa fa-paper-plane"></span><span className="text">cleaningwithlucky@gmail.com</span></a></li>
              </ul>
            </div>
					</div>
				</div>
				<div className="row mt-5">
          <div className="col-md-12 text-center">
            <p className="copyright">Copyright ©2024 All rights reserved <i className="fa fa-heart"></i> by<Link to='/'> Cleaning With Lucky</Link>.</p>
          </div>
        </div>
			</div>
		</footer>
      </>
    )}

export default Footer;
