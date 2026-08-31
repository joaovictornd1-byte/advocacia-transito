import { cn } from "@/lib/utils/cn";
import { LEAD_FORM_STEPS } from "@/lib/types/lead";

export function StepProgress({ currentIndex }: { currentIndex: number }) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs text-muted">
        <span>
          Etapa {currentIndex + 1} de {LEAD_FORM_STEPS.length}
        </span>
        <span className="font-medium text-ink">{LEAD_FORM_STEPS[currentIndex].label}</span>
      </div>
      <div className="mt-2 flex gap-1.5">
        {LEAD_FORM_STEPS.map((step, index) => (
          <div
            key={step.key}
            className={cn(
              "h-1.5 flex-1 rounded-full bg-line transition-colors",
              index <= currentIndex && "bg-accent"
            )}
          />
        ))}
      </div>
    </div>
  );
}
