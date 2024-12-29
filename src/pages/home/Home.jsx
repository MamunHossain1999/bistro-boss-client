import Bannar from "./Bannar";
import Category from "./category/Category";
import Contact from "./Contact";
import Featured from "./Featured";
import HomeCard from "./HomeCard";
import PopularMenu from "./PopularMenu";
import Testimoniam from "./Testimoniam";

const Home = () => {
  return (
    <div>
      <Bannar />
      <Category />
      <PopularMenu />
      <Contact/>
      <HomeCard />
      <Featured />
      <Testimoniam />
    </div>
  );
};

export default Home;
