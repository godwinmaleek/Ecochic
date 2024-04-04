import useMouse from "@react-hook/mouse-position";
import { useEffect, useState } from "react";

export default function useMousePosition(element = null, options = null) {
  const [pageBody, setPageBody] = useState(null);

  const mouse = useMouse(pageBody, {
    ...options,
  });

  useEffect(() => {
    if (element) setPageBody(element);
    else {
      setPageBody(document.body);
    }
  }, [element]);

  return mouse;
}
