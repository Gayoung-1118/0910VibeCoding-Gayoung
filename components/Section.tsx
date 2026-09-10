import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
};

export default function Section({ id, title, eyebrow, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="border-t border-border py-12 sm:py-16"
    >
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold text-accent">{eyebrow}</p>
      )}
      <h2 id={`${id}-title`} className="mb-8 text-2xl font-bold tracking-tight">
        {title}
      </h2>
      {children}
    </section>
  );
}
