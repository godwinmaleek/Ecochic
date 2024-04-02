// import { useEffect, useState } from "react";

// export default function useMousePosition() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   function updateMousePostion(e) {
//     setPosition({ x: e.clientX, y: e.clientY });
//   }
//   useEffect(() => {
//     window.addEventListener("mousemove", updateMousePostion);

//     return () => window.removeEventListener("mousemove", updateMousePostion);
//   }, []);

//   return position;
// }
