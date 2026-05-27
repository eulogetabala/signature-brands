interface MarqueeProps {
  text: string;
  fast?: boolean;
  className?: string;
}

export function Marquee({ text, fast, className = "" }: MarqueeProps) {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div className={`inline-flex ${fast ? "animate-marquee-fast" : "animate-marquee"}`}>
        <span className="pr-12">{text}</span>
        <span className="pr-12">{text}</span>
        <span className="pr-12">{text}</span>
        <span className="pr-12">{text}</span>
      </div>
    </div>
  );
}
