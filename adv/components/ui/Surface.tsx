import { cn } from "@/lib/utils/cn";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-md border border-line bg-white p-6 shadow-card",
        className
      )}
    >
      {children}
    </div>
  );
}

export function Badge({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: "neutral" | "accent" | "warn";
}) {
  const tones: Record<string, string> = {
    neutral: "bg-ink/5 text-ink",
    accent: "bg-accent-light text-accent-dark",
    warn: "bg-[#F7EEDF] text-signal-warn",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",
        tones[tone]
      )}
    >
      {children}
    </span>
  );
}

export function Alert({
  tone = "neutral",
  title,
  children,
}: {
  tone?: "neutral" | "warn";
  title?: string;
  children: React.ReactNode;
}) {
  const tones: Record<string, string> = {
    neutral: "bg-ink/[0.03] border-line text-ink",
    warn: "bg-[#F7EEDF] border-[#E7D2AC] text-[#7A4F17]",
  };
  return (
    <div className={cn("rounded-md border p-4 text-sm leading-relaxed", tones[tone])}>
      {title && <p className="mb-1 font-semibold">{title}</p>}
      {children}
    </div>
  );
}
