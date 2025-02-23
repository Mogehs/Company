import { motion } from "framer-motion";
const Hero = () => {
  return (
    <>
      <div className="h-fit">
        {["we", "craft live", "experiences"].map((alpha, id) => (
          <>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1.8,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="text-[3.2rem] md:text-[6.5rem] lg:text-[10.5vw] text-[#000000] font-bold leading-none md:leading-23 lg:leading-28 xl:leading-30 w-[90%] lg:w-[75%] mx-auto tracking-wider overflow-y-hidden"
              >
                {alpha}
              </motion.h1>
            </div>
          </>
        ))}

        <div className="flex flex-col-reverse md:flex-row mt-10 items-center overflow-hidden gap-10">
          <div className="w-[50%] flex justify-end mr-30 md:mr-0">
            <div className="flex justify-center items-center bg-white border border-gray-500 w-30 h-30 rounded-full">
              <img
                src="/hero/arrow-down-02-stroke-rounded.svg"
                alt="downward"
              />
            </div>
          </div>
          <p className="text-[1.3rem] w-[80%] ml-10 md:ml-0 md:w-[35%] font-medium text-[black]">
            We create mind-blowing visuals, brands, websites and products that
            help startups and innovative companies gain more exposure.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
