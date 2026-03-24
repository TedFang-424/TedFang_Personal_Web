import type { Metadata } from "next";
import { ChatPlaceholder } from "@/components/chat-placeholder";
import { FadeIn } from "@/components/fade-in";
import { PageIntro } from "@/components/page-intro";
import { getPortfolioContent } from "@/content/site-content";

export const metadata: Metadata = {
  title: "问问我的工作",
  description: "一个未来用于探索方大政项目、技术决策与工程经历的 AI 助手界面。",
};

export default function AskMyWorkZhPage() {
  const { assistantQuestions, ui } = getPortfolioContent("zh");

  return (
    <div className="pb-20">
      <PageIntro
        eyebrow={ui.pageIntros.askMyWork.eyebrow}
        title={ui.pageIntros.askMyWork.title}
        description={ui.pageIntros.askMyWork.description}
      />
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <FadeIn>
          <ChatPlaceholder questions={assistantQuestions} locale="zh" />
        </FadeIn>
      </div>
    </div>
  );
}
