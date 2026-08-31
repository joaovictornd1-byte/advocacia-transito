import { cn } from "@/lib/utils/cn";
import type { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from "react";

type FieldWrapperProps = {
  label: string;
  htmlFor: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
};

export function FieldWrapper({ label, htmlFor, error, hint, required, children }: FieldWrapperProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-ink">
        {label} {required && <span className="text-accent-dark">*</span>}
      </label>
      {children}
      {hint && !error && <p className="text-xs text-muted">{hint}</p>}
      {error && (
        <p role="alert" className="text-xs text-[#B3261E]">
          {error}
        </p>
      )}
    </div>
  );
}

const inputBase =
  "w-full rounded-sm border border-line bg-white px-3.5 py-2.5 text-[15px] text-ink placeholder:text-muted/70 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors";

export function TextInput(
  props: InputHTMLAttributes<HTMLInputElement> & { hasError?: boolean }
) {
  const { hasError, className, ...rest } = props;
  return (
    <input
      className={cn(inputBase, hasError && "border-[#B3261E]", className)}
      {...rest}
    />
  );
}

export function TextArea(
  props: TextareaHTMLAttributes<HTMLTextAreaElement> & { hasError?: boolean }
) {
  const { hasError, className, ...rest } = props;
  return (
    <textarea
      className={cn(inputBase, "min-h-[120px] resize-y", hasError && "border-[#B3261E]", className)}
      {...rest}
    />
  );
}

export function Select(
  props: SelectHTMLAttributes<HTMLSelectElement> & { hasError?: boolean }
) {
  const { hasError, className, children, ...rest } = props;
  return (
    <select className={cn(inputBase, "bg-white", hasError && "border-[#B3261E]", className)} {...rest}>
      {children}
    </select>
  );
}
