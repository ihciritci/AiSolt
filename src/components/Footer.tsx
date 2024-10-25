import React from 'react';

const Footer: React.FC<{ language: string }> = ({ language }) => {
  const footerContent = {
    en: {
      description: 'Empowering businesses with AI-driven solutions',
      quickLinks: ['Home', 'Features', 'About Us', 'Contact'],
      contact: {
        email: 'Email: info@aivision.com',
        phone: 'Phone: +1 (555) 123-4567',
      },
    },
    tr: {
      description: 'İşletmeleri yapay zeka destekli çözümlerle güçlendiriyoruz',
      quickLinks: ['Ana Sayfa', 'Özellikler', 'Hakkımızda', 'İletişim'],
      contact: {
        email: 'E-posta: info@aivision.com',
        phone: 'Telefon: +1 (555) 123-4567',
      },
    },
    de: {
      description: 'Unternehmen mit KI-gestützten Lösungen stärken',
      quickLinks: ['Startseite', 'Funktionen', 'Über uns', 'Kontakt'],
      contact: {
        email: 'E-Mail: info@aivision.com',
        phone: 'Telefon: +1 (555) 123-4567',
      },
    },
    fr: {
      description: 'Autonomiser les entreprises avec des solutions basées sur l\'IA',
      quickLinks: ['Accueil', 'Fonctionnalités', 'À propos', 'Contact'],
      contact: {
        email: 'E-mail : info@aivision.com',
        phone: 'Téléphone : +1 (555) 123-4567',
      },
    },
    pt: {
      description: 'Capacitando empresas com soluções baseadas em IA',
      quickLinks: ['Início', 'Recursos', 'Sobre Nós', 'Contato'],
      contact: {
        email: 'E-mail: info@aivision.com',
        phone: 'Telefone: +1 (555) 123-4567',
      },
    },
    zh: {
      description: '用人工智能解决方案赋能企业',
      quickLinks: ['首页', '功能', '关于我们', '联系'],
      contact: {
        email: '邮箱：info@aivision.com',
        phone: '电话：+1 (555) 123-4567',
      },
    },
    es: {
      description: 'Empoderando a las empresas con soluciones impulsadas por IA',
      quickLinks: ['Inicio', 'Características', 'Sobre Nosotros', 'Contacto'],
      contact: {
        email: 'Correo electrónico: info@aivision.com',
        phone: 'Teléfono: +1 (555) 123-4567',
      },
    },
    ar: {
      description: 'تمكين الشركات بحلول مدعومة بالذكاء الاصطناعي',
      quickLinks: ['الرئيسية', 'الميزات', 'عن الشركة', 'اتصل بنا'],
      contact: {
        email: 'البريد الإلكتروني: info@aivision.com',
        phone: 'الهاتف: +1 (555) 123-4567',
      },
    },
  };

  const content = footerContent[language];

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">AI Vision</h3>
            <p className="text-gray-400">{content.description}</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2 text-cyan-400">
              {language === 'en' && 'Quick Links'}
              {language === 'tr' && 'Hızlı Bağlantılar'}
              {language === 'de' && 'Schnellzugriff'}
              {language === 'fr' && 'Liens rapides'}
              {language === 'pt' && 'Links Rápidos'}
              {language === 'zh' && '快速链接'}
              {language === 'es' && 'Enlaces Rápidos'}
              {language === 'ar' && 'روابط سريعة'}
            </h4>
            <ul className="space-y-2">
              {content.quickLinks.map((link, index) => (
                <li key={index}><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2 text-cyan-400">
              {language === 'en' && 'Contact Us'}
              {language === 'tr' && 'Bize Ulaşın'}
              {language === 'de' && 'Kontaktieren Sie uns'}
              {language === 'fr' && 'Contactez-nous'}
              {language === 'pt' && 'Contate-nos'}
              {language === 'zh' && '联系我们'}
              {language === 'es' && 'Contáctenos'}
              {language === 'ar' && 'اتصل بنا'}
            </h4>
            <p className="text-gray-400">{content.contact.email}</p>
            <p className="text-gray-400">{content.contact.phone}</p>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2024 AI Vision. {language === 'en' ? 'All rights reserved.' : 'Tüm hakları saklıdır.'}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;