import { Link, useLocation } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import PropTypes from "prop-types";

function Navigation({ totalSlides }) {
  const location = useLocation();
  const currentSlide = parseInt(location.pathname.split("/").pop()) || 1;

  const isFirstSlide = currentSlide === 1;
  const navBackgroundClass = isFirstSlide
    ? "bg-gray-800 bg-opacity-80"
    : "bg-white bg-opacity-10";

  const buttonClass = isFirstSlide
    ? "bg-gray-700 hover:bg-gray-600"
    : "bg-white bg-opacity-20 hover:bg-opacity-30";

  return (
    <nav
      className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 flex justify-between items-center p-4 ${navBackgroundClass} backdrop-filter backdrop-blur-lg rounded-full z-50`}
    >
      <Link
        to={`/FezaGursey/slide/${Math.max(1, currentSlide - 1)}`}
        className={`p-2 rounded-full ${buttonClass} transition-colors ${
          currentSlide === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </Link>
      <div className="text-sm font-medium mx-4">
        {currentSlide} / {totalSlides}
      </div>
      <Link
        to={`/FezaGursey/slide/${Math.min(totalSlides, currentSlide + 1)}`}
        className={`p-2 rounded-full ${buttonClass} transition-colors ${
          currentSlide === totalSlides ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <ChevronRightIcon className="w-6 h-6" />
      </Link>
    </nav>
  );
}

Navigation.propTypes = {
  totalSlides: PropTypes.number.isRequired,
};

export default Navigation;
