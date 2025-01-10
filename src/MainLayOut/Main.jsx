import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Main = () => {
  const location = useLocation();
  console.log(location);
  const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register')
  return (
    <div>
      {noHeaderFooter || <Navbar />}
      <div className="min-h-[calc(100vh-350px)]">
        <Outlet />
      </div>
      {
        noHeaderFooter || <Footer />
      }
    </div>
  );
};

export default Main;
