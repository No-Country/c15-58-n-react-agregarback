import BannerCarrousel from "./HomeComponents/BannerCarrousel";
import Presentation from "./HomeComponents/Presentation";

const Home = () => {
  return (
    <main className="w-full">
      <BannerCarrousel />
      <div className="m-auto w-[95%] lg:w-[70%]">
        <div>
          <Presentation />
        </div>
      </div>
    </main>
  );
};
export default Home;
