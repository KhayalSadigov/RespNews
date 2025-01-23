import { Outlet } from "react-router-dom";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import NavModal from "../Layout/NavModal";
import UpWard from "../Layout/UpBtn";
import CategoryBtn from "../Layout/CategoryBtn";

function MainRout() {
  return (
    <>
      <NavModal />
      <Header />
      <Outlet />
      <Footer />
      <UpWard />
      <CategoryBtn/>
    </>
  );
}

export default MainRout;
