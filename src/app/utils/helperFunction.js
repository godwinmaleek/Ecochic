export const getMouseEnterDirection = (element, lastX, lastY) => {
  const { top, right, bottom, left } = element.getBoundingClientRect();

  if (lastY <= Math.floor(top)) return "top";
  if (lastY >= Math.floor(bottom)) return "bottom";
  if (lastX <= Math.floor(left)) return "left";
  if (lastX >= Math.floor(right)) return "right";

  return "unknown";
};
