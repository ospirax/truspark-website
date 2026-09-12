export const site = {
  name: "TruSpark",
  tagline: "For a Limitless Tomorrow",

  phoneDisplay: "+91 96068 52315",
  phoneHref: "tel:+919606852315",
  email: "info@truspark.in",
};

// Parents and schools arrive with different questions, so each CTA opens an
// enquiry already framed for that audience.
export const enquiries = {
  general: {
    subject: "Enquiry about TruSpark",
    body: "Hello,\n\nI'd like to know more about how TruSpark could help.\n\nThank you.",
  },

  parent: {
    subject: "Support for my child",
    body: [
      "Hello,",
      "",
      "I'd like to talk to you about my child.",
      "",
      "Child's name:",
      "Class / age:",
      "School:",
      "What we're finding difficult:",
      "Best time to call:",
      "",
      "Thank you.",
    ].join("\n"),
  },

  school: {
    subject: "School partnership enquiry",
    body: [
      "Hello,",
      "",
      "I'd like to talk to you about working with our school.",
      "",
      "School name:",
      "My role:",
      "Year groups / cohort size:",
      "What we're looking for support with:",
      "Best time to call:",
      "",
      "Thank you.",
    ].join("\n"),
  },
};

// Three routes to the same enquiry. `mail` is the default, but a mailto click
// is silent on a desktop with no mail client registered, so the webmail two are
// what we offer when a click goes nowhere.
const q = encodeURIComponent;

export const compose = {
  mail: ({ subject, body }) => `mailto:${site.email}?subject=${q(subject)}&body=${q(body)}`,

  gmail: ({ subject, body }) =>
    `https://mail.google.com/mail/?view=cm&fs=1&to=${q(site.email)}&su=${q(subject)}&body=${q(body)}`,

  outlook: ({ subject, body }) =>
    `https://outlook.live.com/mail/0/deeplink/compose?to=${q(site.email)}&subject=${q(subject)}&body=${q(body)}`,
};

// The header row is tighter than the footer column, so entries that are too
// long for it carry a `short`. The rest fall back to `label` in both places.
export const nav = [
  { label: "Who We Help", href: "#who-we-help" },
  { label: "Our Assessment", short: "Assessment", href: "#understand" },
  { label: "Targeted Support", short: "Support", href: "#strengthen" },
  { label: "Emotional Wellbeing", short: "Wellbeing", href: "#wellbeing" },
  { label: "Families & Schools", short: "Schools", href: "#audiences" },
  { label: "How It Works", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

export const images = {
  hero: {
    src: "/photos/hero-confident-students.jpg",
    width: 1600,
    height: 1067,
    alt: "Three school students in crisp uniforms and ties standing together, arms folded",
  },
  writing: {
    src: "/photos/child-writing.jpg",
    width: 1400,
    height: 930,
    alt: "A child in glasses writing carefully in a lined exercise book",
  },
  assessment: {
    src: "/photos/one-to-one-reading.jpg",
    width: 1200,
    height: 1800,
    alt: "An adult sitting with a child, reading through a book together",
  },
  // The three memory-mode cards render as a wide band, so these two are
  // pre-cropped to 2.4:1 with the child's face kept in frame.
  auditory: {
    src: "/photos/auditory-headphones.jpg",
    width: 1200,
    height: 500,
    alt: "A child wearing headphones, listening closely",
  },
  visual: {
    src: "/photos/visual-reading.jpg",
    width: 1200,
    height: 500,
    alt: "Two children in school uniform reading through a workbook together at their desk",
  },
  kinesthetic: {
    src: "/photos/kinesthetic-activity.jpg",
    width: 1200,
    height: 500,
    alt: "Children in school uniform working through a hands-on activity with number cards",
  },
  classroom: {
    src: "/photos/classroom-library.jpg",
    width: 1400,
    height: 933,
    alt: "Two students in school blazers and ties studying at a table in the school library",
  },
  wellbeing: {
    src: "/photos/wellbeing-friends.jpg",
    width: 1400,
    height: 700,
    alt: "Three schoolfriends in school jackets laughing together on a school trip",
  },
  families: {
    src: "/photos/families-mother-child.jpg",
    width: 1200,
    height: 600,
    alt: "A mother and her daughter laughing together at home",
  },
  schools: {
    src: "/photos/schools-classroom.jpg",
    width: 1200,
    height: 600,
    alt: "A teacher leading a lesson on an interactive screen in a full classroom",
  },
  closing: {
    src: "/photos/walking-to-school.jpg",
    width: 1200,
    height: 1800,
    alt: "Students walking to school together carrying their backpacks",
  },
};

export const hero = {
  eyebrow: "For a Limitless Tomorrow",
  // Split so the middle phrase can carry the highlighter mark.
  headingBefore: "When Learning Feels Hard,",
  headingHighlight: "the Right Support",
  headingAfter: "Changes Everything.",
  body: "TruSpark identifies what is getting in the way of a child's learning and provides targeted, individualised support to help them learn better, perform better and become more confident, independent learners.",
  points: [
    {
      title: "Individualised Support",
      body: "Built around each child's needs",
    },
    {
      title: "Academic, Behavioural & Emotional Support",
      body: "Addressing the factors affecting learning",
    },
    {
      title: "Measurable Progress",
      body: "Regular assessment and review",
    },
  ],
};

export const whoWeHelp = {
  eyebrow: "When Learning Gets Difficult",
  heading: "Every Learning Challenge Is Different.",
  intro:
    "Some children find reading or writing difficult. Others struggle with concentration, retention, confidence or keeping up with the class. And sometimes, the reason isn't immediately clear.",
  items: [
    {
      color: "blue",
      title: "Difficulty With Reading",
      body: "Reads slowly, skips or reverses words, loses the thread of what a passage is about.",
    },
    {
      color: "purple",
      title: "Difficulty With Writing",
      body: "Struggles to get thoughts onto paper, poor spelling, writing that doesn't match how well they speak.",
    },
    {
      color: "pink",
      title: "Trouble With Retention",
      body: "Learns something on Monday and has lost it by Wednesday. Revises hard and still can't recall it in the exam.",
    },
    {
      color: "orange",
      title: "Poor Concentration",
      body: "Drifts off in class, needs instructions repeated, finds it hard to stay with a task to the end.",
    },
    {
      color: "green",
      title: "Falling Behind the Class",
      body: "Learning at a slower pace than the classroom moves, and steadily losing ground because of it.",
    },
    {
      color: "yellow",
      title: "Low Academic Confidence",
      body: "Has started to believe they are 'bad at studies'. Avoids schoolwork rather than risk failing at it.",
    },
  ],
  closing: "Our first job is to understand exactly what is getting in the way.",
};

export const understand = {
  eyebrow: "Understand Before We Intervene",
  heading: "The Right Support Starts With the Right Understanding.",
  intro:
    "We look at the child's learning, academic and developmental profile to identify the specific areas that need attention.",
  areas: [
    {
      color: "purple",
      icon: "brain",
      title: "Learning & Memory",
      body: "How information is taken in, held on to and recalled when it is needed.",
    },
    {
      color: "blue",
      icon: "book",
      title: "Academic Skills",
      body: "Reading, writing, comprehension and the classroom skills built on top of them.",
    },
    {
      color: "orange",
      icon: "target",
      title: "Focus & Concentration",
      body: "Attention, task persistence and the ability to stay with work to the end.",
    },
    {
      color: "pink",
      icon: "heart",
      title: "Emotional & Behavioural Factors",
      body: "Confidence, regulation, motivation and the relationships around a child's learning.",
    },
  ],
  closing:
    "Our assessment considers key strengths and development areas, helping us understand the learner, not just the difficulty.",
};

export const strengthen = {
  eyebrow: "Strengthen the Learner",
  heading: "Targeted Support for the Exact Areas That Need Strengthening.",
  intro:
    "Once we understand what is affecting learning, we build a focused intervention plan around the child's specific needs, not a one-size-fits-all programme.",
  modes: [
    {
      key: "auditory",
      color: "blue",
      title: "Auditory Memory",
      body: "Strengthening the ability to listen, process and retain information.",
    },
    {
      key: "visual",
      color: "purple",
      title: "Visual Memory",
      body: "Building the ability to recognise, organise and recall visual information.",
    },
    {
      key: "kinesthetic",
      color: "pink",
      title: "Kinesthetic Memory",
      body: "Using movement and practical experience to strengthen learning and recall.",
    },
  ],
  skills: [
    {
      color: "green",
      title: "Academic Skills",
      items: ["Reading", "Writing", "Comprehension", "Retention"],
    },
    {
      color: "orange",
      title: "Learning Skills",
      items: ["Attention", "Concentration", "Organisation", "Study skills"],
    },
  ],
};

export const fit = {
  eyebrow: "Support That Fits",
  heading: "Structured, Individualised and Continuously Reviewed.",
  body: "Every child starts at a different point. We use regular assessment to identify the right priorities, provide targeted intervention and adapt the support as the child progresses.",
  pillars: [
    {
      color: "purple",
      title: "Regular Assessment",
      body: "We understand precisely where the child is and what needs attention.",
    },
    {
      color: "blue",
      title: "Targeted Intervention",
      body: "We work on the specific skills and difficulties affecting learning.",
    },
    {
      color: "green",
      title: "Continuous Monitoring",
      body: "We measure progress and adjust the plan as the child's needs change.",
    },
  ],
  outcomes: {
    title: "What We Work to Improve",
    items: [
      "Academic skills",
      "Concentration",
      "Retention and recall",
      "Confidence",
      "Classroom performance",
    ],
  },
};

export const wellbeing = {
  eyebrow: "Because Learning Isn't Just Academic",
  heading: "Academic Difficulty Rarely Travels Alone.",
  body: "Focus, confidence, emotional regulation, motivation and relationships can all affect how a child engages with learning. Where these factors are getting in the way, we address them too.",
  method:
    "Where emotional or behavioural factors are affecting learning, we use evidence-based psychological and therapeutic approaches, including CBT where appropriate, to understand the underlying challenges and support the child.",
  concerns: [
    "Behavioural difficulties",
    "Stress and anxiety",
    "Social withdrawal",
    "Low self-esteem",
    "Interpersonal challenges",
    "Emotional concerns",
  ],
  builds: [
    "Healthier coping strategies",
    "Emotional regulation",
    "Positive behaviour patterns",
    "Confidence",
    "Improved interpersonal skills",
  ],
};

export const audiences = {
  eyebrow: "For Every Child",
  heading: "Support Wherever the Child Needs It.",
  cards: [
    {
      key: "families",
      color: "purple",
      label: "For Families",
      body: "Understand what is making learning difficult and get the right support for your child.",
      cta: "Support my child",
      enquiry: "parent",
    },
    {
      key: "schools",
      color: "blue",
      label: "For Schools",
      body: "Understand learning needs across your student cohorts, identify where support is needed and provide targeted interventions with measurable progress.",
      cta: "Partner with TruSpark",
      enquiry: "school",
    },
  ],
};

export const process = {
  eyebrow: "From First Call to Measurable Progress",
  heading: "A Clear Process. A Focused Plan. Visible Progress.",
  steps: [
    {
      color: "blue",
      title: "Talk to Us",
      body: "Call or email and tell us what's happening. We'll listen and tell you honestly whether we're the right fit.",
    },
    {
      color: "purple",
      title: "Assessment",
      body: "We assess the child to identify exactly which areas need attention: learning, academic, behavioural, emotional and developmental.",
    },
    {
      color: "pink",
      title: "Individualised Plan",
      body: "We build a plan around that child specifically, covering memory training, academic support and, where needed, emotional support.",
    },
    {
      color: "orange",
      title: "Targeted Intervention",
      body: "Regular, structured sessions help children build and apply new skills consistently.",
    },
    {
      color: "green",
      title: "Monitoring & Review",
      body: "We track progress continuously and adjust the plan, keeping you informed about what is changing and what still needs work.",
    },
  ],
};

export const outcome = {
  eyebrow: "Measure What Matters",
  timeframe: "3–6 Months",
  heading: "Measurable Progress Over 3–6 Months",
  body: "Our structured intervention is designed to help children make meaningful progress over time. The pace and nature of progress vary by child, so we continuously monitor what is changing and what needs attention next.",
  goalBefore: "Our goal isn't just better marks.",
  goalAfter: "It's a stronger foundation for learning.",
};

export const faq = {
  eyebrow: "Common Questions",
  heading: "FAQ",
  items: [
    {
      q: "How long before we see a difference?",
      a: "Our structured intervention is designed to produce meaningful, measurable progress over three to six months. That range is honest rather than cautious: how quickly a child improves depends on what the assessment finds, where they are starting from, how consistent the sessions are and how engaged the child is. We'll give you a realistic picture once we've assessed your child, and we'll keep telling you what is changing and what still needs work.",
    },
    {
      q: "Is this the same as tuition?",
      a: "No. Tuition re-teaches the syllabus. We work on what is getting in the way of the syllabus sticking in the first place: memory, attention, processing, study skills and, where relevant, the emotional and behavioural factors affecting learning. Many of the children we see have already had tuition and still struggled, because the difficulty was never a lack of teaching.",
    },
    {
      q: "What does the assessment involve?",
      a: "We look at the child's learning, academic and developmental profile across four areas: learning and memory, academic skills, focus and concentration, and emotional and behavioural factors. It is designed to surface strengths as much as difficulties, so we understand the learner rather than just the problem. We then talk you through what we found and what we would recommend.",
    },
    {
      q: "What kind of academic difficulties do you support?",
      a: "Difficulty with reading or writing, trouble retaining and recalling what has been learned, poor concentration, falling behind the pace of the class, and low academic confidence. A formal diagnosis isn't required to work with us. The assessment tells us what support is needed.",
    },
    {
      q: "Do you help with behavioural and emotional difficulties too?",
      a: "Yes. Where behaviour, stress, anxiety, low self-esteem, social withdrawal or interpersonal difficulties are affecting learning, we address them alongside the academic work, using evidence-based psychological and therapeutic approaches including CBT where appropriate. Academic and emotional difficulties usually feed each other, so working on one while ignoring the other rarely holds.",
    },
    {
      q: "Can you work with my child's school?",
      a: "Yes, with your consent. Support works best when home and school are aligned, so we're glad to share what we're working on and what helps in the classroom. We also work directly with schools across whole student cohorts, identifying where support is needed and running targeted interventions with measurable progress.",
    },
    {
      q: "How do we get started?",
      a: `Call us on ${site.phoneDisplay} or email ${site.email}. Tell us what's happening, we'll listen, and we'll tell you honestly whether we're the right fit. If we are, the next step is an assessment.`,
    },
  ],
};

export const contact = {
  eyebrow: "Let's Get Started",
  heading: "Tell Us Where Your Child Needs Support.",
  body: "Whether you're a parent concerned about your child or a school looking to support its students, let's understand what's getting in the way and find the right way forward.",
  actions: [
    { label: "I'm a parent", key: "parent" },
    { label: "I'm from a school", key: "school" },
  ],
};
