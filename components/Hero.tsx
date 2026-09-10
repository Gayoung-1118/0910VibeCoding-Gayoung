import type { Profile } from "@/types/profile";

type HeroProps = Pick<
  Profile,
  "name" | "eyebrow" | "school" | "major" | "year" | "tagline" | "links"
>;

export default function Hero({
  name,
  eyebrow,
  school,
  major,
  year,
  tagline,
  links,
}: HeroProps) {
  return (
    <header>
      <p className="mb-[18px] font-display text-[17px] text-muted italic">
        {eyebrow}
      </p>
      <h1 className="font-serif text-5xl leading-none font-bold tracking-[-0.01em] sm:text-[60px]">
        {name}
      </h1>
      <div className="mt-[22px] flex flex-wrap items-baseline gap-3.5 border-t border-foreground pt-[18px] text-sm font-semibold">
        <p>{[school, major, year].join(" · ")}</p>
        <ul className="ml-auto flex gap-4">
          {links.map((link) => (
            <li key={link.url}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-foreground pb-0.5"
              >
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-8 max-w-[26em] font-serif text-xl leading-[1.75] sm:text-[22px]">
        {tagline}
      </p>
    </header>
  );
}
