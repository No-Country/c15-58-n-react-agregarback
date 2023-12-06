import Carrousel from "./HomeComponents/Carrousel";
import Presentation from "./HomeComponents/Presentation";

const Home = () => {
  return (
    <main className="w-full">
      <Carrousel />
      <div className="w-3/5	m-auto">
        <div>
          <Presentation />
        </div>
      </div>
    </main>
  );
};
export default Home;
