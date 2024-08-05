import { motion } from "framer-motion";
import { useState } from "react";

export default function ProductInfoAccordion() {
  const [showIndex, setShowIndex] = useState("null");
  const showDetails = {
    initial: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="flex flex-col gap-y-3.5">
      <div className="font-300 body-text-md ">
        <div
          onClick={() => setShowIndex((prev) => (prev === 1 ? null : 1))}
          className="underline z-10 relative cursor-pointer"
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
      <div className="font-300 body-text-md">
        <div
          onClick={() => setShowIndex((prev) => (prev === 2 ? null : 2))}
          className="underline z-10 relative cursor-pointer"
        >
          size guide
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
      <div className="font-300 body-text-md">
        <div
          onClick={() => setShowIndex((prev) => (prev === 3 ? null : 3))}
          className="underline z-10 relative cursor-pointer"
        >
          shipping and returns
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
