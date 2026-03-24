import type { Metadata } from "next";
import { ChatPlaceholder } from "@/components/chat-placeholder";
import { FadeIn } from "@/components/fade-in";
import { PageIntro } from "@/components/page-intro";
import { assistantQuestions } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Ask My Work",
  description:
    "Preview of a future AI assistant for exploring Dazheng Ted Fang's projects, technical decisions, and engineering experience.",
};

export default function AskMyWorkPage() {
  return (
    <div className="pb-20">
      <PageIntro
        eyebrow="Ask My Work"
        title="A future assistant for navigating projects, systems, and technical decisions"
        description="This page is designed as the next layer of the portfolio: a grounded assistant that helps visitors explore project context, engineering tradeoffs, and the through-line across my work."
      />
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <FadeIn>
          <ChatPlaceholder questions={assistantQuestions} />
        </FadeIn>
      </div>
    </div>
  );
}
