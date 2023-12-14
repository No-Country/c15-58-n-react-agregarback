import Chica_Leyendo from "../../../../assets/homeImage/Chica_Leyendo.png";
import Cupon from "../../../../assets/homeImage/Cupon.png";
import LibrosIngles from "../../../../assets/homeImage/LibrosIngles.png";
import BooksCarrousel from "./BooksCarrousel";
const Presentation = () => {
  return (
    <div className="w-full my-7">
      <div className="flex flex-col items-center justify-center px-5 rounded-lg md:flex-row">
        <div className="w-1/2 p-5 text-black">
          <h1 className="pt-1 text-3xl font-semibold lg:text-5xl text-[#822626] p-9">
            En Readly Goods...
          </h1>
          <p className="w-3/4 p-2 pl-8 text-base lg:text-lg">
          Encuentra la lectura ideal para tus gustos literarios, ya sea una aventura emocionante, conocimiento enriquecedor o entretenimiento, en nuestro amplio catálogo</p>
        </div>
        <div className="text-white p-5 rounded-lg w-[60%]">
          <img
            className="object-cover w-full rounded-lg h-80"
            src={Chica_Leyendo}
            alt="foto_Chica_Leyendo"
          />
        </div>
      </div>
      <BooksCarrousel/>
      <div className="flex justify-between w-full mt-10 ">
        <img
          className="rounded-lg w-[45%]"
          src={LibrosIngles}
          alt="LibreoIngles"
        />

        <img className="rounded-lg  w-[45%]" src={Cupon} alt="LibreoIngles" />
      </div>
    </div>
  );
};

export default Presentation;
