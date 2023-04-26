import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)

const resources = {
      en: {
        translation: {
          "ai": "Artificial Intelligence",
          "differentFuture" : "Different Future",
          "ML Roadmap": "Machine Learning Roadmap",
          "Algebra": "Linear Algebra",
          "Network": "Neural Network",
          "Deep": "Deep Learning",
          "Hello Future": "Say Hello to Future",
          "aiParaType": "Ninety-seven million new jobs will be created with Artificial Intelligence",
          "more info": "More Information",
          "MixtrueWithAI": "Linked with AI",
          "Technology": "Technology",
          "Industry": "Industry",
          "Agriculture": "Agriculture Industry",
          "Mechanic": "Mechanic",
          "Medical": "Medical Industry",
          "Bank": "Bank",
          "IoT": "IoT",
          "Sense": "Sense",
          "Comprehend": "Comprehend",
          "Learn": "Learn",
          "AiTitle": "Say Hello to Jarvis",
          "AiTestBtn": "Test a Smaple",
          "AiBriefCase": "Jarvis (Just a Very Intelligent System) is a fictional artificial intelligence in American comic books published by Marvel Comics. After his introduction in the Marvel Cinematic Universe, Iron Man, Jarvis was introduced in comic books.",
          "Beyond Future": "Beyond a Comperhansive World",
          "Better World": "Better World",
          "Architecture": "Bueatiful as an Architecture",
          "bigbgTitle": "Make Your Life Easier",
          "bigbgPara": "Artificial intelligence is now part of our everyday environment, whether we are  aware of it or not",
          "aboutProject": "This is a sample project. Each section has its own independent nature, in another way of telling, each section is a React application. The combination and harmony of them together is called Micro Front End. Thanks to Webpack plugins, it's been developed. Although I have used i18n to add other languages and parse them through all applications.Also each section is dockerized, in order to be used easier. Hope you would get many ideas for solving your problems in the same projects, if you had.",
          "me": "Don't you forget to follow me on social media :)"
        }
      },
      per: {
        translation: {
          "ai": "هوش مصنوعی",
          "differentFuture" : "آینده ای متفاوت",
          "ML Roadmap": "نقشه راه یادگیری ماشین",
          "Algebra" : "جبر خطی",
          "Network": "شبکه عصبی",
          "Deep": "دیپ لرنینگ",
          "Hello Future": "به آینده سلام کنید",
          "aiParaType": "نود و هفت میلیون شغل جدید با هوش مصنوعی به وجود خواهد آمد",
          "more info": "اطلاعات بیشتر",
          "MixtrueWithAI": "پیوند با هوش مصنوعی",
          "Technology" : "تکنولوژی",
          "Industry": "صنایع",
          "Agriculture": "صنعت کشاورزی",
          "Mechanic": "مکانیک",
          "Medical": "صنعت پزشکی",
          "Bank": "بانک",
          "IoT": "اینترنت اشیا",
          "Sense": "حس کردن",
          "Comprehend": "درک کردن",
          "Learn": "یادگیری",
          "AiTitle": "به جارویس سلام کنید",
          "AiBriefCase" : "جارویس (فقط یک سیستم بسیار هوشمند) یک هوش مصنوعی تخیلی در کتابهای کمیک آمریکایی منتشر شده توسط مارول کامیکس است . پس از معرفی وی در دنیای سینمایی مارول ، مرد آهنی ، جارویس در کتاب های کمیک معرفی شد.",
          "AiTestBtn": "تست یک نمونه",
          "Beyond Future": "آینده ای فراتر از درک",
          "Better World": "دنیایی بهتر",
          "Architecture": "به زیبایی یک معماری",
          "bigbgTitle": "زندگی خود را راحت تر کنید",
          "bigbgPara" : "هوش مصنوعی اکنون بخشی از محیط روزمره ماست، چه از آن آگاه باشیم و چه ندانیم",
          "aboutProject": `این یک نمونه کار است، که هر قسمت این وب سایت یک ذات مستقل دارد، به عبارت دیگر، هر قسمت یک اپلیکیشن ری اکتی می باشد. ترکیب و هارمونی تمام این اپلیکیشن ها با یک دیگر معروف به میکروفرانت اند است، که با استفاده از با استفاده از پلاگین های وب پک، این پروژه توسعه یافت.  
          همینطور هر اپلیکیشن کاملا داکرایز شده است. اگر سوالات مختلفی راجع به میکرو فرانت داری، امیدوارم با این پروژه جواب یک سری سوالات رو دریافت کرده باشید.`,
          "me": "یادت نره من رو در صفحات اجتماعی زیر دنبال کنی :)"
        }
      },
      ger: {
        translation: {
          "ai": "künstliche Intelligenz",
          "differentFuture" : "andere Zukunft",
          "ML Roadmap": "Roadmap für maschinelles Lernen",
          "Algebra": "Lineare Algebra",
          "Network": "neurales Netzwerk",
          "Deep": "tiefes Lernen",
          "Hello Future": "Sag Hallo zur Zukunft",
          "aiParaType": "Sieben­und­neunzig Millionen neue Arbeitsplätze werden mit künstlicher Intelligenz geschaffen",
          "more info": "Mehr Informationen",
          "MixtrueWithAI": "Verknüpfung mit künstlicher Intelligenz",
          "Technology": "Technologie",
          "Industry": "Industrie",
          "Agriculture": "Landwirtschaft",
          "Mechanic": "Mechaniker",
          "Medical": "Medizinische Industrie",
          "Bank": "Bank",
          "IoT": "IoT",
          "Sense": "Sinn",
          "Comprehend": "Verstehen",
          "Learn": "Lernen",
          "AiTitle": "Grüß Jarvis",
          "AiTestBtn": "Testen Sie eine Probe",
          "AiBriefCase": "Jarvis (Just a Very Intelligent System) ist eine fiktive künstliche Intelligenz in amerikanischen Comics, die von Marvel Comics veröffentlicht werden. Nach seiner Einführung im Marvel Cinematic Universe, Iron Man, wurde Jarvis in Comics vorgestellt.",
          "Beyond Future": "Eine Welt jenseits des Verstehens",
          "Better World": "Eine bessere Welt",
          "Architecture": "So schön wie eine Architektur",
          "bigbgTitle": "Machen Sie sich das Leben leichter",
          "bigbgPara": "Künstliche Intelligenz ist heute Teil unserer alltäglichen Umgebung, ob wir uns dessen bewusst sind oder nicht",

          "aboutProject": `Dies ist ein Beispielprojekt. Jeder Abschnitt hat seine eigene unabhängige Natur, anders gesagt, jeder Abschnitt ist eine React-Anwendung. Die Kombination und Harmonie von ihnen zusammen heißt Micro Front End. Auch durch die Verwendung von Webpack plugins, it's been developed. Auch durch die Verwendung von i18n um andere Sprachen hinzuzufügen und sie durch alle Anwendungen zu analysieren. Ich hoffe, Sie würden viele Ideen zur Lösung Ihrer Probleme in denselben Projekten bekommen, wenn Sie dies hätten.`,
          "me": "Vergiss nicht mir auf Social Media zu folgen :)"
        }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;