import Image from "next/image";
import Button from "../button";
import style from "../../components/collectionSection/styles/collectionSection.module.css";

export default function CollectionSection({
  backgroundImageSrc,
  noiseTextureImgSrc,
  rtl,
}) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div
      className={classNames(
        `w-full items-center justify-between font-400 ${style.wrapper} ${
          rtl ? style.rtl : ""
        }`
      )}
    >
      <div
        className={classNames(`w-full h-[579px] bg-cover relative`)}
        style={{
          backgroundImage: `url(${backgroundImageSrc})`,
          backgroundColor: "rgba(69, 82, 95, 0.4)",
        }}
      >
        <div
          className="absolute w-full bg-cover h-full inset-0 flex items-end"
          style={{ backgroundImage: `url(${noiseTextureImgSrc})` }}
        >
          <div className="flex items-center py-16 px-8 text-[32px] text-white">
            men’s fall collection
            <Image
              width={32}
              height={32}
              src={"/img/fluentemojiflatmanbeardlight.png"}
              alt="male emoji"
            ></Image>
          </div>
        </div>
      </div>

      <div className={style.col2}>
        <p className="text-base pb-4 text-[#666666]">
          combining ethics and aesthetics in perfect harmony, sustainable
          fashion emerges as a powerful force shaping a stylish and responsible
          future.
        </p>
        <Button color={"#000"} extraClasses={"border-black"}>
          see collection
        </Button>
      </div>
    </div>
  );
}
