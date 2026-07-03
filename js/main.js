// O'salon — i18n, theme toggle, and scroll-reveal behaviour.
document.addEventListener('DOMContentLoaded', function () {

  var TRANSLATIONS = {
    en: {
      pageTitle: "O'salon — Find the Best Salons in Morocco",
      navCta: "Download App",
      heroBadge: "Now available in Morocco",
      heroTitle: 'Find the best <span class="bg-gradient-to-br from-men to-women bg-clip-text text-transparent">salons &amp; barbershops</span> near you',
      heroTagline: "Discover top-rated salons, barbershops, spas and hammams across Morocco. Browse, compare, and book your next appointment in seconds.",
      comingSoon: "🚀 Launching soon on App Store &amp; Google Play",
      soonTag: "Soon",
      appStoreSub: "Download on the", appStoreLabel: "App Store",
      googlePlaySub: "Get it on", googlePlayLabel: "Google Play",
      progressLabel: "App review in progress · Almost there!",
      phoneText: "Salons &amp; Barbershops near you",
      menMode: "Men Mode", womenMode: "Women Mode",
      aboutTag: "What is O'salon", aboutTitle: "Your beauty &amp; grooming companion",
      aboutBody: "O'salon is a mobile app designed for Morocco — connecting people with the best salons, barbershops, spas, and hammams in their city. Available in both Men and Women modes, O'salon makes it effortless to discover, compare, and book.",
      statSalons: "Salons listed", statCities: "Cities covered", statModes: "Men &amp; Women modes",
      typesTag: "Salon Types", typesTitle: "For every beauty &amp; grooming need",
      typesBody: "O'salon covers all types of beauty and wellness venues across Morocco — from modern barbershops to traditional hammams.",
      t1Name: "Barbershop", t1Desc: "Modern cuts, beard trims &amp; traditional shaves for men.",
      t2Name: "Women's Salon", t2Desc: "Hair styling, coloring, and full beauty treatments.",
      t3Name: "Spa &amp; Hammam", t3Desc: "Relaxation, traditional hammam &amp; wellness sessions.",
      t4Name: "Hijama", t4Desc: "Traditional cupping therapy by certified specialists.",
      t5Name: "Hair Studio", t5Desc: "Extensions, coloring, keratin &amp; advanced hair care.",
      t6Name: "Nail &amp; Beauty", t6Desc: "Manicure, pedicure &amp; nail art studios.",
      tagMen: "Men", tagWomen: "Women",
      featuresTag: "Features", featuresTitle: "Everything you need in one app",
      featuresBody: "From discovery to booking, O'salon covers every step of your beauty &amp; grooming journey.",
      f1Title: "Find nearby salons", f1Desc: "Browse salons and barbershops close to you, filtered by city and service type.",
      f2Title: "Reviews &amp; ratings", f2Desc: "Read honest reviews from real customers and choose with confidence.",
      f3Title: "Easy booking", f3Desc: "Select your service, pick a time slot, and confirm your appointment in seconds.",
      f4Title: "Men &amp; Women modes", f4Desc: "Switch between dedicated Men and Women experiences tailored to each audience.",
      howTag: "How it works", howTitle: "3 simple steps",
      howBody: "Getting your next appointment has never been this easy.",
      s1Title: "Choose your city", s1Desc: "Select your city or let the app detect your location to see salons near you.",
      s2Title: "Find a salon near you", s2Desc: "Browse profiles, photos, services, and reviews to pick the perfect place.",
      s3Title: "Book your appointment", s3Desc: "Choose your professional, pick a time, and you're all set. It's that simple.",
      ctaTitle: "Ready to book your next session?",
      ctaBody: "Download O'salon for free and discover the best salons and barbershops in your city.",
      footerTagline: "Find the best salons &amp; barbershops near you in Morocco.",
      footerPrivacy: "Privacy Policy", footerFaq: "FAQ", footerContact: "Contact",
      footerCopy: "© {year} O'salon. All rights reserved."
    },
    fr: {
      pageTitle: "O'salon — Les Meilleurs Salons au Maroc",
      navCta: "Télécharger",
      heroBadge: "Disponible au Maroc",
      heroTitle: 'Trouvez les meilleurs <span class="bg-gradient-to-br from-men to-women bg-clip-text text-transparent">salons &amp; barbiers</span> près de vous',
      heroTagline: "Découvrez les meilleurs salons, barbiers, spas et hammams du Maroc. Comparez et réservez votre prochain rendez-vous en quelques secondes.",
      comingSoon: "🚀 Bientôt disponible sur App Store &amp; Google Play",
      soonTag: "Bientôt",
      appStoreSub: "Télécharger sur l'", appStoreLabel: "App Store",
      googlePlaySub: "Disponible sur", googlePlayLabel: "Google Play",
      progressLabel: "Révision en cours · Presque prêt !",
      phoneText: "Salons &amp; Barbiers près de vous",
      menMode: "Mode Hommes", womenMode: "Mode Femmes",
      aboutTag: "Qu'est-ce qu'O'salon", aboutTitle: "Votre compagnon beauté &amp; coiffure",
      aboutBody: "O'salon est une application mobile conçue pour le Maroc — mettant en relation les utilisateurs avec les meilleurs salons, barbiers, spas et hammams de leur ville.",
      statSalons: "Salons référencés", statCities: "Villes couvertes", statModes: "Modes H &amp; F",
      typesTag: "Types de salons", typesTitle: "Pour chaque besoin beauté &amp; bien-être",
      typesBody: "O'salon couvre tous les types d'établissements de beauté au Maroc — des barbiers modernes aux hammams traditionnels.",
      t1Name: "Barbier", t1Desc: "Coupes modernes, taille de barbe &amp; rasages traditionnels pour hommes.",
      t2Name: "Salon Femmes", t2Desc: "Coiffure, coloration et soins beauté complets.",
      t3Name: "Spa &amp; Hammam", t3Desc: "Relaxation, hammam traditionnel &amp; séances bien-être.",
      t4Name: "Hijama", t4Desc: "Thérapie de ventouses traditionnelle par des spécialistes certifiés.",
      t5Name: "Studio Capillaire", t5Desc: "Extensions, colorations, kératine &amp; soins capillaires avancés.",
      t6Name: "Ongles &amp; Beauté", t6Desc: "Manucure, pédicure &amp; nail art.",
      tagMen: "Hommes", tagWomen: "Femmes",
      featuresTag: "Fonctionnalités", featuresTitle: "Tout ce dont vous avez besoin",
      featuresBody: "De la découverte à la réservation, O'salon couvre chaque étape de votre parcours beauté.",
      f1Title: "Trouver des salons proches", f1Desc: "Parcourez les salons et barbiers près de chez vous, filtrés par ville et service.",
      f2Title: "Avis &amp; notes", f2Desc: "Lisez des avis honnêtes de vrais clients et choisissez en toute confiance.",
      f3Title: "Réservation facile", f3Desc: "Sélectionnez votre service, choisissez un créneau et confirmez en quelques secondes.",
      f4Title: "Modes Hommes &amp; Femmes", f4Desc: "Basculez entre les expériences dédiées Hommes et Femmes.",
      howTag: "Comment ça marche", howTitle: "3 étapes simples",
      howBody: "Prendre votre prochain rendez-vous n'a jamais été aussi simple.",
      s1Title: "Choisissez votre ville", s1Desc: "Sélectionnez votre ville ou laissez l'application détecter votre position.",
      s2Title: "Trouvez un salon", s2Desc: "Parcourez les profils, photos, services et avis pour trouver l'endroit idéal.",
      s3Title: "Réservez votre rendez-vous", s3Desc: "Choisissez votre professionnel, sélectionnez un horaire et c'est tout.",
      ctaTitle: "Prêt pour votre prochaine session ?",
      ctaBody: "Téléchargez O'salon gratuitement et découvrez les meilleurs salons de votre ville.",
      footerTagline: "Trouvez les meilleurs salons &amp; barbiers au Maroc.",
      footerPrivacy: "Politique de confidentialité", footerFaq: "FAQ", footerContact: "Contact",
      footerCopy: "© {year} O'salon. Tous droits réservés."
    },
    ar: {
      pageTitle: "أوصالون — أفضل الصالونات في المغرب",
      navCta: "تحميل التطبيق",
      heroBadge: "متوفر الآن في المغرب",
      heroTitle: 'اعثر على أفضل <span class="bg-gradient-to-br from-men to-women bg-clip-text text-transparent">صالونات التجميل والحلاقة</span> بالقرب منك',
      heroTagline: "اكتشف أفضل الصالونات ومحلات الحلاقة والسبا والحمام في المغرب. تصفح وقارن واحجز موعدك القادم في ثوانٍ.",
      comingSoon: "🚀 قريباً على App Store و Google Play",
      soonTag: "قريباً",
      appStoreSub: "تنزيل من", appStoreLabel: "App Store",
      googlePlaySub: "متوفر على", googlePlayLabel: "Google Play",
      progressLabel: "مراجعة التطبيق جارية · على وشك الاكتمال!",
      phoneText: "صالونات ومحلات حلاقة بالقرب منك",
      menMode: "وضع الرجال", womenMode: "وضع النساء",
      aboutTag: "ما هو أوصالون", aboutTitle: "رفيقك في التجميل والعناية",
      aboutBody: "أوصالون هو تطبيق موبايل مصمم للمغرب — يربطك بأفضل الصالونات ومحلات الحلاقة والسبا والحمامات في مدينتك.",
      statSalons: "صالون مدرج", statCities: "مدينة مغطاة", statModes: "وضعان: رجال ونساء",
      typesTag: "أنواع الصالونات", typesTitle: "لكل احتياجات التجميل والعناية",
      typesBody: "يغطي أوصالون جميع أنواع منشآت التجميل والعافية في المغرب — من محلات الحلاقة العصرية إلى الحمامات التقليدية.",
      t1Name: "حلاق", t1Desc: "قصات عصرية وتشكيل اللحية والحلاقة التقليدية للرجال.",
      t2Name: "صالون نسائي", t2Desc: "تصفيف الشعر والصباغة وعلاجات التجميل الكاملة.",
      t3Name: "سبا وحمام", t3Desc: "الاسترخاء والحمام التقليدي وجلسات العافية.",
      t4Name: "الحجامة", t4Desc: "العلاج بالحجامة التقليدية على يد متخصصين معتمدين.",
      t5Name: "استوديو الشعر", t5Desc: "إضافات وصباغة وكيراتين وعناية متقدمة بالشعر.",
      t6Name: "الأظافر والتجميل", t6Desc: "مانيكير وباديكير وفن الأظافر.",
      tagMen: "رجال", tagWomen: "نساء",
      featuresTag: "المميزات", featuresTitle: "كل ما تحتاجه في تطبيق واحد",
      featuresBody: "من الاكتشاف إلى الحجز، يغطي أوصالون كل خطوة في رحلتك.",
      f1Title: "اعثر على صالونات قريبة", f1Desc: "تصفح الصالونات بالقرب منك، مصنفة حسب المدينة ونوع الخدمة.",
      f2Title: "تقييمات ومراجعات", f2Desc: "اقرأ تقييمات صادقة من عملاء حقيقيين واختر بثقة.",
      f3Title: "حجز سهل", f3Desc: "اختر خدمتك، حدد موعدك، وأكد حجزك في ثوانٍ.",
      f4Title: "وضع الرجال والنساء", f4Desc: "تنقل بين تجربتي الرجال والنساء المخصصتين لكل جمهور.",
      howTag: "كيف يعمل", howTitle: "٣ خطوات بسيطة",
      howBody: "لم يكن حجز موعدك القادم بهذه السهولة من قبل.",
      s1Title: "اختر مدينتك", s1Desc: "حدد مدينتك أو دع التطبيق يكتشف موقعك لعرض الصالونات القريبة.",
      s2Title: "ابحث عن صالون", s2Desc: "تصفح الملفات والصور والخدمات والتقييمات لاختيار المكان المثالي.",
      s3Title: "احجز موعدك", s3Desc: "اختر متخصصك، حدد الوقت المناسب، وانتهيت. الأمر بهذه البساطة.",
      ctaTitle: "هل أنت مستعد لجلستك القادمة؟",
      ctaBody: "نزّل أوصالون مجاناً واكتشف أفضل الصالونات في مدينتك.",
      footerTagline: "اعثر على أفضل الصالونات ومحلات الحلاقة بالقرب منك في المغرب.",
      footerPrivacy: "سياسة الخصوصية", footerFaq: "الأسئلة الشائعة", footerContact: "تواصل معنا",
      footerCopy: "© {year} O'salon. جميع الحقوق محفوظة."
    }
  };

  var SUPPORTED_LANGS = Object.keys(TRANSLATIONS);

  function applyLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;
    var dict = TRANSLATIONS[lang];
    var html = document.documentElement;

    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.title = dict.pageTitle;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    var copy = document.getElementById('footerCopy');
    if (copy) copy.innerHTML = dict.footerCopy.replace('{year}', new Date().getFullYear());

    OsalonCommon.highlightActiveLangButton(lang);
    OsalonCommon.storeLang(lang);
  }

  OsalonCommon.initLangButtons(applyLanguage);
  applyLanguage(OsalonCommon.getStoredLang(SUPPORTED_LANGS, 'en'));

  OsalonCommon.initTheme();
  OsalonCommon.neutralizePlaceholderLinks();
  OsalonCommon.initReveal();
});
