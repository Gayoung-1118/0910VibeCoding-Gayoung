import type { Profile } from "@/types/profile";

type HeroProps = Pick<
  Profile,
  "name" | "school" | "major" | "year" | "tagline" | "links"
>;

export default function Hero({
  name,
  school,
  major,
  year,
  tagline,
  links,
}: HeroProps) {
  return (
    <header className="pt-20 pb-12 sm:pt-28 sm:pb-16">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{name}</h1>
      <p className="mt-3 font-medium text-accent">
        {[school, major, year].join(" · ")}
      </p>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{tagline}</p>
      <ul className="mt-8 flex flex-wrap gap-3">
        {links.map((link) => (
          <li key={link.url}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-1.5 rounded-full bg-accent px-5 font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              {link.label}
              <span aria-hidden="true">↗</span>
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
