import { Helmet } from "react-helmet-async";
import Bannar from "./Bannar";
import Category from "./category/Category";
import Contact from "./Contact";
import Featured from "./Featured";
import HomeCard from "./HomeCard";
import PopularMenu from "./PopularMenu";
import Testimoniam from "./Testimoniam";
import BgPorallax from "./BgPorallax";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>home</title>
      </Helmet>
      <Bannar />
      <Category />
      <BgPorallax/>
      <PopularMenu />
      <Contact />
      <HomeCard />
      <Featured />
      <Testimoniam />
    </div>
  );
};

export default Home;
