type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pt-20 pb-10 lg:px-8 lg:pt-24">
      <div className="max-w-3xl space-y-5">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">
          {eyebrow}
        </p>
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="text-pretty text-lg leading-8 text-muted">{description}</p>
      </div>
    </section>
  );
}
