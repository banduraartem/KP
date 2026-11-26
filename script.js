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
