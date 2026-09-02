export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  metrics: string[];
  category: string;
  architecture: string;
  impact: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  items: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
  skillsUsed: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "RPA & Automation",
    iconName: "Bot",
    items: [
      "UiPath Agentic AI",
      "Workflow Automation",
      "Enterprise Process Automation",
      "Intelligent Document Processing (IDP)",
      "Cognitive RPA Bots"
    ]
  },
  {
    title: "AI & Machine Learning",
    iconName: "Brain",
    items: [
      "Generative AI / LLMs (GPT-4, Gemini)",
      "RAG Systems & Vector Search",
      "NLP & Advanced OCR",
      "Vector Databases (Pinecone, Milvus, pgvector)",
      "Agentic Orchestration (LangChain, AutoGen)"
    ]
  },
  {
    title: "Backend Development",
    iconName: "Server",
    items: [
      "NestJS / Node.js Architecture",
      "Python / Django / FastAPI",
      "PostgreSQL / MySQL / MongoDB",
      "RESTful & GraphQL Enterprise APIs",
      "Microservices & Event-Driven Systems"
    ]
  },
  {
    title: "Cloud & DevOps",
    iconName: "Cloud",
    items: [
      "AWS & GCP Cloud Infrastructure",
      "Docker & Kubernetes",
      "Serverless Functions & Cloud Run",
      "CI/CD Pipelines (GitHub Actions, GitLab CI)",
      "Infrastructure as Code (Terraform)"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "enterprise-knowledge-assistant",
    title: "Enterprise Knowledge Assistant",
    subtitle: "RAG-Powered Q&A Platform for Fortune 500 Enterprise",
    description: "Developed a secure, enterprise-grade Retrieval-Augmented Generation (RAG) platform connecting internal documentation, SOPs, and policy archives to an intelligent conversational assistant.",
    techStack: ["NestJS", "Node.js", "Python", "LangChain", "OpenAI/Gemini", "Pinecone", "PostgreSQL"],
    metrics: ["Reduced employee search time by 68%", "Processed 500k+ internal documents securely", "99.4% answer accuracy with citation verification"],
    category: "AI & RAG Systems",
    architecture: "Microservices backend built with NestJS handling auth, rate-limiting, and audit logging. Asynchronous document ingestion pipeline using Python workers for OCR, chunking, embedding generation, and vector indexing in Pinecone.",
    impact: "Empowered over 3,500 enterprise staff across 4 global offices to instantaneously locate precise compliance and technical guidelines without manual document digging."
  },
  {
    id: "llm-powered-ticket-automation",
    title: "LLM-Powered Ticket Automation",
    subtitle: "Autonomous Support Triage & Resolution Bot",
    description: "Architected an intelligent support triage engine that automatically classifies incoming customer tickets, extracts critical entity parameters, and executes automated multi-step resolutions or routes complex cases with enriched context.",
    techStack: ["Python", "FastAPI", "UiPath", "GPT-4", "Docker", "PostgreSQL", "Redis"],
    metrics: ["Automated 45% of tier-1 support tickets end-to-end", "Mean time to resolution (MTTR) dropped from 4 hours to 8 minutes", "Zero human intervention required for standard billing inquiries"],
    category: "RPA & Agentic AI",
    architecture: "Event-driven architecture listening to Zendesk/Jira webhooks. FastAPI worker service queries LLM for intent classification and sentiment analysis, triggering UiPath RPA robots for backend ERP database adjustments.",
    impact: "Saved estimated 1,200 agent hours monthly while boosting customer satisfaction scores (CSAT) by 24% through instant replies."
  },
  {
    id: "agentic-procurement-bot",
    title: "Agentic Procurement Bot",
    subtitle: "End-to-End SAP MM & Vendor Management Automation",
    description: "Built an advanced agentic automation system that autonomously compares vendor quotations, validates invoice line items against purchase orders in SAP MM, and flags compliance discrepancies.",
    techStack: ["UiPath Agentic AI", "Node.js", "SAP RFC Connector", "Python", "OCR (Google Document AI)"],
    metrics: ["Processed over 15,000 monthly invoices with 99.1% accuracy", "Cut invoice processing cycle time by 75%", "Prevented $120k in duplicate invoice payments in year one"],
    category: "Enterprise RPA",
    architecture: "UiPath attended/unattended robots orchestrated via Orchestrator, integrated with custom Node.js middleware APIs connecting to SAP ECC/S/4HANA and vendor web portals.",
    impact: "Streamlined the entire Accounts Payable workflow, eliminating manual data entry bottlenecks and ensuring strict audit compliance."
  },
  {
    id: "banking-automation-platform",
    title: "Banking Automation Platform",
    subtitle: "FinTech Workflow & Compliance Verification Engine",
    description: "Engineered a high-throughput backend workflow engine for a regional financial institution to automate KYC (Know Your Customer) verifications, sanction screening, and loan application scoring.",
    techStack: ["NestJS", "PostgreSQL", "Redis", "Docker", "AWS ECS", "OAuth2/JWT"],
    metrics: ["Handled 25,000+ daily loan application pre-checks", "Reduced KYC turnaround time from 3 days to under 15 minutes", "Passed stringent SOC2 Type II compliance audits"],
    category: "Backend & FinTech",
    architecture: "Distributed NestJS microservices backed by PostgreSQL and Redis pub/sub for reliable message queuing. Strict encryption at rest and in transit adhering to banking security standards.",
    impact: "Modernized legacy banking operations, allowing the institution to scale loan processing capacity 4x without increasing operations headcount."
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "MicroAgility.apac Pvt Ltd",
    role: "Sr. Software Engineer",
    location: "Islamabad, Pakistan",
    period: "2022 - Present",
    highlights: [
      "Built robust enterprise APIs and microservices with NestJS and Node.js supporting millions of monthly transactions.",
      "Spearheaded the implementation of RAG systems and generative AI document processing pipelines for enterprise clients.",
      "Developed end-to-end banking and procurement automation platforms leveraging UiPath and custom AI agents.",
      "Mentored junior developers and established engineering best practices for CI/CD, testing, and cloud deployments."
    ],
    skillsUsed: ["NestJS", "Node.js", "RAG Systems", "Generative AI", "UiPath", "PostgreSQL", "AWS/GCP"]
  },
  {
    company: "TechFlow Solutions",
    role: "RPA & Backend Developer",
    location: "Islamabad, Pakistan",
    period: "2020 - 2022",
    highlights: [
      "Designed and deployed 30+ unattended RPA bots using UiPath and Python for invoice processing and CRM data synchronization.",
      "Created backend integration layers with Python/Django and REST APIs to bridge legacy desktop software with modern cloud apps.",
      "Reduced operational error rates by 90% across finance and HR workflows for enterprise clients.",
      "Collaborated with product managers and stakeholders to scope out complex enterprise automation roadmaps."
    ],
    skillsUsed: ["Python", "Django", "UiPath RPA", "REST APIs", "SQL", "Docker"]
  }
];
