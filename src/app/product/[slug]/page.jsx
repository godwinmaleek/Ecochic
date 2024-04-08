"use client";

import AbstractApp from "@/app/components/abstractApp";

import { useState } from "react";

export default function ProductDetails() {
  const [trackerAnimation, setTrackerAnimation] = useState("default");
  return (
    <AbstractApp
      trackerAnimation={trackerAnimation}
      setTrackerAnimation={setTrackerAnimation}
    >
      <div>
        <div></div>
        <div></div>
      </div>
    </AbstractApp>
  );
}
