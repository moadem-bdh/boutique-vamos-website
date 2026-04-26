"use client";

type MenuIconProps = {
  open: boolean;
  onClick: () => void;
};

export default function MenuIcon({ open, onClick }: MenuIconProps) {
  return (
    <button onClick={onClick} className="z-50 -mt-2.5 block lg:hidden cursor-pointer">
      <svg viewBox="0 0 45 30" className="h-7 w-auto" xmlns="http://www.w3.org/2000/svg">
        <style>{`
          .bar { transition: all 0.35s cubic-bezier(.4,0,.2,1); transform-origin: center; }
        `}</style>
        <rect
          className="bar"
          x="2.5" y="13" width="40" height="4" rx="2"
          fill="white"
          style={{ transform: open ? "rotate(45deg)" : "translateY(-10px)" }}
        />
        <rect
          className="bar"
          x="2.5" y="13" width="40" height="4" rx="2"
          fill="white"
          style={{ opacity: open ? 0 : 1, transform: open ? "scaleX(0)" : "none" }}
        />
        <rect
          className="bar"
          x="2.5" y="13" width="40" height="4" rx="2"
          fill="white"
          style={{ transform: open ? "rotate(-45deg)" : "translateY(10px)" }}
        />
      </svg>
    </button>
  );
}