import { Outlet } from "react-router-dom";
import TheNavbar from "../components/TheNavbar";
import Footer from "../components/Footer";

const GuestLayout = () => {
  return (
    <div >
      <TheNavbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default GuestLayout;
