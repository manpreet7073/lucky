import bg_2 from '../style/images/hill.jpg'
const sectionStyle = {
  backgroundImage: `url(${bg_2})`
};
function Servicepage(){
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
            <h2>How We Works</h2>
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
                    <i className="fa-new fa fa-area-chart display-5" aria-hidden="true"></i>
              </div>
              <div className="media-body pl-3">
                <h3 className="heading">Area Cleaning</h3>
                <p>maintaining halls and floors free of slip and trip hazards; and removing of waste materials (e.g., paper, cardboard) and other fire hazards from common areas</p>
              </div>
            </div> 
          </div>
          <div className="col-md-6 col-lg-4 services">
            <div className="d-block d-flex">
              <div className="icon d-flex justify-content-center align-items-center">
            		{/* <span className="flaticon-rug></span> */}
                    <i className="fa-new fa fa-leanpub display-5" aria-hidden="true"></i>
              </div>
              <div className="media-body pl-3">
                <h3 className="heading">Airbnb Cleaning</h3>
                <p>He charging of a cleaning fee is a common practice on Airbnb.</p>
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