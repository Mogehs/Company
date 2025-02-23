import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import Home from "./pages/Home";
import "./App.css";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import useLocomotiveScroll from "./useLocomotiveScroll";
import ContactUs from "./pages/ContactUs";
import { ToastContainer } from "react-toastify";
import Cursor from "./common/Cursor";

const MainLayout = () => {
  useLocomotiveScroll();

  const location = useLocation();
  const navbarProps = {
    name: location.pathname === "/contact-us" ? "Contact" : "Home",
  };
  const footerProps = {
    name: location.pathname === "/contact-us" ? "Contact" : "Home",
  };

  return (
    <div
      id="main-container"
      data-scroll-container
      className="lg:mx-auto lg:max-w-7xl"
    >
      <ToastContainer position="top-right" autoClose={3000} />
      <Navbar {...navbarProps} />
      <Outlet />
      <Footer {...footerProps} />
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
