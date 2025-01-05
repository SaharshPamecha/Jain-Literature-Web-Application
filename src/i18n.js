import i18n from 'i18next';
    import { initReactI18next } from 'react-i18next';
    import LanguageDetector from 'i18next-browser-languagedetector';

    const resources = {
      en: {
        translation: {
          home: 'Home',
          reader: 'Reader',
          chatbot: 'Chatbot',
          welcome: 'Welcome to the Jain Literature Web Application',
          intro: 'Explore Jain literature in multiple languages, download books, and interact with our AI chatbot.',
          page: 'Page',
          sampleText: 'This is a sample text from a Jain literature book.',
          download: 'Download',
          fontSize: 'Font Size'
        }
      },
      hi: {
        translation: {
          home: 'होम',
          reader: 'रीडर',
          chatbot: 'चैटबॉट',
          welcome: 'जैन साहित्य वेब एप्लिकेशन में आपका स्वागत है',
          intro: 'विभिन्न भाषाओं में जैन साहित्य का अन्वेषण करें, पुस्तकें डाउनलोड करें, और हमारे एआई चैटबॉट के साथ बातचीत करें।',
          page: 'पृष्ठ',
          sampleText: 'यह जैन साहित्य पुस्तक का एक नमूना पाठ है।',
          download: 'डाउनलोड करें',
          fontSize: 'फॉन्ट आकार'
        }
      },
      gu: {
        translation: {
          home: 'હોમ',
          reader: 'રીડર',
          chatbot: 'ચેટબોટ',
          welcome: 'જૈન સાહિત્ય વેબ એપ્લિકેશનમાં આપનું સ્વાગત છે',
          intro: 'વિવિધ ભાષાઓમાં જૈન સાહિત્યનું અન્વેષણ કરો, પુસ્તકો ડાઉનલોડ કરો અને અમારા એઆઈ ચેટબોટ સાથે વાતચીત કરો.',
          page: 'પાનું',
          sampleText: 'આ જૈન સાહિત્ય પુસ્તકનો નમૂનાનો પાઠ છે।',
          download: 'ડાઉનલોડ કરો',
          fontSize: 'ફોન્ટ સાઈઝ'
        }
      }
    };

    i18n
      .use(LanguageDetector)
      .use(initReactI18next)
      .init({
        resources,
        fallbackLng: 'en',
        debug: true,
        interpolation: {
          escapeValue: false,
        }
      });

    export default i18n;
