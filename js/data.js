/* =====================================================================
   فایل اطلاعات سایت — دبستان پسرانه غیردولتی آدریان
   =====================================================================
   این تنها فایلی است که برای تغییر متن‌ها، اطلاعات تماس، اخبار
   و توضیحات گالری لازم دارید ویرایش کنید.
   برای افزودن عکس جدید به گالری، به فایل README.md بخش «گالری» مراجعه کنید.
   بعد از هر تغییر، فقط فایل را ذخیره کرده و صفحه را در مرورگر رفرش کنید.
   ===================================================================== */

const SITE_DATA = {

  /* ---------------- اطلاعات کلی و تماس (واقعی) ---------------- */
  school: {
    name: "دبستان پسرانه غیردولتی آدریان",
    shortName: "آدریان",
    address: "حبیب‌آباد، بلوار معلم، کوچه یاسر",
    phone: "031-45484614",
    phoneHref: "tel:03145484614",
    whatsappNumber: "09131076274",
    whatsappHref: "https://wa.me/989131076274",
    instagramHandle: "adrian.school",
    instagramHref: "https://www.instagram.com/adrian.school",
    mapsHref: "https://maps.app.goo.gl/YUCKLMDe3rxBkdaz8?g_st=ic",
    consultationEmail: "mozhganghasemi1982@gmail.com",
    metaTitle: "دبستان پسرانه غیردولتی آدریان | آموزش، خلاقیت و آینده‌سازی",
    metaDescription:
      "دبستان پسرانه غیردولتی آدریان؛ محیطی امن، شاد و مدرن برای رشد، یادگیری و کشف استعدادهای فرزند شما. آشنایی با برنامه آموزشی، گالری تصاویر و اطلاعات ثبت‌نام.",
  },

  /* ---------------- منوی اصلی ---------------- */
  nav: [
    { label: "خانه", href: "#home" },
    { label: "درباره آدریان", href: "#about" },
    { label: "برنامه آموزشی", href: "#program" },
    { label: "گالری", href: "#gallery" },
    { label: "اخبار و رویدادها", href: "#news" },
    { label: "تماس با ما", href: "#contact" },
  ],

  /* ---------------- بخش Hero ---------------- */
  hero: {
    image: "assets/images/hero/hero-main.jpg",
    position: "center 24%",
    title: "آینده، از امروز ساخته می‌شود",
    subtitle:
      "در دبستان پسرانه غیردولتی آدریان، یادگیری تنها به کتاب‌های درسی محدود نمی‌شود؛ ما فضایی برای رشد، خلاقیت، کشف استعدادها و ساختن آینده‌ای روشن فراهم می‌کنیم.",
    primaryBtn: { label: "آشنایی با آدریان", href: "#about" },
    secondaryBtn: { label: "درخواست ثبت‌نام", href: "#contact" },
    smallLink: { label: "تماس با مدرسه", href: "tel:03145484614" },
  },

  /* ---------------- بخش معرفی ---------------- */
  about: {
    title: "آدریان؛ جایی برای رشد، یادگیری و کشف استعدادها",
    paragraphs: [
      "دبستان پسرانه غیردولتی آدریان با نگاهی نو به آموزش، فضایی را فراهم کرده است که در آن دانش‌آموزان علاوه بر یادگیری دروس پایه، مهارت‌های تفکر، خلاقیت و فناوری را نیز تجربه می‌کنند.",
      "ما باور داریم هر دانش‌آموز استعدادهای منحصربه‌فردی دارد؛ تیم آموزشی آدریان با برنامه‌ریزی دقیق و محیطی امن و شاد، زمینه‌ی کشف و رشد این استعدادها را در کنار مهارت‌های اجتماعی و زندگی فراهم می‌آورد.",
      "هدف ما تربیت نسلی است که با اعتماد به نفس، خلاقیت و آمادگی برای آینده، مسیر رشد خود را با شادی و امنیت طی کند.",
    ],
    image: "assets/images/gallery/entrance.jpg",
  },

  /* ---------------- چرا آدریان؟ ---------------- */
  whyUs: {
    title: "چرا آدریان؟",
    subtitle: "شش دلیلی که آدریان را برای آینده فرزند شما متفاوت می‌کند",
    items: [
      { icon: "book", title: "آموزش باکیفیت", text: "برنامه درسی اصولی و به‌روز، همراه با پیگیری مستمر پیشرفت تحصیلی هر دانش‌آموز." },
      { icon: "spark", title: "پرورش خلاقیت", text: "فعالیت‌های هنری و پروژه‌محور برای رشد قوه تخیل و بیان خلاقانه‌ی کودکان." },
      { icon: "target", title: "آموزش مهارت‌های آینده", text: "تقویت تفکر انتقادی، حل مسئله و مهارت‌های زندگی برای دنیای در حال تغییر." },
      { icon: "robot", title: "فناوری و رباتیک", text: "آشنایی عملی با فناوری، برنامه‌نویسی و رباتیک از سنین پایه." },
      { icon: "medal", title: "فعالیت‌های هنری و ورزشی", text: "برنامه منظم ورزشی و هنری برای رشد جسمی و روحی متعادل دانش‌آموزان." },
      { icon: "shield", title: "محیط امن و شاد", text: "فضایی مراقبت‌شده، دوستانه و پرنشاط که یادگیری را لذت‌بخش می‌کند." },
    ],
  },

  /* ---------------- برنامه آموزشی ---------------- */
  program: {
    title: "برنامه آموزشی",
    subtitle: "ترکیبی متوازن از دروس پایه، فناوری، هنر و مهارت‌های زندگی",
    items: [
      { icon: "book", title: "آموزش پایه" },
      { icon: "globe", title: "زبان انگلیسی" },
      { icon: "code", title: "فناوری و برنامه‌نویسی" },
      { icon: "robot", title: "رباتیک" },
      { icon: "flask", title: "علوم و آزمایشگاه" },
      { icon: "palette", title: "هنر و خلاقیت" },
      { icon: "medal", title: "ورزش" },
      { icon: "heart", title: "مهارت‌های زندگی" },
    ],
  },

  /* ---------------- گالری ----------------
     برای افزودن عکس جدید: یک آبجکت جدید به آرایه زیر اضافه کنید
     و عکس اصلی + بندانگشتی را در پوشه assets/images/gallery قرار دهید. */
  gallery: {
    title: "گالری تصاویر آدریان",
    subtitle: "نگاهی به لحظات یادگیری، جشن‌ها و فعالیت‌های دانش‌آموزان آدریان",
    categories: ["همه", "جشن‌ها و رویدادها", "فعالیت‌های کلاسی", "گردهمایی‌ها"],
    photos: [
      { thumb: "assets/images/gallery/g1-thumb.jpg", full: "assets/images/gallery/g1.jpg", caption: "دیدار خانوادگی و مراسم مدرسه", category: "گردهمایی‌ها" },
      { thumb: "assets/images/gallery/g2-thumb.jpg", full: "assets/images/gallery/g2.jpg", caption: "فعالیت کلاسی و ایفای نقش", category: "فعالیت‌های کلاسی" },
      { thumb: "assets/images/gallery/g3-thumb.jpg", full: "assets/images/gallery/g3.jpg", caption: "بازارچه", category: "فعالیت‌های کلاسی" },
      { thumb: "assets/images/gallery/g4-thumb.jpg", full: "assets/images/gallery/g4.jpg", caption: "جشن الفبا", category: "جشن‌ها و رویدادها" },
      { thumb: "assets/images/gallery/g5-thumb.jpg", full: "assets/images/gallery/g5.jpg", caption: "نشست آموزشی با خانواده‌ها", category: "گردهمایی‌ها" },
      { thumb: "assets/images/gallery/g6-thumb.jpg", full: "assets/images/gallery/g6.jpg", caption: "مراسم و همایش دانش‌آموزان", category: "گردهمایی‌ها" },
      { thumb: "assets/images/gallery/g7-thumb.jpg", full: "assets/images/gallery/g7.jpg", caption: "جشن شکوفه‌ها", category: "فعالیت‌های کلاسی" },
      { thumb: "assets/images/gallery/g8-thumb.jpg", full: "assets/images/gallery/g8.jpg", caption: "جشن الفبا", category: "جشن‌ها و رویدادها" },
      { thumb: "assets/images/gallery/g9-thumb.jpg", full: "assets/images/gallery/g9.jpg", caption: "همبستگی و کار گروهی", category: "فعالیت‌های کلاسی" },
      { thumb: "assets/images/gallery/g10-thumb.jpg", full: "assets/images/gallery/g10.jpg", caption: "پرچم مقدس ایران", category: "گردهمایی‌ها" },
      { thumb: "assets/images/gallery/g11-thumb.jpg", full: "assets/images/gallery/g11.jpg", caption: "جشن صد روز مدرسه", category: "جشن‌ها و رویدادها" },
      { thumb: "assets/images/gallery/g12-thumb.jpg", full: "assets/images/gallery/g12.jpg", caption: "جشن صد روز مدرسه", category: "جشن‌ها و رویدادها" },
      { thumb: "assets/images/gallery/g13-thumb.jpg", full: "assets/images/gallery/g13.jpg", caption: "جشن یلدایی", category: "جشن‌ها و رویدادها" },
      { thumb: "assets/images/gallery/g14-thumb.jpg", full: "assets/images/gallery/g14.jpg", caption: "لحظات صمیمی حیاط مدرسه", category: "جشن‌ها و رویدادها" },
      { thumb: "assets/images/gallery/g15-thumb.jpg", full: "assets/images/gallery/g15.jpg", caption: "گردهمایی دانش‌آموزان", category: "گردهمایی‌ها" },
      { thumb: "assets/images/gallery/g16-thumb.jpg", full: "assets/images/gallery/g16.jpg", caption: "جشن مهر", category: "جشن‌ها و رویدادها" },
    ],
  },

  /* ---------------- اخبار و رویدادها ----------------
     برای افزودن خبر جدید، یک آبجکت جدید به ابتدای آرایه اضافه کنید. */
  news: {
    title: "اخبار و رویدادها",
    subtitle: "تازه‌ترین رویدادها و برنامه‌های آدریان",
    items: [
      {
        title: "برگزاری جشن الفبا برای دانش‌آموزان پایه اول",
        excerpt: "جشن الفبا با حضور خانواده‌ها و شادی دانش‌آموزان پایه اول در سالن مدرسه برگزار شد.",
        image: "assets/images/gallery/g4-thumb.jpg",
      },
      {
        title: "جشن صد روز مدرسه",
        excerpt: "گرامیداشت صدمین روز حضور دانش‌آموزان در مدرسه با برنامه‌ای شاد و ویژه برگزار شد.",
        image: "assets/images/gallery/g11-thumb.jpg",
      },
      {
        title: "نشست خانوادگی معرفی برنامه آموزشی",
        excerpt: "نشستی صمیمی با حضور خانواده‌ها برای معرفی برنامه‌های آموزشی مدرسه برگزار شد.",
        image: "assets/images/gallery/g5-thumb.jpg",
      },
    ],
  },

  /* ---------------- بخش ثبت‌نام (CTA) ---------------- */
  cta: {
    title: "مسیر آینده فرزندتان را از امروز آغاز کنید",
    buttonLabel: "درخواست مشاوره و ثبت‌نام",
  },

  /* ---------------- فرم ثبت‌نام و مشاوره ----------------
     این فرم مستقیماً (بدون نیاز به بک‌اند) با سرویس FormSubmit
     به ایمیل زیر ارسال می‌شود. */
  form: {
    action: "https://formsubmit.co/mozhganghasemi1982@gmail.com",
    sheetAction: "",
    /* اختیاری: برای ذخیره خودکار اطلاعات فرم در یک Google Sheet،
       آدرس وب‌اپ Google Apps Script خودتان را اینجا بگذارید.
       راهنمای کامل ساخت آن در README.md بخش «اتصال فرم به Google Sheet» آمده است. */
    title: "درخواست ثبت‌نام و مشاوره",
    subtitle: "فرم زیر را پر کنید تا کارشناسان آدریان در اسرع وقت با شما تماس بگیرند.",
    submitLabel: "ارسال درخواست",
  },

  /* ---------------- فوتر ---------------- */
  footer: {
    about:
      "دبستان پسرانه غیردولتی آدریان؛ فضایی امن، شاد و مدرن برای رشد، یادگیری و کشف استعدادهای فرزند شما.",
  },
};
