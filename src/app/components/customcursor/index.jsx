"use client";

import useMousePosition from "@/app/utils/hooks/useMousePosition";
import useMouse from "@react-hook/mouse-position";

import { motion } from "framer-motion";
import React, { Fragment, useEffect, useState } from "react";

const Cursor = ({ animateTracker }) => {
  const mouse = useMousePosition();
  useEffect(() => {
    const cursors = document.querySelectorAll(".cursor");
    const removeCursor = () => {
      if (cursors) {
        cursors[0].style.display = "none";
        cursors[1].style.display = "none";
      }
    };

    const handleMouseMove = () => {
      if (cursors) {
        cursors[0].style.display = "flex";
        cursors[1].style.display = "flex";
      }
    };
    document.body.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseout", removeCursor);
    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseout", removeCursor);
    };
  }, []);

  const mouseTrackerVariant = {
    default: {
      x: mouse.clientX - 16,
      y: mouse.clientY - 16,
    },
    textHover: {
      x: mouse.clientX - 32,
      y: mouse.clientY - 32,
      opacity: 0,
    },
  };

  const mouseTrackerVariant2 = {
    default: {
      x: mouse.clientX - 4,
      y: mouse.clientY - 4,
    },
    textHover: {
      opacity: 1,
      backgroundColor: "rgb(107 118 86)",
      height: 64,
      width: 64,
      fontSize: "18px",
      x: mouse.clientX - 32,
      y: mouse.clientY - 32,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 28,
      },
    },
  };
  const text = {
    textHover: {
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 28,
      },
    },
  };

  return (
    <Fragment>
      <motion.div
        variants={mouseTrackerVariant}
        animate={animateTracker}
        className="hidden cursor h-8 w-8 border border-[#000] rounded-full fixed !z-[999999999]  duration-[100ms] pointer-events-none  "
        // style={{ left: `${x}px`, top: `${y}px` }}
      ></motion.div>
      <motion.div
        animate={animateTracker}
        variants={mouseTrackerVariant2}
        className="hidden justify-center items-center cursor h-2 w-2 bg-[#000] rounded-full fixed !z-[999999999]  duration-[10ms]  pointer-events-none  "
        // style={{ left: `${x}px`, top: `${y}px` }}
      >
        <motion.span
          className="opacity-0 text-white text-xl font-400 "
          variants={text}
          // animate={animateTracker}
        >
          view
        </motion.span>
      </motion.div>
    </Fragment>
  );
};

export function textHover(width) {
  console.log(width);
}

export default Cursor;
