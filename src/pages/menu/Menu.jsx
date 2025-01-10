
import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../component/sectionTitle/SectionTitle";
import ManuCategory from "./ManuCategory";
import menuImg from '../../assets/menu/banner3.jpg';
import dessertImg from '../../assets/menu/dessert-bg.jpeg';
import saladImg from '../../assets/menu/salad-bg.jpg';
import pizzaImg from '../../assets/menu/pizza-bg.jpg';
import soupImg from '../../assets/menu/soup-bg.jpg';

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter(item => item.category === 'dessert');
  const soup = menu.filter(item => item.category === 'soup');
  const salad = menu.filter(item => item.category === 'salad');
  const pizza = menu.filter(item => item.category === 'pizza');
  const offered = menu.filter(item => item.category === 'offered');


  return (
    <div>
      <Helmet>
        <title> menu</title>
      </Helmet>
      <Cover img={menuImg} title='our menu' />
      {/* main cover */}
      <SectionTitle
      subHeading={'----Dont miss---'}
      heading={'TODAYS OFFER'}
      ></SectionTitle>
      {/* offered menu items */}
      <ManuCategory item={offered} />
      {/* desserd menu item */}
      <ManuCategory item={dessert} title={'Dessert'} img={dessertImg} />
      <ManuCategory item={salad} title={'salad'} img={saladImg} />
      <ManuCategory item={soup} title={'soup'} img={soupImg} />
      <ManuCategory item={pizza} title={'pizza'} img={pizzaImg} />
   </div>
  );
};

export default Menu;
