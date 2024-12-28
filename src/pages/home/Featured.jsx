import SectionTitle from "../../component/sectionTitle/SectionTitle";
import featured from "../../assets/home/featured.jpg";
import './Featured.css';
const Featured = () => {
  return (
    <div className="featured-item text-while (condition) {
        
    } pb-4 bg-fixed">
      <SectionTitle
        subHeading={"----Check it out----"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center py-8 px-16 gap-10 d  bg-slate-500 bg-opacity-60">
        <div>
          <img  src={featured} alt="" />
        </div>
        <div>
          <p>Aug 20, 2030</p>
          <p className="uppercase">where can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            impedit pariatur quaerat! Error excepturi vero numquam sed fugiat
            laboriosam rerum, incidunt, nobis, eveniet asperiores ut? Vel
            exercitationem quae eius voluptatum quod sunt rem molestiae
            cupiditate in impedit. Odit, excepturi assumenda.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-3 text-white">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
