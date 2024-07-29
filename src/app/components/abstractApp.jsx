"use client";

import { Fragment } from "react";
import Cursor from "./customcursor";
import Header from "./header";
import Nav from "./nav";
import Footer from "./footer";

export default function AbstractApp({
  children,
  setTrackerAnimation,
  trackerAnimation,
}) {
  return (
    <Fragment>
      <Cursor animateTracker={trackerAnimation}></Cursor>
      <Header></Header>
      <div className="px-16 pb-24 relative">
        <Nav></Nav>
        {children}
        <Footer></Footer>
      </div>
    </Fragment>
  );
}
