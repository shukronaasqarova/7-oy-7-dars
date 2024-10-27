import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    header: {
      templates: 'Templates',
      features: 'Features',
      pricing: 'Pricing',
      resources: 'Resources',
      buttonStart: 'Get Started for Free',
    },
    home: {
      contact: 'Contact Us',
      welcome: 'Say Hello! We’re always here to help.',
      description:
        'Interested in learning more about SmartMoving? Give us a call or send an email and one of our team members will be happy to assist you.',
    },
  },
  uz: {
    header: {
      templates: 'Shablonlar',
      features: 'Xususiyatlari',
      pricing: 'Narxlash',
      resources: 'Resurslar',
      buttonStart: 'Bepul boshlang',
    },
    home: {
      contact: 'Biz bilan bog\'laning',
      welcome: 'Salom ayting! Biz har doim yordam berish uchun shu yerdamiz.',
      description:
        'SmartMoving haqida ko\'proq bilishni xohlaysizmi? Bizga qo\'ng\'iroq qiling yoki elektron pochta yuboring va jamoamiz a\'zolaridan biri sizga yordam berishdan xursand bo\'ladi.',
    },
  },
  ru: {
    header: {
      templates: 'Шаблоны',
      features: 'Функции',
      pricing: 'Цены',
      resources: 'Ресурсы',
      buttonStart: 'Начните бесплатно',
    },
    home: {
      contact: 'Связаться с нами',
      welcome: 'Скажи привет! Мы всегда здесь, чтобы помочь.',
      description:
        'Хотите узнать больше о SmartMoving? Позвоните нам или отправьте электронное письмо, и один из членов нашей команды будет рад вам помочь.',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', 
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
