import { useEffect } from "react";

export const useOnClickOutside = (ref, callback) => {
  const handleMouseUp = (e) => {
    if (!e.path.includes(ref?.current)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);

    return () => document.removeEventListener("mouseup", handleMouseUp);
  });
};
