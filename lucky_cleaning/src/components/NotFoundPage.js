// NotFoundPage.js
import about from '../style/images/hill.jpg'
import { Link } from "react-router-dom";

function NotFoundPage () {
  return (
    <>
    <section className="hero-wrap hero-wrap-2 bg-st" style={{ backgroundImage: `url(${about})` }}>
                <div className="overlay"></div>
                <div className="container">
                <div className="row no-gutters slider-text align-items-center justify-content-center">
                    <div className="col-md-8 text-center navbar-brand">
                    <h1 className="mb-4 color-bg">Page Not Found</h1>
                    </div>
                </div>
                </div>
            </section>
            <div className="mb-5 mt-4" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for might be in another dimension.</p>
      {/* Add a link to navigate back to the home page or any other relevant page */}
      <Link to="/">Go to Home</Link>
    </div>
    
    </>
   
  );
};

export default NotFoundPage;
