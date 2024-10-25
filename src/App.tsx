import React, { useState } from 'react';
import { Brain, Camera, Clock, Users, Shield, MessageSquare, BarChart, Mail, AlertTriangle, Database } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import FeatureCard from './components/FeatureCard';
import LanguageSelector from './components/LanguageSelector';

function App() {
  const [language, setLanguage] = useState('tr');

  const features = [
    {
      title: {
        en: 'Smart Camera',
        tr: 'Akıllı Kamera',
        de: 'Intelligente Kamera',
        fr: 'Caméra intelligente',
        pt: 'Câmera Inteligente',
        zh: '智能摄像头',
        es: 'Cámara Inteligente',
        ar: 'كاميرا ذكية'
      },
      description: {
        en: 'Monitor employee check-in/out times and detect abnormal situations.',
        tr: 'Personel giriş/çıkış saatlerini izleyin ve anormal durumları tespit edin.',
        de: 'Überwachen Sie die Ein- und Auscheckzeiten der Mitarbeiter und erkennen Sie abnormale Situationen.',
        fr: 'Surveillez les heures d\'entrée/sortie des employés et détectez les situations anormales.',
        pt: 'Monitore os horários de entrada/saída dos funcionários e detecte situações anormais.',
        zh: '监控员工签到/签退时间并检测异常情况。',
        es: 'Monitoree los tiempos de entrada/salida de los empleados y detecte situaciones anormales.',
        ar: 'مراقبة أوقات تسجيل دخول/خروج الموظفين واكتشاف الحالات غير الطبيعية.'
      },
      icon: <Camera className="w-12 h-12 text-cyan-400" />,
    },
    {
      title: {
        en: 'Data Query and Analysis',
        tr: 'Veri Sorgu ve Analiz',
        de: 'Datenabfrage und -analyse',
        fr: 'Requête et analyse de données',
        pt: 'Consulta e Análise de Dados',
        zh: '数据查询和分析',
        es: 'Consulta y Análisis de Datos',
        ar: 'استعلام وتحليل البيانات'
      },
      description: {
        en: 'Interact with company data, generate reports, and perform advanced analytics.',
        tr: 'Şirket verileriyle etkileşime geçin, raporlar oluşturun ve gelişmiş analizler yapın.',
        de: 'Interagieren Sie mit Unternehmensdaten, erstellen Sie Berichte und führen Sie fortgeschrittene Analysen durch.',
        fr: 'Interagissez avec les données de l\'entreprise, générez des rapports et effectuez des analyses avancées.',
        pt: 'Interaja com dados da empresa, gere relatórios e realize análises avançadas.',
        zh: '与公司数据交互，生成报告，并执行高级分析。',
        es: 'Interactúe con los datos de la empresa, genere informes y realice análisis avanzados.',
        ar: 'التفاعل مع بيانات الشركة وإنشاء التقارير وإجراء التحليلات المتقدمة.'
      },
      icon: <Database className="w-12 h-12 text-pink-400" />,
    },
    {
      title: {
        en: 'Productivity Analysis',
        tr: 'Verimlilik Analizi',
        de: 'Produktivitätsanalyse',
        fr: 'Analyse de productivité',
        pt: 'Análise de Produtividade',
        zh: '生产力分析',
        es: 'Análisis de Productividad',
        ar: 'تحليل الإنتاجية'
      },
      description: {
        en: 'Analyze work efficiency and identify areas for improvement.',
        tr: 'İş verimliliğini analiz edin ve iyileştirme alanlarını belirleyin.',
        de: 'Analysieren Sie die Arbeitseffizienz und identifizieren Sie Verbesserungsbereiche.',
        fr: 'Analysez l\'efficacité du travail et identifiez les domaines d\'amélioration.',
        pt: 'Analise a eficiência do trabalho e identifique áreas para melhoria.',
        zh: '分析工作效率并确定需要改进的领域。',
        es: 'Analice la eficiencia del trabajo e identifique áreas de mejora.',
        ar: 'تحليل كفاءة العمل وتحديد مجالات التحسين.'
      },
      icon: <BarChart className="w-12 h-12 text-yellow-400" />,
    },
    {
      title: {
        en: 'Smart Communication',
        tr: 'Akıllı İletişim',
        de: 'Intelligente Kommunikation',
        fr: 'Communication intelligente',
        pt: 'Comunicação Inteligente',
        zh: '智能通信',
        es: 'Comunicación inteligente',
        ar: 'التواصل الذكي'
      },
      description: {
        en: 'Automatically respond to emails and messages using company data.',
        tr: 'Şirket verilerini kullanarak e-postalara ve mesajlara otomatik yanıt verin.',
        de: 'Beantworten Sie E-Mails und Nachrichten automatisch mit Unternehmensdaten.',
        fr: "Répondez automatiquement aux e-mails et messages en utilisant les données de l'entreprise.",
        pt: 'Responda automaticamente a e-mails e mensagens usando dados da empresa.',
        zh: '使用公司数据自动回复电子邮件和消息。',
        es: 'Responda automáticamente a correos electrónicos y mensajes utilizando datos de la empresa.',
        ar: 'الرد التلقائي على رسائل البريد الإلكتروني والرسائل باستخدام بيانات الشركة.'
      },
      icon: <MessageSquare className="w-12 h-12 text-green-400" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Header language={language} />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
          Yapay Zeka Destekli İş Çözümleri
        </h1>
        <LanguageSelector language={language} setLanguage={setLanguage} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title[language]}
              description={feature.description[language]}
              icon={feature.icon}
            />
          ))}
        </div>
      </main>
      <Footer language={language} />
    </div>
  );
}

export default App;