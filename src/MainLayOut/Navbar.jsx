import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate(); // useNavigate hook for redirect

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("User logged out successfully!");
        alert("You have logged out successfully.");
        navigate("/"); // Redirect to the homepage after logout
      })
      .catch((error) => {
        console.error("Error during logout:", error.message);
        alert("Error during logout: " + error.message);
      });
  };

  const NavOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/orderShop/salad">OrderShop</Link>
      </li>
      <li>
        <Link to="/secret">Secret</Link>
      </li>
      <li>
       
          <button className="btn bg-gray-600 border-none">
            <FaShoppingCart/>
           <Link to='/'>
           <div className="badge-secondary">+99</div>
           </Link>
          </button>
      
      </li>
    </>
  );

  return (
    <div className="max-w-7xl navbar bg-base-100 fixed top-0 z-10 bg-opacity-30  text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {NavOptions}
          </ul>
        </div>

        <a className="btn btn-ghost text-xl">Bistro-boss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{NavOptions}</ul>
      </div>
      <div className="navbar-end pr-3">
        <div className="flex items-center justify-center gap-2">
          <div className="w-14 h-14 pt-1">
            {user?.photoURL ? (
              <img
                referrerPolicy="no-referrer"
                src={user.photoURL}
                alt="User Avatar"
                className="rounded-full"
              />
            ) : (
              <div className="w-12 h-12 rounded-full border bg-gray-500 flex items-center justify-center">
                <span className="text-white font-bold">U</span>
              </div>
            )}
          </div>
          {user ? (
            <button
              onClick={handleLogout}
              className="btn bg-[rgb(34,193,195)] hover:bg-[rgb(62,153,126)] text-black dark:bg-[rgb(233,30,99)] dark:hover:bg-[rgb(250,82,82)]"
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="/login"
              className="btn bg-[rgb(72,61,139)] hover:bg-[rgb(103,194,115)] text-[rgb(255,255,255)]"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
