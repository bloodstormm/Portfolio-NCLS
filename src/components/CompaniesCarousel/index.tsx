"use client";
import { cn } from "../../utils/cn";
import React, { useEffect, useState } from "react";
import COMPANIES_DATA from "../../constants/Companies";

export const CompaniesCarousel = ({
  direction = "left",
  speed = "normal",
  className,
}: {
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Duplicar elementos até preencher o espaço visível e mais um pouco
      while (scrollerRef.current.scrollWidth <= containerRef.current.clientWidth * 2) {
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });
      }

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  // Adicionar estilo CSS para animação contínua
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `;
    document.head.appendChild(style);
  }, []);

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  
  // Then in your return statement, replace the repeated <a> tags with:
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full items-center shrink-0 gap-10 py-4 w-max flex-nowrap",
          start && "animate-scroll"
        )}
      >
        {COMPANIES_DATA.map((company) => (
          <a key={company.name} href={company.url} target="_blank">
            <img
              src={company.logo}
              alt={company.name}
              className={`transition-all duration-300 ${company.className}`}
            />
          </a>
        ))}
      </ul>
    </div>
  );
};
