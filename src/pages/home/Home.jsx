
import Bannar from "./Bannar";
import Category from "./category/Category";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Testimoniam from "./Testimoniam";

const Home = () => {
    return (
        <div>
            <Bannar/>
            <Category/>
            <PopularMenu/>
            <Featured/>
            <Testimoniam/>
        </div>
    );
};

export default Home;