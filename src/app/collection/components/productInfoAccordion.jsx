"use client";

import { easeInOut, motion } from "framer-motion";
import { useState } from "react";

export default function ProductInfoAccordion() {
  const [showIndex, setIndex] = useState("null");
  const showDetails = {
    // initial: {
    //   opacity: 0,
    //   maxHeight: 0,
    // },
    // show: {
    //   opacity: 1,
    //   maxHeight: 400,
    //   transition: {
    //     opacity: {
    //       duration: 0.5,
    //       delay: 0.3,
    //     },
    //     maxHeight: {
    //       duration: 0.1,
    //       delay: 0.6,
    //     },
    //     ease: easeInOut,
    //   },
    // },

    initial: {
      opacity: 0,
      height: 0,
      //   overflow: "hidden",
      //   transition: {
      //     opacity: { duration: 0.3 },
      //   },
    },
    show: {
      opacity: 1,
      height: "auto", // Use auto to manage height transition smoothly
      transition: {
        opacity: { duration: 0.5 },
        height: { duration: 0.3, delay: 0.3 },
      },
    },
  };
  const handleShowAccordion = (index) => {};
  return (
    <div className="flex flex-col gap-y-3.5">
      <div className="font-300 text-base text-[#666]">
        <div
          onClick={() => setIndex((prev) => (prev === 1 ? null : 1))}
          className="underline"
        >
          materials, care & production
        </div>
        <motion.ul
          variants={showDetails}
          initial="initial"
          animate={showIndex === 1 ? "show" : "initial"}
          className="flex flex-col gap-y-2 mt-2"
        >
          <li>—55% Tencel, 45% Organic Cotton</li>
          <li>— fabric: Kumash Tekstil San, Istanbul, Turkey</li>
          <li>— production: Protex Balti Ab, Tallinn, Estonia</li>
          <li>— design: Nomen Nescio Oy, Helsinki, Finland</li>
        </motion.ul>
      </div>
      <div className="font-300 text-base text-[#666]">
        <div
          onClick={() => setIndex((prev) => (prev === 2 ? null : 2))}
          className="underline"
        >
          materials, care & production
        </div>
        <motion.ul
          variants={showDetails}
          initial="initial"
          animate={showIndex === 2 ? "show" : "initial"}
          className="flex flex-col gap-y-2 mt-2"
        >
          <li>—55% Tencel, 45% Organic Cotton</li>
          <li>— fabric: Kumash Tekstil San, Istanbul, Turkey</li>
          <li>— production: Protex Balti Ab, Tallinn, Estonia</li>
          <li>— design: Nomen Nescio Oy, Helsinki, Finland</li>
        </motion.ul>
      </div>
      <div className="font-300 text-base text-[#666]">
        <div
          onClick={() => setIndex((prev) => (prev === 3 ? null : 3))}
          className="underline"
        >
          materials, care & production
        </div>
        <motion.ul
          variants={showDetails}
          initial="initial"
          animate={showIndex === 3 ? "show" : "initial"}
          className="flex flex-col gap-y-2 mt-2"
        >
          <li>—55% Tencel, 45% Organic Cotton</li>
          <li>— fabric: Kumash Tekstil San, Istanbul, Turkey</li>
          <li>— production: Protex Balti Ab, Tallinn, Estonia</li>
          <li>— design: Nomen Nescio Oy, Helsinki, Finland</li>
        </motion.ul>
      </div>
    </div>
  );
}
