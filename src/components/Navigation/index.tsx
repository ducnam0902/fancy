import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import Footer from "src/components/Footer";
import Header from "src/components/Header";

const Navigation = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

Navigation.propTypes = {
  children: PropTypes.node,
};

export default Navigation
