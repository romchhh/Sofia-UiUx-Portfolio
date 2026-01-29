"use client";

import Image from "next/image";

const portfolioImages = [
  "Desktop - 1.png",
  "Frame 1.png",
  "Desktop - 2.png",
  "Desktop - 3.png",
  "Desktop - 4.png",
  "Desktop - 5.png",
  "Desktop - 6.png",
  "Desktop - 8.png",
  "Desktop - 9.png",
  "Desktop - 10.png",
  "Desktop - 11.png",
  "Desktop - 12.png",
  "Desktop - 13.png",
];

const INSTAGRAM_URL = "https://t.me/sofiauauidesign";

export default function PortfolioViewer() {
  return (
    <main
      className="w-full cursor-pointer bg-[var(--background)]"
      onClick={() => window.open(INSTAGRAM_URL, "_blank", "noopener,noreferrer")}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          window.open(INSTAGRAM_URL, "_blank", "noopener,noreferrer");
        }
      }}
      role="button"
      tabIndex={0}
      aria-label="Перейти на Telegram @sofiauauidesign"
    >
      {portfolioImages.map((image, index) => (
        <div key={index} className="relative w-full">
          <Image
            src={`/${image}`}
            alt={`Portfolio page ${index + 1}`}
            width={1920}
            height={1080}
            className="pointer-events-none w-full block h-auto"
            priority={index === 0}
            quality={95}
          />
        </div>
      ))}
    </main>
  );
}
