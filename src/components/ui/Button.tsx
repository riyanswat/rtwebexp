"use client";

import Link from "next/link";
import { clsx } from "clsx";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md font-semibold transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--rt-primary)]/50";

  const variants: Record<string, string> = {
    primary: `
      bg-[var(--rt-primary)] text-white shadow-[var(--shadow-submit)]
      hover:bg-[var(--rt-primary-600)]
    `,
    secondary: `
      bg-white text-[var(--rt-primary)] border border-[var(--rt-primary)] shadow-btn
      hover:bg-[var(--rt-primary)] hover:text-white
    `,
    outline: `
      border border-[var(--rt-ring)] text-[var(--rt-ink)]
      hover:border-[var(--rt-primary)] hover:text-[var(--rt-primary)]
    `,
  };

  const sizes: Record<string, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = clsx(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}
