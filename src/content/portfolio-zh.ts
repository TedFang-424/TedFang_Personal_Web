import type { Project } from "@/content/portfolio";

export const siteZh = {
  name: "方大政",
  title: "我做横跨机器人、软件与应用型 AI 的真实系统。",
  intro:
    "我是一名工程师，做过实时感知与控制系统、生产级软件，也在持续构建面向真实使用场景的 AI 产品。我的工作覆盖沉浸式运动平台、全栈业务系统，以及面向工程知识探索的检索增强工具。",
  email: "dazh.fang@gmail.com",
  github: "https://github.com/TedFang-424/",
  linkedin: "https://www.linkedin.com/in/dazhengfang-b59026255/",
  websiteUrl: "",
  resumePdfHref: "/Dazheng_Ted_Fang_Resume.pdf",
  education: [
    "Vanderbilt University - 计算机科学硕士",
    "东南大学 - 计算机科学与技术工学学士（人工智能方向）",
  ],
};

export const navItemsZh = [
  { href: "/", label: "首页" },
  { href: "/projects", label: "项目" },
  { href: "/resume", label: "简历" },
  { href: "/research", label: "研究" },
  { href: "/ask-my-work", label: "问问我的工作" },
  { href: "/contact", label: "联系我" },
];

export const heroStatsZh = [
  { value: "4", label: "代表项目" },
  { value: "500+", label: "覆盖的运营 SKU" },
  { value: "10+", label: "支持过的门店地点" },
  { value: "2023", label: "IEEE TVCG 论文发表年份" },
];

export const workingPrinciplesZh = [
  "我喜欢那些需要把感知、控制与软件真正整合起来的项目。",
  "我重视落地质量，而不只是把原型做出来。",
  "我希望把技术上复杂的系统做得清晰、可用，也值得信任。",
];

export const projectsZh: Project[] = [
  {
    slug: "hex-core",
    title: "Hex-Core-MK1 全向跑步机",
    category: "机器人 / XR / 实时系统",
    summary:
      "一个面向沉浸式 VR 体验的实时运动与交互平台，结合运动跟踪、定位与基于步态的控制逻辑。",
    shortSummary:
      "为 VR 全向跑步机平台构建软件系统，整合运动跟踪、步行控制与沉浸式交互。",
    role: "联合创始人 / 软件与系统工程师",
    technologies: ["Unity", "计算机视觉", "定位", "运动跟踪", "控制逻辑", "XR 系统"],
    tags: ["机器人 / XR", "定位", "控制系统"],
    featured: true,
    overview:
      "Hex-Core-MK1 是一个面向沉浸式 VR 移动体验的全向运动系统，目标是在室内尺度场景中让移动更自然、更稳定，也更有真实感。我的工作主要集中在连接跟踪、运动理解与交互的软件系统上。",
    context: [
      "我联合创立了 SYH Technology，并参与定义围绕具身交互、自然移动体验以及投资人演示的产品方向。",
      "难点不只是把运动数据接入系统，而是搭建一条足够可靠的处理链路，让它真正支撑沉浸式体验。",
    ],
    built: [
      "主导平台软件开发，集成运动跟踪、步行控制模块与 Unity 交互系统，完成可演示原型。",
      "参与四摄像头被动定位流程设计，在不过度侵入式部署的前提下提升室内跟踪鲁棒性。",
      "开发基于步态的控制逻辑，在不同步行模式切换时改善响应性与稳定性。",
    ],
    decisions: [
      "我们把定位、控制与沉浸式渲染当作同一个产品系统去设计，而不是割裂的模块，这显著提升了演示效果的稳定性。",
      "运动控制逻辑不仅围绕信号处理，也围绕用户主观体验来调优，以保证现场演示的说服力。",
    ],
    outcome: [
      "该原型被用于投资人演示和早期商业化交流。",
      "这项工作也为 Hex-Core 系统及其后续研究方向建立了技术可信度。",
    ],
  },
  {
    slug: "ted-tech",
    title: "Ted Tech 生产业务系统",
    category: "生产软件 / 全栈",
    summary: "面向电商与预约业务流程的生产级业务系统。",
    shortSummary:
      "构建并交付面向多门店运营的生产系统，覆盖排班、库存、支付与客户流程。",
    role: "全栈工程师",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "支付系统"],
    tags: ["生产软件", "运营系统", "全栈"],
    featured: true,
    overview:
      "在 Ted Tech LLC，我构建的是必须在真实日常运营中稳定运行的软件系统。重点不在原型，而在于真正上线、减少人工负担，并支撑业务增长。",
    context: [
      "业务覆盖 500+ SKU，以及 10+ 门店地点的预约与运营流程。",
      "主要痛点包括排班低效、库存协同困难、支付处理复杂，以及大量人工流程不一致。",
    ],
    built: [
      "覆盖前端、后端、数据库与部署全链路，设计并交付生产级系统。",
      "构建预约、库存、支付与客户运营相关的数据与后端工作流。",
      "将零散人工流程产品化，降低订单处理错误与手工排班成本。",
    ],
    decisions: [
      "我优先优化运营清晰度与错误率，而不是引入不必要的系统复杂度。",
      "系统架构强调可追踪的业务流程与可靠的后台工具，以满足真实运营场景下的稳定性需求。",
    ],
    outcome: [
      "系统支撑了多门店的实际运营，并减少了重复人工工作。",
      "这项工作强化了我把产品思维、工程实现与运营可靠性结合起来的能力。",
    ],
  },
  {
    slug: "ros-teleoperation",
    title: "基于 ROS2 的跑步机驱动机器人遥操作原型",
    category: "机器人 / 系统",
    status: "进行中",
    summary:
      "一个以软件为先的 ROS2 遥操作原型，把人体步行输入映射为仿真中的机器人运动指令。",
    shortSummary:
      "探索如何用跑步机式的运动意图驱动实时机器人控制与遥测记录的 ROS2 原型。",
    role: "系统工程师",
    technologies: ["ROS2", "Python", "遥测日志", "轨迹可视化", "仿真"],
    tags: ["机器人系统", "ROS2", "遥操作"],
    featured: true,
    overview:
      "这个原型探索如何让跑步机式的运动意图成为一种实用的机器人遥操作接口。当前工作以软件与仿真为先，用于验证控制与可观测性链路，再进入硬件集成。",
    context: [
      "传统遥操作通常把人的意图和身体动作割裂开来。我希望探索是否可以直接把“行走”本身作为控制信号。",
      "这个项目位于 human-in-the-loop 机器人、实时指令映射与实验工具链的交叉点。",
    ],
    built: [
      "设计 ROS2 管线，把步行式输入信号映射为仿真中的机器人运动指令。",
      "加入遥测日志和轨迹可视化，用于观察用户意图如何在控制栈中传播。",
      "项目结构从一开始就为后续硬件集成做准备，而不是停留在纯仿真演示。",
    ],
    decisions: [
      "我选择先做软件与仿真，是为了在硬件约束介入前快速迭代指令语义、可观测性与交互设计。",
      "日志与可视化从一开始就纳入设计，因为理解系统行为和生成运动指令同样重要。",
    ],
    outcome: [
      "该原型为测试人体运动作为遥操作方式建立了一个可用基线。",
      "它也为后续在 embodied interface、机器人控制与实验评估方面的工作提供平台。",
    ],
    futureWork: ["接入真实跑步机或运动输入硬件。", "扩展对延迟、可控性与用户适应性的评估。"],
  },
  {
    slug: "engineering-knowledge-assistant",
    title: "网站部署的工程知识助手",
    category: "应用型 AI",
    status: "进行中",
    summary:
      "一个基于检索增强生成的助手，用于通过有依据的问答方式探索项目资料、技术笔记与工程知识。",
    shortSummary:
      "一个集成在个人网站中的 RAG 系统，用于有依据地探索我的项目、技术材料与工程工作。",
    role: "应用型 AI 工程师",
    technologies: ["RAG", "Embeddings", "向量检索", "元数据分块", "评估"],
    tags: ["应用型 AI", "RAG", "知识系统"],
    featured: true,
    overview:
      "这个项目尝试把个人作品集变成一个可交互的知识界面。它不只是罗列项目，而是让访客通过 grounded retrieval 与带引用的回答主动探索技术工作。",
    context: [
      "工程工作通常分散在笔记、项目文档、架构决策和代码周边材料中，很难通过线性浏览快速理解。",
      "我希望提供一个界面，让招聘方、合作方或技术同行可以更快提问，并得到有依据的回答。",
    ],
    built: [
      "设计面向项目资料、工程笔记与个人技术知识的网站集成式 RAG 概念。",
      "重点关注基于元数据的分块与带引用的检索，以提升回答的可追溯性与可信度。",
      "围绕相关性、groundedness 与延迟做评估，而不是把它当作单纯的 AI 装饰功能。",
    ],
    decisions: [
      "这个界面被当作一个产品来设计，而不仅仅是模型演示，所以交互质量与信任信号同样重要。",
      "我保持内容模型结构化，为后续文档接入和助手能力扩展预留空间。",
    ],
    outcome: [
      "这个项目为个人网站提供了一个自然的下一步扩展方向，同时兼具表达力与技术可读性。",
      "它也体现了我对应用型 AI 的看法：有依据、真正有用，并与真实产品界面自然融合。",
    ],
    futureWork: ["加入文档导入与引用渲染。", "引入会话记忆与更完整的面向用户查询的评估工具。"],
  },
];

export const experienceZh = [
  {
    company: "Ted Tech LLC",
    role: "全栈工程师",
    period: "2025 年 1 月 - 至今",
    summary:
      "围绕电商与预约业务流程构建并交付生产软件，负责前端、后端、数据库与部署的完整实现。",
    bullets: [
      "设计预约、库存与支付处理相关的后端与数据工作流。",
      "减少订单处理错误与人工排班负担。",
    ],
  },
  {
    company: "SYH Technology Co., Ltd.",
    role: "联合创始人 / 软件与系统工程师",
    period: "2022 年 7 月 - 2022 年 12 月",
    summary:
      "主导 Hex-Core-MK1 全向跑步机的软件开发，并将运动跟踪、定位与步行交互整合为可面向投资人展示的原型系统。",
    bullets: [
      "参与四摄像头被动定位方案，提升室内跟踪稳定性。",
      "开发基于步态的控制逻辑，提高响应性与运动稳定性。",
    ],
  },
];

export const researchZh = {
  publications: [
    {
      title: "Strolling in Room-Scale VR: Hex-Core-MK1 Omnidirectional Treadmill",
      venue: "IEEE Transactions on Visualization and Computer Graphics",
      year: "2023",
      summary:
        "围绕室内尺度 VR 移动体验的全向跑步机研究工作，把具身交互设计与实时系统实现连接起来。",
      link: "https://pubmed.ncbi.nlm.nih.gov/36264727/",
    },
    {
      title:
        "High-performance Data Management for Whole Slide Image Analysis in Digital Pathology",
      venue:
        "Proceedings of SPIE Medical Imaging 2024: Digital and Computational Pathology",
      year: "2024",
      summary:
        "我在 Vanderbilt 参与的论文，聚焦数字病理全切片图像分析中的高性能 I/O 与数据管理，重点讨论并行数据管线以及 CPU / GPU 工作负载下的性能优化。",
      link: "https://www.vanderbilt.edu/valiant/2024/06/20/high-performance-data-management-for-whole-slide-image-analysis-in-digital-pathology/",
    },
  ],
  awards: [
    "IEEE Circuits and Systems Society Student Design Competition 亚太区 Region 10 Winner，2020-2021",
    "第 49 届日内瓦国际发明展银奖，2022",
  ],
  recognition: ["IEEE TVCG 论文", "IEEE CAS 学生竞赛奖项", "日内瓦发明展银奖"],
};

export const skillsZh = {
  languages: ["Python", "TypeScript / JavaScript", "C++", "SQL"],
  robotics: ["ROS2", "计算机视觉", "姿态估计", "运动跟踪", "控制系统", "遥操作", "Unity"],
  software: ["Next.js", "React", "FastAPI", "Node.js", "PostgreSQL", "Prisma", "REST APIs", "Docker"],
  ai: ["RAG", "LLM 应用", "检索管线", "向量嵌入", "向量检索"],
};

export const assistantQuestionsZh = [
  "你在 SYH 做了什么？",
  "你的 ROS 遥操作项目是怎么工作的？",
  "你最喜欢构建什么类型的系统？",
];

export const uiZh = {
  nav: {
    resumePdf: "简历 PDF",
  },
  footer: {
    eyebrow: "联系",
    title: "欢迎和我交流机器人、系统工程与应用型 AI 相关工作。",
  },
  language: {
    english: "EN",
    chinese: "中文",
  },
  buttons: {
    viewProjects: "查看项目",
    resume: "简历",
    letsConnect: "联系我",
    exploreAssistant: "进入助手",
    browseProjectContext: "浏览项目内容",
    downloadResume: "下载简历 PDF",
    emailMe: "给我发邮件",
    viewPublication: "查看论文",
    backHome: "返回首页",
  },
  labels: {
    role: "角色",
    status: "状态",
    focus: "方向",
    technologies: "核心技术",
    completed: "已完成",
    profile: "简介",
    education: "教育背景",
    experience: "经历",
    skills: "技能",
    languages: "语言",
    roboticsSystems: "机器人 / 系统",
    softwareBackend: "软件 / 后端",
    ai: "AI",
    publication: "论文",
    publications: "论文",
    awards: "奖项",
    preview: "预览",
    suggestedQuestions: "推荐问题",
    comingSoon: "即将推出",
    throughLine: "主线",
    focusBlock: "聚焦方向",
    coreApproach: "核心方法",
    optimizeFor: "我在优化什么",
    contact: "联系",
    scroll: "滚动",
  },
  pageIntros: {
    projects: {
      eyebrow: "项目",
      title: "横跨机器人、软件与应用型 AI 的系统型工作",
      description: "一个围绕真实系统、生产约束与技术驱动产品思维整理出的项目集合。",
    },
    resume: {
      eyebrow: "简历",
      title: "关于我经历与技术方向的网页化摘要",
      description: "我专注于机器人、生产软件与应用型 AI 系统，并强调完整实现与清晰结果。",
    },
    research: {
      eyebrow: "研究",
      title: "论文、奖项与技术认可",
      description: "围绕沉浸式交互、机器人系统与技术驱动产品开发的一份简洁研究记录。",
    },
    askMyWork: {
      eyebrow: "问问我的工作",
      title: "一个未来可用于探索项目、技术决策与工程工作的助手界面",
      description: "这一页是个人网站的下一层：通过 grounded assistant 帮助访客更高效地理解项目背景与工程思路。",
    },
    contact: {
      eyebrow: "联系我",
      title: "欢迎交流，也欢迎认真推进的技术合作",
      description: "如果你想聊机器人、应用型 AI、系统工程，或产品构建相关机会，我都很乐意交流。",
    },
  },
};
