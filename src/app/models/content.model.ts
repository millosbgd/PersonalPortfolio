export type LanguageCode = 'sr' | 'en' | 'ru';

export interface LinkItem {
  label: string;
  href: string;
}

export interface IconText {
  icon: string;
  title: string;
  text: string;
}

export interface Engagement {
  title: string;
  label: string;
  text: string;
  meta: string[];
}

export interface StepItem {
  number: string;
  title: string;
  text: string;
}

export interface ContactFormContent {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  submit: string;
  success: string;
  error: string;
  required: string;
  privacy: string;
}

export interface SiteContent {
  lang: LanguageCode;
  meta: {
    title: string;
    description: string;
  };
  brand: {
    name: string;
    role: string;
  };
  nav: LinkItem[];
  hero: {
    eyebrow: string;
    title: string;
    text: string;
    expertise: string;
    primaryCta: string;
    secondaryCta: string;
    panelKicker: string;
    panelText: string;
  };
  sectionLabels: {
    problems: string;
    engagements: string;
    advice: string;
    process: string;
    selectedProblems: string;
    about: string;
    contact: string;
  };
  problems: {
    title: string;
    intro: string;
    items: IconText[];
  };
  engagements: {
    title: string;
    intro: string;
    items: Engagement[];
  };
  advice: {
    title: string;
    text: string;
    principles: IconText[];
  };
  process: {
    title: string;
    intro: string;
    steps: StepItem[];
  };
  selectedProblems: {
    title: string;
    items: string[];
  };
  availability: {
    label: string;
    title: string;
    paragraphs: string[];
    badges: string[];
  };
  about: {
    title: string;
    paragraphs: string[];
    tags: string;
  };
  contact: {
    title: string;
    text: string;
    form: ContactFormContent;
  };
  footer: {
    text: string;
    links: LinkItem[];
  };
}
