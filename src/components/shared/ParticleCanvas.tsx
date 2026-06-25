"use client";

import { useEffect, useRef } from "react";

export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawWave = (
      yOffset: number, 
      amplitude: number, 
      frequency: number, 
      speed: number, 
      color: string, 
      opacity: number,
      thickness: number
    ) => {
      ctx.beginPath();
      ctx.lineWidth = thickness;
      ctx.strokeStyle = color;
      ctx.globalAlpha = opacity;

      const yBase = canvas.height * yOffset;
      
      ctx.moveTo(0, yBase);

      for (let x = 0; x <= canvas.width; x += 10) {
        const y = yBase + Math.sin(x * frequency + time * speed) * amplitude + 
                  Math.cos(x * frequency * 0.5 + time * speed * 0.8) * (amplitude * 0.5);
        ctx.lineTo(x, y);
      }

      ctx.stroke();
    };

    const drawSparkles = () => {
      const sparkleCount = 20;
      ctx.globalAlpha = 0.4;
      for (let i = 0; i < sparkleCount; i++) {
        const x = (Math.sin(time * 0.5 + i) * 0.5 + 0.5) * canvas.width;
        const y = (Math.cos(time * 0.3 + i * 2) * 0.5 + 0.5) * canvas.height;
        const size = Math.random() * 2;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = "#C8A951";
        ctx.fill();
        
        // Add glow
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#C8A951";
      }
      ctx.shadowBlur = 0;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      time += 0.01;

      // Draw multiple overlapping golden waves
      drawWave(0.4, 60, 0.002, 0.5, "#C8A951", 0.15, 1);
      drawWave(0.42, 40, 0.003, 0.7, "#D4AF37", 0.1, 1.5);
      drawWave(0.38, 80, 0.001, 0.3, "#B8860B", 0.05, 2);
      
      drawWave(0.7, 50, 0.002, -0.4, "#C8A951", 0.1, 1);
      drawWave(0.72, 30, 0.004, -0.6, "#D4AF37", 0.08, 1);

      drawSparkles();
      
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
    />
  );
}

