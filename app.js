/* EN-only i18n for The Natural Touch Massage Therapy demo */
const i18n = {
  en: {
    "nav.services": "Services",
    "nav.why": "Why us",
    "nav.gallery": "Gallery",
    "nav.faq": "FAQ",
    "nav.reviews": "Reviews",
    "nav.contact": "Contact",
    "nav.call": "(225) 256-4977",
    "hero.kicker": "Baton Rouge, Louisiana · Therapeutic massage · 5-star rated",
    "hero.title": "Pain relief.<br>Deep relaxation.",
    "hero.sub": "Rated 5.0 out of 5 from 4 reviews: Swedish, deep tissue, sports and aromatherapy massage — techniques tailored to what your body needs.",
    "hero.cta1": "Call (225) 256-4977",
    "hero.cta2": "See services",
    "trust.t1t": "5-star rated",
    "trust.t1d": "Perfect score from clients",
    "trust.t2t": "Tailored sessions",
    "trust.t2d": "Techniques matched to you",
    "trust.t3t": "Pain relief focus",
    "trust.t3d": "Ease tension &amp; improve circulation",
    "stats.s1n": "5.0\u2605",
    "stats.s1l": "from 4 reviews",
    "stats.s2n": "Baton Rouge",
    "stats.s2l": "&amp; the Capital Region",
    "stats.s3n": "4 modalities",
    "stats.s3l": "+ therapeutic focus",
    "stats.s4n": "Call to book",
    "stats.s4l": "(225) 256-4977",
    "services.kicker": "What we do",
    "services.title": "Massage — tailored to your body",
    "services.s1t": "Swedish massage",
    "services.s1d": "Long, flowing strokes that calm the nervous system and ease everyday tension.",
    "services.s2t": "Deep tissue massage",
    "services.s2d": "Firm, focused pressure that works out stubborn knots and chronic tightness.",
    "services.s3t": "Sports massage",
    "services.s3d": "Targeted work for athletes — recovery, flexibility and injury prevention.",
    "services.s4t": "Aromatherapy massage",
    "services.s4d": "Relaxing massage with essential oils for mind-and-body calm.",
    "services.s5t": "Therapeutic pain relief",
    "services.s5d": "Sessions tailored to relieve pain and restore comfortable movement.",
    "services.s6t": "Relaxation &amp; stress relief",
    "services.s6d": "Pure unwinding — leave feeling lighter, looser and renewed.",
    "why.kicker": "Why choose us",
    "why.title": "Baton Rouge's therapeutic touch",
    "why.intro": "The Natural Touch Massage Therapy keeps it personal: every session is tailored to your body's needs — easing tension, improving circulation and promoting overall well-being. No franchises, no scripts — just good hands.",
    "why.l1t": "Tailored techniques",
    "why.l1d": "Every session is matched to what your body needs that day.",
    "why.l2t": "Therapeutic focus",
    "why.l2d": "Real relief for tension, tightness and everyday aches.",
    "why.l3t": "Calm, private setting",
    "why.l3d": "A quiet space on Perkins Rd built for unwinding.",
    "why.l4t": "5-star client feedback",
    "why.l4d": "Clients say they leave feeling the difference.",
    "gallery.kicker": "On the job",
    "gallery.title": "Work we are proud of",
    "gallery.c1": "Deep, restorative work",
    "gallery.c2": "A calm space to unwind",
    "reviews.kicker": "Word on the street",
    "reviews.title": "Rated 5.0 out of 5 by Baton Rouge customers",
    "reviews.more": "See what clients say about us — 5.0 stars from 4 reviews",
    "faq.kicker": "Good to know",
    "faq.title": "Frequently asked questions",
    "faq.q1": "What types of massage do you offer?",
    "faq.a1": "Swedish, deep tissue, sports and aromatherapy — all tailored to your needs.",
    "faq.q2": "How do I book?",
    "faq.a2": "Call (225) 256-4977 to schedule your session.",
    "faq.q3": "Will it help with my pain?",
    "faq.a3": "Our therapeutic focus targets tension and discomfort — tell us what is hurting and we will tailor the session.",
    "faq.q4": "What should I expect at my first visit?",
    "faq.a4": "A quick chat about your needs, then a calm, professional session — you will leave feeling the difference.",
    "contact.kicker": "Come see us",
    "contact.title": "Get in touch",
    "contact.addr": "Address",
    "contact.phone": "Phone",
    "contact.hours": "Hours",
    "contact.hoursVal": "Monday – Wednesday<br>9:00 AM – 3:00 PM<br><br>Thursday – Saturday<br>9:00 AM – 6:00 PM<br><br>Sunday<br>Closed",
    "contact.cta": "Call now",
    "footer.tag": "Massage therapy · Baton Rouge, Louisiana"
  }
};

function applyLang(lang) {
  const dict = i18n[lang] || i18n.en;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.documentElement.lang = lang;
}

document.addEventListener("DOMContentLoaded", () => {
  applyLang("en");

  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("mainNav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
    nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));
  }

  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }, { passive: true });
});
