import React, { useContext } from "react";
import Presentation from "./home/Presentation";

const Home = () => {
  return (
    <div>
      <div className="h-96 text-4xl text-center font-bold p-12">
        Proximamente Carrusel con fotos
      </div>
      <Presentation />
    </div>
  );
};

export default Home;
