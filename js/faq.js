// O'salon — FAQ page content (FR/EN/AR) and accordion rendering.
document.addEventListener('DOMContentLoaded', function () {

  var TRANSLATIONS = {
    fr: {
      pageTitle: "O'salon — Foire Aux Questions",
      backHome: "Retour à l'accueil",
      heading: "Foire Aux Questions",
      intro: "Retrouvez les réponses à vos questions, que vous soyez client ou professionnel sur O'salon.",
      footerPrivacy: "Politique de confidentialité", footerContact: "Contact",
      footerCopy: "© {year} O'salon. Tous droits réservés.",
      sections: [
        {
          id: 'client',
          navLabel: "Espace Client",
          title: "Partie 1 : Espace Client (Utilisateur)",
          items: [
            { q: "L'utilisation de l'application O'salon est-elle payante ?", a: "Pas du tout. L'application O'salon est 100 % gratuite pour les clients. Vous pouvez télécharger, naviguer et réserver vos prestations sans aucun frais supplémentaire." },
            { q: "Comment réserver une prestation en quelques clics ?", a: "Une fois votre compte créé, sélectionnez la prestation de votre choix. L'application vous permet de réserver instantanément votre créneau en fonction des disponibilités en temps réel du salon." },
            { q: "Puis-je modifier ou annuler mon rendez-vous ?", a: "Bien sûr. Si un imprévu survient, vous pouvez annuler ou reporter votre rendez-vous très facilement depuis l'onglet « Mes réservations » de votre profil." },
            { q: "Pourquoi dois-je activer la géolocalisation ?", a: "La géolocalisation est essentielle pour vous proposer les salons les plus proches de chez vous et optimiser vos déplacements, tout en vous offrant une expérience personnalisée selon votre ville ou quartier." },
            { q: "Comment trouver rapidement mon salon préféré ?", a: "Vous pouvez ajouter vos établissements favoris à votre liste en un clic. Ils seront ainsi accessibles directement depuis votre page d'accueil lors de vos prochaines connexions." },
            { q: "Comment choisir le meilleur salon ?", a: "Pour vous aider dans votre choix, O'salon intègre des filtres intelligents. Vous pouvez trier les résultats selon le prix, la distance ou les avis laissés par les autres clients." },
            { q: "Vais-je recevoir des rappels pour mes rendez-vous ?", a: "Oui, pour vous éviter tout oubli, vous recevrez des notifications et des rappels automatiques directement sur votre téléphone avant chaque rendez-vous." },
            { q: "Quels sont les avantages d'utiliser O'salon ?", a: "O'salon vous fait gagner un temps précieux. Vous avez une visibilité totale sur les disponibilités, vous accédez aux meilleurs salons de votre ville, vous lisez les avis des autres clients et vous gérez vos rendez-vous en totale autonomie, 24h/24." }
          ]
        },
        {
          id: 'provider',
          navLabel: "Espace Prestataire",
          title: "Partie 2 : Espace Prestataire (Professionnel)",
          items: [
            { q: "O'salon est-il gratuit pour les professionnels ?", a: "L'intégration au réseau O'salon est actuellement gratuite. Notre objectif est de vous accompagner dans votre digitalisation sans barrière à l'entrée." },
            { q: "Comment rejoindre le réseau O'salon en tant que professionnel ?",
              intro: "Rejoindre O'salon est un processus simple et rapide, conçu pour vous permettre d'être opérationnel sans attendre :",
              steps: [
                { title: "Inscription intuitive", body: "Depuis notre site web ou votre application, cliquez sur « S'inscrire » et laissez-vous guider. Il vous suffira de renseigner les informations essentielles de votre établissement : nom, photos, géolocalisation précise, et paramétrage de vos services (durée, prix)." },
                { title: "Validation personnalisée", body: "Une fois votre profil complété, nos équipes vérifient vos informations pour garantir la qualité de notre réseau." },
                { title: "Accompagnement dédié", body: "Vous ne serez jamais seul. Une fois votre compte validé, un membre de notre équipe vous contactera pour vous accompagner pas à pas. Nous restons à vos côtés jusqu'à la réalisation de votre premier rendez-vous réussi via l'application, afin de nous assurer que vous maîtrisez parfaitement tous vos outils de gestion." }
              ]
            },
            { q: "Comment gérer mon planning et mes plages horaires ?", a: "Votre interface professionnelle vous offre un contrôle total sur votre emploi du temps. Vous pouvez définir vos jours et heures d'ouverture, et vos disponibilités se mettent à jour automatiquement à chaque réservation." },
            { q: "Puis-je gérer mon équipe et mes prestations ?", a: "Absolument. Vous pouvez créer des profils pour chaque membre de votre équipe, lister vos services avec leurs prix et durées respectifs, le tout paramétrable en quelques secondes pour une gestion organisée." },
            { q: "Quels sont les avantages pour mon salon ?", a: "En rejoignant O'salon, vous bénéficiez d'une visibilité accrue auprès d'une large base de clients, d'une réduction drastique des appels téléphoniques pour les prises de rendez-vous et d'une gestion optimisée de votre activité au quotidien." },
            { q: "En cas de difficulté technique, comment obtenir de l'aide ?", a: "Votre sérénité est notre priorité. Une équipe de support est à votre disposition 24h/24 et 7j/7 pour vous assister et répondre à toutes vos questions via notre centre d'assistance dédié." }
          ]
        }
      ]
    },
    en: {
      pageTitle: "O'salon — Frequently Asked Questions",
      backHome: "Back to home",
      heading: "Frequently Asked Questions",
      intro: "Find answers to your questions, whether you're a client or a professional on O'salon.",
      footerPrivacy: "Privacy Policy", footerContact: "Contact",
      footerCopy: "© {year} O'salon. All rights reserved.",
      sections: [
        {
          id: 'client',
          navLabel: "Client Area",
          title: "Part 1: Client Area (User)",
          items: [
            { q: "Is there a fee to use the O'salon app?", a: "Not at all. The O'salon app is 100% free for clients. You can download, browse, and book your services without any additional fees." },
            { q: "How do I book a service in just a few clicks?", a: "Once your account is created, simply select the service of your choice. The app allows you to instantly book your time slot based on the salon's real-time availability." },
            { q: "Can I modify or cancel my appointment?", a: "Of course. If something comes up, you can easily cancel or reschedule your appointment directly from the \"My Bookings\" tab in your profile." },
            { q: "Why do I need to enable geolocation?", a: "Geolocation is essential to show you the closest salons to your location and optimize your travel, while providing a personalized experience based on your city or neighborhood." },
            { q: "How can I quickly find my favorite salon?", a: "You can add your favorite establishments to your list with a single click. This way, they will be directly accessible from your homepage the next time you log in." },
            { q: "How do I choose the best salon?", a: "To help you choose, O'salon includes smart filters. You can sort the results by price, distance, or reviews left by other clients." },
            { q: "Will I receive reminders for my appointments?", a: "Yes, to ensure you don't forget, you will receive automatic notifications and reminders directly on your phone before each appointment." },
            { q: "What are the benefits of using O'salon?", a: "O'salon saves you valuable time. You get full visibility of availabilities, access to the best salons in your city, read reviews from other clients, and manage your appointments with complete autonomy, 24/7." }
          ]
        },
        {
          id: 'provider',
          navLabel: "Provider Area",
          title: "Part 2: Provider Area (Professional)",
          items: [
            { q: "Is O'salon free for professionals?", a: "Joining the O'salon network is currently free. Our goal is to support you in your digitalization journey with no barriers to entry." },
            { q: "How do I join the O'salon network as a professional?",
              intro: "Joining O'salon is a quick and simple process, designed to get you up and running without delay:",
              steps: [
                { title: "Intuitive Registration", body: "From our website or your app, click on \"Sign Up\" and follow the guide. You will just need to fill in the essential information about your establishment: name, photos, precise geolocation, and service setup (duration, price)." },
                { title: "Personalized Validation", body: "Once your profile is complete, our teams verify your information to guarantee the quality of our network." },
                { title: "Dedicated Support", body: "You will never be alone. Once your account is validated, a member of our team will contact you to guide you step-by-step. We stay by your side until your first successful appointment via the app, ensuring you fully master all your management tools." }
              ]
            },
            { q: "How do I manage my schedule and time slots?", a: "Your professional interface gives you total control over your schedule. You can set your opening days and hours, and your availability updates automatically with every booking." },
            { q: "Can I manage my team and services?", a: "Absolutely. You can create profiles for each team member and list your services with their respective prices and durations—all configurable in seconds for organized management." },
            { q: "What are the benefits for my salon?", a: "By joining O'salon, you benefit from increased visibility among a large client base, a drastic reduction in phone calls for booking appointments, and optimized daily management of your business." },
            { q: "In case of technical difficulties, how do I get help?", a: "Your peace of mind is our priority. A support team is available 24/7 to assist you and answer all your questions via our dedicated help center." }
          ]
        }
      ]
    },
    ar: {
      pageTitle: "أوصالون — الأسئلة الشائعة",
      backHome: "العودة إلى الرئيسية",
      heading: "الأسئلة الشائعة",
      intro: "اعثر على إجابات لأسئلتك، سواء كنت زبوناً أو مهنياً على O'salon.",
      footerPrivacy: "سياسة الخصوصية", footerContact: "تواصل معنا",
      footerCopy: "© {year} O'salon. جميع الحقوق محفوظة.",
      sections: [
        {
          id: 'client',
          navLabel: "فضاء الزبون",
          title: "الجزء 1: فضاء الزبون (المستخدم)",
          items: [
            { q: "هل استخدام تطبيق O'salon مدفوع؟", a: "لا على الإطلاق. تطبيق O'salon مجاني 100% للزبائن. يمكنك تحميل التطبيق، التصفح، وحجز خدماتك دون أي رسوم إضافية." },
            { q: "كيف يمكنني حجز خدمة في بضع نقرات؟", a: "بمجرد إنشاء حسابك، حدد الخدمة التي تختارها. يتيح لك التطبيق حجز موعدك فوراً بناءً على توفر الصالون في الوقت الفعلي." },
            { q: "هل يمكنني تعديل أو إلغاء موعدي؟", a: "بالطبع. إذا طرأ أي طارئ، يمكنك إلغاء أو تأجيل موعدك بكل سهولة من خلال تبويب «حجوزاتي» في ملفك الشخصي." },
            { q: "لماذا يجب علي تفعيل تحديد الموقع (الجيولوجيا)؟", a: "تحديد الموقع أمر ضروري لاقتراح الصالونات الأقرب إليك وتحسين تنقلاتك، مع تقديم تجربة مخصصة لك حسب مدينتك أو حيك." },
            { q: "كيف أجد صالوني المفضل بسرعة؟", a: "يمكنك إضافة صالوناتك المفضلة إلى قائمتك بنقرة واحدة. وبذلك، ستكون متاحة مباشرة على صفحتك الرئيسية في اتصالاتك المقبلة." },
            { q: "كيف أختار أفضل صالون؟", a: "لمساعدتك في الاختيار، يتضمن O'salon فلاتر ذكية. يمكنك تصفية النتائج حسب السعر، المسافة، أو التقييمات التي تركها الزبائن الآخرون." },
            { q: "هل سأتلقى تذكيرات بمواعيدي؟", a: "نعم، لتجنب أي نسيان، ستتلقى إشعارات وتذكيرات تلقائية مباشرة على هاتفك قبل كل موعد." },
            { q: "ما هي مزايا استخدام O'salon؟", a: "يوفر لك O'salon وقتاً ثميناً؛ حيث يمنحك رؤية كاملة للأوقات المتاحة، والوصول إلى أفضل الصالونات في مدينتك، وقراءة تقييمات الزبائن الآخرين، وإدارة مواعيدك باستقلالية تامة على مدار الساعة 24/7." }
          ]
        },
        {
          id: 'provider',
          navLabel: "فضاء المهنيين",
          title: "الجزء 2: فضاء المهنيين",
          items: [
            { q: "هل O'salon مجاني للمهنيين؟", a: "الانضمام إلى شبكة O'salon مجاني حالياً. هدفنا هو مرافقتك في التحول الرقمي لمشروعك دون أي عوائق للدخول." },
            { q: "كيف يمكنني الانضمام إلى شبكة O'salon كمهني؟",
              intro: "الانضمام إلى O'salon عملية سهلة وسريعة، صُممت لتتيح لك بدء العمل دون انتظار:",
              steps: [
                { title: "تسجيل ذكي", body: "من خلال موقعنا الإلكتروني أو التطبيق، اضغط على «تسجيل» واتبع الخطوات. سيتعين عليك فقط ملء المعلومات الأساسية لمشروعك: الاسم، الصور، تحديد الموقع بدقة، وضبط خدماتك (المدة والسعر)." },
                { title: "تحقق مخصص", body: "بمجرد اكتمال ملفك الشخصي، تقوم فرقنا بالتحقق من معلوماتك لضمان جودة شبكتنا." },
                { title: "مرافقة مخصصة", body: "لن تكون بمفردك أبداً. بمجرد تفعيل حسابك، سيتصل بك أحد أعضاء فريقنا لمرافقتك خطوة بخطوة. سنبقى إلى جانبك حتى إتمام أول موعد ناجح لك عبر التطبيق، للتأكد من إتقانك التام لجميع أدوات الإدارة الخاصة بك." }
              ]
            },
            { q: "كيف يمكنني إدارة جدولي الزمني وأوقات العمل؟", a: "تمنحك واجهتك المهنية تحكماً كاملاً في جدول عملك. يمكنك تحديد أيام وساعات العمل، وتُحدث أوقات توفرك تلقائياً مع كل حجز جديد." },
            { q: "هل يمكنني إدارة فريقي وخدماتي؟", a: "بكل تأكيد. يمكنك إنشاء ملف تعريف (بروفايل) لكل عضو في فريقك، وإدراج خدماتك مع أسعارها ومددها الخاصة، وكل ذلك يمكن ضبطه في ثوانٍ معدودة لإدارة منظمة." },
            { q: "ما هي المزايا التي تعود على صالوني؟", a: "بانضمامك إلى O'salon، ستستفيد من رؤية أوسع وانتشار أكبر لدى قاعدة واسعة من الزبائن، وتقليص هائل للمكالمات الهاتفية لحجز المواعيد، وإدارة مثالية لنشاطك اليومي." },
            { q: "في حال مواجهة صعوبة تقنية، كيف يمكنني الحصول على المساعدة؟", a: "راحتكم هي أولويتنا. فريق الدعم الفني في خدمتكم على مدار الساعة 24/7 لمساعدتكم والإجابة على جميع أسئلتكم عبر مركز المساعدة المخصص لنا." }
          ]
        }
      ]
    }
  };

  var SUPPORTED_LANGS = Object.keys(TRANSLATIONS);

  function buildAnswerBody(item) {
    var wrap = document.createElement('div');
    wrap.className = 'px-5 pb-5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed';

    if (item.a) {
      var p = document.createElement('p');
      p.textContent = item.a;
      wrap.appendChild(p);
      return wrap;
    }

    var intro = document.createElement('p');
    intro.className = 'mb-3';
    intro.textContent = item.intro;
    wrap.appendChild(intro);

    var list = document.createElement('ul');
    list.className = 'space-y-3';
    item.steps.forEach(function (step) {
      var li = document.createElement('li');
      li.className = 'flex gap-2.5';
      var bullet = document.createElement('span');
      bullet.className = 'mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-men to-women shrink-0';
      var textWrap = document.createElement('span');
      var strong = document.createElement('strong');
      strong.className = 'text-slate-800 dark:text-slate-100 font-semibold';
      strong.textContent = step.title + ': ';
      textWrap.appendChild(strong);
      textWrap.appendChild(document.createTextNode(step.body));
      li.appendChild(bullet);
      li.appendChild(textWrap);
      list.appendChild(li);
    });
    wrap.appendChild(list);
    return wrap;
  }

  function renderSections(sections) {
    var nav = document.getElementById('faqNav');
    var container = document.getElementById('faqSections');
    if (!container) return;
    container.innerHTML = '';
    if (nav) nav.innerHTML = '';

    sections.forEach(function (section, sectionIndex) {
      if (nav) {
        var navLink = document.createElement('a');
        navLink.href = '#' + section.id;
        navLink.textContent = section.navLabel;
        navLink.className = 'px-4 py-2 rounded-full text-xs font-bold bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:border-men dark:hover:border-men transition';
        nav.appendChild(navLink);
      }

      var sectionEl = document.createElement('section');
      sectionEl.id = section.id;
      sectionEl.className = 'reveal scroll-mt-24' + (sectionIndex > 0 ? ' mt-14' : '');

      var title = document.createElement('h2');
      title.className = 'text-xl sm:text-2xl font-extrabold mb-5';
      title.textContent = section.title;
      sectionEl.appendChild(title);

      var itemsWrap = document.createElement('div');
      itemsWrap.className = 'space-y-3';

      section.items.forEach(function (item) {
        var details = document.createElement('details');
        details.className = 'group bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden';

        var summary = document.createElement('summary');
        summary.className = 'flex items-center justify-between gap-4 px-5 py-4 cursor-pointer select-none font-semibold text-sm sm:text-base text-slate-900 dark:text-white list-none';
        var qText = document.createElement('span');
        qText.textContent = item.q;
        var chevron = document.createElement('span');
        chevron.className = 'shrink-0 text-men dark:text-blue-300 transition-transform group-open:rotate-45';
        chevron.innerHTML = '<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/></svg>';
        summary.appendChild(qText);
        summary.appendChild(chevron);

        details.appendChild(summary);
        details.appendChild(buildAnswerBody(item));
        itemsWrap.appendChild(details);
      });

      sectionEl.appendChild(itemsWrap);
      container.appendChild(sectionEl);
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

    renderSections(dict.sections);

    var copy = document.getElementById('footerCopy');
    if (copy) copy.textContent = dict.footerCopy.replace('{year}', new Date().getFullYear());

    OsalonCommon.highlightActiveLangButton(lang);
    OsalonCommon.storeLang(lang);
    OsalonCommon.initReveal();
  }

  OsalonCommon.initLangButtons(applyLanguage);
  applyLanguage(OsalonCommon.getStoredLang(SUPPORTED_LANGS, 'en'));

  OsalonCommon.initTheme();
  OsalonCommon.neutralizePlaceholderLinks();
});
