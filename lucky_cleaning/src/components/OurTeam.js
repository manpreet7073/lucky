import staff_1 from '../style/images/staff-1.jpg'
import staff_2 from '../style/images/staff-2.jpg'
import staff_3 from '../style/images/staff-3.jpg'

var sectionStyle = {
    backgroundImage: `url(${staff_1})`
};
var sectionStyle1 = {
    backgroundImage: `url(${staff_2})`
};
var sectionStyle2 = {
    backgroundImage: `url(${staff_3})`
};
function Our_Team (){
    return (
        <>
        <section className="ftco-section ftco-no-pt">
			<div className="container">
				<div className="row">
					<div className="col-md-12 col-lg-3 pr-md-4 pb-lg-0 pb-4">
						<div className="heading-section text-center text-lg-left">
	          	<span className="subheading">Team &amp; Staff</span>
	            <h2>Our Team</h2>
	            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
	            <p><a href="#" className="btn btn-secondary">View All Staff</a></p>
	          </div>
					</div>
					<div className="col-md-4 col-lg-3 d-flex">
						<div className="staff">
							<div className="img-wrap d-flex align-items-stretch">
								<div className="img align-self-stretch" style={sectionStyle}></div>
							</div>
							<div className="text pt-3 px-3 pb-4 text-center">
								<h3>Lloyd Wilson</h3>
								<span className="position mb-2">Office Cleaner</span>
								<div className="faded">
									<ul className="ftco-social text-center">
		                <li className=""><a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-twitter"></span></a></li>
		                <li className=""><a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-facebook"></span></a></li>
		                <li className=""><a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-google"></span></a></li>
		                <li className=""><a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-instagram"></span></a></li>
		              </ul>
	              </div>
							</div>
						</div>
					</div>
					<div className="col-md-4 col-lg-3 d-flex">
						<div className="staff">
							<div className="img-wrap d-flex align-items-stretch">
								<div className="img align-self-stretch" style={sectionStyle1}></div>
							</div>
							<div className="text pt-3 px-3 pb-4 text-center">
								<h3>Lloyd Wilson</h3>
								<span className="position mb-2">Office Cleaner</span>
								<div className="faded">
									<ul className="ftco-social text-center">
		                <li className=""><a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-twitter"></span></a></li>
		                <li className=""><a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-facebook"></span></a></li>
		                <li className=""><a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-google"></span></a></li>
		                <li className=""><a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-instagram"></span></a></li>
		              </ul>
	              </div>
							</div>
						</div>
					</div>
					<div className="col-md-4 col-lg-3 d-flex">
						<div className="staff">
							<div className="img-wrap d-flex align-items-stretch">
								<div className="img align-self-stretch" style={sectionStyle2}></div>
							</div>
							<div className="text pt-3 px-3 pb-4 text-center">
								<h3>Lloyd Wilson</h3>
								<span className="position mb-2">Office Cleaner</span>
								<div className="faded">
									<ul className="ftco-social text-center">
		                <li className=""><a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-twitter"></span></a></li>
		                <li className=""><a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-facebook"></span></a></li>
		                <li className=""><a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-google"></span></a></li>
		                <li className=""><a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-instagram"></span></a></li>
		              </ul>
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

export default Our_Team