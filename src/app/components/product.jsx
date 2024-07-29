import { easeIn, easeOut, motion } from "framer-motion";
import Image from "next/image";
import { getMouseEnterDirection } from "../utils/helperFunction";
import { useRef, useState } from "react";

import useMousePosition from "../utils/hooks/useMousePosition";

export default function Product({
  productInfo,
  handleMouseEnter,
  handleMouseLeave,
}) {
  const imgRef = useRef();
  const productCardRef = useRef();
  const { imgSrc, description, price } = productInfo;
  const mouse = useMousePosition();

  const [translateXValue, setTranslateXValue] = useState(0);
  const [translateYValue, setTranslateYValue] = useState(0);

  function mouseIn() {
    const direction = getMouseEnterDirection(mouse, imgRef.current);
    if (direction === "left") {
      return setTranslateXValue(-18);
    } else if (direction === "right") {
      return setTranslateXValue(18);
    } else if (direction === "top") {
      return setTranslateYValue(-18);
    } else if (direction === "bottom") {
      return setTranslateYValue(18);
    } else return setTranslateXValue(-18);
  }

  const imageVariant = {
    initial: {
      x: 0,
    },

    exit: {
      x: 0,
      y: 0,
    },
    translate: {
      x: translateXValue,
      y: translateYValue,

      filter: "grayscale(50%)",

      transition: { ease: easeOut },
    },
  };

  return (
    <motion.div className="w-full" ref={productCardRef}>
      {/* <div className="h-80 w-60 overflow-hidden relative grid place-items-center">
        <motion.div
          variants={imageVariant}
          initial={"initial"}
          exit={"exit"}
          whileHover={"translate"}
          className="bg-cover bg-no-repeat bg-center w-[115%] h-[115%]"
          style={{
            backgroundImage: `url(${imgSrc})`,
          }}
          ref={imgRef}
          onMouseEnter={() => {
            handleMouseEnter();
            mouseIn();
          }}
          onMouseLeave={() => {
            handleMouseLeave();
            setTranslateXValue(0);
            setTranslateYValue(0);
          }}
        ></motion.div>
      </div> */}
      <Image
        variants={imageVariant}
        animate={"translate"}
        height={320}
        width={240}
        ref={imgRef}
        onMouseEnter={() => {
          handleMouseEnter();
          mouseIn();
        }}
        onMouseLeave={() => {
          handleMouseLeave();
          setTranslateXValue(0);
          setTranslateYValue(0);
        }}
        src={imgSrc}
        alt={description}
        loading="lazy"
      ></Image>
      <div className="pt-4 text">
        <p className="underline text-xl">{description}</p>
        <p className="pt-2 text-base font-500">{price}</p>
      </div>
    </motion.div>
  );
}
