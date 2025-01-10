import { Link } from "react-router-dom";
import Cover from "../../shared/Cover";
import MenuItems from "../../shared/MenuItems";
const ManuCategory = ({ item, title, img }) => {
  console.log("Title:", title);
  console.log(img);
  return (
    <div>
      {title && <Cover img={img} title={title} />}
      <div className="grid md:grid-cols-2 ">
        {item.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
      <div className="justify-center flex my-5">
        <Link to={`/orderShop/${title}`}>
          <button className="btn btn-outline border-0 border-b-4 px-7 bg-red-100 ">
            Order Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ManuCategory;
