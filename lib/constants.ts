export interface NavItem {
  name: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  seoPhrases: string[];
  features: string[];
  ctaText: string;
  href: string;
  iconName: string;
  badge?: string;
  isFeatured?: boolean;
}

export interface WhoWeServeItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tags: string[];
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface LocationItem {
  name: string;
  tagline: string;
  slug: string;
  hub: string;
  popularServices: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  rating: number;
  service: string;
  quote: string;
  isVerifiedPlaceholder: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const BRAND = {
  name: "Taxfello",
  legalName: "Taxfello Advisory Services",
  tagline: "Simplify Your Taxes. Stay Compliant. Grow Your Business.",
  positioning: "Tax, Compliance & Business Advisory in Delhi NCR",
  phonePlaceholder: "+91 88004 85106",
  phoneRaw: "+918800485106",
  emailPlaceholder: "consult@taxfello.com",
  addressPlaceholder: "Connaught Place, New Delhi, Delhi 110001",
  siteUrl: "https://www.taxfello.com",
};

export const TRUST_STATS = [
  { value: "10,000+", label: "Businesses & Individuals Served", sublabel: "Verified client engagements" },
  { value: "500+", label: "Professionals & Network Experts", sublabel: "CAs, CSs, and Legal Advocates" },
  { value: "4.9★", label: "Client Satisfaction Rating", sublabel: "Across Google & Direct feedback" },
  { value: "99.8%", label: "Compliance Accuracy Record", sublabel: "Timely filings with zero notice rate" },
];

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: "income-tax",
    slug: "income-tax-return-filing-delhi",
    title: "Income Tax & ITR Filing",
    eyebrow: "Individual & Corporate Tax",
    description: "Professional income tax return filing and tax advisory for individuals, professionals, businesses, investors and NRIs.",
    seoPhrases: ["income tax consultant Delhi", "ITR filing Delhi", "income tax return filing Delhi NCR"],
    features: [
      "ITR Filing (Salaried, Capital Gains, Business)",
      "Advance Tax & Year-End Tax Planning",
      "TDS Returns & Lower Deduction Certificates",
      "Capital Gains Advisory (Property & Stocks)",
      "Business Taxation & Audit Preparation",
      "Income Tax Notice Reply & Scrutiny Assistance"
    ],
    ctaText: "File Your ITR",
    href: "/#services",
    iconName: "FileText"
  },
  {
    id: "gst",
    slug: "gst-consultant-delhi",
    title: "GST Registration & Compliance",
    eyebrow: "Indirect Tax Excellence",
    description: "Complete GST support from registration and return filing to reconciliation, refunds and notice assistance.",
    seoPhrases: ["GST consultant Delhi", "GST registration Delhi", "GST return filing Delhi NCR", "GST compliance services Delhi"],
    features: [
      "GST Registration & Amendments",
      "Monthly & Quarterly GST Return Filing (GSTR-1, 3B, 9/9C)",
      "Input Tax Credit (ITC) Reconciliation",
      "GST LUT for Export of Goods & Services",
      "GST Refund Processing & Audit Handling",
      "Departmental Notice Assistance & Representation"
    ],
    ctaText: "Get GST Assistance",
    href: "/#services",
    iconName: "Receipt"
  },
  {
    id: "company-registration",
    slug: "company-registration-delhi",
    title: "Company & Business Registration",
    eyebrow: "Entity Incorporation",
    description: "Start your business with professional company incorporation and registration support across Delhi NCR.",
    seoPhrases: ["company registration Delhi", "private limited company registration Delhi", "LLP registration Delhi NCR", "startup consultant Delhi"],
    features: [
      "Private Limited Company Incorporation",
      "Limited Liability Partnership (LLP) Registration",
      "One Person Company (OPC) Setup",
      "Partnership Firm & Proprietorship Enrolment",
      "Startup India DPIIT Recognition",
      "MSME / Udyam Registration & PAN/TAN/Bank Kit"
    ],
    ctaText: "Register Your Business",
    href: "/#services",
    iconName: "Building2"
  },
  {
    id: "accounting",
    slug: "accounting-services-delhi",
    title: "Accounting & Bookkeeping",
    eyebrow: "Financial Operations",
    description: "Keep your business finances accurate, organized and ready for better decisions with dedicated accountants.",
    seoPhrases: ["accounting services Delhi", "bookkeeping services Delhi NCR", "accounting services for MSMEs Delhi"],
    features: [
      "Day-to-day Bookkeeping in Tally / Zoho / QuickBooks",
      "Bank, Credit Card & Vendor Reconciliations",
      "Balance Sheet & Profit & Loss Preparation",
      "Monthly MIS Reporting & KPI Dashboards",
      "Payroll Processing & Statutory Deductions (PF/ESI)",
      "Year-End Statutory Closing & Audit File Handover"
    ],
    ctaText: "Get Accounting Support",
    href: "/#services",
    iconName: "Calculator"
  },
  {
    id: "roc-compliance",
    slug: "roc-compliance-delhi",
    title: "ROC & MCA Compliance",
    eyebrow: "Corporate Secretarial",
    description: "Stay compliant with your company's annual and ongoing ROC and MCA filing requirements without penalty risk.",
    seoPhrases: ["ROC compliance Delhi", "MCA compliance Delhi", "ROC filing consultant Delhi NCR"],
    features: [
      "Annual MCA Filings (Form AOC-4 & MGT-7)",
      "Director KYC (DIR-3 KYC) Compliance",
      "Auditor Appointment (Form ADT-1)",
      "LLP Annual Compliance (Form 11 & Form 8)",
      "Board Resolution & Minutes Drafting",
      "Change in Directors, Share Capital or Registered Office"
    ],
    ctaText: "Stay MCA Compliant",
    href: "/#services",
    iconName: "ShieldCheck"
  },
  {
    id: "virtual-cfo",
    slug: "virtual-cfo-services-delhi",
    title: "Virtual CFO & Financial Advisory",
    eyebrow: "Strategic Leadership",
    description: "Get strategic financial guidance without the cost of hiring a full-time CFO. Tailored for high-growth firms.",
    seoPhrases: ["virtual CFO Delhi", "virtual CFO Delhi NCR", "virtual CFO for startups Delhi", "outsourced CFO services Delhi"],
    features: [
      "Strategic Financial Planning & Runway Analysis",
      "Dynamic Cash Flow Management & Working Capital",
      "Budgeting, Forecasting & Variance Tracking",
      "Comprehensive Investor-Ready MIS Reporting",
      "Unit Economics & Margin/Profitability Analysis",
      "Due Diligence & Fundraise Advisory"
    ],
    ctaText: "Talk to a CFO Expert",
    href: "/#virtual-cfo",
    iconName: "TrendingUp",
    badge: "Most Comprehensive",
    isFeatured: true
  }
];

export const WHO_WE_SERVE: WhoWeServeItem[] = [
  {
    id: "individuals",
    title: "Individuals & Salaried",
    description: "Hassle-free ITR filing, Form 16 reconciliation, HRA optimization, capital gains calculations, and prompt tax notice replies.",
    iconName: "User",
    tags: ["ITR-1 / ITR-2", "Capital Gains", "Tax Notices"]
  },
  {
    id: "freelancers",
    title: "Freelancers & Consultants",
    description: "Presumptive taxation under 44ADA, GST LUT for cross-border export of remote work, quarterly advance tax, and simple bookkeeping.",
    iconName: "Laptop",
    tags: ["Section 44ADA", "GST LUT", "Global Invoicing"]
  },
  {
    id: "startups",
    title: "Startups & Founders",
    description: "Frictionless Private Limited / LLP incorporation, DPIIT recognition, 80-IAC tax holiday setup, cap table advisory, and seed compliance.",
    iconName: "Rocket",
    tags: ["DPIIT Startup", "Pvt Ltd Setup", "Investor MIS"]
  },
  {
    id: "msmes",
    title: "MSMEs & Family Businesses",
    description: "Monthly GST reconciliations, vendor credit management, Tally/Zoho ledger maintenance, payroll compliance, and working capital advisory.",
    iconName: "Store",
    tags: ["Udyam Benefits", "GST Audit", "Monthly MIS"]
  },
  {
    id: "companies",
    title: "Growing Private Companies",
    description: "Comprehensive secretarial compliance (AOC-4, MGT-7), internal financial controls, board advisory, and outsourced Virtual CFO leadership.",
    iconName: "Building",
    tags: ["ROC Filings", "Internal Audit", "Virtual CFO"]
  },
  {
    id: "nris",
    title: "NRIs & Global Investors",
    description: "NRI taxation in India, Form 15CA/15CB certificates, capital gains on property sales, DTAA benefits, and repatriation support.",
    iconName: "Globe",
    tags: ["Form 15CA/CB", "DTAA Tax", "Property Sales"]
  }
];

export const WHY_TAXFELLO: WhyChooseUsItem[] = [
  {
    id: "ca-led",
    title: "CA-Led Professional Expertise",
    description: "Your filings and financial structures are designed and supervised by experienced Chartered Accountants and Company Secretaries.",
    iconName: "Award"
  },
  {
    id: "end-to-end",
    title: "End-to-End Compliance Hub",
    description: "Income tax, GST, accounting, corporate legal, and ROC under one single roof with centralized document records.",
    iconName: "Layers"
  },
  {
    id: "transparent-pricing",
    title: "Transparent & Upfront Pricing",
    description: "Clear statement of work, no hidden filing surcharges, and predictable monthly or annual retainers with full billing clarity.",
    iconName: "CheckCircle2"
  },
  {
    id: "timely-filing",
    title: "Zero-Penalty Timely Filing",
    description: "Automated compliance calendar alerts and proactive workflows ensure your returns are submitted well before statutory cutoffs.",
    iconName: "Clock"
  },
  {
    id: "secure-documents",
    title: "Encrypted & Confidential Data",
    description: "Enterprise-grade encryption and stringent NDAs safeguard your proprietary financial records, bank statements, and PAN/Aadhaar data.",
    iconName: "Lock"
  },
  {
    id: "dedicated-support",
    title: "Dedicated Account Manager",
    description: "Direct WhatsApp, email, and phone contact with your assigned relationship manager, with prompt answers to any urgent compliance queries.",
    iconName: "Headphones"
  }
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Talk to an Expert",
    description: "Schedule a free consultation call. We analyze your situation, explain your exact compliance obligations, and suggest the right package."
  },
  {
    step: "02",
    title: "Share Your Documents",
    description: "Upload your PAN, bank statements, invoices, or business details to our secure document vault with a simple guided checklist."
  },
  {
    step: "03",
    title: "We Handle the Process",
    description: "Our CAs and tax specialists draft calculations, prepare filings, file with government portals, and perform rigorous quality checks."
  },
  {
    step: "04",
    title: "Stay Fully Compliant",
    description: "Receive your official acknowledgment receipts, challans, and real-time dashboard updates, plus ongoing reminders for upcoming cycles."
  }
];

export const LOCATIONS: LocationItem[] = [
  {
    name: "Delhi",
    tagline: "Corporate & Central Business Hub",
    slug: "tax-consultant-delhi",
    hub: "Connaught Place, Barakhamba, Saket, Pitampura, Karol Bagh, Laxmi Nagar",
    popularServices: ["ITR Filing", "GST Return Filing", "Company Incorporation", "Pvt Ltd Registration"]
  },
  {
    name: "New Delhi",
    tagline: "Central Government & Institutional District",
    slug: "tax-consultant-delhi",
    hub: "Chanakyapuri, Nehru Place, Bhikaji Cama Place, Okhla Industrial Area",
    popularServices: ["Corporate Tax Planning", "Virtual CFO", "ROC Compliance"]
  },
  {
    name: "Noida",
    tagline: "Tech Parks & Industrial Corridors",
    slug: "tax-consultant-delhi",
    hub: "Sector 62, Sector 18, Expressway IT Corridor, Sector 63, Phase 2",
    popularServices: ["Startup Incorporation", "GST Compliance", "Export LUT", "Bookkeeping"]
  },
  {
    name: "Greater Noida",
    tagline: "Manufacturing Hub & Educational Zones",
    slug: "tax-consultant-delhi",
    hub: "Knowledge Park, Ecotech Manufacturing Zones, Pari Chowk",
    popularServices: ["MSME Udyam", "Industrial Accounting", "Factory Compliance"]
  },
  {
    name: "Gurugram",
    tagline: "Fintech, Global MNCs & Unicorn Capital",
    slug: "tax-consultant-delhi",
    hub: "Cyber City, Golf Course Road, Udyog Vihar, Sohna Road, Sector 29",
    popularServices: ["Virtual CFO", "DPIIT Startups", "Cross-Border NRI Taxation", "Due Diligence"]
  },
  {
    name: "Ghaziabad",
    tagline: "Trading Centers & Industrial Estates",
    slug: "tax-consultant-delhi",
    hub: "Kavi Nagar, Sahibabad Industrial Area, Raj Nagar District Centre, Mohan Nagar",
    popularServices: ["GST Notice Support", "Partnership/LLP", "Trader Accounting"]
  },
  {
    name: "Faridabad",
    tagline: "Heavy Engineering & Manufacturing Cluster",
    slug: "tax-consultant-delhi",
    hub: "Sector 15, Bata Chowk Industrial Belt, Mathura Road Corridor",
    popularServices: ["Manufacturing GST Audits", "TDS Returns", "Company Secretarial"]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Rajesh S.",
    role: "Co-founder & CEO",
    company: "SaaS Tech Solutions",
    location: "Gurugram, Haryana",
    rating: 5,
    service: "Company Registration & Virtual CFO",
    quote: "Taxfello made our company incorporation and DPIIT startup approval straightforward. Having their Virtual CFO handle our investor reports has saved us 15+ hours every month.",
    isVerifiedPlaceholder: true
  },
  {
    id: "test-2",
    name: "Pooja M.",
    role: "Independent Design Consultant",
    company: "Studio PX",
    location: "South Delhi",
    rating: 5,
    service: "ITR Filing & GST LUT",
    quote: "As a freelancer billing international clients, GST LUT and Section 44ADA rules used to be confusing. Taxfello's team explained everything clearly and filed my return within 48 hours.",
    isVerifiedPlaceholder: true
  },
  {
    id: "test-3",
    name: "Vikas A.",
    role: "Managing Director",
    company: "Apex Precision Components",
    location: "Noida Sector 63",
    rating: 5,
    service: "Monthly GST, Accounting & ROC Compliance",
    quote: "We switched our entire manufacturing accounting and ROC compliance to Taxfello last year. Zero penalties, instant monthly reconciliations, and prompt responses from their team.",
    isVerifiedPlaceholder: true
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "What does a tax consultant in Delhi do?",
    answer: "A professional tax consultant in Delhi assists individuals and corporations with strategic tax planning, income tax return (ITR) preparation, GST advisory, advance tax estimation, capital gains calculation, and formal replies to scrutiny or defect notices issued by the Income Tax Department.",
    category: "General"
  },
  {
    question: "How can I file my income tax return in Delhi with Taxfello?",
    answer: "The process is seamless and digital: share your Form 16, bank statements, and investment receipts with our expert team. We verify your tax regime (New vs Old), compute applicable deductions, prepare your computation sheet for your approval, and file your ITR securely on the official e-Filing portal.",
    category: "Income Tax"
  },
  {
    question: "Where can I find a reliable GST consultant in Delhi NCR?",
    answer: "Taxfello serves businesses across Delhi, Noida, Gurugram, Ghaziabad, and Faridabad. Our indirect tax consultants handle end-to-end GST registrations, monthly GSTR-1 and GSTR-3B filings, input tax credit (ITC) reconciliation, export LUTs, and GST departmental notice replies.",
    category: "GST"
  },
  {
    question: "Can Taxfello help with GST registration in Delhi?",
    answer: "Yes. We assist proprietorships, partnerships, LLPs, and Private Limited companies in obtaining new GSTINs within 3-7 working days. We also help obtain principal place of business documentation, electricity bill verifications, and NOCs for rented premises.",
    category: "GST"
  },
  {
    question: "How can I register a Private Limited Company in Delhi?",
    answer: "Our CA/CS team handles the entire SPICe+ (INC-32) MCA workflow: Digital Signature Certificates (DSC), Director Identification Numbers (DIN), Name Reservation (RUN), Memorandum & Articles of Association (MOA/AOA), PAN, TAN, and EPFO/ESIC bank account opening kit.",
    category: "Company Registration"
  },
  {
    question: "Does Taxfello provide accounting services for MSMEs?",
    answer: "Yes, we provide dedicated outsourced bookkeeping and accounting services on cloud platforms like Tally Prime, Zoho Books, and QuickBooks. Our services cover day-to-day transaction recording, vendor reconciliations, monthly P&L/Balance Sheets, and statutory compliance reviews.",
    category: "Accounting"
  },
  {
    question: "Can Taxfello handle ROC and MCA compliance for private companies?",
    answer: "Absolutely. We manage all ongoing corporate secretarial mandates, including annual returns (Form MGT-7), financial statement filings (Form AOC-4), Director KYC (DIR-3 KYC), Auditor Appointments (Form ADT-1), and maintenance of statutory registers.",
    category: "ROC"
  },
  {
    question: "Does Taxfello provide Virtual CFO services in Delhi NCR?",
    answer: "Yes. Our Virtual CFO service is designed for growth-stage startups and established MSMEs seeking strategic financial guidance without hiring a full-time executive. It includes rolling cash flow projections, budgeting, variance analysis, board MIS presentations, and fundraise support.",
    category: "Virtual CFO"
  },
  {
    question: "Can NRIs get income tax assistance from Taxfello?",
    answer: "Yes. We specialize in NRI taxation in India, including filing returns on Indian-sourced income, capital gains advisory on residential or commercial property sales, DTAA (Double Tax Avoidance Agreement) relief, and Form 15CA/15CB certificates for tax-cleared fund repatriation.",
    category: "NRI Services"
  },
  {
    question: "Can Taxfello help with an income tax or GST notice?",
    answer: "Yes. We analyze the underlying demand, cross-examine portal data with books of accounts, draft legal and factual replies with relevant statutory citations, and file formal responses on the e-Filing or GST portal to help resolve scrutiny notices smoothly.",
    category: "Notices"
  }
];
