import { useEffect, useRef } from "react";
import "./AnimatedBackground.css";

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let offset = 0;

    const squareSize = 100;
    const lineWidth = 1;
    const lineColor = "rgba(43, 67, 99, 0.16)";
    const speed = 0.4;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = lineWidth;

      const maxDim = canvas.width + canvas.height;

      for (let i = -maxDim; i < maxDim * 2; i += squareSize) {
        const x = i + offset;
        ctx.beginPath();
        ctx.moveTo(x + canvas.height, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let i = -maxDim; i < maxDim * 2; i += squareSize) {
        const x = i - offset;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x + canvas.height, canvas.height);
        ctx.stroke();
      }
    };

    const animate = () => {
      offset -= speed;
      if (offset <= -squareSize) offset = 0;
      drawGrid();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => setCanvasSize();
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="animated-canvas" />;
};

export default AnimatedBackground;