// Work history for the Experience tab, newest first.
// Wrap words in **double stars** to make them bold.

export type Job = {
  title: string;
  org: string;
  dates: string;
  place?: string;
  points: string[];
};

export const jobs: Job[] = [
  {
    title: 'Machine Learning Specialist',
    org: 'Sheridan College',
    dates: 'Oct 2026 – Present',
    place: 'Brampton, ON · Hybrid · Contract',
    points: [
      'Apply computer vision and deep learning to automated inspection in aerospace as part of an applied research team.',
      'Develop and evaluate deep learning models that detect defects in inspection imagery, and turn experiment results into practical inspection workflows with the research team and industry stakeholders.',
    ],
  },
  {
    title: 'Research Assistant',
    org: 'Sheridan College (Mitacs Business Strategy Internship)',
    dates: 'Dec 2025 – May 2026',
    place: 'Toronto, ON',
    points: [
      'Researched computer vision and deep learning methods for an industry-sponsored visual inspection project.',
      'Ran experiments, analyzed model results and presented findings to researchers and the industry partner.',
    ],
  },
  {
    title: 'Senior Software Engineer, Backend & Test Automation',
    org: 'S.F. Express',
    dates: 'Apr 2021 – Mar 2023',
    place: 'Shenzhen, China',
    points: [
      "Built features and upgrades for **internal enterprise logistics systems** at one of China's largest logistics companies, in **Java and Python**.",
      'Built and maintained **automated test frameworks** that improved release quality and reduced manual testing.',
      'Turned complex business requirements into technical tasks and worked with business, development and QA teams to **troubleshoot production issues** and improve reliability.',
      '**Mentored new engineers:** walked them through the logistics domain and the codebase module by module, and reviewed their code until they delivered independently.',
    ],
  },
  {
    title: 'Senior Software Engineer',
    org: 'Ping An Securities',
    dates: 'Jun 2017 – Apr 2021',
    place: 'Shenzhen, China',
    points: [
      'Developed and maintained **Java fixed-income trading and analytics systems** used by trading and risk teams.',
      '**Converted Excel-based bond and interest-rate swap valuation and risk models into production services**, covering cash-flow processing, P&L calculation and batch analytics.',
      'Built **Python reconciliation tools** that checked end-of-day results automatically and reduced manual checks.',
      'Provided production support and delivered enhancements with trading, risk and business stakeholders.',
    ],
  },
  {
    title: 'Senior Software Engineer',
    org: "Moody's Analytics",
    dates: 'Jun 2015 – Apr 2017',
    place: 'Shenzhen, China',
    points: [
      'Implemented client-specific internal credit rating models for **major banks** in RA Studio and C#, turning approved credit-risk specifications into production software.',
      '**Performance root-cause fix:** replaced brute-force cycle detection in DAG-based rating models with a **topological sort**, cutting model-viewer startup **from hours to seconds**.',
      'Helped build a **Selenium + SpecFlow (BDD) automation framework** with QA and business analysts, covering about ten scorecards.',
      'Onboarded and mentored new team members on the credit-risk business and the rating-model modules, and reviewed their code.',
    ],
  },
  {
    title: 'Senior Software Engineer',
    org: 'One Cloud',
    dates: 'Sep 2013 – Jun 2015',
    place: 'Guangzhou, China',
    points: [
      'Developed modules for **private cloud products** and designed and implemented their **authentication flows**.',
      'Designed a **high-availability solution based on SQL Server mirroring**.',
      'Built a content and rules publishing module so customers could update content and rules without a release.',
    ],
  },
  {
    title: 'Earlier experience',
    org: '',
    dates: '2007 – 2013',
    points: [
      '**Software Engineer, Pactera Technology** (client: Expedia), Shenzhen & Seattle, 2012–2013: hotel inventory web services; refactored core services from C++ to WCF (C#); built a web tool for test managers.',
      "**Software Engineer, Moody's Analytics**, Shenzhen, 2008–2011: credit rating scorecards for banking clients in C#; contributed to the RiskAnalyst platform and RA Studio.",
      '**Software Developer Intern, Thomson Reuters**, 2007–2008: developed and maintained the indexing module of a **legal search engine**.',
    ],
  },
];
