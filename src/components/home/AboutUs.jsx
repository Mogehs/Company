import React from "react";
import Projects from "./our-work/Projects";

const AboutUs = () => {
  return (
    <>
      <div className="my-20">
        <h1 className="ml-10">
          About us <span className="text-blue-600 font-bold">*</span>
        </h1>
        <p className="mt-10 w-[90%] ml-10 text-[1.5rem]">
          Our team artfully blends state-of-the-art technology with our creative
          flair to revolutionize your brand’s digital footprint. We’re not just
          riding the wave of trends; we’re the ones creating them. Our approach
          ensures your brand doesn’t just stand out—it leads the charge in the
          dynamic digital world.
        </p>
      </div>
      <div className="mb-20 mt-30 relative">
        <h1 className="ml-10">
          Our Work <span className="text-blue-600 font-bold">*</span>
        </h1>
        <Projects limit={6} />
      </div>
    </>
  );
};

export default AboutUs;
