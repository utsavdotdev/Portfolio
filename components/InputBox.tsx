"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type PixelData = {
  x: number;
  y: number;
  r: number;
  color: string;
};

function InputBox({
  placeholders,
  onChange,
  onSubmit,
}: {
  placeholders: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const newDataRef = useRef<PixelData[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [animating, setAnimating] = useState(false);
  const [value, setValue] = useState("");

  const draw = useCallback(() => {
    if (!inputRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 800;
    canvas.height = 800;
    ctx.clearRect(0, 0, 800, 800);
    const computedStyles = getComputedStyle(inputRef.current);

    const fontSize = parseFloat(computedStyles.getPropertyValue("font-size"));
    ctx.font = `${fontSize * 2}px ${computedStyles.fontFamily}`;
    ctx.fillStyle = "#FFF";
    ctx.fillText(value, 16, 40);

    const imageData = ctx.getImageData(0, 0, 800, 800);
    const pixelData = imageData.data;
    const newData: PixelData[] = [];

    for (let t = 0; t < 800; t++) {
      const i = 4 * t * 800;
      for (let n = 0; n < 800; n++) {
        const e = i + 4 * n;
        if (
          pixelData[e] !== 0 &&
          pixelData[e + 1] !== 0 &&
          pixelData[e + 2] !== 0
        ) {
          newData.push({
            x: n,
            y: t,
            r: 1,
            color: `rgba(${pixelData[e]}, ${pixelData[e + 1]}, ${pixelData[e + 2]}, ${pixelData[e + 3]})`,
          });
        }
      }
    }

    newDataRef.current = newData;
  }, [value]);

  useEffect(() => {
    draw();
  }, [value, draw]);

  const animate = (start: number) => {
    const animateFrame = (pos: number = 0) => {
      requestAnimationFrame(() => {
        const newArr: PixelData[] = [];
        for (const current of newDataRef.current) {
          if (current.x < pos) {
            newArr.push(current);
          } else {
            if (current.r <= 0) {
              current.r = 0;
              continue;
            }
            current.x += Math.random() > 0.5 ? 1 : -1;
            current.y += Math.random() > 0.5 ? 1 : -1;
            current.r -= 0.05 * Math.random();
            newArr.push(current);
          }
        }
        newDataRef.current = newArr;
        const ctx = canvasRef.current?.getContext("2d");
        if (ctx) {
          ctx.clearRect(pos, 0, 800, 800);
          for (const t of newDataRef.current) {
            const { x: n, y: i, r: s, color } = t;
            if (n > pos) {
              ctx.beginPath();
              ctx.rect(n, i, s, s);
              ctx.fillStyle = color;
              ctx.strokeStyle = color;
              ctx.stroke();
            }
          }
        }
        if (newDataRef.current.length > 0) {
          animateFrame(pos - 8);
        } else {
          setValue("");
          setAnimating(false);
        }
      });
    };
    animateFrame(start);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !animating) {
      vanishAndSubmit();
    }
  };

  const vanishAndSubmit = () => {
    setAnimating(true);
    draw();

    const inputValue = inputRef.current?.value || "";
    if (inputValue && inputRef.current) {
      const maxX = newDataRef.current.reduce(
        (prev, current) => (current.x > prev ? current.x : prev),
        0
      );
      animate(maxX);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    vanishAndSubmit();
    if (onSubmit) {
      onSubmit(e);
    }
  };

  return (
    <form
      className={cn(
        "flex flex-col sm:flex-row gap-4 w-full relative transition duration-200 rounded-2xl"
      )}
      onSubmit={handleSubmit}
    >
      <canvas
        className={cn(
          "absolute pointer-events-none text-base transform scale-50 top-[13%] md:top-[27%] left-4 origin-top-left filter invert dark:invert-0 pr-25",
          !animating ? "opacity-0" : "opacity-100"
        )}
        ref={canvasRef}
      />
      <input
        onChange={(e) => {
          if (!animating) {
            setValue(e.target.value);
            if (onChange) {
              onChange(e);
            }
          }
        }}
        onKeyDown={handleKeyDown}
        ref={inputRef}
        value={value}
        type="text"
        className={cn(
          "w-full px-6 py-4 rounded-2xl bg-white dark:bg-[#141414] border border-gray-400/20 focus:outline-none focus:ring-2 focus:ring-[#626262] placeholder:text-gray-400 text-lg",
          animating && "text-transparent dark:text-transparent"
        )}
      />
      <button
        type="submit"
        disabled={!value}
        className="px-8 py-4 bg-[#232323] dark:bg-[#252525] text-white font-medium rounded-2xl transition-colors"
      >
        Subscribe
      </button>
      <div className="absolute md:inset-0 top-5 flex items-center rounded-full pointer-events-none">
        {!value && (
          <p className="dark:text-zinc-500 text-sm sm:text-base font-normal text-neutral-500 pl-6 text-left w-full">
            {placeholders}
          </p>
        )}
      </div>
    </form>
  );
}

export default InputBox;
