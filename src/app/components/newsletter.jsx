import { useState } from "react";
import Button from "./button";
import { motion } from "framer-motion";

export default function SignUpNewsLetter() {
  const [animateFullName, setAnimateFullName] = useState(false);
  const [animateEmail, setAnimateEmail] = useState(false);

  const moveLabel = {
    initial: {
      y: 0,
      fontSize: "1rem",
    },
    animate: {
      y: -16,
      fontSize: ".875rem",
    },
    transition: {
      duration: 0.3,
      type: "inertia",
    },
  };

  return (
    <section className="mt-40 flex justify-between px-[7.5rem] py-[6.25rem] bg-cover bg-center bg-[linear-gradient(to_right_bottom,rgba(255,255,255,0.6),rgba(255,255,255,0.6)),url('/img/Rectangle.jpg')] ">
      <div className="text-[2.5rem] font-600">
        never miss out on anything.
        <br />
        stay updated.
      </div>
      <form action="" className="w-80 font-400 pt-[6.25rem]">
        <div className="relative">
          <motion.label
            variants={moveLabel}
            animate={animateFullName ? "animate" : "initial"}
            transition={"transition"}
            htmlFor="full_name"
            className="text-base absolute bottom-2 pointer-events-none"
          >
            full name
          </motion.label>
          <input
            autoComplete="true"
            onFocus={() => setAnimateFullName(true)}
            onBlur={(e) => {
              if (!e.target.value) setAnimateFullName(false);
            }}
            className="border-b-2 border-black bg-transparent w-full outline-0 border-0"
            type="text"
            name="full_name"
          />
        </div>
        <div className="relative mt-8">
          <motion.label
            variants={moveLabel}
            animate={animateEmail ? "animate" : "initial"}
            transition={"transition"}
            htmlFor="email"
            className="text-base absolute bottom-2 pointer-events-none"
          >
            email address
          </motion.label>
          <input
            autoComplete="true"
            onFocus={() => setAnimateEmail(true)}
            onBlur={(e) => {
              if (!e.target.value) setAnimateEmail(false);
            }}
            className="border-b-2 border-black bg-transparent w-full outline-0 border-0"
            type="email"
            name="email"
          />
        </div>
        <Button
          color={"black"}
          className="border-black mt-10"
          arrowType={"RIGHT"}
        >
          sign up to our newsletter
        </Button>
      </form>
    </section>
  );
}
