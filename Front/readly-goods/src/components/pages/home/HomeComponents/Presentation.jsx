import React from "react";
import Chica_Leyendo from "../../../../assets/homeImage/Chica_Leyendo.png";
import Cupon from "../../../../assets/homeImage/Cupon.png";
import LibrosIngles from "../../../../assets/homeImage/LibrosIngles.png";
const Presentation = () => {
  return (
    <div className="bg-white w-full my-7">
      <div className="bg-black rounded-lg flex-col flex justify-center items-center px-5 sm:flex-row">
        <div className="text-white p-5 w-1/2">
          <h1 className="text-3xl text-cyan-200 p-9 pt-1">
            En Readly Goods...
          </h1>
          <p className="p-2 w-3/4 pl-8">
            Encontrarás la lectura perfecta para satisfacer tus deseos
            literarios.
          </p>
          <p className="p-2 w-3/4 pl-8">
            Ya sea que busques una escapada emocionante, conocimiento
            enriquecedor o simplemente una buena dosis de entretenimiento.{" "}
          </p>
          <p className="p-2 w-3/4 pl-8">Explore nuestro extenso catálogo.</p>
        </div>
        <div className="text-white p-5 rounded w-[60%]">
          <img
            className="w-full object-cover h-80 rounded"
            src={Chica_Leyendo}
            alt="foto_Chica_Leyendo"
          />
        </div>
      </div>

      <div className="flex justify-between mt-10 w-full ">
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
