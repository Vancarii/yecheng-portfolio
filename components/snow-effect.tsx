"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

interface Snowflake {
  x: number;
  y: number;
  radius: number;
  speed: number;
  wind: number;
  opacity: number;
  wobble: number;
  wobbleSpeed: number;
}

function createSnowflake(width: number, height: number, fromTop = false): Snowflake {
  return {
    x: Math.random() * width,
    y: fromTop ? Math.random() * -height : Math.random() * height,
    radius: Math.random() * 3.5 + 1,
    speed: Math.random() * 1.2 + 0.4,
    wind: (Math.random() - 0.5) * 0.5,
    opacity: Math.random() * 0.5 + 0.4,
    wobble: Math.random() * Math.PI * 2,
    wobbleSpeed: Math.random() * 0.015 + 0.005,
  };
}

export default function SnowEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number | null>(null);
  const snowflakesRef = useRef<Snowflake[]>([]);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const opacityRef = useRef(0); // for smooth fade in/out

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isLight = resolvedTheme === "light";

    // Resize canvas to fill viewport
    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener("resize", resize);

    const COUNT = 180;

    // Initialise snowflakes once
    if (snowflakesRef.current.length === 0) {
      snowflakesRef.current = Array.from({ length: COUNT }, () =>
        createSnowflake(canvas.width, canvas.height, false)
      );
    }

    let targetOpacity = isLight ? 1 : 0;

    function animate() {
      if (!canvas || !ctx) return;

      // Smooth fade
      const delta = targetOpacity - opacityRef.current;
      opacityRef.current += delta * 0.04;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const alpha = Math.max(0, Math.min(1, opacityRef.current));

      snowflakesRef.current.forEach((flake) => {
        // Only animate when somewhat visible
        if (alpha > 0.005) {
          flake.wobble += flake.wobbleSpeed;
          flake.y += flake.speed;
          flake.x += flake.wind + Math.sin(flake.wobble) * 0.4;

          // Wrap around
          if (flake.y > canvas.height + flake.radius) {
            Object.assign(flake, createSnowflake(canvas.width, canvas.height, true));
            flake.y = -flake.radius;
          }
          if (flake.x > canvas.width + flake.radius) flake.x = -flake.radius;
          if (flake.x < -flake.radius) flake.x = canvas.width + flake.radius;
        }

        // Draw
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity * alpha})`;
        ctx.shadowBlur = 4;
        ctx.shadowColor = `rgba(200, 230, 255, ${alpha * 0.8})`;
        ctx.fill();
      });

      animRef.current = requestAnimationFrame(animate);
    }

    // Update target when theme changes
    targetOpacity = isLight ? 1 : 0;

    // Start loop
    if (animRef.current) cancelAnimationFrame(animRef.current);
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [mounted, resolvedTheme]);

  if (!mounted) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 10,
      }}
    />
  );
}
