"use client";

import { Fragment, useState } from "react";
import Product from "./components/product";
import Button from "./components/button";
import CollectionSection from "./components/collectionSection/collectionSection";
import ShopCollection from "./components/shopCollection";
import Image from "next/image";
import CollectionGrid from "./components/shopCollection/components/grid";
import productCollection from "./utils/data/collection.json";
import { motion } from "framer-motion";

import AbstractApp from "./components/abstractApp";
import SignUpNewsLetter from "./components/newsletter";

export default function Home() {
  const [trackerAnimation, setTrackerAnimation] = useState("default");
  return (
    <Fragment>
      <AbstractApp
        trackerAnimation={trackerAnimation}
        setTrackerAnimation={setTrackerAnimation}
      >
        <main>
          <div className="heroBg w-full h-[640px] px-8 py-16 flex items-end text-white bg-no-repeat bg-cover">
            <div className="gap-x-16 grid grid-cols-[60%_auto] w-full items-center">
              <motion.h1 className="text-7xl font-normal inline-block">
                ethics + aesthetics
                <br /> = sustainable fashion.
              </motion.h1>
              <div className="">
                <p className="text-xl pb-4">
                  combining ethics and aesthetics in perfect harmony,
                  sustainable fashion emerges as a powerful force shaping a
                  stylish and responsible future.
                </p>

                <Button className="text-base">explore all</Button>
              </div>
            </div>
          </div>

          <section className="pt-40">
            <h3 className="flex items-center text-[32px] font-400">
              fall into autumn in style.
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.716 17.8029L27.396 17.3629C27.3637 17.3559 27.3335 17.3413 27.3079 17.3205C27.2822 17.2997 27.2617 17.2732 27.2481 17.2431C27.2345 17.213 27.2282 17.1801 27.2295 17.1471C27.2309 17.1141 27.24 17.0818 27.256 17.0529L29.416 13.5829C29.4369 13.5504 29.4483 13.5128 29.449 13.4741C29.4497 13.4355 29.4396 13.3974 29.4199 13.3642C29.4002 13.331 29.3716 13.3039 29.3373 13.286C29.3031 13.2681 29.2645 13.2601 29.226 13.2629L25.156 13.6329C25.016 13.6429 24.896 13.5129 24.936 13.3729L25.576 11.1329C25.5865 11.0928 25.5848 11.0504 25.571 11.0112C25.5572 10.972 25.5321 10.9379 25.4987 10.9132C25.4654 10.8884 25.4254 10.8742 25.3839 10.8724C25.3424 10.8706 25.3014 10.8812 25.266 10.9029L20.916 13.6529C20.766 13.7429 20.576 13.6229 20.596 13.4529L21.876 4.12293C21.896 3.95293 21.716 3.82293 21.566 3.92293L18.276 5.92293C18.176 5.98293 18.036 5.94293 17.986 5.84293L16.126 2.11293C16.1085 2.07892 16.082 2.05038 16.0494 2.03046C16.0167 2.01054 15.9792 2 15.941 2C15.9028 2 15.8653 2.01054 15.8326 2.03046C15.8 2.05038 15.7735 2.07892 15.756 2.11293L13.896 5.84293C13.846 5.95293 13.706 5.99293 13.606 5.93293L10.206 3.92293C10.056 3.83293 9.86599 3.96293 9.89599 4.13293L11.526 13.4529C11.556 13.6229 11.366 13.7529 11.216 13.6629L6.60599 10.8929C6.44599 10.7929 6.24599 10.9429 6.29599 11.1229L6.94599 13.3829C6.98599 13.5229 6.87599 13.6629 6.72599 13.6429L2.65599 13.2729C2.48599 13.2529 2.37599 13.4429 2.46599 13.5929L4.62599 17.0629C4.64502 17.0912 4.65651 17.1238 4.65937 17.1578C4.66224 17.1918 4.65638 17.2259 4.64235 17.2569C4.62833 17.288 4.6066 17.3149 4.57924 17.3352C4.55187 17.3555 4.51978 17.3685 4.48599 17.3729L2.16599 17.8129C1.98599 17.8429 1.93599 18.0829 2.09599 18.1929L8.63599 22.4829C8.80599 22.5929 8.84599 22.8129 8.73599 22.9829L6.80599 25.7329C6.71599 25.8629 6.84599 26.0429 6.99599 25.9829L15.376 22.9229C15.736 22.7929 16.136 22.7929 16.496 22.9229L24.876 25.9829C25.026 26.0429 25.166 25.8629 25.066 25.7329L23.136 22.9829C23.1094 22.9436 23.0909 22.8995 23.0815 22.8529C23.0721 22.8064 23.0721 22.7585 23.0814 22.712C23.0907 22.6655 23.1092 22.6213 23.1357 22.5819C23.1622 22.5426 23.1963 22.509 23.236 22.4829L29.776 18.1929C29.946 18.0729 29.896 17.8329 29.716 17.8029Z"
                  fill="#F8312F"
                />
                <path
                  d="M15.946 11.2734C16.2112 11.2734 16.4655 11.3788 16.6531 11.5663C16.8406 11.7539 16.946 12.0082 16.946 12.2734V20.3934L22.389 17.5934C22.6249 17.4721 22.8993 17.4494 23.1519 17.5305C23.4045 17.6115 23.6146 17.7895 23.736 18.0254C23.8573 18.2613 23.88 18.5358 23.7989 18.7884C23.7179 19.041 23.5399 19.2511 23.304 19.3724L16.946 22.6424V28.9724C16.946 29.2377 16.8406 29.492 16.6531 29.6795C16.4655 29.8671 16.2112 29.9724 15.946 29.9724C15.6807 29.9724 15.4264 29.8671 15.2389 29.6795C15.0513 29.492 14.946 29.2377 14.946 28.9724V22.6424L8.58896 19.3724C8.35305 19.2511 8.17501 19.041 8.09399 18.7884C8.01297 18.5358 8.03563 18.2613 8.15696 18.0254C8.2783 17.7895 8.48838 17.6115 8.74099 17.5305C8.9936 17.4494 9.26805 17.4721 9.50396 17.5934L14.946 20.3934V12.2734C14.946 12.0082 15.0513 11.7539 15.2389 11.5663C15.4264 11.3788 15.6807 11.2734 15.946 11.2734Z"
                  fill="#CA0B4A"
                />
              </svg>
            </h3>

            <CollectionSection
              headText={"men’s fall collection"}
              backgroundImageSrc={"img/autumnstyle.jpg"}
              noiseTextureImgSrc={"img/MaleNoiseTexture.png"}
            ></CollectionSection>

            <div className="mt-20">
              <CollectionGrid>
                {productCollection.maleProduct.map((product, key) => {
                  return (
                    <Product
                      handleMouseEnter={() => setTrackerAnimation("textHover")}
                      handleMouseLeave={() => setTrackerAnimation("default")}
                      key={key}
                      productInfo={product}
                    />
                  );
                })}
              </CollectionGrid>
            </div>
          </section>

          <section className="pt-40">
            <CollectionSection
              rtl={true}
              backgroundImageSrc={"img/womenfall.jpg"}
              noiseTextureImgSrc={"img/FemaleNoiseTexture.png"}
            ></CollectionSection>

            <div className=" mt-20">
              <CollectionGrid>
                {productCollection.femaleProduct.map((product, key) => {
                  return (
                    <Product
                      handleMouseEnter={() => setTrackerAnimation("textHover")}
                      handleMouseLeave={() => setTrackerAnimation("default")}
                      key={key}
                      productInfo={product}
                    />
                  );
                })}
              </CollectionGrid>
            </div>
          </section>

          <ShopCollection
            handleMouseEnter={() => setTrackerAnimation("textHover")}
            handleMouseLeave={() => setTrackerAnimation("default")}
          />

          <section className="relative mt-40 pt-36">
            <Image
              className="absolute top-0 right-0"
              height={400}
              width={400}
              src={"/img/Sustainability-icon-big.png"}
              alt=""
            />

            <div className="text-center w-full relative z-2">
              <p className="font-400 text-[32px] w-[70%] mx-auto">
                “the Trailblazing Brand Making a Positive Impact on Our
                Planet!&quot;
              </p>
              <p className="font-300 mt-8 text-xl">- Style Weekly</p>
            </div>

            <div className="flex justify-between gap-x-20 mt-44 z-2 relative items-start">
              <div>
                <h4 className="text-2xl font-600">
                  Uncompromising Sustainability
                </h4>
                <p className="text-base font-400 text-[#666666] pt-4">
                  EcoChic&apos;s unwavering commitment extends from eco-friendly
                  materials to ethical practices, prioritizing the planet at
                  every step.
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-600">Inspiring Change</h4>
                <p className="text-base font-400 text-[#666666] pt-4">
                  EcoChic empowers individuals to be agents of a fashion
                  revolution, making conscious choices that lead to a greener
                  and more sustainable future.
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-600">Fashion with a Conscience</h4>
                <p className="text-base font-400 text-[#666666] pt-4">
                  Blending innovative designs and eco-consciousness, EcoChic
                  sets the trend for sustainable style that makes no
                  compromises.
                </p>
              </div>
            </div>
          </section>

          <section className="w-3/4 grid grid-cols-[66%_auto] gap-x-5 items-end mt-[12.5rem]">
            <div className="h-80 bg-[url('/img/Rectangle6.jpg')] bg-center bg-cover"></div>
            <div>
              <p className="font-400 text-base text-[#666]">
                combining ethics and aesthetics in perfect harmony, sustainable
                fashion emerges.
              </p>
              <div className="flex items-center mt-5">
                <span>learn how we do it</span>
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 19.5C16 18.758 16.733 17.65 17.475 16.72C18.429 15.52 19.569 14.473 20.876 13.674C21.856 13.075 23.044 12.5 24 12.5M24 12.5C23.044 12.5 21.855 11.925 20.876 11.326C19.569 10.526 18.429 9.479 17.475 8.281C16.733 7.35 16 6.24 16 5.5M24 12.5L-2.86102e-06 12.5"
                    stroke={"black"}
                  />
                </svg>
              </div>
            </div>
          </section>

          <section className="w-7/12 grid grid-cols-[auto_56%] gap-x-5 items-center mt-[7.5rem] ml-auto">
            <div>
              <p className="font-400 text-base text-[#666]">
                combining ethics and aesthetics in perfect harmony, sustainable
                fashion emerges.
              </p>
              <div className="flex items-center mt-5">
                <span>learn how we do it</span>
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 19.5C16 18.758 16.733 17.65 17.475 16.72C18.429 15.52 19.569 14.473 20.876 13.674C21.856 13.075 23.044 12.5 24 12.5M24 12.5C23.044 12.5 21.855 11.925 20.876 11.326C19.569 10.526 18.429 9.479 17.475 8.281C16.733 7.35 16 6.24 16 5.5M24 12.5L-2.86102e-06 12.5"
                    stroke={"black"}
                  />
                </svg>
              </div>
            </div>
            <div className="h-[30rem] bg-[url('/img/Rectangle7.jpg')] bg-center bg-cover" />
          </section>

          <SignUpNewsLetter />
        </main>
      </AbstractApp>
    </Fragment>
  );
}
