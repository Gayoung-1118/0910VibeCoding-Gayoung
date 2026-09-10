import type { Project } from "@/types/profile";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, subtitle, badge, summary, role, tasks, lesson, result } =
    project;

  return (
    <article className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      {badge && (
        <p className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs font-medium">
          <span aria-hidden="true">🏆</span>
          {badge}
        </p>
      )}
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-1 text-muted">{subtitle}</p>
      <p className="mt-4 leading-7">{summary}</p>

      <dl className="mt-6 grid gap-x-6 gap-y-1 text-sm sm:grid-cols-[3rem_1fr] sm:gap-y-2">
        <dt className="font-semibold text-muted">역할</dt>
        <dd>{role}</dd>
        {result && (
          <>
            <dt className="mt-2 font-semibold text-muted sm:mt-0">결과</dt>
            <dd>{result}</dd>
          </>
        )}
      </dl>

      <h4 className="mt-6 text-sm font-semibold text-muted">한 일</h4>
      <ul className="mt-2 list-disc space-y-1.5 pl-5 leading-7 marker:text-muted">
        {tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>

      <blockquote className="mt-6 border-l-2 border-border pl-4 leading-7">
        <p className="mb-1 text-sm font-semibold text-muted">배운 점</p>
        <p>{lesson}</p>
      </blockquote>
    </article>
  );
}
