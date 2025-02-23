import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ name }) => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center p-8">
        <a href="/">
          <img
            src="/navbar/company.svg"
            alt="company-logo"
            className="w-[13vw] sm:w-[4vw]"
          />
        </a>

        <h1 className="text-[#828282] text-[1.1rem]">Index / {name}</h1>

        <img
          src="/navbar/menu.svg"
          alt="menu"
          className="text-black cursor-pointer"
          onClick={() => setMenu(true)}
        />
      </div>

      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{
              x: "-100%",
              opacity: 0,
              transition: { duration: 1, ease: "easeInOut" },
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed top-0 left-0 bg-white h-full w-full z-50"
          >
            <div className="px-5 py-3 flex justify-between items-center">
              <img src="/navbar/company.svg" alt="company-logo" />
              <RxCross1
                className="text-[2.5rem] cursor-pointer z-50"
                onClick={() => setMenu(false)}
              />
            </div>

            <div className="h-screen flex absolute top-0 w-full sm:flex-row flex-col-reverse">
              <div className="flex p-4 sm:items-center sm:w-[20%] justify-center gap-1 flex-col border-r border-gray-300">
                <p>Dribble</p>
                <p>LinkedIn</p>
                <p>X</p>
                <p>Instagram</p>
              </div>

              <div className="flex p-4 sm:items-center justify-center flex-col sm:w-[35%] border-r border-gray-300">
                <a href="/">
                  <p className="text-[5rem] cursor-pointer">Home</p>
                </a>
                <a href="/contact-us">
                  <p className="text-[5rem] cursor-pointer">Contact</p>
                </a>
              </div>

              <div className="flex items-center justify-center flex-col sm:w-[45%]"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
