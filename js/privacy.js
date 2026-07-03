// O'salon — Privacy Policy page content (FR/EN/AR) and rendering.
document.addEventListener('DOMContentLoaded', function () {

  var TRANSLATIONS = {
    fr: {
      pageTitle: "O'salon — Politique de Confidentialité",
      backHome: "Retour à l'accueil",
      heading: "Politique de Confidentialité",
      intro: "Cette page décrit qui édite et exploite la plateforme O'SALON, ainsi que le responsable du traitement de vos données personnelles.",
      s1Title: "1. Informations sur l'Éditeur et Responsable du Traitement",
      s1Intro: "L'application O'SALON, le Store e-commerce, la régie publicitaire interne, les services de sponsoring et les services associés sont édités et exploités par la société propriétaire exclusive de la marque et de la plateforme O'SALON :",
      footerFaq: "FAQ", footerContact: "Contact",
      footerCopy: "© {year} O'salon. Tous droits réservés.",
      info: [
        { label: "Raison sociale", value: "OPTIME S.A.R.L." },
        { label: "Forme juridique", value: "Société à Responsabilité Limitée (S.A.R.L.)" },
        { label: "Identifiant Fiscal (IF)", value: "66032483" },
        { label: "Identifiant Commun de l'Entreprise (ICE)", value: "003549935000074" },
        { label: "Siège social", value: "Boulevard Moulay Ismail, N° 22, 5ème étage, Appartement N° 19, Tanger, Maroc" },
        { label: "Site internet", value: "www.osalon.ma", href: "https://www.osalon.ma" },
        { label: "Contact Général", value: "contact@osalon.ma", href: "mailto:contact@osalon.ma" },
        { label: "Contact Dédié à la Confidentialité & Juridique", value: "privacy@osalon.ma", href: "mailto:privacy@osalon.ma" }
      ]
    },
    en: {
      pageTitle: "O'salon — Privacy Policy",
      backHome: "Back to home",
      heading: "Privacy Policy",
      intro: "This page describes who publishes and operates the O'SALON platform, and who is responsible for processing your personal data.",
      s1Title: "1. Publisher Information and Data Controller",
      s1Intro: "The O'SALON application, the e-commerce Store, the internal advertising network, sponsoring services, and associated services are published and operated by the exclusive corporate owner of the O'SALON brand and platform:",
      footerFaq: "FAQ", footerContact: "Contact",
      footerCopy: "© {year} O'salon. All rights reserved.",
      info: [
        { label: "Company Name", value: "OPTIME S.A.R.L." },
        { label: "Legal Form", value: "Limited Liability Company (S.A.R.L.)" },
        { label: "Tax Identifier (IF)", value: "66032483" },
        { label: "Common Enterprise Identifier (ICE)", value: "003549935000074" },
        { label: "Headquarters", value: "Boulevard Moulay Ismail, No. 22, 5th Floor, Apt. No. 19, Tangier, Morocco" },
        { label: "Website", value: "www.osalon.ma", href: "https://www.osalon.ma" },
        { label: "General Contact", value: "contact@osalon.ma", href: "mailto:contact@osalon.ma" },
        { label: "Dedicated Privacy & Legal Contact", value: "privacy@osalon.ma", href: "mailto:privacy@osalon.ma" }
      ]
    },
    ar: {
      pageTitle: "أوصالون — سياسة الخصوصية",
      backHome: "العودة إلى الرئيسية",
      heading: "سياسة الخصوصية",
      intro: "توضح هذه الصفحة الجهة الناشرة والمشغلة لمنصة O'SALON، والمسؤول عن معالجة بياناتكم الشخصية.",
      s1Title: "1. معلومات حول الناشر والمسؤول عن معالجة البيانات",
      s1Intro: "يتم نشر وإدارة تطبيق O'SALON، والمتجر الإلكتروني، والشبكة الإعلانية الداخلية، خدمات الرعاية، والخدمات المرتبطة بها من طرف الشركة المالكة الحصرية للعلامة التجارية ولمنصة O'SALON:",
      footerFaq: "الأسئلة الشائعة", footerContact: "تواصل معنا",
      footerCopy: "© {year} O'salon. جميع الحقوق محفوظة.",
      info: [
        { label: "اسم الشركة", value: "شركة OPTIME ش.م.م (S.A.R.L.)" },
        { label: "الشكل القانوني", value: "شركة ذات مسؤولية محدودة" },
        { label: "التعريف الضريبي (IF)", value: "66032483" },
        { label: "التعريف الموحد للمقاولة (ICE)", value: "003549935000074" },
        { label: "المقر الاجتماعي", value: "شارع مولاي إسماعيل، رقم 22، الطابق 5، شقة رقم 19، طنجة، المغرب" },
        { label: "الموقع الإلكتروني", value: "www.osalon.ma", href: "https://www.osalon.ma" },
        { label: "البريد الإلكتروني العام", value: "contact@osalon.ma", href: "mailto:contact@osalon.ma" },
        { label: "البريد الإلكتروني المخصص للخصوصية والشؤون القانونية", value: "privacy@osalon.ma", href: "mailto:privacy@osalon.ma" }
      ]
    }
  };

  var SUPPORTED_LANGS = Object.keys(TRANSLATIONS);

  function renderInfoList(items) {
    var list = document.getElementById('s1List');
    if (!list) return;
    list.innerHTML = '';
    items.forEach(function (item) {
      var row = document.createElement('div');
      row.className = 'flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 py-3 border-b border-slate-100 dark:border-white/10 last:border-0';

      var dt = document.createElement('dt');
      dt.className = 'text-sm font-semibold text-slate-500 dark:text-slate-400 sm:w-72 shrink-0';
      dt.textContent = item.label;

      var dd = document.createElement('dd');
      dd.className = 'text-sm text-slate-800 dark:text-slate-100';
      if (item.href) {
        var a = document.createElement('a');
        a.href = item.href;
        a.textContent = item.value;
        a.className = 'text-men dark:text-blue-300 hover:underline break-all';
        dd.appendChild(a);
      } else {
        dd.textContent = item.value;
      }

      row.appendChild(dt);
      row.appendChild(dd);
      list.appendChild(row);
    });
  }

  function applyLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;
    var dict = TRANSLATIONS[lang];
    var html = document.documentElement;

    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.title = dict.pageTitle;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    renderInfoList(dict.info);

    var copy = document.getElementById('footerCopy');
    if (copy) copy.textContent = dict.footerCopy.replace('{year}', new Date().getFullYear());

    OsalonCommon.highlightActiveLangButton(lang);
    OsalonCommon.storeLang(lang);
  }

  OsalonCommon.initLangButtons(applyLanguage);
  applyLanguage(OsalonCommon.getStoredLang(SUPPORTED_LANGS, 'en'));

  OsalonCommon.initTheme();
  OsalonCommon.neutralizePlaceholderLinks();
  OsalonCommon.initReveal();
});
