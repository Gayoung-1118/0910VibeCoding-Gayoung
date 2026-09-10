import Hero from "@/components/Hero";
import Label from "@/components/Label";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import { getProfile } from "@/lib/profile";

export default function Home() {
  const profile = getProfile();
  const { study } = profile;
  const skills = profile.skills.filter((group) => group.items.length > 0);

  return (
    <div className="mx-auto w-full max-w-3xl px-5 pt-16 pb-16 sm:px-9 sm:pt-24">
      <Hero
        name={profile.name}
        eyebrow={profile.eyebrow}
        school={profile.school}
        major={profile.major}
        year={profile.year}
        tagline={profile.tagline}
        links={profile.links}
      />

      <main>
        <Section id="projects" number={1} title="진행한 프로젝트">
          <div className="flex flex-col gap-11">
            {profile.projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Section>

        <Section id="interests" number={2} title="관심사 · 취미">
          <div className="grid gap-7 sm:grid-cols-2">
            <div>
              <Label className="mb-2.5">관심사</Label>
              <ul className="leading-loose">
                {profile.interests.map((interest) => (
                  <li key={interest}>{interest}</li>
                ))}
              </ul>
            </div>
            <div>
              <Label className="mb-2.5">취미</Label>
              <ul className="leading-loose">
                {profile.hobbies.map((hobby) => (
                  <li key={hobby}>{hobby}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="skills" number={3} title="다룰 줄 아는 것">
          <dl className="flex flex-col gap-3.5">
            {skills.map((group, index) => (
              <div
                key={group.category}
                className={`grid grid-cols-[64px_1fr] items-baseline gap-3.5 ${
                  index > 0 ? "border-t border-rule-soft pt-3.5" : ""
                }`}
              >
                <dt className="text-sm text-muted">{group.category}</dt>
                <dd>{group.items.join(" · ")}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section
          id="study"
          number={4}
          title="이번 스터디에서"
          note={study.name}
        >
          <Label className="mb-2">만들어보고 싶은 것</Label>
          <h3 className="font-serif text-[26px] font-bold">
            {study.wantToBuild.title}
          </h3>
          <p className="mt-3 leading-[1.8]">{study.wantToBuild.description}</p>

          <Label className="mt-8 mb-3">이루고 싶은 것</Label>
          <ol className="list-decimal pl-5 leading-loose">
            {study.goals.map((goal) => (
              <li key={goal}>{goal}</li>
            ))}
          </ol>
        </Section>
      </main>

      <footer className="mt-[72px] flex flex-wrap items-baseline justify-between gap-3 border-t border-foreground pt-[18px] text-sm text-muted">
        <p className="font-serif text-foreground">{profile.name}</p>
        <ul className="flex gap-4">
          {profile.links.map((link) => (
            <li key={link.url}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}
