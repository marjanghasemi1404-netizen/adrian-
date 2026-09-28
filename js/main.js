/* =========================================================
   دبستان پسرانه غیردولتی آدریان — main.js
   این فایل اطلاعات را از js/data.js می‌خواند و صفحه را می‌سازد.
   نیازی به ویرایش این فایل نیست؛ فقط js/data.js را تغییر دهید.
   ========================================================= */

const ICONS = {
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 5.5C4 4.67 4.67 4 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5v-13Z"/><path d="M20 5.5c0-.83-.67-1.5-1.5-1.5H13v16h5.5c.83 0 1.5-.67 1.5-1.5v-13Z"/></svg>',
  spark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 3v4M12 17v4M5 5l2.8 2.8M16.2 16.2 19 19M3 12h4M17 12h4M5 19l2.8-2.8M16.2 7.8 19 5"/></svg>',
  target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r=".8" fill="currentColor"/></svg>',
  robot: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="5" y="9" width="14" height="10" rx="2.5"/><path d="M12 9V5.5M9.5 5.5h5"/><circle cx="9.5" cy="14" r="1.1" fill="currentColor" stroke="none"/><circle cx="14.5" cy="14" r="1.1" fill="currentColor" stroke="none"/><path d="M3 13h2M19 13h2"/></svg>',
  medal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="14" r="6"/><path d="m9 4 1.5 6M15 4l-1.5 6"/><path d="M9.6 13.2 12 11l2.4 2.2-.9 3-1.5-1-1.5 1z"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 3.5 5 6v6c0 4.5 3 7.2 7 8.5 4-1.3 7-4 7-8.5V6l-7-2.5Z"/><path d="m9 12 2.2 2.2L15.5 10"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.4 2.3 3.7 5.3 3.7 8.5s-1.3 6.2-3.7 8.5c-2.4-2.3-3.7-5.3-3.7-8.5s1.3-6.2 3.7-8.5Z"/></svg>',
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m9 8-4.5 4L9 16M15 8l4.5 4-4.5 4"/></svg>',
  flask: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M10 3h4M10 3v6.5L5.3 18a1.8 1.8 0 0 0 1.6 2.7h10.2a1.8 1.8 0 0 0 1.6-2.7L14 9.5V3"/><path d="M7.5 15h9"/></svg>',
  palette: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 3.5c-4.7 0-8.5 3.6-8.5 8 0 3 2.2 4.2 4 4.2.9 0 1-.7.6-1.3-.5-.8.1-1.7 1.1-1.7h2.6c2.6 0 4.7-2 4.7-4.6 0-2.6-2.4-4.6-4.5-4.6Z"/><circle cx="8.3" cy="10.5" r=".9" fill="currentColor" stroke="none"/><circle cx="11.5" cy="7.8" r=".9" fill="currentColor" stroke="none"/><circle cx="15" cy="9.5" r=".9" fill="currentColor" stroke="none"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 20s-7-4.4-9.3-9C1.3 7.8 3 4.5 6.4 4.3c2-.1 3.6 1 5.6 3 2-2 3.6-3.1 5.6-3 3.4.2 5.1 3.5 3.7 6.7C19 15.6 12 20 12 20Z"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="8.5" r="3.5"/><path d="M5 20c1-4 4-6 7-6s6 2 7 6"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 21s7-6.3 7-11.6A7 7 0 0 0 5 9.4C5 14.7 12 21 12 21Z"/><circle cx="12" cy="9.4" r="2.3"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M6.5 3.5h3l1.4 4.3-2 1.7a12 12 0 0 0 5.6 5.6l1.7-2 4.3 1.4v3c0 1.1-.9 2-2 2-8 0-14.5-6.5-14.5-14.5 0-1.1.9-2 2-2Z"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 20l1.4-4.3A8 8 0 1 1 8.9 19L4 20Z"/><path d="M9 9.4c0 3 2.6 5.6 5.6 5.6.5 0 .9-.6.7-1l-.9-1.6a.8.8 0 0 0-1-.3l-.7.3a5 5 0 0 1-2.1-2.1l.3-.7a.8.8 0 0 0-.3-1L9.9 7.7c-.4-.2-1 .2-1 .7"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="4" y="4" width="16" height="16" rx="5"/><circle cx="12" cy="12" r="3.6"/><circle cx="16.4" cy="7.6" r=".9" fill="currentColor" stroke="none"/></svg>',
  map: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m9 4-5 2v14l5-2 6 2 5-2V4l-5 2-6-2Z"/><path d="M9 4v14M15 6v14"/></svg>',
  email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3.5" y="5.5" width="17" height="13" rx="2.2"/><path d="m4.5 7 7.5 6 7.5-6"/></svg>',
};

function icon(name){ return ICONS[name] || ICONS.book; }
function el(html){ const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; }

document.addEventListener('DOMContentLoaded', () => {
  const D = SITE_DATA;

  /* ---------- Meta ---------- */
  document.title = D.school.metaTitle;
  document.querySelector('meta[name="description"]').setAttribute('content', D.school.metaDescription);

  /* ---------- Header brand + nav ---------- */
  document.querySelectorAll('[data-brand-name]').forEach(n => n.textContent = D.school.name);
  document.querySelectorAll('[data-brand-short]').forEach(n => n.textContent = D.school.shortName);

  const mainNav = document.getElementById('main-nav');
  const mobileNav = document.getElementById('mobile-nav');
  D.nav.forEach(item => {
    mainNav.appendChild(el(`<a href="${item.href}">${item.label}</a>`));
    mobileNav.appendChild(el(`<a href="${item.href}">${item.label}</a>`));
  });
  mobileNav.appendChild(el(`<a class="btn btn-primary" href="#contact">درخواست ثبت‌نام</a>`));

  /* ---------- Hero ---------- */
  document.getElementById('hero-bg').style.backgroundImage = `url('${D.hero.image}')`;
  if (D.hero.position) document.getElementById('hero-bg').style.backgroundPosition = D.hero.position;
  document.getElementById('hero-title').textContent = D.hero.title;
  document.getElementById('hero-subtitle').textContent = D.hero.subtitle;
  const heroBtns = document.getElementById('hero-btns');
  heroBtns.appendChild(el(`<a class="btn btn-primary" href="${D.hero.primaryBtn.href}">${D.hero.primaryBtn.label}</a>`));
  heroBtns.appendChild(el(`<a class="btn btn-outline" href="${D.hero.secondaryBtn.href}">${D.hero.secondaryBtn.label}</a>`));
  heroBtns.appendChild(el(`<a class="btn-ghost-link hero-small-link" href="${D.hero.smallLink.href}">${D.hero.smallLink.label}</a>`));

  /* ---------- About ---------- */
  document.getElementById('about-title').textContent = D.about.title;
  const aboutText = document.getElementById('about-paragraphs');
  D.about.paragraphs.forEach(p => aboutText.appendChild(el(`<p>${p}</p>`)));
  document.getElementById('about-image').src = D.about.image;

  /* ---------- Why Us ---------- */
  document.getElementById('whyus-title').textContent = D.whyUs.title;
  document.getElementById('whyus-subtitle').textContent = D.whyUs.subtitle;
  const whyGrid = document.getElementById('whyus-grid');
  D.whyUs.items.forEach(item => {
    whyGrid.appendChild(el(`
      <div class="feature-card">
        <div class="feature-icon">${icon(item.icon)}</div>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </div>
    `));
  });

  /* ---------- Program ---------- */
  document.getElementById('program-title').textContent = D.program.title;
  document.getElementById('program-subtitle').textContent = D.program.subtitle;
  const progGrid = document.getElementById('program-grid');
  D.program.items.forEach(item => {
    progGrid.appendChild(el(`
      <div class="program-item">
        <div class="feature-icon">${icon(item.icon)}</div>
        <h3>${item.title}</h3>
      </div>
    `));
  });

  /* ---------- Gallery ---------- */
  document.getElementById('gallery-title').textContent = D.gallery.title;
  document.getElementById('gallery-subtitle').textContent = D.gallery.subtitle;
  const filtersWrap = document.getElementById('gallery-filters');
  const galleryGrid = document.getElementById('gallery-grid');
  let activeCategory = 'همه';

  function renderGallery(){
    galleryGrid.innerHTML = '';
    const visible = D.gallery.photos.filter(p => activeCategory === 'همه' || p.category === activeCategory);
    visible.forEach((p) => {
      const globalIndex = D.gallery.photos.indexOf(p);
      const card = el(`
        <div class="gallery-card" tabindex="0" role="button" aria-label="${p.caption}">
          <img src="${p.thumb}" alt="${p.caption}" loading="lazy">
          <div class="zoom-badge">⤢</div>
          <div class="overlay">${p.caption}</div>
        </div>
      `);
      card.addEventListener('click', () => openLightbox(globalIndex));
      card.addEventListener('keydown', e => { if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); openLightbox(globalIndex); } });
      galleryGrid.appendChild(card);
    });
  }

  D.gallery.categories.forEach(cat => {
    const chip = el(`<button class="filter-chip ${cat === activeCategory ? 'active' : ''}">${cat}</button>`);
    chip.addEventListener('click', () => {
      activeCategory = cat;
      filtersWrap.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      renderGallery();
    });
    filtersWrap.appendChild(chip);
  });
  renderGallery();

  /* Lightbox */
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lb-img');
  const lbCaption = document.getElementById('lb-caption');
  const lbCounter = document.getElementById('lb-counter');
  let currentIndex = 0;
  let lastFocused = null;

  function renderLightbox(){
    const p = D.gallery.photos[currentIndex];
    lbImg.src = p.full; lbImg.alt = p.caption;
    lbCaption.textContent = p.caption;
    lbCounter.textContent = `${currentIndex + 1} / ${D.gallery.photos.length}`;
  }
  function openLightbox(index){
    currentIndex = index; lastFocused = document.activeElement;
    renderLightbox();
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
    document.getElementById('lb-close').focus();
  }
  function closeLightbox(){
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    if(lastFocused) lastFocused.focus();
  }
  function showNext(){ currentIndex = (currentIndex + 1) % D.gallery.photos.length; renderLightbox(); }
  function showPrev(){ currentIndex = (currentIndex - 1 + D.gallery.photos.length) % D.gallery.photos.length; renderLightbox(); }

  document.getElementById('lb-next').addEventListener('click', showNext);
  document.getElementById('lb-prev').addEventListener('click', showPrev);
  document.getElementById('lb-close').addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => { if(e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => {
    if(!lightbox.classList.contains('open')) return;
    if(e.key === 'Escape') closeLightbox();
    if(e.key === 'ArrowRight'){ e.preventDefault(); showPrev(); }
    if(e.key === 'ArrowLeft'){ e.preventDefault(); showNext(); }
  });

  /* ---------- News ---------- */
  document.getElementById('news-title').textContent = D.news.title;
  document.getElementById('news-subtitle').textContent = D.news.subtitle;
  const newsGrid = document.getElementById('news-grid');
  D.news.items.forEach(n => {
    newsGrid.appendChild(el(`
      <article class="news-card">
        <img src="${n.image}" alt="${n.title}" loading="lazy">
        <div class="news-body">
          <h3>${n.title}</h3>
          <p>${n.excerpt}</p>
        </div>
      </article>
    `));
  });

  /* ---------- CTA ---------- */
  document.getElementById('cta-title').textContent = D.cta.title;
  document.getElementById('cta-btn').textContent = D.cta.buttonLabel;

  /* ---------- Contact ---------- */
  document.getElementById('ic-address').innerHTML = icon('pin');
  document.getElementById('ic-phone').innerHTML = icon('phone');
  document.getElementById('ic-whatsapp').innerHTML = icon('whatsapp');
  document.getElementById('ic-instagram').innerHTML = icon('instagram');
  document.getElementById('ic-email').innerHTML = icon('email');
  document.getElementById('contact-address').textContent = D.school.address;
  const phoneLink = document.getElementById('contact-phone');
  phoneLink.textContent = D.school.phone;
  phoneLink.href = D.school.phoneHref;
  const waLink = document.getElementById('contact-whatsapp');
  waLink.textContent = D.school.whatsappNumber;
  waLink.href = D.school.whatsappHref;
  const igLink = document.getElementById('contact-instagram');
  igLink.textContent = D.school.instagramHandle;
  igLink.href = D.school.instagramHref;
  const emailLink = document.getElementById('contact-email');
  emailLink.textContent = D.school.consultationEmail;
  emailLink.href = 'mailto:' + D.school.consultationEmail;
  document.getElementById('contact-maps-btn').href = D.school.mapsHref;

  /* ---------- Registration / Consultation Form ---------- */
  document.getElementById('form-title').textContent = D.form.title;
  document.getElementById('form-subtitle').textContent = D.form.subtitle;
  document.getElementById('form-submit').textContent = D.form.submitLabel;
  const regForm = document.getElementById('registration-form');
  regForm.action = D.form.action;
  const formStatus = document.getElementById('form-status');
  const modal = document.getElementById('success-modal');
  const toEnDigits = v => v.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d)).replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d));
  const validators = {
    name: v => v.trim().length < 3 ? 'لطفاً نام و نام خانوادگی را کامل وارد کنید.' : '',
    required: v => !v.trim() ? 'این فیلد نباید خالی باشد.' : '',
    phone: v => {
      const p = toEnDigits(v).replace(/[\s\-]/g, '');
      if (!p) return 'لطفاً شماره تماس را وارد کنید.';
      if (!/^(09\d{9}|0[1-8]\d{9})$/.test(p)) return 'شماره تماس معتبر نیست. مثال: 09123456789';
      return '';
    },
  };
  const checkField = (input) => {
    const rule = input.dataset.rule; if (!rule) return true;
    let msg = input.value.trim() ? validators[rule](input.value) : (rule === 'phone' ? validators.phone('') : 'این فیلد نباید خالی باشد.');
    input.classList.toggle('invalid', !!msg);
    input.parentElement.querySelector('.field-error').textContent = msg;
    return !msg;
  };
  regForm.querySelectorAll('[data-rule]').forEach(i => i.addEventListener('input', () => { if (i.classList.contains('invalid')) checkField(i); }));
  const closeModal = () => { modal.hidden = true; };
  document.getElementById('modal-close').addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) closeModal(); });

  regForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    formStatus.textContent = ''; formStatus.classList.remove('error');
    const inputs = [...regForm.querySelectorAll('[data-rule]')];
    const results = inputs.map(checkField);
    if (results.includes(false)) {
      formStatus.classList.add('error');
      formStatus.textContent = 'لطفاً موارد مشخص‌شده را اصلاح کنید؛ فرم تا تکمیل صحیح ارسال نمی‌شود.';
      inputs[results.indexOf(false)].focus();
      return;
    }
    const submitBtn = document.getElementById('form-submit');
    submitBtn.disabled = true;
    formStatus.textContent = 'در حال ارسال...';
    try {
      const phoneInput = regForm.querySelector('[name="شماره تماس"]');
      phoneInput.value = toEnDigits(phoneInput.value).replace(/[\s\-]/g, '');
      const res = await fetch(regForm.action, { method: 'POST', body: new FormData(regForm), headers: { 'Accept': 'application/json' } });
      if (D.form.sheetAction) {
        try { await fetch(D.form.sheetAction, { method: 'POST', mode: 'no-cors', body: new FormData(regForm) }); } catch (err) {}
      }
      if (!res.ok) throw new Error('failed');
      formStatus.textContent = '';
      regForm.reset();
      modal.hidden = false;
      document.getElementById('modal-close').focus();
    } catch (err) {
      formStatus.classList.add('error');
      formStatus.textContent = 'ارسال با خطا مواجه شد. لطفاً دوباره تلاش کنید یا از طریق واتساپ یا تماس تلفنی با ما در ارتباط باشید.';
    } finally {
      submitBtn.disabled = false;
    }
  });

  /* ---------- Footer ---------- */
  document.getElementById('footer-about').textContent = D.footer.about;
  document.getElementById('footer-address').textContent = D.school.address;
  const footerPhone = document.getElementById('footer-phone');
  footerPhone.textContent = D.school.phone; footerPhone.href = D.school.phoneHref;
  const footerEmail = document.getElementById('footer-email');
  footerEmail.textContent = D.school.consultationEmail; footerEmail.href = 'mailto:' + D.school.consultationEmail;
  const footerWa = document.getElementById('footer-whatsapp');
  footerWa.href = D.school.whatsappHref;
  const footerIg = document.getElementById('footer-instagram');
  footerIg.href = D.school.instagramHref;
  document.getElementById('footer-maps').href = D.school.mapsHref;
  document.getElementById('footer-year').textContent = new Date().getFullYear();
  const footerNav = document.getElementById('footer-nav');
  D.nav.forEach(item => footerNav.appendChild(el(`<li><a href="${item.href}">${item.label}</a></li>`)));

  /* ---------- Header scroll / mobile menu ---------- */
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 12);
  });
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileNavEl = document.getElementById('mobile-nav');
  const iconOpen = document.getElementById('hamburger-icon-open');
  const iconClose = document.getElementById('hamburger-icon-close');
  function setMenuState(isOpen){
    mobileNavEl.classList.toggle('open', isOpen);
    hamburgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    document.body.style.overflow = isOpen ? 'hidden' : '';
    iconOpen.style.display = isOpen ? 'none' : 'block';
    iconClose.style.display = isOpen ? 'block' : 'none';
  }
  hamburgerBtn.addEventListener('click', () => setMenuState(!mobileNavEl.classList.contains('open')));
  mobileNavEl.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenuState(false)));
});
