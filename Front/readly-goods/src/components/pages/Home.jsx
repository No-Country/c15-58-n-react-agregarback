import React, { useContext } from "react";
import Carrousel from "../ui/Carrousel";

const Home = () => {
  return (
    <div>
      <div className="h-[500px] text-4xl text-center font-bold">
        <Carrousel />
      </div>
      <div className="h-96 text-4xl text-center font-bold">Quienes somos</div>
    </div>
  );
};

export default Home;
