import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Cursor = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springX = useSpring(cursorX, { stiffness: 300, damping: 30 });
  const springY = useSpring(cursorY, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16); // Adjust the offset to center the cursor
      cursorY.set(e.clientY - 16); // Adjust the offset to center the cursor
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="cursor absolute top-0 left-0 w-8 h-8 bg-black rounded-full pointer-events-none"
      style={{
        x: springX,
        y: springY,
        mixBlendMode: "difference",
      }}
    ></motion.div>
  );
};

export default Cursor;
