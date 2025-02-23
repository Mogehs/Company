import { FaArrowUp } from "react-icons/fa";
const Footer = ({ name }) => {
  const handleScrollToTop = () => {
    const scrollContainer = document.querySelector("[data-scroll-container]");
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="h-fit mt-10 mb-5">
      {name === "Home" && (
        <div className="flex flex-col items-center">
          <h1 className="text-6xl mt-10 mb-2">Let's Talk</h1>
          <a href="/contact-us">
            <div className="flex justify-center items-center bg-white border border-gray-500 w-27 h-27 rounded-full cursor-pointer">
              <p>Contact</p>
            </div>
          </a>
        </div>
      )}

      <div className="flex flex-col gap-4 mt-20">
        <div className="w-full px-8 flex justify-between items-center text-gray-400">
          <p
            className="text-black flex items-center gap-3 cursor-pointer"
            onClick={handleScrollToTop}
          >
            Back to top <FaArrowUp />
          </p>

          <div className="text-right flex flex-col gap-1">
            <p>Contact</p>
            <p>contact@fourthd.io</p>
          </div>
        </div>
        <div className="w-full px-8 flex justify-between items-center text-gray-400">
          <p className="">Dribble | LinkedIn | X</p>
          <div className="text-right">
            <p>Copyright &copy; FourthD Inc. 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
