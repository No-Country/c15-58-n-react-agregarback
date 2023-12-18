import image1 from "../../../../assets/banner-holly-grande.webp";
import image2 from "../../../../assets/banner-lourdes-ferro-g.webp";
import image3 from "../../../../assets/banner-manini-el-comandante-sin.webp";
import image4 from "../../../../assets/banner-red-grande.webp";
import { Carousel } from "flowbite-react";

const BannerCarrousel = () => {
  return (
    <div className="h-36 sm:h-64 md:h-80 lg:h-96 rounded-none">
      <Carousel id="carousel">
        <img className="h-full" src={image1} alt="Banner Image 1" />
        <img className="h-full" src={image2} alt="Banner Image 2" />
        <img className="h-full" src={image3} alt="Banner Image 3" />
        <img className="h-full" src={image4} alt="Banner Image 4" />
      </Carousel>
    </div>
  );
};

export default BannerCarrousel;
