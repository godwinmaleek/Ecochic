import { motion } from "framer-motion";
import Image from "next/image";

export default function Product({
  productInfo,
  handleMouseEnter,
  handleMouseLeave,
}) {
  const { imgSrc, description, price } = productInfo;

  return (
    <motion.div className="w-full">
      <Image
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
        width={240}
        height={320}
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
