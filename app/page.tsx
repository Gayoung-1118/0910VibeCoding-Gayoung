import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import TagList from "@/components/TagList";
import { getProfile } from "@/lib/profile";

export default function Home() {
  const profile = getProfile();
  const { study } = profile;
  const skills = profile.skills.filter((group) => group.items.length > 0);

  return (
    <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
      <Hero
        name={profile.name}
        school={profile.school}
        major={profile.major}
        year={profile.year}
        tagline={profile.tagline}
        links={profile.links}
      />

      <main>
        <Section id="projects" title="진행한 프로젝트">
          <div className="grid gap-6">
            {profile.projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Section>

        <Section id="interests" title="관심사 · 취미">
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="mb-3 text-sm font-semibold text-muted">관심사</h3>
              <TagList items={profile.interests} />
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold text-muted">취미</h3>
              <TagList items={profile.hobbies} />
            </div>
          </div>
        </Section>

        <Section id="skills" title="다룰 줄 아는 것">
          <dl className="grid gap-6">
            {skills.map((group) => (
              <div
                key={group.category}
                className="grid gap-3 sm:grid-cols-[4rem_1fr]"
              >
                <dt className="text-sm font-semibold text-muted sm:pt-2">
                  {group.category}
                </dt>
                <dd>
                  <TagList items={group.items} />
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="study" eyebrow={study.name} title="이번 스터디에서">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <p className="text-sm font-semibold text-muted">
              만들어보고 싶은 것
            </p>
            <h3 className="mt-2 text-xl font-bold">{study.wantToBuild.title}</h3>
            <p className="mt-2 leading-7">{study.wantToBuild.description}</p>
          </div>

          <h3 className="mt-10 mb-4 text-sm font-semibold text-muted">
            스터디가 끝났을 때 이루고 싶은 것
          </h3>
          <ol className="space-y-3">
            {study.goals.map((goal, index) => (
              <li key={goal} className="flex gap-3 leading-7">
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border border-border text-xs font-semibold text-muted"
                >
                  {index + 1}
                </span>
                <span>{goal}</span>
              </li>
            ))}
          </ol>
        </Section>
      </main>

      <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-border py-10 text-sm text-muted">
        <p>{profile.name}</p>
        <ul className="flex gap-4">
          {profile.links.map((link) => (
            <li key={link.url}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}
