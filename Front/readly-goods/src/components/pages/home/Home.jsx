import Carrousel from "./HomeComponents/Carrousel";
import Presentation from "./HomeComponents/Presentation";

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
