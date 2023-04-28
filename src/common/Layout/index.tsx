import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../../components/Footer";
import { LayoutWrapper } from "./style";

function Layout() {
  return (
    <LayoutWrapper>
      <Navbar />
      <Outlet />
      <Footer />
    </LayoutWrapper>
  );
}

export default Layout;
