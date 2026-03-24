type ExperienceCardProps = {
  company: string;
  role: string;
  period: string;
  summary: string;
  bullets: string[];
};

export function ExperienceCard({
  company,
  role,
  period,
  summary,
  bullets,
}: ExperienceCardProps) {
  return (
    <article className="rounded-[2rem] border border-line bg-white p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold tracking-tight text-foreground">
            {company}
          </h3>
          <p className="text-sm font-medium text-accent">{role}</p>
        </div>
        <p className="text-sm text-muted">{period}</p>
      </div>
      <p className="mt-5 text-base leading-7 text-muted">{summary}</p>
      <ul className="mt-5 space-y-3 text-sm leading-7 text-muted">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
