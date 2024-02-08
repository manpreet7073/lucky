import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import image_1 from '../style/images/bg_4.jpg';
import image_2 from '../style/images/bg_2.jpg';
import image_3 from '../style/images/bg_3.jpg';
import image_4 from '../style/images/bg_1.jpg';


var images = [image_1,image_2,image_3,image_4]
var text = ['Cleaning With Lucky: Your Trusted Partner in Clean and Compliant Solutions.','Spotless standards, compliant cleaning.','Beyond clean – compliantly pristine.','Complying with cleanliness, one immaculate space at a time.']
function Carousels(){
        return (
            <>
            <Carousel autoPlay={true} infiniteLoop={true} showArrows={false}  showThumbs={true}>
                {images.map((image, index) => (
                    <div key={index}>
                        <div className="hero-wrap" style={{ backgroundImage: `url(${image})` }}>
                            <div className="overlay"></div>
                            <div className="container">
                                <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-start w-880">
                                    <div className="col-md-6">
                                        <h2 className="subheading">Leave the house cleaning chores to us.</h2>
                                        <h1 className="mb-4">{text[index]}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
            </>
        );
    }
export default Carousels
