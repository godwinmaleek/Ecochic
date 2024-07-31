"use client";

import { Fragment, useState } from "react";
// import Cursor from "./customCursor";
import Header from "./header";
import Nav from "./nav";
import Footer from "./footer";
import Cart from "./Cart";

export default function AbstractApp({
  children,
  setTrackerAnimation,
  trackerAnimation,
}) {
  const [showCart, setShowCart] = useState(false);
  return (
    <Fragment>
      {/* <Cursor animateTracker={trackerAnimation}></Cursor> */}
      <Header></Header>
      <div className="px-16 pb-24 relative">
        <Nav openCart={() => setShowCart(true)} />
        {children}
        <Footer></Footer>
      </div>

      <Cart open={showCart} setOpen={(value) => setShowCart(value)} />
    </Fragment>
  );
}
