import { easeIn, motion } from "framer-motion";
import Image from "next/image";
import { getMouseEnterDirection } from "../utils/helperFunction";
import { useEffect, useRef, useState } from "react";
import useMouse from "@react-hook/mouse-position";
import useMousePosition from "../utils/hooks/useMousePosition";

export default function Product({
  productInfo,
  handleMouseEnter,
  handleMouseLeave,
}) {
  const imgRef = useRef();
  const productCardref = useRef();
  const { imgSrc, description, price } = productInfo;
  const mouse = useMousePosition();

  const [translateXValue, setTranslateXValue] = useState(0);
  const [translateYValue, setTranslateYValue] = useState(0);

  function mouseIn() {
    const direction = getMouseEnterDirection(
      imgRef.current,
      mouse.clientX,
      mouse.clientY
    );

    if (direction === "left") {
      return setTranslateXValue(-15);
    } else if (direction === "right") {
      return setTranslateXValue(15);
    } else if (direction === "top") {
      return setTranslateYValue(-15);
    } else if (direction === "bottom") {
      return setTranslateYValue(15);
    } else return 0;
  }

  const imageVariant = {
    translate: {
      x: translateXValue,
      y: translateYValue,
      scaleX: 1.1,
      scaleY: 1.1,
      scaleZ: 1.1,
      filter: "grayscale(40%)",

      transition: { ease: easeIn },
    },
  };

  return (
    <motion.div className="w-full" ref={productCardref}>
      <div className="h-80 w-60 overflow-hidden relative">
        <motion.div
          variants={imageVariant}
          whileHover={"translate"}
          className="bg-cover bg-no-repeat bg-center w-full h-full absolute left-0 top-0"
          style={{
            backgroundImage: `url(${imgSrc})`,
            // transform: "scale3d(1.3,1.3,1.3)",
          }}
          // style={{  }}
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
      </div>
      {/* <Image
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
      ></Image> */}
      <div className="pt-4 text">
        <p className="underline text-xl">{description}</p>
        <p className="pt-2 text-base font-500">{price}</p>
      </div>
    </motion.div>
  );
}
