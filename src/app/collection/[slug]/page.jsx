"use client";

import { useState } from "react";

import AbstractApp from "@/app/components/abstractApp";
import Button from "@/app/components/button";
import SignUpNewsLetter from "@/app/components/newsletter";
import ProductRating from "@/app/components/rating";
import FilterButton from "@/app/components/shopCollection/components/button";

import ProductReview from "./ProductReview";
import ProductComments from "./ProductComments";

import Image from "next/image";
import ProductRelatedCollection from "./ProductRelatedCollection";
import ProductInfoAccordion from "./ProductInfoAccordion";

export default function ProductDetails() {
  const [trackerAnimation, setTrackerAnimation] = useState("default");
  return (
    <AbstractApp
      trackerAnimation={trackerAnimation}
      setTrackerAnimation={setTrackerAnimation}
    >
      <div className="flex w-full justify-between mt-10">
        <div className="w-[50%] h-[801px] relative">
          <div
            className="overflow-hidden"
            style={{ height: "801px", width: "646px" }}
          >
            <Image
              className="object-cover"
              loading="lazy"
              width={"646"}
              height={"801"}
              src={"/img/menEcoChic/1.jpg"}
              alt=""
              quality={100}
              style={{ height: "801px", width: "646px" }}
            />
          </div>

          <div className="w-[113px] absolute flex flex-col gap-[10px] top-10 left-4">
            <div
              width={113}
              height={100}
              className="border w-full h-[100px] border-black overflow-hidden absolute"
            >
              <Image
                className="max-w-52 object-contain relative top-[0px] right-[14px]"
                loading="lazy"
                width={200}
                height={140}
                src={"/img/menEcoChic/1.jpg"}
                alt=""
                quality={100}
                style={{ maxHeight: "16rem" }}
              />
            </div>
            <div
              width={113}
              height={100}
              className="border w-full h-[100px] border-black overflow-hidden absolute top-[123px]"
            >
              <Image
                className="max-w-52 object-contain relative top-[-34px] right-[-24px] -rotate-90"
                loading="lazy"
                width={200}
                height={140}
                src={"/img/menEcoChic/1.jpg"}
                alt=""
                quality={100}
                style={{ maxHeight: "16rem" }}
              ></Image>
            </div>

            <div
              width={113}
              height={100}
              className="border border-black overflow-hidden absolute top-[236px]"
            >
              <Image
                className=" object-contain relative "
                loading="lazy"
                width={113}
                height={100}
                src={"/img/menEcoChic/1.jpg"}
                alt=""
                quality={100}
                style={{ height: "6.25rem" }}
              ></Image>
            </div>
          </div>
        </div>

        <div className="w-[40%]">
          <div className="pb-6 border-b border-[#DFDFDF] ">
            <span className="body-text-md font-300">collection&nbsp;/</span>
            {/* <span>&nbsp;men&apos;s fall&nbsp;</span>/ */}
            <span className="body-text-md font-300">
              &nbsp;men’s fall&nbsp;
            </span>
            /
            <span className="body-text-md text-black">
              &nbsp;the yezid overshirt
            </span>
          </div>
          <div className="mt-10">
            <h1 className="font-400 text-[40px] text-black">
              the yezid overshirt
            </h1>
            <p className="text-base font-300 text-[#666] pt-4 leading-8">
              Constructed from premium quality, lightweight fabric, the Yezid
              Overshirt offers unparalleled comfort without compromising on
              durability. Its tailored fit provides a sleek silhouette, making
              it a wardrobe essential for any discerning individual.
            </p>
          </div>

          <div className="flex gap-[11px] my-10">
            <FilterButton>size</FilterButton>
            <div className="flex gap-2">
              <span className="size-10 bg-[#0E1214]"></span>
              <span className="size-10 bg-[#DF9663]"></span>
              <span className="size-10 bg-[#716B53]"></span>
              <span className="size-10 bg-[#974E7C]"></span>
            </div>
          </div>
          <div className="flex items-center gap-[.8125rem]">
            <ProductRating rating={3} />
            <span className="text-sm font-300 text-[#666]">(206 reviews)</span>
          </div>

          <div className="flex gap-x-2 mt-10">
            <span className="text-xl font-400 text-black ">$490.00</span>
            <span className="font-300 text-300 text-[#666]">(after taxes)</span>
          </div>
          <Button
            color={"black"}
            arrowType={"RIGHT"}
            className={
              "w-full flex items-center justify-center border-black mt-7 mb-10"
            }
          >
            add to cart
          </Button>
          <ProductInfoAccordion />
        </div>
      </div>
      <div className=" ">
        <div className="pb-[3.1875rem] border-b border-[#DFDFDF]">
          <ProductReview />
        </div>

        <div className="flex flex-col gap-y-10 py-[3.1875rem]">
          <ProductComments />
          <ProductComments />
        </div>

        <div className="w-full grid place-items-center">
          <Button
            color={"black"}
            arrowType={"DOWN"}
            className="border-black gap-x-[.625rem]"
          >
            read more reviews
          </Button>
        </div>
      </div>

      <ProductRelatedCollection
        trackerAnimation={trackerAnimation}
        setTrackerAnimation={setTrackerAnimation}
      />
      <SignUpNewsLetter />
    </AbstractApp>
  );
}
