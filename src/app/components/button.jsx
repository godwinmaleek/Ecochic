"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import IconArrowRightStyle from "../utils/Icons/IconArrowRightStyle";
import IconArrowDown from "../utils/Icons/IconArrowDown";

export default function Button({
  children,
  color,
  className,
  arrowType,
  ...rest
}) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const [isHovered, setIsHovered] = useState("");

  const translateArrow = {
    initial: {
      x: 0,
    },
    animate: {
      x: 15,
    },
  };
  return (
    <motion.button
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      {...rest}
      className={classNames(
        "px-4 py-2 border flex items-center text-base font-400" +
          " " +
          `${className}`
      )}
    >
      <span>{children}</span>
      {arrowType == "RIGHT" && (
        <IconArrowRightStyle
          variants={translateArrow}
          initial="initial"
          animate={isHovered ? "animate" : "initial"}
          color={color}
        />
      )}

      {arrowType == "DOWN" && <IconArrowDown />}
    </motion.button>
  );
}
