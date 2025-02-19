import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import Home from "./pages/Home";
import Cursor from "./common/Cursor";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <Cursor />
        <Navbar />
        <Home />
        <Footer />
      </div>
    </>
  );
};

export default App;
