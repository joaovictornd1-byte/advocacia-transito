import { cn } from "@/lib/utils/cn";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ButtonHTMLAttributes } from "react";

type BaseProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  withArrow?: boolean;
  className?: string;
};

const variants: Record<string, string> = {
  primary:
    "bg-ink text-white hover:bg-ink-light border border-ink",
  secondary:
    "bg-transparent text-ink border border-ink/25 hover:border-ink hover:bg-ink/[0.03]",
  ghost: "bg-transparent text-accent-dark hover:text-ink underline-offset-4 hover:underline",
};

const sizes: Record<string, string> = {
  md: "px-5 py-2.5 text-[15px]",
  lg: "px-7 py-3.5 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm font-medium transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed";

export function Button({
  variant = "primary",
  size = "md",
  withArrow,
  className,
  children,
  ...props
}: BaseProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
      {withArrow && <ArrowRight size={16} strokeWidth={2} />}
    </button>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  withArrow,
  className,
  children,
  target,
}: BaseProps & { href: string; children: React.ReactNode; target?: string }) {
  return (
    <Link
      href={href}
      target={target}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {children}
      {withArrow && <ArrowRight size={16} strokeWidth={2} />}
    </Link>
  );
}
