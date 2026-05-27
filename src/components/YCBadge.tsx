type YCBadgeProps = {
  className?: string;
};

export function YCBadge({ className = "" }: YCBadgeProps) {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <span className="font-mono text-[8.5px] font-light uppercase tracking-[0.32em] text-white/80 md:text-[9.5px]">
        Backed by
      </span>
      <img
        src="/brand/yc-combinator.png"
        alt="Y Combinator"
        className="h-4 w-auto select-none object-contain md:h-[18px]"
        style={{ mixBlendMode: "screen" }}
        draggable={false}
      />
    </div>
  );
}
