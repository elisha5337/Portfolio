import React, { useState, useRef, useEffect } from 'react';

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

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isResizing) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isResizing) handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsResizing(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full overflow-hidden select-none cursor-ew-resize group"
      onMouseDown={() => setIsResizing(true)}
      onTouchStart={() => setIsResizing(true)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
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
