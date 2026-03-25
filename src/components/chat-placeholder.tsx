import { ButtonLink } from "@/components/button-link";
import type { Locale } from "@/content/i18n";
import { withLocalePath } from "@/content/i18n";
import { getPortfolioContent } from "@/content/site-content";

type ChatPlaceholderProps = {
  questions: string[];
  locale?: Locale;
};

export function ChatPlaceholder({ questions, locale = "en" }: ChatPlaceholderProps) {
  const { ui } = getPortfolioContent(locale);

  return (
    <div className="adaptive-card rounded-[2rem] border border-line bg-white p-6 shadow-[0_24px_80px_-60px_rgba(200,93,134,0.45)] sm:p-8">
      <div className="adaptive-dense-grid grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="adaptive-card-sm rounded-[1.4rem] border border-dashed border-line bg-soft p-5">
          <div className="space-y-3">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">
              {ui.labels.preview}
            </p>
            <h3 className="text-2xl font-semibold tracking-tight text-foreground">
              {locale === "zh" ? "问问我的工作" : "Ask My Work"}
            </h3>
            <p className="max-w-2xl text-base leading-7 text-muted">
              {locale === "zh"
                ? "通过未来的交互式助手来探索项目、技术决策与工程经历。完整助手尚在开发中，但这个产品界面已经按照 grounded retrieval 的方向进行设计。"
                : "Explore projects, technical decisions, and engineering experience through a future interactive assistant. The full assistant is coming soon, but the product surface is already designed with grounded retrieval in mind."}
            </p>
          </div>
          <div className="adaptive-tight-mt mt-6 flex flex-wrap gap-3">
            <ButtonLink href={withLocalePath("/ask-my-work", locale)}>
              {ui.buttons.exploreAssistant}
            </ButtonLink>
            <ButtonLink href={withLocalePath("/projects", locale)} variant="secondary">
              {ui.buttons.browseProjectContext}
            </ButtonLink>
          </div>
        </div>
        <div className="adaptive-card-sm rounded-[1.4rem] border border-line bg-white p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted">{ui.labels.suggestedQuestions}</p>
            <span className="rounded-full bg-soft px-3 py-1 text-xs text-accent">
              {ui.labels.comingSoon}
            </span>
          </div>
          <div className="adaptive-tight-mt mt-4 space-y-3">
            {questions.map((question) => (
              <div
                key={question}
                className="rounded-2xl border border-line bg-background px-4 py-3 text-sm text-foreground"
              >
                {question}
              </div>
            ))}
          </div>
          <div className="adaptive-card-sm adaptive-tight-mt mt-5 rounded-2xl border border-line bg-soft p-4">
            <p className="text-sm leading-7 text-muted">
              {locale === "zh"
                ? "计划方向包括：带引用的回答、项目感知检索，以及一种比静态作品集更清晰的技术工作探索方式。"
                : "Planned direction: citation-backed answers, project-aware retrieval, and a cleaner way to explore technical work than a static portfolio alone."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
