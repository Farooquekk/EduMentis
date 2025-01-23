import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  const cursor = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  
  useEffect(() => {
    const checkIfTouchDevice = () => {
      setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
    };

    checkIfTouchDevice(); 
    window.addEventListener("resize", checkIfTouchDevice); 

    return () => {
      window.removeEventListener("resize", checkIfTouchDevice);
    };
  }, []);

  useEffect(() => {
    if (isTouchDevice || !cursor.current) return; 

    const moveCursor = (e) => {
      gsap.to(cursor.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, [isTouchDevice]);

  
  if (isTouchDevice) return null;

  return (
    <div
      ref={cursor}
      className="fixed w-6 h-6 bg-yellow-500 rounded-full pointer-events-none z-50"
      style={{ mixBlendMode: "difference" }}
    ></div>
  );
};

export default Cursor;
