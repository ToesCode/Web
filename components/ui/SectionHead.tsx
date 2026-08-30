import Reveal from "@/components/ui/Reveal";

interface SectionHeadProps {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}

export default function SectionHead({
  eyebrow,
  title,
  description,
  className = "",
}: SectionHeadProps) {
  return (
    <Reveal className={`mb-13 ${className}`}>
      <div className="font-sans text-[13px] font-semibold tracking-wider uppercase text-accent mb-4.5">
        {eyebrow}
      </div>
      <h2 className="font-display font-bold text-[clamp(26px,3.2vw,36px)] leading-snug tracking-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-muted text-base max-w-[52ch]">{description}</p>
      )}
    </Reveal>
  );
}
