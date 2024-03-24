import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Testimonial from "./components/Testimonials";
import Work from "./components/Work";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
