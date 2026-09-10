import type { ReactNode } from "react";

type LabelProps = {
  children: ReactNode;
  className?: string;
};

export default function Label({ children, className = "" }: LabelProps) {
  return (
    <p
      className={`text-[13px] font-semibold tracking-[0.08em] text-muted ${className}`}
    >
      {children}
    </p>
  );
}
