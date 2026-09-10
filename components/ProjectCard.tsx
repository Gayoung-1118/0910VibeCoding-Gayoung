import Label from "@/components/Label";
import type { Project } from "@/types/profile";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, subtitle, badge, summary, role, tasks, lesson, result } =
    project;

  return (
    <article>
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 className="font-serif text-[26px] font-bold">{title}</h3>
        <span className="text-xs text-muted">{subtitle}</span>
      </div>
      {badge && (
        <p className="mt-2.5 font-display text-muted italic">
          <span aria-hidden="true">🏆</span> {badge}
        </p>
      )}
      <p className="mt-4 leading-[1.8]">{summary}</p>

      <dl className="mt-[18px] grid grid-cols-[64px_1fr] gap-x-3.5 gap-y-1.5 text-sm">
        <dt className="text-muted">역할</dt>
        <dd>{role}</dd>
        {result && (
          <>
            <dt className="text-muted">결과</dt>
            <dd>{result}</dd>
          </>
        )}
      </dl>

      <Label className="mt-[22px] mb-2">한 일</Label>
      <ul className="list-disc pl-4 leading-[1.85]">
        {tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>

      <blockquote className="mt-[22px] border-l-2 border-rule pl-4 font-serif text-[17px] leading-[1.8] text-quote">
        {lesson}
      </blockquote>
    </article>
  );
}
