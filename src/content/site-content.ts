import {
  assistantQuestions,
  experience,
  featuredProjects,
  heroStats,
  navItems,
  projects,
  research,
  site,
  skills,
  workingPrinciples,
} from "@/content/portfolio";
import { assistantQuestionsZh, experienceZh, heroStatsZh, navItemsZh, projectsZh, researchZh, siteZh, skillsZh, uiZh, workingPrinciplesZh } from "@/content/portfolio-zh";
import type { Locale } from "@/content/i18n";

export const uiEn = {
  nav: {
    resumePdf: "Resume PDF",
  },
  footer: {
    eyebrow: "Contact",
    title: "Let's connect about robotics, systems engineering, and applied AI.",
  },
  language: {
    english: "EN",
    chinese: "中文",
  },
  buttons: {
    viewProjects: "View Projects",
    resume: "Resume",
    letsConnect: "Let's Connect",
    exploreAssistant: "Explore the Assistant",
    browseProjectContext: "Browse Project Context",
    downloadResume: "Download Resume PDF",
    emailMe: "Email Me",
    viewPublication: "View publication",
    backHome: "Back Home",
  },
  labels: {
    role: "Role",
    status: "Status",
    focus: "Focus",
    technologies: "Core technologies",
    completed: "Completed",
    profile: "Profile",
    education: "Education",
    experience: "Experience",
    skills: "Skills",
    languages: "Languages",
    roboticsSystems: "Robotics / Systems",
    softwareBackend: "Software / Backend",
    ai: "AI",
    publication: "Publication",
    publications: "Publications",
    awards: "Awards",
    preview: "Preview",
    suggestedQuestions: "Suggested questions",
    comingSoon: "Coming soon",
    throughLine: "Through-line",
    focusBlock: "Focus",
    coreApproach: "Core approach",
    optimizeFor: "What I optimize for",
    contact: "Contact",
    scroll: "Scroll",
  },
  pageIntros: {
    projects: {
      eyebrow: "Projects",
      title: "Systems-oriented work across robotics, software, and applied AI",
      description:
        "A curated project archive focused on real systems, production constraints, and technically grounded product thinking.",
    },
    resume: {
      eyebrow: "Resume",
      title: "A web-native summary of my experience and technical focus",
      description:
        "Engineer working across robotics, production software, and applied AI systems, with an emphasis on complete implementation and clear product outcomes.",
    },
    research: {
      eyebrow: "Research",
      title: "Publications, awards, and technical recognition",
      description:
        "A concise record of research-oriented work in immersive interaction, robotics systems, and technically grounded product development.",
    },
    askMyWork: {
      eyebrow: "Ask My Work",
      title:
        "A future assistant for navigating projects, systems, and technical decisions",
      description:
        "This page is designed as the next layer of the portfolio: a grounded assistant that helps visitors explore project context, engineering tradeoffs, and the through-line across my work.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Open to thoughtful conversations and strong technical collaboration",
      description:
        "I'm always happy to connect about robotics, applied AI, systems engineering, and product-building opportunities.",
    },
  },
};

export function getPortfolioContent(locale: Locale) {
  if (locale === "zh") {
    return {
      site: siteZh,
      navItems: navItemsZh,
      heroStats: heroStatsZh,
      workingPrinciples: workingPrinciplesZh,
      projects: projectsZh,
      featuredProjects: projectsZh.filter((project) => project.featured),
      experience: experienceZh,
      research: researchZh,
      skills: skillsZh,
      assistantQuestions: assistantQuestionsZh,
      ui: uiZh,
    };
  }

  return {
    site,
    navItems,
    heroStats,
    workingPrinciples,
    projects,
    featuredProjects,
    experience,
    research,
    skills,
    assistantQuestions,
    ui: uiEn,
  };
}
