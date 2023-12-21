import image1 from "../../../../assets/banner-holly-grande.webp";
import image2 from "../../../../assets/banner-lourdes-ferro-g.webp";
import image3 from "../../../../assets/banner-manini-el-comandante-sin.webp";
import image4 from "../../../../assets/banner-red-grande.webp";
import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";

const BannerCarrousel = () => {
  return (
    <div className="h-36 sm:h-64 md:h-80 lg:h-96 rounded-none">
      <Carousel id="carousel">
        <Link to="/books/6583a4a9673a15210d1129d0"className="h-full">
          <img  className=" h-full w-full" src={image1} alt="Banner Image 1" />
        </Link>
        <Link to="/books/6583a4fe673a15210d1129db" className="h-full">
          <img  className=" h-full w-full" src={image2} alt="Banner Image 1" />
        </Link>
        <Link to="/books/657f446aff5ec868b28f6e53"className="h-full">
          <img  className=" h-full w-full" src={image3} alt="Banner Image 1" />
        </Link>
        <Link to="/books/6583a5412106cc44fa343a96" className="h-full">
          <img  className=" h-full w-full" src={image4} alt="Banner Image 1" />
        </Link>
      </Carousel>
    </div>
  );
};

export default BannerCarrousel;
