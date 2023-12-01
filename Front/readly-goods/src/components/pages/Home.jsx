import React, { useContext } from "react";
import Carrousel from "../ui/Carrousel";
import Presentation from "./home/Presentation";

const Home = () => {
  return (
    <div>
      <div className="h-[500px] text-4xl text-center font-bold">
        <Carrousel />
      </div>
      <Presentation />
    </div>
  );
};
export default Home;
