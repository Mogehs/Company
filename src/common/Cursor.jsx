import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Cursor = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springX = useSpring(cursorX, { stiffness: 100, damping: 20 });
  const springY = useSpring(cursorY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.pageX - 10);
      cursorY.set(e.pageY - 240);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="cursor fixed top-0 left-0 w-8 h-8 bg-black rounded-full"
      style={{
        x: springX,
        y: springY,
      }}
    ></motion.div>
  );
};

export default Cursor;
