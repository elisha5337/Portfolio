import React, { useState, useRef } from 'react';

interface BeforeAfterSliderProps {
  before: string;
  after: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ before, after }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsResizing(true);
    handleMove(e.clientX);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isResizing) handleMove(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsResizing(false);
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const step = 5;

    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setSliderPosition((current) => Math.max(0, current - step));
    }

    if (e.key === 'ArrowRight') {
      e.preventDefault();
      setSliderPosition((current) => Math.min(100, current + step));
    }

    if (e.key === 'Home') {
      e.preventDefault();
      setSliderPosition(0);
    }

    if (e.key === 'End') {
      e.preventDefault();
      setSliderPosition(100);
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full overflow-hidden select-none touch-none cursor-ew-resize group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="group"
      aria-label="Before and after comparison slider"
    >
      {/* After image (background) */}
      <img
        src={after}
        alt="After"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        referrerPolicy="no-referrer"
      />
      
      {/* Before image (clipped) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={before}
          alt="Before"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Slider Line */}
      <div 
        className="absolute inset-y-0 w-0.5 bg-accent shadow-[0_0_10px_rgba(245,158,11,0.5)] z-10 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Slider Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-accent">
          <div className="flex gap-1">
            <div className="w-0.5 h-3 bg-slate-300" />
            <div className="w-0.5 h-3 bg-slate-300" />
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 z-20 px-2 py-1 bg-black/50 text-white text-[8px] font-bold uppercase tracking-widest rounded-sm backdrop-blur-sm transition-opacity group-hover:opacity-100 opacity-50">
        Before
      </div>
      <div className="absolute top-4 right-4 z-20 px-2 py-1 bg-accent/80 text-black text-[8px] font-bold uppercase tracking-widest rounded-sm backdrop-blur-sm transition-opacity group-hover:opacity-100 opacity-50">
        After
      </div>
    </div>
  );
};
