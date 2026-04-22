import React, { useRef, useState } from "react";
import { Eye, SlidersHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  className?: string;
}

type PreviewMode = "before" | "after";

const clamp = (value: number) => Math.min(100, Math.max(0, value));

export const BeforeAfterSlider = ({
  before,
  after,
  className = "",
}: BeforeAfterSliderProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isCompareMode, setIsCompareMode] = useState(true);
  const [previewMode, setPreviewMode] = useState<PreviewMode>("before");

  const updateSliderPosition = (clientX: number) => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const rect = container.getBoundingClientRect();
    const nextPosition = ((clientX - rect.left) / rect.width) * 100;
    setSliderPosition(clamp(nextPosition));
  };

  const handlePreviewToggle = () => {
    setPreviewMode((current) => (current === "before" ? "after" : "before"));
    setIsCompareMode(false);
  };

  const handleCompareToggle = () => {
    setIsCompareMode(true);
  };

  const handleComparePointerDown = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    setIsDragging(true);
    updateSliderPosition(event.clientX);
  };

  const handleComparePointerMove = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    if (!isDragging) {
      return;
    }

    updateSliderPosition(event.clientX);
  };

  const endDragging = (event: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) {
      setIsDragging(false);
    }

    try {
      event.currentTarget.releasePointerCapture(event.pointerId);
    } catch {
      // The pointer may already be released on some browsers.
    }
  };

  const handleCompareKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
  ) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setSliderPosition((current) => clamp(current - 5));
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      setSliderPosition((current) => clamp(current + 5));
    }

    if (event.key === "Home") {
      event.preventDefault();
      setSliderPosition(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      setSliderPosition(100);
    }
  };

  const previewSrc = previewMode === "before" ? before : after;
  const previewLabel = previewMode === "before" ? "Original" : "Edited";

  return (
    <div
      ref={containerRef}
      className={`relative h-full w-full overflow-hidden bg-black ${className}`}
    >
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          isCompareMode ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <img
          src={after}
          alt="After image"
          className="absolute inset-0 h-full w-full select-none object-contain"
          draggable={false}
          referrerPolicy="no-referrer"
        />

        <img
          src={before}
          alt="Before image"
          className="absolute inset-0 z-[1] h-full w-full select-none object-contain"
          style={{
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          }}
          draggable={false}
          referrerPolicy="no-referrer"
        />

        <div
          className="absolute inset-y-0 z-[2] w-px bg-white/90 shadow-[0_0_0_1px_rgba(0,0,0,0.5)]"
          style={{ left: `${sliderPosition}%` }}
        />

        <div
          className="absolute top-1/2 z-[3] flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/80 text-white shadow-2xl backdrop-blur-sm"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-white/5">
            <div className="h-3.5 w-0.5 rounded-full bg-white/80" />
          </div>
        </div>

        <div
          role="slider"
          aria-label="Before and after comparison slider"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(sliderPosition)}
          tabIndex={0}
          onPointerDown={handleComparePointerDown}
          onPointerMove={handleComparePointerMove}
          onPointerUp={endDragging}
          onPointerCancel={endDragging}
          onKeyDown={handleCompareKeyDown}
          className="absolute inset-0 z-[4] cursor-ew-resize touch-none outline-none"
        />
      </div>

      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          isCompareMode ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-6">
          <img
            src={previewSrc}
            alt={`${previewLabel} preview`}
            className="max-h-full max-w-full select-none object-contain"
            draggable={false}
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      <div className="absolute right-4 top-4 z-20 flex flex-col items-end gap-2">
        <button
          type="button"
          onClick={handlePreviewToggle}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/65 px-3 py-2 text-[9px] font-black uppercase tracking-[0.28em] text-white/85 backdrop-blur-md transition-colors hover:border-accent/40 hover:bg-accent hover:text-black"
          aria-label={`Preview ${previewMode === "before" ? "edited" : "original"} image`}
        >
          <Eye className="h-3.5 w-3.5" />
          {previewMode === "before" ? "Show Edited" : "Show Original"}
        </button>
      </div>

      {!isCompareMode && (
        <button
          type="button"
          onClick={handleCompareToggle}
          className="absolute bottom-4 left-4 z-20 inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-black/65 px-3 py-2 text-[9px] font-black uppercase tracking-[0.28em] text-white/70 backdrop-blur-md transition-colors hover:border-accent/40 hover:text-white"
        >
          <SlidersHorizontal className="h-3.5 w-3.5 text-accent" />
          Compare
        </button>
      )}
    </div>
  );
};
