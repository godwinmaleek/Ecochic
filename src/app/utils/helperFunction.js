// export const getMouseEnterDirection = (element, lastX, lastY) => {
//   const { top, right, bottom, left } = element.getBoundingClientRect();

//   if (lastY <= Math.floor(top)) return "top";
//   if (lastY >= Math.floor(bottom)) return "bottom";
//   if (lastX <= Math.floor(left)) return "left";
//   if (lastX >= Math.floor(right)) return "right";

//   return "unknown";
// };

export const getMouseEnterDirection = (mouse, element) => {
  const { width: w, height: h, left, top } = element.getBoundingClientRect();
  const x = mouse.clientX - left - (w / 2) * (w > h ? h / w : 1);
  const y = mouse.clientY - top - (h / 2) * (h > w ? w / h : 1);
  const direction = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;

  switch (direction) {
    case 0:
      return "top";
    // setDirection();

    case 1:
      return "right";
    // setDirection("right");
    // break;
    case 2:
      return "bottom";
    // setDirection("bottom");
    // break;
    case 3:
      return "left";
    // setDirection("left");
    // break;
    default:
      return "left";
    // setDirection("left");
    // break;
  }
};
