import { easeIn, easeInOut, easeOut, motion } from "framer-motion";
import Image from "next/image";
import { getMouseEnterDirection } from "../utils/helperFunction";
import { useRef, useState } from "react";

import useMousePosition from "../utils/hooks/useMousePosition";
import ProductRating from "./rating";
import Cursor from "./customcursor";
import { useRouter } from "next/navigation";

export default function Product({ productInfo }) {
  const router = useRouter();
  const imgRef = useRef();
  const productCardRef = useRef();
  const { imgSrc, description, price } = productInfo;
  const mouse = useMousePosition();

  const [imgTranslateValue, setImgTranslateValue] = useState({ x: 0, y: 0 });
  const [clipBoxTranslateValue, setClipBoxTranslateValue] = useState({
    x: 0,
    y: 0,
  });
  const [isHovered, setIsHovered] = useState(false);

  function getTranslateDirection(value = 20) {
    const direction = getMouseEnterDirection(mouse, imgRef.current);

    switch (direction) {
      case "left":
        return { x: -value, y: 0 };

      case "right":
        return { x: value, y: 0 };

      case "top":
        return { x: 0, y: -value };

      case "bottom":
        return { x: 0, y: value };

      default:
        return { x: -value, y: 0 };
    }
  }

  const handleHover = () => {
    setIsHovered(true);
    setClipBoxTranslateValue(getTranslateDirection(10));
    setImgTranslateValue(getTranslateDirection(20));
  };

  const imageVariant = {
    initial: {
      x: 0,
      y: 0,
      filter: "grayscale(0%)",
    },
    translate: {
      x: imgTranslateValue.x,
      y: imgTranslateValue.y,

      filter: "grayscale(40%)",

      transition: { ease: easeInOut },
    },
  };

  const clipBoxVariant = {
    initial: {
      opacity: 0,
      rotate: -10,
      x: clipBoxTranslateValue.x,
      y: clipBoxTranslateValue.y,
    },

    translate: {
      x: 0,
      y: 0,
      opacity: 1,
      rotate: 0,

      transition: { ease: easeOut },
    },
  };

  return (
    <motion.div className="w-full" ref={productCardRef}>
      <Cursor />
      <motion.div
        onClick={() => router.push("collection/details")}
        onMouseEnter={() => {
          handleHover();
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        className=" aspect-[3/4] relative overflow-hidden"
      >
        <motion.div
          className="w-full h-full "
          variants={imageVariant}
          initial={"initial"}
          exit={"initial"}
          animate={isHovered ? "translate" : "initial"}
          transition={"transition"}
          ref={imgRef}
        >
          <Image
            className="w-full h-full absolute left-0 top-0 object-cover object-[50% 50%] cursor-pointer"
            style={{
              transform: "scale3d(1.2,1.2,1.2)",
            }}
            height={320}
            width={240}
            src={imgSrc}
            alt={description}
            loading="lazy"
          />
        </motion.div>
        {/* <motion.div
          variants={clipBoxVariant}
          initial={"initial"}
          exit={"initial"}
          animate={isHovered ? "translate" : "initial"}
          transition={"transition"}
          className="product-clip-box_right body-text-lg text-white  absolute size-24 bg-[#81818126] backdrop-blur-sm p-4 flex flex-col bottom-3 right-3 -rotate-12  z-10"
        ></motion.div> */}
        <motion.div
          variants={clipBoxVariant}
          initial={"initial"}
          exit={"initial"}
          animate={isHovered ? "translate" : "initial"}
          transition={"transition"}
          className="product-clip-box_left body-text-lg text-white  absolute size-24 bg-[#81818126] backdrop-blur-sm p-4 flex flex-col bottom-3 left-3  -rotate-12 z-10"
        >
          <div className="flex flex-col items-center gap-[.625rem]">
            <ProductRating height={16} width={16} rating={3} />
            <span className="text-xs font-500 text-black">(206 reviews)</span>
          </div>
        </motion.div>
      </motion.div>
      <div className="pt-4 text">
        <p className="underline text-xl">{description}</p>
        <p className="pt-2 text-base font-500">{price}</p>
      </div>
    </motion.div>
  );
}
