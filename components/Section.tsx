import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  number: number;
  title: string;
  note?: string;
  children: ReactNode;
};

export default function Section({
  id,
  number,
  title,
  note,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="mt-16 grid gap-4 border-t border-rule pt-5 first:mt-[72px] sm:grid-cols-[120px_1fr] sm:gap-6"
    >
      <div>
        <p className="font-display text-[15px] text-muted">
          {String(number).padStart(2, "0")}
        </p>
        <h2 id={`${id}-title`} className="mt-1 font-serif text-[22px] font-bold">
          {title}
        </h2>
        {note && <p className="mt-2 text-xs text-muted">{note}</p>}
      </div>
      <div>{children}</div>
    </section>
  );
}
