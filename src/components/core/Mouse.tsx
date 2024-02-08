import React, { useEffect, useRef } from "react";

interface MouseProps {}

const Mouse: React.FC<MouseProps> = () => {
  const circleRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const previousMouse = useRef({ x: 0, y: 0 });
  const circle = useRef({ x: 0, y: 0 });
  const currentScale = useRef(0);
  const currentAngle = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.x, y: e.y };
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const tick = () => {
      const deltaMouseX = mouse.current.x - previousMouse.current.x;
      const deltaMouseY = mouse.current.y - previousMouse.current.y;

      previousMouse.current = { ...mouse.current };

      const mouseVelocity = Math.min(
        Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 4,
        150
      );
      const scaleValue = (mouseVelocity / 150) * 0.5;

      currentScale.current += (scaleValue - currentScale.current) * 0.17;

      const angle = (Math.atan2(deltaMouseY, deltaMouseX) * 180) / Math.PI;
      if (mouseVelocity > 20) {
        currentAngle.current = angle;
      }

      circle.current.x += (mouse.current.x - circle.current.x) * 0.17;
      circle.current.y += (mouse.current.y - circle.current.y) * 0.17;

      const translateTransform = `translate(${circle.current.x}px, ${circle.current.y}px)`;
      const scaleTransform = `scale(${1 + currentScale.current}, ${
        1 - currentScale.current
      })`;
      const rotateTransform = `rotate(${currentAngle.current}deg)`;

      if (circleRef.current) {
        circleRef.current.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;
      }

      window.requestAnimationFrame(tick);
    };

    tick();
  }, []);

  return (
    <div
      ref={circleRef}
      className="circle"
      style={{
        position: "absolute",
        width: "50px",
        height: "50px",
        backgroundColor: "transparent",
        border: "1px solid white",
        borderRadius: "50%",
        top: "calc(5px / 2 * -1)",
        left: "calc(50px / 2 * -1)",
      }}
    />
  );
};

export default Mouse;
