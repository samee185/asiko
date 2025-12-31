import { Outlet, } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";



const Layout = () => {
  
  return (
    <>
        <Navbar />
        <div className="pt-17.5 min-h-[calc(100vh-160px)]">
          <Outlet />
        </div>
        <Footer />
    </>      
  );
};

export default Layout;
