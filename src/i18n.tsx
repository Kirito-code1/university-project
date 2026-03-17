import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

type Language = "en" | "ru" | "uz";

type I18nContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const dictionary: Record<Language, Record<string, any>> = {
  en: {
    nav: {
      about: "About",
      academics: "Academics",
      research: "Research",
      admissions: "Admissions",
      campusLife: "Campus Life",
      news: "News",
      contact: "Contact",
    },
    hero: {
      line1: "Shaping",
      line2: "Tomorrow's",
      line3: "Leaders",
      line4: "Today",
      description:
        "A world-class education experience in the heart of Central Asia. Discover 200+ programs designed to transform your future.",
      applications: "Applications for Fall 2025 are now open",
      explore: "Explore Programs",
      tour: "Virtual Tour",
    },
    about: {
      eyebrow: "Welcome to Academic University",
      title: "Where",
      highlight: "Tradition",
      titleRest: "Meets Innovation",
      paragraph1:
        "Founded with a vision to become Central Asia's leading institution of higher learning, Academic University has grown into a vibrant academic community that attracts students and scholars from around the globe.",
      paragraph2:
        "Our commitment to research excellence, innovative teaching, and community engagement creates an environment where students don't just learn - they lead, discover, and create.",
      cta: "Learn More About Us",
    },
    faculties: {
      eyebrow: "Academic Excellence",
      title: "Explore Our",
      highlight: "Faculties",
      description:
        "Choose from over 200 programs across diverse disciplines, each designed to prepare you for a meaningful career.",
      viewAll: "View All Programs ->",
      tabs: {
        undergraduate: "Undergraduate",
        graduate: "Graduate",
        doctoral: "Doctoral",
        professional: "Professional",
      },
    },
    research: {
      eyebrow: "Discovery & Impact",
      title: "Pioneering",
      highlight: "Research",
      description:
        "Our research centers tackle the world's most pressing challenges, from AI and quantum computing to climate science and public health.",
      readMore: "Read More ->",
      partners: "Our global research partners",
    },
    whyUs: {
      eyebrow: "Our Academic Advantage",
      title: "What Sets Us",
      highlight: "Apart",
    },
    news: {
      eyebrow: "Stay Informed",
      title: "News &",
      highlight: "Events",
      upcoming: "Upcoming Events",
      viewAll: "View All",
    },
    campus: {
      eyebrow: "Experience",
      title: "Life at Our",
      highlight: "Campus",
      description:
        "More than a place to study - a community where lifelong friendships and memories are made.",
    },
    community: {
      testimonials: "Voices of Our",
      highlight: "Community",
      impactEyebrow: "Our Impact",
      impact: "Numbers that",
      impactHighlight: "Speak",
      startTitle: "Start Your Journey With Us",
      startDesc:
        "Applications for Fall 2025 are now open. Take the first step toward an extraordinary education.",
      apply: "Apply Now",
      request: "Request Information",
      facilities: {
        dorms: "Modern Dormitories",
        sports: "Sports Complex",
        library: "Digital Library",
        clubs: "Student Clubs & Cafes",
      },
    },
    footer: {
      stayUpdated: "Stay Updated",
      stayDesc: "Get the latest news and events from Academic University.",
      subscribe: "Subscribe",
      placeholder: "Enter your email",
      quickLinks: "Quick Links",
      contact: "Contact",
      email: "info@academic.edu",
      phone: "+998 (71) 000-00-00",
      location: "Tashkent, Uzbekistan",
    },
    modal: {
      eyebrow: "Admissions",
      title: "Apply Now",
      subtitle: "Start your application in minutes. We will contact you within 2 business days.",
      chips: {
        fast: "Fast response",
        scholarship: "Scholarship info",
        free: "No fees",
      },
      name: "Full Name",
      email: "Email",
      program: "Program",
      message: "Message (optional)",
      namePlaceholder: "Your full name",
      emailPlaceholder: "name@example.com",
      programPlaceholder: "Select a program",
      messagePlaceholder: "Tell us about your interests",
      submit: "Submit Application",
      cancel: "Cancel",
      successTitle: "Application received!",
      successText: "We will contact you within 2 business days.",
      close: "Close",
      errors: {
        nameRequired: "Full name is required.",
        emailRequired: "Email is required.",
        emailInvalid: "Enter a valid email.",
        programRequired: "Please choose a program.",
      },
    },
  },
  ru: {
    nav: {
      about: "О нас",
      academics: "Обучение",
      research: "Исследования",
      admissions: "Поступление",
      campusLife: "Кампус",
      news: "Новости",
      contact: "Контакты",
    },
    hero: {
      line1: "Создаем",
      line2: "Лидеров",
      line3: "Завтра",
      line4: "Уже Сегодня",
      description:
        "Мировое образование в сердце Центральной Азии. Более 200 программ, которые меняют будущее.",
      applications: "Прием на осень 2025 уже открыт",
      explore: "Смотреть программы",
      tour: "Виртуальный тур",
    },
    about: {
      eyebrow: "Добро пожаловать в Academic University",
      title: "Где",
      highlight: "Традиции",
      titleRest: "Встречают Инновации",
      paragraph1:
        "Основанный с целью стать ведущим вузом Центральной Азии, Academic University вырос в международное академическое сообщество.",
      paragraph2:
        "Мы объединяем сильные исследования, современное обучение и общественные инициативы, чтобы студенты не только учились, но и создавали новое.",
      cta: "Узнать больше",
    },
    faculties: {
      eyebrow: "Академическое превосходство",
      title: "Наши",
      highlight: "Факультеты",
      description:
        "Выбирайте из 200+ программ по разным направлениям для успешной карьеры.",
      viewAll: "Смотреть все программы ->",
      tabs: {
        undergraduate: "Бакалавриат",
        graduate: "Магистратура",
        doctoral: "Докторантура",
        professional: "Проф. программы",
      },
    },
    research: {
      eyebrow: "Открытия и Влияние",
      title: "Передовые",
      highlight: "Исследования",
      description:
        "Наши центры решают ключевые задачи мира: ИИ, квантовые технологии, климат и здоровье.",
      readMore: "Подробнее ->",
      partners: "Наши партнеры по исследованиям",
    },
    whyUs: {
      eyebrow: "Наше преимущество",
      title: "Чем мы",
      highlight: "Отличаемся",
    },
    news: {
      eyebrow: "Будьте в курсе",
      title: "Новости и",
      highlight: "События",
      upcoming: "Ближайшие события",
      viewAll: "Смотреть все",
    },
    campus: {
      eyebrow: "Атмосфера",
      title: "Жизнь на",
      highlight: "Кампусе",
      description:
        "Не просто учеба - это сообщество, где рождаются дружбы и воспоминания.",
    },
    community: {
      testimonials: "Голос нашей",
      highlight: "Команды",
      impactEyebrow: "Наш вклад",
      impact: "Цифры, которые",
      impactHighlight: "Говорят",
      startTitle: "Начните путь вместе с нами",
      startDesc:
        "Прием на осень 2025 уже открыт. Сделайте первый шаг к выдающемуся образованию.",
      apply: "Подать заявку",
      request: "Запросить информацию",
      facilities: {
        dorms: "Современные общежития",
        sports: "Спорткомплекс",
        library: "Цифровая библиотека",
        clubs: "Клубы и кафе",
      },
    },
    footer: {
      stayUpdated: "Будьте в курсе",
      stayDesc: "Получайте новости и события Academic University.",
      subscribe: "Подписаться",
      placeholder: "Введите email",
      quickLinks: "Быстрые ссылки",
      contact: "Контакты",
      email: "info@academic.edu",
      phone: "+998 (71) 000-00-00",
      location: "Ташкент, Узбекистан",
    },
    modal: {
      eyebrow: "Поступление",
      title: "Подать заявку",
      subtitle: "Заполните форму за пару минут. Мы ответим в течение 2 рабочих дней.",
      chips: {
        fast: "Быстрый ответ",
        scholarship: "Инфо о грантах",
        free: "Без комиссий",
      },
      name: "ФИО",
      email: "Email",
      program: "Программа",
      message: "Сообщение (необязательно)",
      namePlaceholder: "Ваше полное имя",
      emailPlaceholder: "name@example.com",
      programPlaceholder: "Выберите программу",
      messagePlaceholder: "Расскажите о своих интересах",
      submit: "Отправить заявку",
      cancel: "Отмена",
      successTitle: "Заявка получена!",
      successText: "Мы свяжемся с вами в течение 2 рабочих дней.",
      close: "Закрыть",
      errors: {
        nameRequired: "Укажите ФИО.",
        emailRequired: "Укажите email.",
        emailInvalid: "Введите корректный email.",
        programRequired: "Выберите программу.",
      },
    },
  },
  uz: {
    nav: {
      about: "Haqida",
      academics: "Ta'lim",
      research: "Tadqiqotlar",
      admissions: "Qabul",
      campusLife: "Kampus",
      news: "Yangiliklar",
      contact: "Aloqa",
    },
    hero: {
      line1: "Ertangi",
      line2: "Yetakchilarni",
      line3: "Bugundan",
      line4: "Tarbiyalaymiz",
      description:
        "Markaziy Osiyoning yuragida jahon darajasidagi ta'lim. 200+ dastur sizning kelajagingizni o'zgartiradi.",
      applications: "2025 kuzgi qabul ochiq",
      explore: "Dasturlarni ko'rish",
      tour: "Virtual tur",
    },
    about: {
      eyebrow: "Academic Universityga xush kelibsiz",
      title: "An'analar",
      highlight: "va",
      titleRest: "Innovatsiyalar uchrashadigan joy",
      paragraph1:
        "Academic University Markaziy Osiyodagi yetakchi oliygoh bo'lish maqsadida tashkil etilgan va bugun xalqaro akademik hamjamiyatga aylangan.",
      paragraph2:
        "Biz ilmiy tadqiqotlar, zamonaviy ta'lim va hamjamiyat bilan ishlashni uyg'unlashtiramiz.",
      cta: "Batafsil",
    },
    faculties: {
      eyebrow: "Akademik ustunlik",
      title: "Bizning",
      highlight: "Fakultetlar",
      description:
        "200+ dasturlar orasidan sizga mos yo'nalishni tanlang.",
      viewAll: "Barcha dasturlar ->",
      tabs: {
        undergraduate: "Bakalavr",
        graduate: "Magistr",
        doctoral: "Doktorantura",
        professional: "Professional",
      },
    },
    research: {
      eyebrow: "Kashfiyot va Ta'sir",
      title: "Ilg'or",
      highlight: "Tadqiqotlar",
      description:
        "Markazlarimiz AI, kvant texnologiya, iqlim va sog'liq kabi muammolarni hal qiladi.",
      readMore: "Batafsil ->",
      partners: "Global tadqiqot hamkorlari",
    },
    whyUs: {
      eyebrow: "Bizning afzalligimiz",
      title: "Nega aynan",
      highlight: "Biz",
    },
    news: {
      eyebrow: "Xabardor bo'ling",
      title: "Yangiliklar",
      highlight: "va Tadbirlar",
      upcoming: "Yaqin tadbirlar",
      viewAll: "Barchasi",
    },
    campus: {
      eyebrow: "Tajriba",
      title: "Kampusdagi",
      highlight: "Hayot",
      description:
        "Bu shunchaki o'qish emas - do'stlik va xotiralar uchun makon.",
    },
    community: {
      testimonials: "Hamjamiyatimiz",
      highlight: "Fikrlari",
      impactEyebrow: "Bizning natijalar",
      impact: "Natijalar",
      impactHighlight: "Raqamlarda",
      startTitle: "Safaringizni biz bilan boshlang",
      startDesc:
        "2025 kuzgi qabul ochiq. Ajoyib ta'lim sari birinchi qadamni qo'ying.",
      apply: "Ariza topshirish",
      request: "Ma'lumot so'rash",
      facilities: {
        dorms: "Zamonaviy yotoqxona",
        sports: "Sport majmuasi",
        library: "Raqamli kutubxona",
        clubs: "Klublar va kafelar",
      },
    },
    footer: {
      stayUpdated: "Yangiliklardan xabardor bo'ling",
      stayDesc: "Academic University yangiliklari va tadbirlaridan xabardor bo'ling.",
      subscribe: "Obuna bo'lish",
      placeholder: "Emailingizni kiriting",
      quickLinks: "Tezkor havolalar",
      contact: "Aloqa",
      email: "info@academic.edu",
      phone: "+998 (71) 000-00-00",
      location: "Toshkent, O'zbekiston",
    },
    modal: {
      eyebrow: "Qabul",
      title: "Ariza topshirish",
      subtitle: "Arizani bir necha daqiqada to'ldiring. 2 ish kunida javob beramiz.",
      chips: {
        fast: "Tezkor javob",
        scholarship: "Grant ma'lumoti",
        free: "Komissiyasiz",
      },
      name: "F.I.Sh.",
      email: "Email",
      program: "Dastur",
      message: "Xabar (ixtiyoriy)",
      namePlaceholder: "To'liq ismingiz",
      emailPlaceholder: "name@example.com",
      programPlaceholder: "Dastur tanlang",
      messagePlaceholder: "Qiziqishlaringiz haqida yozing",
      submit: "Ariza yuborish",
      cancel: "Bekor qilish",
      successTitle: "Ariza qabul qilindi!",
      successText: "2 ish kuni ichida siz bilan bog'lanamiz.",
      close: "Yopish",
      errors: {
        nameRequired: "To'liq ism kiritilishi kerak.",
        emailRequired: "Email kiritilishi kerak.",
        emailInvalid: "Email to'g'ri kiriting.",
        programRequired: "Dastur tanlang.",
      },
    },
  },
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

const getValueByPath = (obj: Record<string, any>, path: string) => {
  return path.split(".").reduce((acc, key) => {
    if (acc && typeof acc === "object" && key in acc) {
      return acc[key];
    }
    return undefined;
  }, obj as any);
};

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem("language");
    if (stored === "en" || stored === "ru" || stored === "uz") return stored;
    return "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = useMemo(() => {
    return (key: string) => {
      const value = getValueByPath(dictionary[language], key);
      if (typeof value === "string") return value;
      const fallback = getValueByPath(dictionary.en, key);
      return typeof fallback === "string" ? fallback : key;
    };
  }, [language]);

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return ctx;
};
