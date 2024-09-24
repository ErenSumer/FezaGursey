
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navigation from "./components/Navigation";
import Slide1 from "./components/slides/Slide1";
import Slide2 from "./components/slides/Slide2";
import Slide3 from "./components/slides/Slide3";
import Slide4 from "./components/slides/Slide4";
import Slide5 from "./components/slides/Slide5";
import FezaGurseyAwards from "./components/slides/Awards";
import Slide6 from "./components/slides/Slide6";
const slides = [Slide1, Slide2, Slide3, Slide4, FezaGurseyAwards, Slide5,Slide6];

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {slides.map((Slide, index) => (
          <Route key={index} path={`/FezaGursey/slide/${index + 1}`} element={<Slide />} />
        ))}
        <Route path="*" element={<Slide1 />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="fixed inset-0 bg-dark text-gray-100 font-sans overflow-hidden">
        <Navigation totalSlides={slides.length} />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
