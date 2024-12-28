import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-350px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
