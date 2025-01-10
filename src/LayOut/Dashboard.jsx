import { FaAd, FaBook, FaCalendar, FaHome, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div  className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu p-4">
          <li>
            {" "}
            <NavLink to="/dashboard/userHome">
            <FaHome />
            User Home</NavLink>
           
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
            <FaCalendar/>
            Reservation</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
            <FaAd/>
            Review</NavLink>
          </li>
          
          <li>
            <NavLink to='/dashboard/cart'>
            <FaShoppingCart/>
            My Cart</NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/books'>
            <FaBook/>
            My Books</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
