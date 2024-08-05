import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Button from "./button";
import Image from "next/image";
import IconClose from "../utils/Icons/IconClose";
import IconSubtract from "../utils/Icons/IconSubtract";
import IconAdd from "../utils/Icons/IconAdd";
import { AnimatePresence, cubicBezier, motion } from "framer-motion";

const easing = cubicBezier(0.16, 1, 0.3, 1);

export default function Cart({ setOpen, open }) {
  const cartAnimationVariant = {
    hide: {
      x: "100%",
      transition: { duration: 1, ease: easing },
    },
    show: {
      x: 0,
      transition: { duration: 1, ease: easing },
    },
  };

  return (
    <AnimatePresence>
      {open && (
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          className={"relative z-50"}
        >
          <motion.div
            className="fixed inset-0 bg-black/10  backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
          <div className="fixed inset-0">
            <DialogPanel
              as={motion.div}
              variants={cartAnimationVariant}
              initial={"hide"}
              animate={"show"}
              exit={"hide"}
              className={
                "cart-container absolute top-0 right-0 h-[100svh] w-[45rem] bg-white overflow-auto"
              }
            >
              <div className="p-10">
                <div
                  className="cursor-pointer text-right"
                  onClick={() => setOpen(false)}
                >
                  <span className="body-text-md text-black underline">
                    close
                  </span>
                  <span className="body-text-md text-black ml-2">x</span>
                </div>

                <DialogTitle className={"headline-md text-center"}>
                  Cart [1]
                </DialogTitle>

                <div className="mt-[4.625rem]  min-h-full overflow-auto">
                  <CartItem />
                  <CartItem />
                  <CartItem />
                </div>
              </div>

              <div className="sticky bottom-0 grid place-items-center p-10  bg-gradient-to-t from-white via-white to-transparent">
                <Button
                  arrowType={"RIGHT"}
                  className={
                    "border-black bg-white w-[32.9375rem] flex items-center justify-center"
                  }
                  color={"black"}
                >
                  proceed to checkout
                </Button>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}

const CartItem = () => {
  return (
    <div className="grid grid-cols-[7.0625rem_1fr] gap-4 py-6 first:pt-0 border-b border-[#DFDFDF]">
      <div className=" h-[6.25rem] w-[7.0625rem] border border-black">
        <Image
          src={"/img/menEcoChic/1.jpg"}
          alt=""
          height={100}
          width={113}
          className="h-full w-full object-contain"
        />
      </div>
      <div className="flex justify-between mt-[1.0625rem]">
        <div>
          <p className="body-text-md text-black">the yezid overshirt</p>
          <div className="flex gap-x-[1.625rem] pt-3 pb-4">
            <div className="py-2 px-4 border border-black max-w-fit flex items-center gap-x-[.625rem]">
              <span className="body-text-md text-black">size:</span>
              <span className="body-text-md"> medium</span>
            </div>
            <div className="py-2 px-4 border border-black max-w-fit flex items-center gap-x-[.625rem]">
              <span className="body-text-md text-black">color: </span>
              <span
                className="inline-block size-5"
                style={{ backgroundColor: "#0E1214" }}
              />
            </div>
            <div className="py-2 px-4 border border-black max-w-fit flex items-center gap-x-4">
              <IconSubtract className={"cursor-pointer"} />
              <span className="body-text-md text-black">2</span>
              <IconAdd className={"cursor-pointer"} />
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <span className="body-text-lg text-black">$980.00</span>
            <span className="body-text-sm font-300">(after taxes)</span>
          </div>
        </div>
        <div className="size-fit cursor-pointer">
          <IconClose />
        </div>
      </div>
    </div>
  );
};
