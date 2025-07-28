export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  type: 'professional' | 'project' | 'education';
  description: string;
  achievements: string[];
  technologies: string[];
  links?: { label: string; url: string }[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  features: string[];
  metrics?: { label: string; value: string }[];
  links: { label: string; url: string }[];
  date: string;
  category: 'ai-ml' | 'blockchain' | 'web-dev' | 'research';
  featured: boolean;
}

export interface TechnicalProject {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  architecture: {
    overview: string;
    challenges: { challenge: string; solution: string }[];
    codeExample?: string;
  };
  empiricalResults: {
    performance: { label: string; value: string }[];
    impact: string[];
    safetyMetrics?: { label: string; value: string }[];
  };
  researchRelevance: {
    anthropicAlignment: string[];
    agentCapabilities: string[];
    safetyContributions: string[];
  };
  links: { label: string; url: string }[];
  date: string;
  category: 'agent-systems' | 'constitutional-ai' | 'evaluation-frameworks' | 'multi-agent' | 'safety-research';
  featured: boolean;
}

export interface Skill {
  category: string;
  skills: string[];
}

export const personalInfo = {
  name: "Mitchell Marfinetz",
  title: "AI/ML Engineer & Blockchain Developer",
  tagline: "Building intelligent systems at the intersection of AI, blockchain, and research",
  email: "mitch@integral.link",
  phone: "(814) 923-7851",
  location: "Erie, PA",
  links: {
    github: "https://github.com/0xmarf",
    githubPersonal: "https://github.com/mmarfinetz",
    linkedin: "https://linkedin.com/in/mitchellmarfinetz",
    dune: "https://dune.com/0xmitch",
    eportfolio: "https://eportfolio.mygreatlearning.com/mitchell-marfinetz"
  }
};

export const experiences: Experience[] = [
  {
    id: "jeylabs",
    title: "AI Safety Researcher & Data Analyst",
    company: "JEYLabs",
    location: "Remote",
    period: "2023–Present",
    type: "professional",
    description: "Leading AI safety research with focus on autonomous agent development, Constitutional AI implementation, and empirical evaluation frameworks.",
    achievements: [
      "Developed autonomous AI agents with safety constraints and monitoring systems",
      "Achieved 20% improvement in agent reliability through systematic evaluation methodologies",
      "Built red teaming frameworks for DeFi protocols using Python",
      "Published technical research on AI-crypto convergence and agent planning systems"
    ],
    technologies: ["Python", "PyTorch", "Constitutional AI", "RLHF", "Multi-agent Systems", "Red Teaming"]
  },
  {
    id: "integral",
    title: "Data Scientist & Researcher",
    company: "Integral",
    location: "Remote",
    period: "March 2022–Present",
    type: "professional",
    description: "Leading data science and empirical research on decentralized systems using statistical analysis and ML techniques, managing community of 5,000+ participants while developing front-end product experiences and securing major grant funding.",
    achievements: [
      "Authored and secured $225,000 ARB grant from Arbitrum Foundation through comprehensive proposal writing and stakeholder engagement",
      "Built comprehensive Dune analytics dashboards to track grant program performance and DeFi protocol metrics",
      "Conducted systematic evaluation of governance mechanisms affecting 5,000+ participants",
      "Developed AI safety evaluation frameworks for community moderation",
      "Performed large-scale data analysis using SQL and Python",
      "Designed controlled experiments on community engagement and human-AI interaction",
      "Led front-end development and product design for trading platform interfaces"
    ],
    technologies: ["SQL", "Python", "Statistical Analysis", "React", "TypeScript", "Product Design", "Grant Writing", "Business Development", "DeFi Research", "Dune Analytics"]
  },
  {
    id: "vinrouge",
    title: "VinRouge - Personalized AI Trading Agent",
    company: "Personal Project",
    location: "Remote",
    period: "2024",
    type: "project",
    description: "Sophisticated AI trading agent combining multi-modal intelligence with personalized user interaction through Telegram interface.",
    achievements: [
      "Deployed production system with 99.5% uptime on Railway platform",
      "Integrated real-time on-chain data with technical analysis for comprehensive market intelligence",
      "Implemented proprietary AI Risk Multiplier for dynamic signal weighting",
      "Created transparent decision-making framework with interpretable outputs"
    ],
    technologies: ["Python", "AI/ML", "Telegram API", "Railway", "Real-time Data Processing", "Blockchain Analytics"],
    links: [
      { label: "Live Demo", url: "https://vinrouge-production.up.railway.app/" },
      { label: "GitHub", url: "https://github.com/mmarfinetz/VinRouge" }
    ]
  },
  {
    id: "eliza-arbitrage",
    title: "ElizaOS Arbitrage Trading Agent",
    company: "Open Source Contribution",
    location: "Remote",
    period: "2024",
    type: "project",
    description: "Core plugin development for ElizaOS agent framework (15K+ GitHub stars) - sophisticated autonomous arbitrage detection and execution system.",
    achievements: [
      "Successfully processed $2M+ in autonomous transactions with zero capital loss events",
      "Achieved 99.7% system uptime with comprehensive error recovery mechanisms",
      "Implemented multi-step planning with dynamic threshold adjustment and risk assessment",
      "Built event-driven architecture enabling sub-second response times to market opportunities"
    ],
    technologies: ["TypeScript", "Solidity", "Hardhat", "Ethers.js", "Flashbots", "WebSocket", "Smart Contracts"],
    links: [
      { label: "ElizaOS Repository", url: "https://github.com/elizaOS/eliza" }
    ]
  },
  {
    id: "blogwriter",
    title: "Constitutional AI Content Generation Agent",
    company: "BlogWriter Project",
    location: "Remote",
    period: "2023–Present",
    type: "project",
    description: "Advanced content generation system implementing Constitutional AI principles for agent safety and alignment.",
    achievements: [
      "Implemented Constitutional AI methodology with self-critique and revision capabilities",
      "Achieved 40% improvement in output safety and coherence through systematic evaluation",
      "Built comprehensive evaluation suite including red teaming protocols",
      "Developed automated assessment pipeline with multi-dimensional quality scoring"
    ],
    technologies: ["Python", "GPT-2", "Transformers", "Constitutional AI", "Claude API", "Flask"],
    links: [
      { label: "GitHub", url: "https://github.com/mmarfinetz/BlogWriter" }
    ]
  },
  {
    id: "mit-certificate",
    title: "Certificate in Applied Data Science",
    company: "MIT Professional Education",
    location: "Cambridge, MA",
    period: "2022",
    type: "education",
    description: "Intensive program focused on deep learning, neural networks, and machine learning safety with emphasis on empirical research methods.",
    achievements: [
      "Built recommendation system achieving 85% accuracy using collaborative filtering",
      "Developed CNN for house number recognition with 92% accuracy",
      "Implemented regression models with R² > 0.85 for predictive analysis",
      "Completed projects in customer segmentation, lead conversion prediction, and marketing analysis"
    ],
    technologies: ["Python", "TensorFlow", "Keras", "Scikit-learn", "Pandas", "NumPy", "Computer Vision"]
  }
];

export const projects: Project[] = [
  {
    id: "vibebet-platform",
    title: "VibeBet - Prediction Market Platform",
    subtitle: "Mobile-First Trading & Social Platform",
    description: "Modern prediction market and cryptocurrency trading platform featuring real-time market data, social integration, and responsive mobile-first design. Built with React/Next.js for optimal user experience.",
    technologies: ["React", "Next.js", "TypeScript", "Mobile-First Design", "Cryptocurrency APIs", "Real-time Data"],
    features: [
      "Responsive mobile-optimized trading interfaces",
      "Real-time cryptocurrency market data integration",
      "Social media feed with Twitter-like engagement",
      "Percentage-based trading controls (10%, 25%, 50%, 100%)",
      "Live prediction markets for current events",
      "Token holder statistics and market analytics"
    ],
    metrics: [
      { label: "Platform Type", value: "Mobile-First" },
      { label: "Real-time Data", value: "Live" },
      { label: "User Experience", value: "Optimized" }
    ],
    links: [
      { label: "Live Platform", url: "https://vibebet.vercel.app/" },
      { label: "Token Trading", url: "https://vibebet.vercel.app/token/ift.epstein.eth" },
      { label: "Swap Interface", url: "https://vibebet.vercel.app/swap" }
    ],
    date: "2024-Present",
    category: "web-dev",
    featured: true
  },
  {
    id: "arbitrum-grant-program",
    title: "Arbitrum Foundation Grant Program",
    subtitle: "$225K DeFi Incentive Program Management",
    description: "Authored comprehensive grant proposal and managed $225,000 ARB incentive program for decentralized exchange liquidity provision. Built comprehensive analytics infrastructure for program tracking and performance measurement.",
    technologies: ["Grant Writing", "DeFi Protocols", "Dune Analytics", "Program Management", "Smart Contracts", "Data Analysis"],
    features: [
      "Authored successful $225K grant application to Arbitrum Foundation",
      "Designed 3-month liquidity incentive program with specific KPIs",
      "Built comprehensive Dune dashboard for real-time program tracking",
      "Managed distribution contracts and aggregator integrations",
      "Established TVL, volume, and slippage improvement targets",
      "Led stakeholder communication and bi-weekly reporting"
    ],
    metrics: [
      { label: "Grant Amount", value: "$225K" },
      { label: "Program Duration", value: "3 Months" },
      { label: "Token Pairs", value: "4 Pairs" },
      { label: "Success Rate", value: "100%" }
    ],
    links: [
      { label: "Grant Application", url: "https://forum.arbitrum.foundation/t/integral-ltipp-application-final/21693" },
      { label: "Dune Dashboard", url: "https://dune.com/0xmitch/integral-arbitrum-grant-tracking" }
    ],
    date: "2024",
    category: "blockchain",
    featured: true
  },
  {
    id: "vinrouge-agent",
    title: "VinRouge AI Trading Agent",
    subtitle: "Personalized Multi-Modal Intelligence System",
    description: "Production AI trading agent combining on-chain blockchain intelligence with traditional technical analysis through Telegram interface. Features proprietary AI Risk Multiplier for dynamic signal weighting and transparent decision-making framework.",
    technologies: ["Python", "AI/ML", "Telegram API", "Blockchain Analytics", "Real-time Processing"],
    features: [
      "Multi-modal data integration (on-chain + technical)",
      "Proprietary AI Risk Multiplier for signal weighting",
      "Real-time whale behavior and exchange flow analysis",
      "Personalized recommendations with transparent reasoning",
      "Production deployment with 99.5% uptime"
    ],
    metrics: [
      { label: "Uptime", value: "99.5%" },
      { label: "Response Time", value: "<1s" },
      { label: "Active Users", value: "Growing" }
    ],
    links: [
      { label: "Live Demo", url: "https://vinrouge-production.up.railway.app/" },
      { label: "GitHub", url: "https://github.com/mmarfinetz/VinRouge" }
    ],
    date: "2024",
    category: "ai-ml",
    featured: true
  },
  {
    id: "eliza-arbitrage",
    title: "ElizaOS Arbitrage Bot",
    subtitle: "Autonomous Multi-Agent Trading System",
    description: "Core plugin for ElizaOS agent framework enabling sophisticated arbitrage detection and execution. Demonstrates advanced agent coordination, planning, and tool use in high-stakes financial environments.",
    technologies: ["TypeScript", "Solidity", "Hardhat", "Ethers.js", "Flashbots", "Smart Contracts"],
    features: [
      "Multi-step planning with risk assessment",
      "Real-time market monitoring and opportunity detection",
      "Aave V3 flash loan integration",
      "Flashbots bundle protection against MEV",
      "Dynamic gas optimization strategies"
    ],
    metrics: [
      { label: "Transaction Volume", value: "$2M+" },
      { label: "System Uptime", value: "99.7%" },
      { label: "Capital Loss Events", value: "0" }
    ],
    links: [
      { label: "ElizaOS Repository", url: "https://github.com/elizaOS/eliza" }
    ],
    date: "2024",
    category: "blockchain",
    featured: true
  },
  {
    id: "blogwriter-constitutional",
    title: "Constitutional AI BlogWriter",
    subtitle: "Safety-Aligned Content Generation",
    description: "Advanced content generation system implementing Constitutional AI principles with self-critique, revision capabilities, and comprehensive safety evaluation frameworks.",
    technologies: ["Python", "GPT-2", "Transformers", "Constitutional AI", "Claude API", "Flask"],
    features: [
      "Constitutional AI methodology implementation",
      "Self-critique and revision systems",
      "Automated safety evaluation pipeline",
      "Multi-model integration with adaptive selection",
      "Systematic prompt engineering framework"
    ],
    metrics: [
      { label: "Safety Improvement", value: "40%" },
      { label: "Coherence Gain", value: "35%" },
      { label: "Service Uptime", value: "99.2%" }
    ],
    links: [
      { label: "GitHub", url: "https://github.com/mmarfinetz/BlogWriter" }
    ],
    date: "2023-Present",
    category: "ai-ml",
    featured: true
  },
  {
    id: "polymarket-analytics",
    title: "Polymarket Data Analytics",
    subtitle: "Real-time Market Intelligence Platform",
    description: "Web application for fetching and analyzing top markets/events from Polymarket with real-time data processing, sortable results, and CSV export capabilities.",
    technologies: ["Python", "Flask", "JavaScript", "Vercel", "API Integration"],
    features: [
      "Real-time market data fetching",
      "Sortable results interface",
      "CSV export functionality",
      "Clean responsive web interface",
      "Automated data refresh"
    ],
    metrics: [
      { label: "Data Sources", value: "Multiple" },
      { label: "Export Formats", value: "CSV" },
      { label: "Response Time", value: "Real-time" }
    ],
    links: [
      { label: "Live Demo", url: "https://polymarketdata.vercel.app" },
      { label: "GitHub", url: "https://github.com/mmarfinetz/polymarket-data-fetcher" }
    ],
    date: "2024",
    category: "web-dev",
    featured: false
  },
  {
    id: "gmail-unsubscriber",
    title: "Gmail Unsubscriber Tool",
    subtitle: "Automated Email Management System",
    description: "Automated tool for mass unsubscribing from unwanted emails using Gmail API with OAuth2 authentication, progress tracking, and stateless JWT implementation.",
    technologies: ["Python", "Flask", "Gmail API", "OAuth2", "JWT", "Automation"],
    features: [
      "Google OAuth integration",
      "Automatic unsubscribe link detection",
      "Progress tracking with real-time updates",
      "Stateless JWT authentication",
      "Batch processing capabilities"
    ],
    metrics: [
      { label: "Processing Speed", value: "Automated" },
      { label: "Auth Method", value: "OAuth2" },
      { label: "Token Management", value: "JWT" }
    ],
    links: [
      { label: "GitHub", url: "https://github.com/mmarfinetz/gmail-unsubscriber" }
    ],
    date: "2024",
    category: "web-dev",
    featured: false
  },
  {
    id: "mev-arbitrage-bot",
    title: "MEV Arbitrage Bot",
    subtitle: "Ethereum DeFi Arbitrage System",
    description: "Sophisticated Ethereum arbitrage bot for identifying and executing profitable trades across DEXes with flash loan integration and MEV protection.",
    technologies: ["TypeScript", "Solidity", "Hardhat", "Ethers.js", "Flashbots", "DeFi"],
    features: [
      "Real-time market monitoring across DEXes",
      "Aave V3 flash loan integration",
      "Flashbots bundle protection",
      "Dynamic gas optimization",
      "Profit threshold management"
    ],
    metrics: [
      { label: "Detection Speed", value: "Real-time" },
      { label: "Gas Optimization", value: "Dynamic" },
      { label: "MEV Protection", value: "Flashbots" }
    ],
    links: [
      { label: "GitHub", url: "https://github.com/mmarfinetz/mev-arbitrage-bot" }
    ],
    date: "2024",
    category: "blockchain",
    featured: false
  }
];

export const skills: Skill[] = [
  {
    category: "AI/ML & Safety",
    skills: ["Constitutional AI", "RLHF", "PyTorch", "TensorFlow", "Scikit-learn", "Red Teaming", "Agent Systems", "LLM Integration", "Model Fine-tuning", "Statistical Analysis"]
  },
  {
    category: "Programming Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Solidity", "SQL", "Rust", "C++"]
  },
  {
    category: "Blockchain & DeFi",
    skills: ["Smart Contracts", "Web3.js", "Ethers.js", "Hardhat", "Flash Loans", "MEV", "DeFi Protocols", "On-chain Analytics", "Dune Analytics"]
  },
  {
    category: "Web Development",
    skills: ["React", "Node.js", "Flask", "FastAPI", "PostgreSQL", "MongoDB", "Docker", "AWS", "Vercel"]
  },
  {
    category: "Business & Research",
    skills: ["Grant Writing", "Business Development", "Program Management", "Empirical Research", "Statistical Modeling", "Data Visualization", "A/B Testing", "Experimental Design", "Scientific Writing"]
  }
];

export const technicalProjects: TechnicalProject[] = [
  {
    id: "eliza-arbitrage-agent",
    title: "ElizaOS Arbitrage Trading Agent",
    subtitle: "Open Source Agent Framework Contribution",
    description: "Sophisticated autonomous arbitrage detection and execution system as a core plugin for the ElizaOS agent framework (15K+ GitHub stars). Demonstrates advanced agent capabilities across multiple dimensions.",
    technologies: ["TypeScript", "Ethereum", "WebSocket APIs", "Flashbots", "Smart Contracts"],
    architecture: {
      overview: "Multi-step market analysis pipeline: price scanning → opportunity evaluation → risk assessment → execution planning with dynamic threshold adjustment based on market volatility and gas conditions.",
      challenges: [
        {
          challenge: "Real-time coordination between market monitoring and execution agents",
          solution: "Implemented event-driven architecture with WebSocket coordination, enabling sub-second response times to market opportunities"
        },
        {
          challenge: "Managing complex external dependencies (DEXes, blockchain RPCs, flash loan providers)",
          solution: "Built robust error handling and fallback mechanisms, achieving 99.7% uptime in production deployment"
        },
        {
          challenge: "Balancing opportunity detection speed with transaction safety",
          solution: "Developed tiered validation system with fast pre-screening and comprehensive safety checks before execution"
        }
      ],
      codeExample: `// Complex tool chain coordination
const marketData = await this.dexScanner.scanOpportunities();
const gasEstimate = await this.gasOptimizer.estimateTransaction(opportunity);
const flashLoanQuote = await this.aaveProvider.getFlashLoanTerms();
const execution = await this.flashbotsRelay.submitBundle(transaction);`
    },
    empiricalResults: {
      performance: [
        { label: "Transaction Volume", value: "$2M+" },
        { label: "System Uptime", value: "99.7%" },
        { label: "Response Time", value: "Sub-second" }
      ],
      impact: [
        "Successfully processed $2M+ in autonomous transactions",
        "Contributed to price efficiency across multiple DEX pairs",
        "Zero capital loss events through safety constraint implementation"
      ],
      safetyMetrics: [
        { label: "Capital Loss Events", value: "0" },
        { label: "Failed Transaction Rate", value: "<0.3%" },
        { label: "Safety Constraint Violations", value: "0" }
      ]
    },
    researchRelevance: {
      anthropicAlignment: [
        "Reliable execution of production-grade autonomous systems with safety constraints",
        "Complex API orchestration and external system coordination",
        "Multi-step decision sequences with conditional logic and risk assessment"
      ],
      agentCapabilities: [
        "Planning and Decision-Making",
        "Tool Use Orchestration", 
        "Memory and State Management",
        "Safety and Risk Management"
      ],
      safetyContributions: [
        "Circuit breaker mechanisms preventing excessive failed transactions",
        "Comprehensive error handling with graceful degradation",
        "Transaction routing via Flashbots for MEV protection"
      ]
    },
    links: [
      { label: "ElizaOS Repository", url: "https://github.com/elizaOS/eliza" }
    ],
    date: "2024",
    category: "agent-systems",
    featured: true
  },
  {
    id: "blogwriter-constitutional",
    title: "BlogWriter - Personalized Content Generation Agent",
    subtitle: "AI-Powered Writing with Style Transfer and Multi-Model Integration",
    description: "Advanced content generation system that learns and adapts to individual writing styles through fine-tuning and multi-model orchestration with Constitutional AI principles.",
    technologies: ["Python", "GPT-2", "Transformers", "Claude API", "OpenAI API", "Jupyter Notebooks"],
    architecture: {
      overview: "Hybrid generation architecture with seamless integration of local fine-tuned models and API-based services, featuring intelligent model selection based on task requirements and performance metrics.",
      challenges: [
        {
          challenge: "Achieving consistent personalized writing style across different content types",
          solution: "Fine-tuned GPT-2 models on personal writing samples with configurable style strength parameters"
        },
        {
          challenge: "Coordinating multiple AI models for optimal output quality",
          solution: "Built adaptive model selection system that chooses optimal models based on content requirements and quality thresholds"
        }
      ],
      codeExample: `class PersonalizedWritingAgent:
    def train_custom_style(self, writing_samples, model_size='medium'):
        # Requires minimum 10,000 words of user writing samples
        tokenized_data = self.preprocess_writing_samples(writing_samples)
        fine_tuned_model = self.fine_tune_gpt2(tokenized_data, model_size)
        return self.optimize_for_style_consistency(fine_tuned_model)`
    },
    empiricalResults: {
      performance: [
        { label: "Style Consistency", value: "High" },
        { label: "Model Integration", value: "Seamless" },
        { label: "Template Effectiveness", value: "Optimized" }
      ],
      impact: [
        "Successfully fine-tuned GPT-2 models achieving high style consistency",
        "Built robust multi-model architecture supporting seamless switching",
        "Created production-ready content generation system with modular architecture"
      ]
    },
    researchRelevance: {
      anthropicAlignment: [
        "Personalized AI systems that adapt to user preferences and communication patterns",
        "Multi-model coordination for selecting optimal tools based on task requirements",
        "Systematic evaluation frameworks for agent reliability and performance optimization"
      ],
      agentCapabilities: [
        "Style Transfer and Adaptation",
        "Multi-Model Orchestration",
        "Template-Based Intelligence",
        "Systematic Evaluation"
      ],
      safetyContributions: [
        "Constitutional AI methodology implementation with self-critique systems",
        "Automated safety evaluation pipeline with comprehensive quality assessment",
        "Systematic prompt engineering framework for consistent behavior"
      ]
    },
    links: [
      { label: "GitHub", url: "https://github.com/mmarfinetz/BlogWriter" }
    ],
    date: "2023-Present",
    category: "constitutional-ai",
    featured: true
  },
  {
    id: "multi-agent-financial",
    title: "Multi-Agent Financial Coordination Systems",
    subtitle: "MEV Detection and Liquidation Management",
    description: "Sophisticated multi-agent systems for autonomous financial operations with distributed agent architecture and inter-agent communication protocols.",
    technologies: ["Python", "Rust", "WebSocket", "Uniswap V3", "Flash Loans", "Multi-threading"],
    architecture: {
      overview: "Event-driven coordination between monitoring, analysis, and execution agents with shared state management using thread-safe data structures and message passing protocols.",
      challenges: [
        {
          challenge: "Coordinating multiple agents in real-time financial operations",
          solution: "Implemented event-driven architecture with message passing protocols for seamless agent coordination"
        },
        {
          challenge: "Ensuring system reliability in high-stakes financial environments",
          solution: "Built modular architecture with component-level failure isolation and comprehensive error handling"
        }
      ],
      codeExample: `// Multi-threaded agent coordination
struct LiquidationSystem {
    monitor_agent: Arc<Mutex<PositionMonitor>>,
    analysis_agent: Arc<Mutex<RiskAnalyzer>>, 
    execution_agent: Arc<Mutex<LiquidationExecutor>>,
}`
    },
    empiricalResults: {
      performance: [
        { label: "Response Time", value: "Sub-second" },
        { label: "Capital Efficiency", value: "Optimal" },
        { label: "System Reliability", value: "High" }
      ],
      impact: [
        "Sub-second detection and execution of liquidation opportunities",
        "Optimal flash loan utilization minimizing transaction costs",
        "Comprehensive logging and monitoring for operational transparency"
      ],
      safetyMetrics: [
        { label: "Principal Loss Events", value: "0" },
        { label: "Risk Management Score", value: "A+" },
        { label: "Health Factor Monitoring", value: "Real-time" }
      ]
    },
    researchRelevance: {
      anthropicAlignment: [
        "Inter-agent communication and coordination protocols",
        "Dynamic planning with adaptive threshold adjustment",
        "Safety constraint implementation in multi-agent environments"
      ],
      agentCapabilities: [
        "Multi-Agent Coordination",
        "Planning and Memory Systems", 
        "Tool Use and Integration",
        "Safety and Reliability"
      ],
      safetyContributions: [
        "Automated circuit breakers preventing catastrophic losses",
        "Position size limits and exposure management",
        "Health factor monitoring with early warning systems"
      ]
    },
    links: [],
    date: "2024",
    category: "multi-agent",
    featured: true
  },
  {
    id: "vinrouge-trading-agent",
    title: "VinRouge - Personalized AI Trading Agent",
    subtitle: "Multi-Modal Intelligence and Adaptive Decision-Making",
    description: "Sophisticated AI trading agent combining multi-modal intelligence with personalized user interaction, demonstrating advanced agent capabilities in real-time market analysis.",
    technologies: ["Python", "AI/ML Frameworks", "Telegram API", "Railway Deployment", "Real-time Data Processing"],
    architecture: {
      overview: "Multi-signal coordination system combining off-chain technical analysis, on-chain blockchain intelligence, and AI-driven signal weighting through proprietary AI Risk Multiplier.",
      challenges: [
        {
          challenge: "Integrating diverse data sources for coherent market analysis",
          solution: "Built multi-modal data integration system seamlessly combining on-chain blockchain data with traditional technical analysis"
        },
        {
          challenge: "Providing transparent and interpretable AI decision-making",
          solution: "Implemented step-by-step analysis presentation showing agent reasoning process with clear visualization of signal strength"
        }
      ],
      codeExample: `class IntelligentSignalProcessor:
    def analyze_market(self, symbol):
        # Off-chain technical analysis
        technical_signals = self.technical_analyzer.compute_indicators(symbol)
        
        # On-chain intelligence
        whale_signals = self.whale_tracker.analyze_accumulation(symbol)
        flow_signals = self.exchange_monitor.track_flows(symbol)
        
        # AI-driven signal weighting
        risk_multiplier = self.ai_engine.compute_risk_weights(
            technical_signals, whale_signals, flow_signals
        )
        
        return self.synthesize_analysis(risk_multiplier)`
    },
    empiricalResults: {
      performance: [
        { label: "System Uptime", value: "99.5%" },
        { label: "Response Time", value: "<1s" },
        { label: "User Retention", value: "High" }
      ],
      impact: [
        "Active daily users engaging with personalized market analysis",
        "High user retention through valuable, actionable intelligence delivery",
        "Real-time data processing handling multiple concurrent user sessions"
      ]
    },
    researchRelevance: {
      anthropicAlignment: [
        "Personalized agent intelligence adapting to individual user needs",
        "Multi-modal reasoning combining diverse data sources",
        "Transparent decision making with interpretable outputs"
      ],
      agentCapabilities: [
        "Multi-Modal Data Integration",
        "Personalized User Interaction",
        "Real-Time Adaptation",
        "Transparent Decision Making"
      ],
      safetyContributions: [
        "Clear presentation of analysis uncertainty and confidence intervals",
        "Risk factor attribution showing primary drivers of recommendations",
        "Educational components helping users understand market dynamics"
      ]
    },
    links: [
      { label: "Live Demo", url: "https://vinrouge-production.up.railway.app/" },
      { label: "GitHub", url: "https://github.com/mmarfinetz/VinRouge" }
    ],
    date: "2024",
    category: "agent-systems",
    featured: true
  },
  {
    id: "agent-evaluation-framework",
    title: "Agent Evaluation and Testing Infrastructure", 
    subtitle: "Systematic Assessment Frameworks",
    description: "Comprehensive frameworks for systematic agent behavior assessment with automated testing pipelines, red teaming protocols, and empirical analysis tools.",
    technologies: ["Python", "Statistical Analysis", "A/B Testing", "Automated Testing", "Red Teaming"],
    architecture: {
      overview: "Systematic assessment infrastructure with scenario-based testing, stress testing under adverse conditions, and performance benchmarking with standardized metrics.",
      challenges: [
        {
          challenge: "Creating comprehensive assessment of agent behavior under diverse conditions",
          solution: "Developed multi-dimensional evaluation framework with automated testing pipelines and adversarial testing protocols"
        },
        {
          challenge: "Ensuring agent robustness and safety constraint validation",
          solution: "Implemented red teaming protocols with systematic edge case discovery and safety constraint verification"
        }
      ]
    },
    empiricalResults: {
      performance: [
        { label: "Test Coverage", value: "Comprehensive" },
        { label: "Edge Case Detection", value: "Systematic" },
        { label: "Safety Validation", value: "Robust" }
      ],
      impact: [
        "Systematic improvement of agent reliability through empirical feedback",
        "Discovery of optimal parameter configurations through A/B testing",
        "Validation of safety constraints under diverse operational conditions"
      ]
    },
    researchRelevance: {
      anthropicAlignment: [
        "Systematic evaluation of agent learning and adaptation",
        "Behavioral assessment with statistical modeling",
        "Interpretability research through decision tree analysis"
      ],
      agentCapabilities: [
        "Automated Testing Pipelines",
        "Red Teaming Protocols",
        "Behavioral Assessment",
        "Interpretability Research"
      ],
      safetyContributions: [
        "Adversarial testing for agent robustness validation",
        "Safety constraint verification under extreme conditions",
        "Feature importance analysis for decision explanations"
      ]
    },
    links: [],
    date: "2023-Present",
    category: "evaluation-frameworks",
    featured: true
  }
];

export const education = [
  {
    degree: "Certificate in Applied Data Science",
    school: "MIT Professional Education",
    specialization: "Deep Learning Focus",
    year: "2022",
    highlights: ["Neural Networks", "Machine Learning Safety", "Empirical Research Methods"]
  },
  {
    degree: "Blockchain Developer Certification",
    school: "Alchemy University",
    specialization: "Ethereum Development",
    year: "2022",
    highlights: ["Smart Contract Development", "DeFi Protocols", "Web3 Integration"]
  },
  {
    degree: "Bachelor of Business Administration",
    school: "Kent State University",
    specialization: "Computer Information Systems",
    year: "2021",
    highlights: ["Dean's List Fall 2020", "Business Technology Integration"]
  }
];