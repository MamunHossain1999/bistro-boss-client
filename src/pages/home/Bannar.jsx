import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../../assets/home/01.jpg";
import img2 from "../../assets/home/02.jpg";
import img3 from "../../assets/home/03.png";
import img4 from "../../assets/home/04.jpg";
import img5 from "../../assets/home/05.png";
import img6 from "../../assets/home/06.png";

const Banner = () => {
  return (
    // auto play hower jonno agula use korte hoy showArrows={true} autoPlay={true} infiniteLoop={true} showThumbs={false} but agula use korle thumble ase na
    <Carousel>
      <div>
        <img src={img1} alt="Image 1" />
      </div>
      <div>
        <img src={img2} alt="Image 2" />
      </div>
      <div>
        <img src={img3} alt="Image 3" />
      </div>
      <div>
        <img src={img4} alt="Image 4" />
      </div>
      <div>
        <img src={img5} alt="Image 5" />
      </div>
      <div>
        <img src={img6} alt="Image 6" />
      </div>
    </Carousel>
  );
};

export default Banner;
