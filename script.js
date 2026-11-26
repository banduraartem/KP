const STORAGE_LANG_KEY = 'interior_site_lang';

const TRANSLATIONS = {
  en: {
    navHome: 'Home',
    navAbout: 'About',
    navServices: 'Services',
    navProjects: 'Projects',
    navBlog: 'Blog ▾',
    navPages: 'Pages ▾',
    navContact: 'Contact',
    blogExhibitions: 'Exhibitions',
    blogCases: 'Case Studies',
    pagesAbout: 'About Us',
    pagesServices: 'Our Services',
    pagesContact: 'Contact',
    pages404: '404 Page',

    heroTitle: 'Precise concept design<br>for stylish living',
    heroText: 'If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each. You may be saying to yourself.',
    heroBtn: 'Get Started',

    servicesTitle: 'What we offer to our clients',
    servicesSubtitle: 'Who are in extremely love with eco friendly system..',

    worksTitle: 'Our Recent Works may impress you',
    worksSubtitle: 'Who are in extremely love with eco friendly system.',
    moreDetails: 'More Details',

    filterAll: 'All',
    filterInterior: 'Interior',
    filterArchitecture: 'Architecture',
    filterConcept: 'Concept',

    featuresTitle: 'Some Features that Made us Unique',
    featuresSubtitle: 'Who are in extremely love with eco friendly system.',

    testimonialsTitle: 'Testimonial from our Clients',
    testimonialsSubtitle: 'Who are in extremely love with eco friendly system.',

    ctaTitle: 'Looking for a<br>quality and affordable interior design?',
    ctaText: 'inappropriate behavior is often laughed off as "boys will be boys," women face higher conduct standards especially in the workplace.',
    ctaBtn: 'Request Quote Now',

    exhibitionsTitle: 'Ongoing Exhibitions from the scratch',
    exhibitionsSubtitle: 'Who are in extremely love with eco friendly system.',

    contactHeading: 'Get in Touch',
    contactSubheading: 'Have a project in mind? Send us a message and our team will reach out.',
    contactName: 'Your Name',
    contactEmail: 'Your Email',
    contactSubject: 'Subject (e.g., Interior Design)',
    contactMessage: 'Message',
    contactSubmit: 'Send Message',

    footerAboutTitle: 'About Us',
    footerAboutText: "If you own an Iphone, you've probably already worked out how much fun it is to use it to watch movies-it has that.",
    footerNewsTitle: 'Newsletter',
    footerNewsText: 'Stay update with our latest',
    footerEmailPlaceholder: 'Email Address',
    footerFollowTitle: 'Follow Us',
    footerFollowText: 'Let us be social',
    copyright: 'Copyright ©2026 All rights reserved | This template is made with ♡ by <span class="text-gold">Colorlib</span> and distributed by <span class="text-gold">ThemeWagon</span>',

    notFoundTitle: 'Page Not Found',
    notFoundText: 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.',
    backToHome: 'Back to Home'
  },
  ua: {
    navHome: 'Головна',
    navAbout: 'Про нас',
    navServices: 'Послуги',
    navProjects: 'Проєкти',
    navBlog: 'Блог ▾',
    navPages: 'Сторінки ▾',
    navContact: 'Контакти',
    blogExhibitions: 'Виставки',
    blogCases: 'Кейси',
    pagesAbout: 'Про компанію',
    pagesServices: 'Наші послуги',
    pagesContact: 'Контакти',
    pages404: 'Сторінка 404',

    heroTitle: 'Точний концепт-дизайн<br>для стильного життя',
    heroText: 'Створюємо продумані інтер’єри та архітектурні рішення, які поєднують естетику, ергономіку й сучасний комфорт у кожній деталі.',
    heroBtn: 'Розпочати',

    servicesTitle: 'Що ми пропонуємо клієнтам',
    servicesSubtitle: 'Комплексні рішення для житлових і комерційних просторів.',

    worksTitle: 'Наші останні роботи',
    worksSubtitle: 'Реалізовані проєкти з акцентом на світло, фактури та простір.',
    moreDetails: 'Детальніше',

    filterAll: 'Усі',
    filterInterior: 'Інтер’єр',
    filterArchitecture: 'Архітектура',
    filterConcept: 'Концепт',

    featuresTitle: 'Наші ключові переваги',
    featuresSubtitle: 'Підхід, який допомагає реалізовувати складні ідеї вчасно.',

    testimonialsTitle: 'Відгуки наших клієнтів',
    testimonialsSubtitle: 'Враження замовників про співпрацю з нашою командою.',

    ctaTitle: 'Шукаєте якісний та доступний<br>дизайн інтер’єру?',
    ctaText: 'Залиште заявку на консультацію — підберемо формат роботи та розрахуємо орієнтовний бюджет під ваш простір.',
    ctaBtn: 'Замовити прорахунок',

    exhibitionsTitle: 'Актуальні виставки та події',
    exhibitionsSubtitle: 'Події зі світу дизайну, архітектури та сучасного оформлення.',

    contactHeading: 'Зв’язатися з нами',
    contactSubheading: 'Маєте ідею проєкту? Напишіть нам, і команда відповість найближчим часом.',
    contactName: 'Ваше ім’я',
    contactEmail: 'Ваш Email',
    contactSubject: 'Тема (наприклад, Дизайн інтер’єру)',
    contactMessage: 'Повідомлення',
    contactSubmit: 'Надіслати',

    footerAboutTitle: 'Про нас',
    footerAboutText: 'Студія сучасного інтер’єрного та концептуального дизайну для дому, офісів та виставкових просторів.',
    footerNewsTitle: 'Розсилка',
    footerNewsText: 'Отримуйте свіжі новини та проєкти',
    footerEmailPlaceholder: 'Електронна пошта',
    footerFollowTitle: 'Ми в соцмережах',
    footerFollowText: 'Слідкуйте за оновленнями',
    copyright: 'Copyright ©2026 Усі права захищено | Шаблон створено з ♡ <span class="text-gold">Colorlib</span> за підтримки <span class="text-gold">ThemeWagon</span>',

    notFoundTitle: 'Сторінку не знайдено',
    notFoundText: 'Можливо, сторінку було переміщено, видалено або введено неправильну адресу.',
    backToHome: 'На головну'
  }
};

const SITE_DATA = {
  services: [
    {
      title: { en: 'Interior Design', ua: 'Дизайн інтер’єру' },
      description: {
        en: "Sony laptops are among the most well known laptops on today's market. Sony is a name that over time has established itself as creating a solid product.",
        ua: 'Продумане планування, підбір матеріалів, освітлення та меблів для гармонійного й функціонального простору.'
      }
    },
    {
      title: { en: 'Architecture Design', ua: 'Архітектурний дизайн' },
      description: {
        en: 'Computer users and programmers have become so accustomed to using Windows, even for the changing capabilities and the appearances of the graphical.',
        ua: 'Проєктування форм, конструктивних рішень та об’ємно-просторової композиції з урахуванням норм і світла.'
      }
    },
    {
      title: { en: 'Concept Design', ua: 'Концепт-дизайн' },
      description: {
        en: 'Can you imagine what we will be downloading in another twenty years? I mean who would have ever thought that you could record sound.',
        ua: 'Візуальні концепції, мудборди та сміливі ідеї, які задають характер проєкту ще до старту робіт.'
      }
    }
  ],
  projects: [
    {
      id: 1,
      title: { en: 'Lavendar ambient interior', ua: 'Лавандовий затишний інтер’єр' },
      category: 'interior',
      image: 'hero.jpg',
      layoutClass: 'item-large',
      details: {
        en: 'Warm lighting accents paired with calm tones for a balanced living environment.',
        ua: 'Теплі світлові акценти у поєднанні зі спокійними відтінками для збалансованої атмосфери.'
      }
    },
    {
      id: 2,
      title: { en: 'Studio Material Desk', ua: 'Робочий стіл студії' },
      category: 'interior',
      image: 'studio.jpg',
      layoutClass: 'item-top-right',
      details: {
        en: 'Thoughtful spatial zoning, blueprints, and textured finishes tailored for modern spaces.',
        ua: 'Грамотне зонування, креслення та фактурні зразки матеріалів для сучасних просторів.'
      }
    },
    {
      id: 3,
      title: { en: 'Architectural Lighting & Form', ua: 'Світло та архітектурна форма' },
      category: 'architecture',
      image: 'hero.jpg',
      layoutClass: 'item-bottom-1',
      details: {
        en: 'Structural geometry combining warm pendant lighting and clean architectural lines.',
        ua: 'Виразна геометрія, тепле підвісне освітлення та чіткі архітектурні лінії.'
      }
    },
    {
      id: 4,
      title: { en: 'Concept & Samples Lab', ua: 'Концепція та підбір фактур' },
      category: 'concept',
      image: 'studio.jpg',
      layoutClass: 'item-large',
      details: {
        en: 'Open-plan living concept designed around comfort, durability, and natural light.',
        ua: 'Концепція простору, створена для комфорту, практичності та гармонійного світла.'
      }
    }
  ],
  features: [
    {
      title: { en: 'Expert Technicians', ua: 'Досвідчені фахівці' },
      icon: 'star.jpg',
      description: {
        en: 'Computer users and programmers have become so accustomed to using Windows, even for the changing.',
        ua: 'Команда з практичним досвідом реалізації проєктів від ескізу до фінального втілення.'
      }
    },
    {
      title: { en: 'Professional Service', ua: 'Професійний сервіс' },
      icon: 'star.jpg',
      description: {
        en: 'Finding the perfect learning tool for Flash is a daunting task to any novice web developer. One can find help.',
        ua: 'Чітка комунікація, прозорі етапи роботи та супровід на кожному кроці.'
      }
    },
    {
      title: { en: 'Great Support', ua: 'Надійна підтримка' },
      icon: 'star.jpg',
      description: {
        en: 'While most people enjoy casino ambling, sports betting, lottery and bingo playing for the fun and excitement.',
        ua: 'Оперативно допомагаємо з уточненнями, правками та підбором рішень під бюджет.'
      }
    },
    {
      title: { en: 'Technical Skills', ua: 'Технічна експертиза' },
      icon: 'star.jpg',
      description: {
        en: 'The moment you think of buying a Web Hosting Plan, you know one thing – So many choices, which one to choose.',
        ua: 'Враховуємо ергономіку, матеріали, освітлення та технічні вимоги приміщення.'
      }
    },
    {
      title: { en: 'Highly Recomended', ua: 'Високі рекомендації' },
      icon: 'star.jpg',
      description: {
        en: 'Many conventional colleges and universities are now offering online DVD repair courses, which are the exact same.',
        ua: 'Клієнти повертаються до нас із новими запитами та радять студію знайомим.'
      }
    },
    {
      title: { en: 'Positive Reviews', ua: 'Позитивні відгуки' },
      icon: 'star.jpg',
      description: {
        en: 'So you have your new digital camera and clicking away to glory anything and everything in sight. Now you want.',
        ua: 'Стабільна якість результату підтверджена відгуками замовників.'
      }
    }
  ],
  testimonials: [
    {
      name: 'Mark Alviro Wiens',
      avatar: 'client1.jpg',
      rating: 4,
      text: {
        en: 'Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker, projector, hardware.',
        ua: 'Отримали чітке бачення простору ще на етапі концепції. Усі деталі продумані до дрібниць.'
      }
    },
    {
      name: 'Lina Harrington',
      avatar: 'client2.jpg',
      rating: 3,
      text: {
        en: 'Hypnosis quit smoking methods maintain caused quite world over the last two decades. There is a lot of argument pertaining to',
        ua: 'Приємна співпраця, увага до побажань і акуратне поєднання кольорів та фактур.'
      }
    }
  ],
  exhibitions: [
    {
      title: { en: 'Low Cost Advertising', ua: 'Ефективне просування простору' },
      image: 'studio.jpg',
      tags: { en: ['Travel', 'Life Style'], ua: ['Подорожі', 'Стиль життя'] },
      excerpt: {
        en: "Acres of Diamonds… you've read the famous story, or at least had it related to you. A farmer.",
        ua: 'Огляд сучасних підходів до оформлення публічних зон та виставкових стендів.'
      },
      date: { en: '31st January, 2018', ua: '31 січня 2018' }
    },
    {
      title: { en: 'Creative Outdoor Ads', ua: 'Зовнішні візуальні рішення' },
      image: 'hero.jpg',
      tags: { en: ['Travel', 'Life Style'], ua: ['Подорожі', 'Стиль життя'] },
      excerpt: {
        en: "Acres of Diamonds… you've read the famous story, or at least had it related to you. A farmer.",
        ua: 'Як поєднувати архітектурне середовище та візуальну навігацію.'
      },
      date: { en: '31st January, 2018', ua: '31 січня 2018' }
    },
    {
      title: { en: "It's Classified How To Utilize Free", ua: 'Розумне використання ресурсів' },
      image: 'studio.jpg',
      tags: { en: ['Travel', 'Life Style'], ua: ['Подорожі', 'Стиль життя'] },
      excerpt: {
        en: "Acres of Diamonds… you've read the famous story, or at least had it related to you. A farmer.",
        ua: 'Практичні поради щодо організації простору без зайвих витрат.'
      },
      date: { en: '31st January, 2018', ua: '31 січня 2018' }
    }
  ]
};

let currentLang = localStorage.getItem(STORAGE_LANG_KEY) || 'en';
let currentProjectCategory = 'all';

function t(key) {
  return TRANSLATIONS[currentLang]?.[key] ?? TRANSLATIONS.en[key] ?? '';
}

function localize(value) {
  if (typeof value === 'string') return value;
  return value?.[currentLang] ?? value?.en ?? '';
}

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initLanguageSwitcher();
  initNewsletterForms();
  initModal();
  initProjectFilters();
  initContactForm();
  applyLanguage(currentLang);
});

function initLanguageSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang && (lang === 'en' || lang === 'ua')) {
        currentLang = lang;
        localStorage.setItem(STORAGE_LANG_KEY, lang);
        applyLanguage(lang);
      }
    });
  });
}

function applyLanguage(lang) {
  document.documentElement.lang = lang === 'ua' ? 'uk' : 'en';

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  updateStaticTexts();
  renderPageSections();
}

function updateStaticTexts() {
  const navLinks = document.querySelectorAll('.desktop-nav > a');
  if (navLinks.length >= 5) {
    navLinks[0].textContent = t('navHome');
    navLinks[1].textContent = t('navAbout');
    navLinks[2].textContent = t('navServices');
    navLinks[3].textContent = t('navProjects');
    navLinks[navLinks.length - 1].textContent = t('navContact');
  }

  const dropdowns = document.querySelectorAll('.desktop-nav .dropdown');
  dropdowns.forEach(dd => {
    const toggle = dd.querySelector('.dropdown-toggle');
    const items = dd.querySelectorAll('.dropdown-menu a');
    if (toggle && (toggle.textContent.includes('Blog') || toggle.textContent.includes('Блог'))) {
      toggle.textContent = t('navBlog');
      if (items[0]) items[0].textContent = t('blogExhibitions');
      if (items[1]) items[1].textContent = t('blogCases');
    } else if (toggle) {
      toggle.textContent = t('navPages');
      if (items[0]) items[0].textContent = t('pagesAbout');
      if (items[1]) items[1].textContent = t('pagesServices');
      if (items[2]) items[2].textContent = t('pagesContact');
      if (items[3]) items[3].textContent = t('pages404');
    }
  });

  const breadcrumbHome = document.querySelector('.breadcrumb a');
  const breadcrumbSpans = document.querySelectorAll('.breadcrumb span');
  const breadcrumbCurrent = breadcrumbSpans[breadcrumbSpans.length - 1];
  if (breadcrumbHome) breadcrumbHome.textContent = t('navHome');

  const page = document.body.dataset.page;
  const bannerTitle = document.querySelector('.page-banner-title');
  if (bannerTitle && page) {
    if (page === 'about') {
      bannerTitle.textContent = t('navAbout');
      if (breadcrumbCurrent) breadcrumbCurrent.textContent = t('navAbout');
    } else if (page === 'services') {
      bannerTitle.textContent = t('navServices');
      if (breadcrumbCurrent) breadcrumbCurrent.textContent = t('navServices');
    } else if (page === 'projects') {
      bannerTitle.textContent = t('navProjects');
      if (breadcrumbCurrent) breadcrumbCurrent.textContent = t('navProjects');
    } else if (page === 'contact') {
      bannerTitle.textContent = t('navContact');
      if (breadcrumbCurrent) breadcrumbCurrent.textContent = t('navContact');
    } else if (page === '404') {
      bannerTitle.textContent = '404';
      if (breadcrumbCurrent) breadcrumbCurrent.textContent = '404';
    }
  }

  const heroTitle = document.querySelector('.hero-title');
  const heroText = document.querySelector('.hero-text');
  const heroBtn = document.querySelector('.hero .btn');
  if (heroTitle) heroTitle.innerHTML = t('heroTitle');
  if (heroText) heroText.textContent = t('heroText');
  if (heroBtn) heroBtn.textContent = t('heroBtn');

  const ctaTitle = document.querySelector('.cta-title');
  const ctaText = document.querySelector('.cta-text');
  const ctaBtn = document.querySelector('.cta-box .btn');
  if (ctaTitle) ctaTitle.innerHTML = t('ctaTitle');
  if (ctaText) ctaText.textContent = t('ctaText');
  if (ctaBtn) ctaBtn.textContent = t('ctaBtn');

  const filterBtns = document.querySelectorAll('#project-filters .filter-btn');
  filterBtns.forEach(btn => {
    const f = btn.dataset.filter;
    if (f === 'all') btn.textContent = t('filterAll');
    if (f === 'interior') btn.textContent = t('filterInterior');
    if (f === 'architecture') btn.textContent = t('filterArchitecture');
    if (f === 'concept') btn.textContent = t('filterConcept');
  });

  const contactHeading = document.getElementById('contact-heading');
  const contactSubheading = document.getElementById('contact-subheading');
  const contactName = document.getElementById('contact-name');
  const contactEmail = document.getElementById('contact-email');
  const contactSubject = document.getElementById('contact-subject');
  const contactMessage = document.getElementById('contact-message');
  const contactSubmit = document.getElementById('contact-submit');
  if (contactHeading) contactHeading.textContent = t('contactHeading');
  if (contactSubheading) contactSubheading.textContent = t('contactSubheading');
  if (contactName) contactName.placeholder = t('contactName');
  if (contactEmail) contactEmail.placeholder = t('contactEmail');
  if (contactSubject) contactSubject.placeholder = t('contactSubject');
  if (contactMessage) contactMessage.placeholder = t('contactMessage');
  if (contactSubmit) contactSubmit.textContent = t('contactSubmit');

  const notFoundTitle = document.getElementById('notfound-title');
  const notFoundText = document.getElementById('notfound-text');
  const notFoundBtn = document.getElementById('notfound-btn');
  if (notFoundTitle) notFoundTitle.textContent = t('notFoundTitle');
  if (notFoundText) notFoundText.textContent = t('notFoundText');
  if (notFoundBtn) notFoundBtn.textContent = t('backToHome');

  const widgets = document.querySelectorAll('.footer-widget');
  if (widgets[0]) {
    widgets[0].querySelector('.widget-title').textContent = t('footerAboutTitle');
    widgets[0].querySelector('.widget-text').textContent = t('footerAboutText');
  }
  if (widgets[1]) {
    widgets[1].querySelector('.widget-title').textContent = t('footerNewsTitle');
    widgets[1].querySelector('.widget-text').textContent = t('footerNewsText');
    const emailInput = widgets[1].querySelector('input[type="email"]');
    if (emailInput) emailInput.placeholder = t('footerEmailPlaceholder');
  }
  if (widgets[2]) {
    widgets[2].querySelector('.widget-title').textContent = t('footerFollowTitle');
    widgets[2].querySelector('.widget-text').textContent = t('footerFollowText');
  }

  const copyright = document.querySelector('.copyright');
  if (copyright) copyright.innerHTML = t('copyright');
}

function renderPageSections() {
  const page = document.body.dataset.page;

  setSectionHeader('.services .section-header', 'servicesTitle', 'servicesSubtitle');
  setSectionHeader('.gallery .section-header', 'worksTitle', 'worksSubtitle');
  setSectionHeader('.features .section-header', 'featuresTitle', 'featuresSubtitle');
  setSectionHeader('.testimonials .section-header', 'testimonialsTitle', 'testimonialsSubtitle');
  setSectionHeader('.blog .section-header', 'exhibitionsTitle', 'exhibitionsSubtitle');

  if (page === 'home') {
    renderServices('home-services-grid');
    renderMosaicGallery('home-gallery-mosaic');
    renderFeatures('home-features-grid');
    renderTestimonials('home-testimonials-grid');
    renderExhibitions('home-exhibitions-grid');
  } else if (page === 'about') {
    renderFeatures('about-features-grid');
    renderTestimonials('about-testimonials-grid');
  } else if (page === 'services') {
    renderServices('services-page-grid');
    renderFeatures('services-features-grid');
  } else if (page === 'projects') {
    renderProjectsCatalog(currentProjectCategory);
  }
}

function setSectionHeader(selector, titleKey, subtitleKey) {
  const header = document.querySelector(selector);
  if (!header) return;
  const titleEl = header.querySelector('.section-title');
  const subEl = header.querySelector('.section-subtitle');
  if (titleEl) titleEl.textContent = t(titleKey);
  if (subEl) subEl.textContent = t(subtitleKey);
}

function initMobileMenu() {
  const mobileToggle = document.querySelector('.mobile-toggle');
  const desktopNav = document.querySelector('.desktop-nav');
  if (!mobileToggle || !desktopNav) return;

  mobileToggle.addEventListener('click', () => {
    desktopNav.classList.toggle('active');
    mobileToggle.classList.toggle('active');
  });

  desktopNav.querySelectorAll('.dropdown-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const dropdown = btn.closest('.dropdown');
      if (dropdown) dropdown.classList.toggle('open');
    });
  });

  desktopNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      desktopNav.classList.remove('active');
      mobileToggle.classList.remove('active');
    });
  });
}

function renderServices(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = SITE_DATA.services.map(item => `
    <article class="service-card">
      <h4 class="card-title">${localize(item.title)}</h4>
      <p class="card-desc">${localize(item.description)}</p>
    </article>
  `).join('');
}

function renderMosaicGallery(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = SITE_DATA.projects.map(project => `
    <div class="gallery-item ${project.layoutClass}">
      <img src="${project.image}" alt="${localize(project.title)}">
      <div class="gallery-overlay">
        <div class="overlay-title">${localize(project.title)}</div>
        <button type="button" class="btn btn-primary" data-project-id="${project.id}">${t('moreDetails')}</button>
      </div>
    </div>
  `).join('');

  attachModalTriggers(container);
}

function renderProjectsCatalog(category) {
  const container = document.getElementById('projects-catalog');
  if (!container) return;

  const filtered = category === 'all'
    ? SITE_DATA.projects
    : SITE_DATA.projects.filter(p => p.category === category);

  container.innerHTML = filtered.map(project => `
    <div class="gallery-item">
      <img src="${project.image}" alt="${localize(project.title)}">
      <div class="gallery-overlay">
        <div class="overlay-title">${localize(project.title)}</div>
        <button type="button" class="btn btn-primary" data-project-id="${project.id}">${t('moreDetails')}</button>
      </div>
    </div>
  `).join('');

  attachModalTriggers(container);
}

function initProjectFilters() {
  const filterContainer = document.getElementById('project-filters');
  if (!filterContainer) return;

  filterContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;

    filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentProjectCategory = btn.dataset.filter;
    renderProjectsCatalog(currentProjectCategory);
  });
}

function renderFeatures(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = SITE_DATA.features.map(feature => `
    <article class="feature-card">
      <div class="feature-header">
        <div class="feature-icon">
          <img src="${feature.icon}" alt="${localize(feature.title)}">
        </div>
        <h4 class="card-title">${localize(feature.title)}</h4>
      </div>
      <p class="card-desc">${localize(feature.description)}</p>
    </article>
  `).join('');
}

function renderTestimonials(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = SITE_DATA.testimonials.map(item => {
    const stars = Array.from({ length: 5 }, (_, idx) =>
      `<span class="star ${idx < item.rating ? 'filled' : ''}">★</span>`
    ).join('');

    return `
      <article class="testimonial-card">
        <img src="${item.avatar}" alt="${item.name}" class="client-avatar">
        <div class="testimonial-content">
          <p class="client-text">${localize(item.text)}</p>
          <h4 class="client-name">${item.name}</h4>
          <div class="star-rating">${stars}</div>
        </div>
      </article>
    `;
  }).join('');
}

function renderExhibitions(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const tagsList = (tags) => (Array.isArray(tags) ? tags : (tags?.[currentLang] ?? tags?.en ?? []));

  container.innerHTML = SITE_DATA.exhibitions.map(post => `
    <article class="blog-card">
      <div class="blog-image-wrapper">
        <img src="${post.image}" alt="${localize(post.title)}">
      </div>
      <div class="blog-tags">
        ${tagsList(post.tags).map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
      <a href="projects.html" class="blog-title">${localize(post.title)}</a>
      <p class="blog-excerpt">${localize(post.excerpt)}</p>
      <p class="blog-date">${localize(post.date)}</p>
    </article>
  `).join('');
}

function initModal() {
  const modal = document.getElementById('project-modal');
  if (!modal) return;

  modal.querySelectorAll('[data-close-modal]').forEach(el => {
    el.addEventListener('click', () => closeModal(modal));
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal(modal);
    }
  });
}

function attachModalTriggers(scope) {
  const modal = document.getElementById('project-modal');
  if (!modal) return;

  scope.querySelectorAll('[data-project-id]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.projectId);
      const project = SITE_DATA.projects.find(p => p.id === id);
      if (!project) return;

      const title = localize(project.title);
      const details = localize(project.details);

      document.getElementById('modal-img').src = project.image;
      document.getElementById('modal-img').alt = title;
      document.getElementById('modal-category').textContent = project.category;
      document.getElementById('modal-title').textContent = title;
      document.getElementById('modal-desc').textContent = details;

      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
    });
  });
}

function closeModal(modal) {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}

function initNewsletterForms() {
  document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (input && input.value.trim()) {
        const msg = currentLang === 'ua'
          ? `Підписку оформлено: ${input.value.trim()}`
          : `Subscribed: ${input.value.trim()}`;
        alert(msg);
        form.reset();
      }
    });
  });
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('contact-status');
  if (!form || !status) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name').value.trim();
    status.textContent = currentLang === 'ua'
      ? `Дякуємо, ${name}. Ваше повідомлення надіслано.`
      : `Thank you, ${name}. Your message has been received.`;
    form.reset();
  });
}
