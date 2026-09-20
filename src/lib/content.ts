import type { Language } from "./i18n";

export interface Bi {
  ar: string;
  en: string;
}

export const t = (b: Bi, lang: Language) => b[lang];

// Event date for countdown — ESC Expo 2026 launch
export const EVENT_DATE = "2026-12-08T09:00:00+03:00";

export const contact = {
  phone: "+966 59 0401 777",
  phoneHref: "+966590401777",
  email: "contact@gren-pro.com",
  address: { ar: "الرياض، طريق الملك فهد", en: "Riyadh, King Fahd Road" },
};

export const nav: { id: string; label: Bi }[] = [
  { id: "about", label: { ar: "المقدمة", en: "Intro" } },
  { id: "vision", label: { ar: "الرؤية", en: "Vision" } },
  { id: "exhibitors", label: { ar: "العارضون", en: "Exhibitors" } },
  { id: "visitors", label: { ar: "الزوار", en: "Visitors" } },
  { id: "objectives", label: { ar: "الأهداف", en: "Objectives" } },
  { id: "benefits", label: { ar: "المزايا", en: "Benefits" } },
  { id: "contact", label: { ar: "تواصل", en: "Contact" } },
];

export const hero: {
  badge: Bi;
  title: Bi;
  subtitle: Bi;
  ctaPrimary: Bi;
  ctaSecondary: Bi;
  ctaTertiary: Bi;
  location: Bi;
  dateLabel: Bi;
  countdownTitle: Bi;
} = {
  badge: { ar: "ESC Expo 2026", en: "ESC Expo 2026" },
  title: {
    ar: "معرض سلاسل إمداد الطاقة وتقنيات المستقبل",
    en: "Energy Supply Chains & Future Technologies Exhibition",
  },
  subtitle: {
    ar: "معرض ومؤتمر B2B حصري في مدينة الملك سلمان للطاقة (SPARK) — حيث تتحول التقنيات إلى عقود توريد وشراكات مستدامة.",
    en: "An exclusive B2B exhibition and conference at King Salman Energy Park (SPARK) — where technologies turn into supply contracts and lasting partnerships.",
  },
  ctaPrimary: { ar: "احجز مساحتك الآن", en: "Book Your Space" },
  ctaSecondary: { ar: "سجّل كزائر", en: "Register as Visitor" },
  ctaTertiary: { ar: "تواصل معنا", en: "Contact Us" },
  location: { ar: "مدينة الملك سلمان للطاقة — SPARK", en: "King Salman Energy Park — SPARK" },
  dateLabel: { ar: "ديسمبر 2026", en: "December 2026" },
  countdownTitle: { ar: "العد التنازلي للانطلاق", en: "Countdown To Launch" },
};

export const intro: {
  eyebrow: Bi;
  title: Bi;
  body: Bi;
  lead: Bi;
  cards: { icon: string; title: Bi; desc: Bi }[];
} = {
  eyebrow: { ar: "قوة تجمعات الأعمال B2B", en: "The Power of B2B" },
  title: {
    ar: "قوة تجمعات الأعمال B2B في قطاع الطاقة",
    en: "The Power of B2B Gatherings in the Energy Sector",
  },
  body: {
    ar: "ينطلق معرض سلاسل إمداد الطاقة وتقنيات المستقبل كحدث متخصص وحصري قائم بالكامل على نموذج الأعمال إلى الأعمال (B2B)، حيث تلتقي الشركات بالشركات، ويجتمع صنّاع القرار بالمنفذين، في بيئة مهنية مهيأة لإبرام الصفقات واختصار الوقت والجهد.",
    en: "The Energy Supply Chains & Future Technologies Exhibition launches as a specialized, exclusive event built entirely on a Business-to-Business (B2B) model — where companies meet companies, decision-makers connect with executors, in a professional environment engineered for closing deals and saving time and effort.",
  },
  lead: {
    ar: "التواجد في هذا المعرض والمؤتمر استثمار استراتيجي يمنح شركتك تموضعاً قوياً كقائد في السوق، ويفتح أمامها:",
    en: "Being present at this exhibition and conference is a strategic investment that positions your company as a market leader and opens the door to:",
  },
  cards: [
    {
      icon: "FileSignature",
      title: { ar: "عقود توريد طويلة الأجل", en: "Long-Term Supply Contracts" },
      desc: {
        ar: "توقيع عقود توريد طويلة الأجل وشراكات حصرية مستدامة.",
        en: "Signing long-term supply contracts and exclusive sustainable partnerships.",
      },
    },
    {
      icon: "Network",
      title: { ar: "الدخول في سلاسل القيمة", en: "Direct Access to Value Chains" },
      desc: {
        ar: "الدخول المباشر في سلاسل القيمة لأضخم المشاريع الإنشائية واللوجستية بالمنطقة.",
        en: "Direct entry into the value chains of the region's largest construction and logistics projects.",
      },
    },
    {
      icon: "ShieldCheck",
      title: { ar: "بناء تحالفات متينة", en: "Building Strong Consortiums" },
      desc: {
        ar: "بناء تحالفات متينة (Consortiums) ترفع القدرة التنافسية وتؤهل للفوز بالمناقصات المليارية.",
        en: "Building robust Consortiums that boost competitiveness and qualify you to win multi-billion-riyal tenders.",
      },
    },
  ],
};

export const vision: {
  eyebrow: Bi;
  title: Bi;
  body: Bi;
} = {
  eyebrow: { ar: "رؤية المعرض", en: "Exhibition Vision" },
  title: {
    ar: "من قلب SPARK... حيث تتحول الأفكار إلى عقود",
    en: "From the Heart of SPARK... Where Ideas Become Contracts",
  },
  body: {
    ar: "ينطلق معرض سلاسل إمداد الطاقة وتقنيات المستقبل من مدينة الملك سلمان للطاقة (SPARK)، كمعرض ومؤتمر استراتيجي يجمع عمالقة النفط والغاز، ورواد الثورة الصناعية الرابعة، ومبتكري الحلول اللوجستية، وشركات المقاولات الكبرى — حيث تتحول الأفكار والتقنيات إلى عقود توريد وشراكات مستدامة.",
    en: "The Energy Supply Chains & Future Technologies Exhibition launches from King Salman Energy Park (SPARK) as a strategic exhibition and conference gathering oil & gas giants, Industry 4.0 pioneers, logistics innovators, and major contractors — where ideas and technologies transform into supply contracts and sustainable partnerships.",
  },
};

export const exhibitors: {
  eyebrow: Bi;
  title: Bi;
  subtitle: Bi;
  items: { icon: string; title: Bi; desc: Bi }[];
} = {
  eyebrow: { ar: "العارضون المستهدفون", en: "Target Exhibitors" },
  title: { ar: "من يجب أن يعرض؟", en: "Who Should Exhibit?" },
  subtitle: {
    ar: "ستة قطاعات صناعية وتقنية تشكّل قلب معرض سلاسل إمداد الطاقة.",
    en: "Six industrial and technological sectors form the heart of the energy supply chain expo.",
  },
  items: [
    {
      icon: "HardHat",
      title: { ar: "شركات المقاولات وإنشاءات الطاقة (EPC)", en: "Energy EPC Contractors" },
      desc: {
        ar: "مقاولو البنية التحتية لحقول النفط والغاز، وتمديد خطوط الأنابيب، والإنشاءات الصناعية العملاقة.",
        en: "Infrastructure contractors for oil & gas fields, pipeline laying, and mega industrial construction.",
      },
    },
    {
      icon: "Cog",
      title: { ar: "مصنعو وموردو معدات حقول النفط والغاز", en: "Oilfield Equipment Manufacturers" },
      desc: {
        ar: "منصات وأبراج الحفر، الصمامات الذكية، المضخات، ورؤوس الحفر.",
        en: "Drilling rigs and towers, smart valves, pumps, and drill heads.",
      },
    },
    {
      icon: "GitBranch",
      title: { ar: "شركات تكنولوجيا خطوط الأنابيب", en: "Pipeline Technology Companies" },
      desc: {
        ar: "الأنابيب غير الملحومة، العزل المتقدم، اللحام الرقمي، ومراقبة التدفق ومكافحة التسرب.",
        en: "Seamless pipes, advanced insulation, digital welding, flow monitoring and leak prevention.",
      },
    },
    {
      icon: "BrainCircuit",
      title: { ar: "رواد تقنيات المستقبل (Industry 4.0)", en: "Industry 4.0 Pioneers" },
      desc: {
        ar: "الذكاء الاصطناعي لإدارة الحقول، الطائرات بدون طيار، إنترنت الأشياء الصناعي.",
        en: "AI for field management, drones, and industrial Internet of Things.",
      },
    },
    {
      icon: "Truck",
      title: { ar: "الخدمات اللوجستية والنقل المتخصص", en: "Specialized Logistics & Transport" },
      desc: {
        ar: "مزودو 3PL & 4PL، الشحن الدولي متعدد الوسائط، النقل الثقيل، والمستودعات الذكية.",
        en: "3PL & 4PL providers, multimodal international freight, heavy transport, and smart warehouses.",
      },
    },
    {
      icon: "ShieldAlert",
      title: { ar: "صناعات الدعم والسلامة", en: "Support Industries & Safety" },
      desc: {
        ar: "الحلول البيئية، معدات السلامة المهنية، والأنظمة الكهربائية والميكانيكية المساندة.",
        en: "Environmental solutions, occupational safety equipment, and supporting electrical & mechanical systems.",
      },
    },
  ],
};

export const visitors: {
  eyebrow: Bi;
  title: Bi;
  subtitle: Bi;
  centerLabel: Bi;
  items: { title: Bi; desc: Bi }[];
} = {
  eyebrow: { ar: "الزوار المستهدفون", en: "Target Visitors" },
  title: { ar: "من سيحضر؟", en: "Who Will Attend?" },
  subtitle: {
    ar: "نخبة من صنّاع القرار وقادة المشتريات في أضخم الكيانات الصناعية والطاقية.",
    en: "An elite of decision-makers and procurement leaders from the largest industrial and energy entities.",
  },
  centerLabel: { ar: "صنّاع القرار", en: "Decision Makers" },
  items: [
    {
      title: { ar: "قادة المشتريات وسلاسل الإمداد", en: "Procurement & Supply Chain Leaders" },
      desc: {
        ar: "في أرامكو، سابك، والشركات الوطنية الكبرى.",
        en: "At Aramco, SABIC, and major national companies.",
      },
    },
    {
      title: { ar: "مدراء المشاريع والمهندسون", en: "Project Managers & Engineers" },
      desc: {
        ar: "في شركات المقاولات الكبرى.",
        en: "At major contracting firms.",
      },
    },
    {
      title: { ar: "مخططو سلاسل الإمداد", en: "Supply Chain Planners" },
      desc: {
        ar: "في الشركات اللوجستية.",
        en: "At logistics companies.",
      },
    },
    {
      title: { ar: "الوفود الحكومية", en: "Government Delegations" },
      desc: {
        ar: "وزارة الطاقة، هيئة المحتوى المحلي، ومدراء المدن الصناعية.",
        en: "Ministry of Energy, Local Content Authority, and industrial city directors.",
      },
    },
    {
      title: { ar: "المستثمرون ورجال الأعمال", en: "Investors & Entrepreneurs" },
      desc: {
        ar: "الباحثون عن فرص تصنيع أو تمثيل تجاري.",
        en: "Seeking manufacturing or commercial representation opportunities.",
      },
    },
  ],
};

export const objectives: {
  eyebrow: Bi;
  title: Bi;
  subtitle: Bi;
  items: { icon: string; title: Bi; desc: Bi }[];
} = {
  eyebrow: { ar: "أهداف المعرض", en: "Exhibition Objectives" },
  title: { ar: "أربعة أهداف استراتيجية", en: "Four Strategic Goals" },
  subtitle: {
    ar: "أهداف تصنع فارقاً حقيقياً في مستقبل سلاسل إمداد الطاقة بالمملكة.",
    en: "Goals that make a real difference in the future of Saudi energy supply chains.",
  },
  items: [
    {
      icon: "Link2",
      title: { ar: "سد فجوات سلاسل الإمداد", en: "Bridging Supply Chain Gaps" },
      desc: {
        ar: "ربط المصنعين ومقدمي الخدمات اللوجستية بشركات المقاولات لضمان تدفق سلس للإمدادات.",
        en: "Connecting manufacturers and logistics providers with contractors to ensure seamless supply flow.",
      },
    },
    {
      icon: "Factory",
      title: { ar: "توطين الصناعات", en: "Industrial Localization" },
      desc: {
        ar: "تمكين الشركات من فهم متطلبات المحتوى المحلي ورفع تصنيفها لدى أرامكو والجهات الحكومية.",
        en: "Empowering companies to understand local content requirements and raise their rating with Aramco and government bodies.",
      },
    },
    {
      icon: "TrendingUp",
      title: { ar: "جذب الاستثمارات الأجنبية لـ SPARK", en: "Attracting FDI to SPARK" },
      desc: {
        ar: "إبراز مزايا مدينة الملك سلمان للطاقة كقاعدة للتصنيع والتوزيع الإقليمي.",
        en: "Highlighting SPARK's advantages as a base for manufacturing and regional distribution.",
      },
    },
    {
      icon: "Rocket",
      title: { ar: "تسريع تبني تقنيات المستقبل", en: "Accelerating Future-Tech Adoption" },
      desc: {
        ar: "نقل المعرفة واستعراض ابتكارات الذكاء الاصطناعي والأتمتة.",
        en: "Transferring knowledge and showcasing AI and automation innovations.",
      },
    },
  ],
};

export const benefits: {
  eyebrow: Bi;
  title: Bi;
  subtitle: Bi;
  items: { icon: string; title: Bi; desc: Bi }[];
  chartTitle: Bi;
  chartLabel: Bi;
  chartCaption: Bi;
} = {
  eyebrow: { ar: "مزايا المشاركة", en: "Participation Benefits" },
  title: { ar: "لماذا تشارك؟", en: "Why Participate?" },
  subtitle: {
    ar: "ثلاث مزايا تُحوّل مشاركتك إلى عائد استثماري ملموس.",
    en: "Three benefits that turn your participation into tangible ROI.",
  },
  items: [
    {
      icon: "MapPin",
      title: { ar: "في قلب الحدث", en: "At the Heart of the Action" },
      desc: {
        ar: "التواجد في SPARK، حيث تُوقَّع أضخم عقود الطاقة في المنطقة.",
        en: "Being present at SPARK, where the region's largest energy contracts are signed.",
      },
    },
    {
      icon: "CalendarCheck",
      title: { ar: "لقاءات أعمال مباشرة", en: "Direct B2B Matchmaking" },
      desc: {
        ar: "نظام ذكي لجدولة اجتماعات مغلقة مع صنّاع القرار في المشتريات قبل انطلاق المعرض.",
        en: "A smart system to schedule closed meetings with procurement decision-makers before the exhibition opens.",
      },
    },
    {
      icon: "Handshake",
      title: { ar: "بناء تحالفات كبرى", en: "Building Mega Consortiums" },
      desc: {
        ar: "فرصة للانضمام إلى تحالفات (Consortiums) لتأمين مشاريع بمليارات الريالات.",
        en: "An opportunity to join Consortiums securing multi-billion-riyal projects.",
      },
    },
  ],
  chartTitle: { ar: "العائد على الاستثمار من المشاركة", en: "Return on Participation" },
  chartLabel: { ar: "نمو فرص الأعمال", en: "Business Opportunity Growth" },
  chartCaption: {
    ar: "تأثير تراكمي عبر مراحل المشاركة — من التعرض إلى الشراكات الموقعة.",
    en: "Cumulative impact across participation stages — from exposure to signed partnerships.",
  },
};

export const organizer: {
  eyebrow: Bi;
  title: Bi;
  body: Bi;
  name: Bi;
  role: Bi;
} = {
  eyebrow: { ar: "من نحن", en: "About" },
  title: { ar: "الجهة المنظمة", en: "Organized By" },
  body: {
    ar: "GREEN PROJECTS (قرين بروجكتس) — الجهة المالكة والمظلة المنظمة لمعرض سلاسل إمداد الطاقة وتقنيات المستقبل ESC Expo 2026، الرائدة في تصميم وتنفيذ الفعاليات الصناعية والتقنية عالية المستوى في المملكة العربية السعودية.",
    en: "GREEN PROJECTS — the owner and organizing umbrella of ESC Expo 2026, a leader in designing and executing high-level industrial and technology events in the Kingdom of Saudi Arabia.",
  },
  name: { ar: "GREEN PROJECTS", en: "GREEN PROJECTS" },
  role: { ar: "قرين بروجكتس — المنظّم", en: "Project Owner & Organizer" },
};

export const contactSection: {
  eyebrow: Bi;
  title: Bi;
  subtitle: Bi;
  formTitle: Bi;
  fields: {
    name: Bi; company: Bi; email: Bi; phone: Bi; interest: Bi; message: Bi;
    interestOptions: { value: string; label: Bi }[];
    submit: Bi;
    success: Bi;
    sending: Bi;
  };
  infoTitle: Bi;
  phoneLabel: Bi;
  emailLabel: Bi;
  addressLabel: Bi;
  followTitle: Bi;
  rights: Bi;
} = {
  eyebrow: { ar: "تواصل معنا", en: "Contact Us" },
  title: { ar: "ابدأ رحلتك معنا", en: "Start Your Journey With Us" },
  subtitle: {
    ar: "سواء كنت عارضاً، زائراً، راعياً، أو إعلامياً — فريقنا جاهز للرد عليك.",
    en: "Whether you're an exhibitor, visitor, sponsor, or media — our team is ready to respond.",
  },
  formTitle: { ar: "نموذج التواصل", en: "Contact Form" },
  fields: {
    name: { ar: "الاسم الكامل", en: "Full Name" },
    company: { ar: "الشركة", en: "Company" },
    email: { ar: "البريد الإلكتروني", en: "Email" },
    phone: { ar: "رقم الجوال", en: "Mobile Number" },
    interest: { ar: "نوع الاهتمام", en: "Interest Type" },
    message: { ar: "رسالتك", en: "Your Message" },
    interestOptions: [
      { value: "exhibitor", label: { ar: "عارض", en: "Exhibitor" } },
      { value: "visitor", label: { ar: "زائر", en: "Visitor" } },
      { value: "sponsor", label: { ar: "راعي", en: "Sponsor" } },
      { value: "media", label: { ar: "إعلام", en: "Media" } },
    ],
    submit: { ar: "إرسال", en: "Send Message" },
    success: { ar: "تم استلام رسالتك بنجاح! سنتواصل معك قريباً.", en: "Your message has been received! We'll contact you soon." },
    sending: { ar: "جارٍ الإرسال...", en: "Sending..." },
  },
  infoTitle: { ar: "معلومات التواصل", en: "Contact Information" },
  phoneLabel: { ar: "الهاتف", en: "Phone" },
  emailLabel: { ar: "البريد الإلكتروني", en: "Email" },
  addressLabel: { ar: "العنوان", en: "Address" },
  followTitle: { ar: "تابعنا", en: "Follow Us" },
  rights: { ar: "جميع الحقوق محفوظة", en: "All Rights Reserved" },
};

// Stats for hero / counters
export const stats: { value: string; label: Bi }[] = [
  { value: "6+", label: { ar: "قطاعات صناعية", en: "Industrial Sectors" } },
  { value: "200+", label: { ar: "شركة عارضة", en: "Exhibiting Companies" } },
  { value: "5000+", label: { ar: "زائر B2B", en: "B2B Visitors" } },
  { value: "B2B", label: { ar: "نموذج حصري", en: "Exclusive Model" } },
];
