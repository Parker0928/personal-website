import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const currentYear = new Date().getFullYear();

const resources = {
  en: {
    translation: {
      nav: {
        home: 'HOME',
        projects: 'PROJECTS',
        experience: 'EXPERIENCE',
        contact: 'CONTACT',
      },
      footer: {
        copyright: '© {{year}} PARKER — ENGINEERED FOR WEB3 & AI',
        github: 'GITHUB',
        x: 'X',
        email: 'EMAIL',
      },
      seo: {
        title: 'Parker | Frontend Engineer for AI & Web3',
        description: 'Portfolio of Parker, a frontend engineer focused on AI and Web3 products, with expertise in high-performance interfaces and scalable frontend architecture.'
      },
      home: {
        banner: {
          available: 'AVAILABLE FOR HIGH-IMPACT ROLES',
          based: 'OPEN TO REMOTE COLLAB',
        },
        hero: {
          title1: 'Engineering',
          title2: 'The Future',
          title3: 'Of AI',
          title4: '& Web3',
          desc: '9 Years of Frontend Excellence. Architecting scalable, high-performance applications at the intersection of artificial intelligence and decentralized technologies.',
          viewProjects: 'VIEW PROJECTS',
          downloadCv: 'VIEW CV',
          location: 'GLOBAL / REMOTE',
        },
        focus: {
          title1: 'Key Focus',
          title2: 'Areas',
          desc: 'Specialized domains where I deliver the most value, combining deep technical knowledge with product vision.',
          aiTitle: 'AI AGENT PLATFORM',
          aiDesc: 'Building intuitive interfaces for complex LLM interactions and multi-agent systems.',
          defiTitle: 'DEX & DEFI',
          defiDesc: 'Architecting secure, high-performance trading interfaces and Web3 integrations.',
          monoTitle: 'MONOREPO EXPERT',
          monoDesc: 'Structuring scalable codebases using Turborepo, pnpm, and modern tooling.',
        },
        map: {
          title1: 'Base of',
          title2: 'Operations',
        },
        cta: {
          title1: 'Ready to',
          title2: 'Collaborate?',
          desc: 'Currently accepting opportunities for lead engineering roles and high-impact consulting projects.',
          button: 'GET IN TOUCH',
        },
        projectCard: {
          badge: 'AI & LLM',
          title: 'AI Agent Platform',
          metricLabel: 'FIRST PAINT',
          desc: 'Enterprise-grade LLM orchestration platform featuring RAG (Retrieval-Augmented Generation) and autonomous agent workflows built with NestJS and vector databases.',
          tags: {
            llm: 'LLM',
            rag: 'RAG',
            nestjs: 'NESTJS',
            postgresql: 'POSTGRESQL'
          }
        }
      },
      experience: {
        title1: '9 Years',
        title2: 'Experience',
        status: 'STATUS: AVAILABLE FOR INNOVATION',
        timeline: 'TIMELINE',
        roles: {
          arch: {
            title: 'SENIOR SOFTWARE ARCHITECT',
            company: 'TECH INNOVATION LABS',
            period: '2021 — PRESENT',
            desc: 'Leading a team of 12 engineers building a next-generation AI agent platform. Architected the frontend monorepo using Turborepo, Next.js, and Tailwind CSS. Improved build times by 40% and reduced bundle size by 25%.'
          },
          lead: {
            title: 'LEAD FRONTEND ENGINEER',
            company: 'DEFI PROTOCOL X',
            period: '2018 — 2021',
            desc: 'Spearheaded the development of a decentralized exchange interface. Implemented complex Web3 integrations, real-time charting with TradingView, and optimized React rendering for high-frequency data updates.'
          },
          full: {
            title: 'FULL STACK DEVELOPER',
            company: 'DIGITAL AGENCY',
            period: '2015 — 2018',
            desc: 'Developed scalable web applications for enterprise clients. Built custom CMS solutions, e-commerce platforms, and interactive marketing sites using React, Node.js, and PostgreSQL.'
          }
        },
        skills: {
          title: 'Technical Mastery',
          tooling: 'Tooling & Environment',
        },
        stats: {
          projects: 'CORE PROJECTS',
          lines: 'LINES OF CODE',
          certs: 'CERTIFICATIONS',
          design: 'DESIGN THINKING',
        }
      },
      projects: {
        title1: 'Selected',
        title2: 'Work',
        viewLive: 'VIEW LIVE',
        viewCase: 'VIEW CASE',
        cta: {
          title1: 'Ready to Build',
          title2: 'The Future?',
          button: 'START A CONVERSATION'
        },
        items: {
          ai: {
            title: 'AI AGENT PLATFORM',
            category: 'ARTIFICIAL INTELLIGENCE',
            desc: 'A comprehensive platform for building, deploying, and managing autonomous AI agents. Features a visual node-based editor, real-time execution monitoring, and seamless integration with multiple LLM providers.'
          },
          dex: {
            title: 'DEX AMM PROTOCOL',
            category: 'WEB3 / DEFI',
            desc: 'A decentralized exchange interface with advanced trading features. Includes real-time charting, liquidity pool management, and optimized smart contract interactions for minimal gas fees.'
          },
          data: {
            title: 'ENTERPRISE AI DATA',
            category: 'DATA VISUALIZATION',
            desc: 'High-performance dashboard for analyzing massive datasets. Utilizes WebGL for rendering millions of data points smoothly, with complex filtering and aggregation capabilities.'
          },
          mono: {
            title: 'BACKSTAGE MONOREPO',
            category: 'DEVELOPER TOOLS',
            desc: 'An internal developer portal built on Spotify Backstage. Streamlines the creation of new microservices, manages documentation, and provides a unified view of the entire software ecosystem.'
          }
        }
      },
      contact: {
        title1: "Let's Build",
        title2: "Something",
        title3: "Extraordinary",
        form: {
          title: 'Send a Message',
          name: 'NAME',
          namePlaceholder: 'John Doe',
          email: 'EMAIL',
          emailPlaceholder: 'john@example.com',
          subject: 'SUBJECT',
          subjects: {
            project: 'Project Inquiry',
            job: 'Job Opportunity',
            consulting: 'Consulting',
            other: 'Other'
          },
          message: 'MESSAGE',
          messagePlaceholder: 'Tell me about your project...',
          submit: 'SEND MESSAGE'
        },
        info: {
          direct: 'Direct Access',
          cv: 'CURRICULUM\nVITAE',
          socials: 'SOCIALS',
          availability: 'AVAILABILITY',
          availabilityDesc: `Currently accepting new projects for Q3 ${currentYear}. Open to remote work globally.`
        }
      }
    }
  },
  zh: {
    translation: {
      nav: {
        home: '首页',
        projects: '项目',
        experience: '经验',
        contact: '联系',
      },
      footer: {
        copyright: '© {{year}} PARKER — 为 WEB3 与 AI 而生',
        github: 'GITHUB',
        x: 'X',
        email: '邮箱',
      },
      seo: {
        title: 'Parker | AI 与 Web3 前端工程师',
        description: 'Parker 的个人作品集，专注 AI 与 Web3 产品前端开发，擅长高性能交互界面与可扩展前端架构。'
      },
      home: {
        banner: {
          available: '接受高影响力职位',
          based: '支持远程协作',
        },
        hero: {
          title1: '构建',
          title2: '未来的',
          title3: 'AI',
          title4: '与 Web3',
          desc: '9年大前端开发经验。在人工智能与去中心化技术交叉领域构建可扩展、高性能的应用程序。',
          viewProjects: '查看项目',
          downloadCv: '查看简历',
          location: '全球远程',
        },
        focus: {
          title1: '核心关注',
          title2: '领域',
          desc: '在这些专业领域，我将深厚的技术知识与产品愿景相结合，创造最大价值。',
          aiTitle: 'AI 智能体平台',
          aiDesc: '为复杂的 LLM 交互和多智能体系统构建直观的用户界面。',
          defiTitle: '去中心化交易所与 DeFi',
          defiDesc: '架构安全、高性能的交易界面和 Web3 集成。',
          monoTitle: 'Monorepo 架构专家',
          monoDesc: '使用 Turborepo、pnpm 和现代工具构建可扩展的代码库。',
        },
        map: {
          title1: '运营',
          title2: '基地',
        },
        cta: {
          title1: '准备好',
          title2: '合作了吗？',
          desc: '目前正在接受首席工程师职位和高影响力的咨询项目。',
          button: '取得联系',
        },
        projectCard: {
          badge: 'AI 与 LLM',
          title: 'AI 智能体平台',
          metricLabel: '首屏渲染',
          desc: '企业级 LLM 编排平台，提供 RAG（检索增强生成）能力与自治智能体工作流，基于 NestJS 与向量数据库构建。',
          tags: {
            llm: 'LLM',
            rag: 'RAG',
            nestjs: 'NESTJS',
            postgresql: 'POSTGRESQL'
          }
        }
      },
      experience: {
        title1: '9年',
        title2: '经验',
        status: '状态：可参与创新项目',
        timeline: '时间线',
        roles: {
          arch: {
            title: '高级软件架构师',
            company: 'TECH INNOVATION LABS',
            period: '2021 — 至今',
            desc: '领导 12 名工程师团队构建下一代 AI 智能体平台。使用 Turborepo、Next.js 和 Tailwind CSS 架构前端 monorepo。将构建时间缩短了 40%，包体积减小了 25%。'
          },
          lead: {
            title: '前端技术专家',
            company: 'DEFI PROTOCOL X',
            period: '2018 — 2021',
            desc: '主导去中心化交易所界面的开发。实现了复杂的 Web3 集成、使用 TradingView 进行实时图表绘制，并优化了 React 渲染以处理高频数据更新。'
          },
          full: {
            title: '全栈开发工程师',
            company: 'DIGITAL AGENCY',
            period: '2015 — 2018',
            desc: '为企业客户开发可扩展的 Web 应用程序。使用 React、Node.js 和 PostgreSQL 构建定制 CMS 解决方案、电子商务平台和交互式营销网站。'
          }
        },
        skills: {
          title: '技术精通',
          tooling: '工具与环境',
        },
        stats: {
          projects: '核心项目',
          lines: '代码行数',
          certs: '专业认证',
          design: '设计思维',
        }
      },
      projects: {
        title1: '精选',
        title2: '作品',
        viewLive: '查看在线版本',
        viewCase: '查看案例',
        cta: {
          title1: '准备好共建',
          title2: '未来了吗？',
          button: '开启对话'
        },
        items: {
          ai: {
            title: 'AI 智能体平台',
            category: '人工智能',
            desc: '一个用于构建、部署和管理自主 AI 智能体的综合平台。具有基于节点的可视化编辑器、实时执行监控以及与多个 LLM 提供商的无缝集成。'
          },
          dex: {
            title: 'DEX AMM 协议',
            category: 'WEB3 / DEFI',
            desc: '具有高级交易功能的去中心化交易所界面。包括实时图表、流动性池管理，以及优化的智能合约交互以最大限度降低 Gas 费用。'
          },
          data: {
            title: '企业级 AI 数据看板',
            category: '数据可视化',
            desc: '用于分析海量数据的高性能仪表板。利用 WebGL 平滑渲染数百万个数据点，并具有复杂的过滤和聚合功能。'
          },
          mono: {
            title: 'BACKSTAGE 开发者门户',
            category: '开发者工具',
            desc: '基于 Spotify Backstage 构建的内部开发者门户。简化了新微服务的创建，管理文档，并提供整个软件生态系统的统一视图。'
          }
        }
      },
      contact: {
        title1: "让我们共创",
        title2: "非凡",
        title3: "作品",
        form: {
          title: '发送消息',
          name: '姓名',
          namePlaceholder: '张三',
          email: '邮箱',
          emailPlaceholder: 'zhangsan@example.com',
          subject: '主题',
          subjects: {
            project: '项目咨询',
            job: '工作机会',
            consulting: '技术咨询',
            other: '其他'
          },
          message: '内容',
          messagePlaceholder: '请告诉我关于您的项目...',
          submit: '发送消息'
        },
        info: {
          direct: '直接联系',
          cv: '个人\n简历',
          socials: '社交网络',
          availability: '可用状态',
          availabilityDesc: `目前接受 ${currentYear} 年第三季度的新项目。接受全球远程工作。`
        }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
