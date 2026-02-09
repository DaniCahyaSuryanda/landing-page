import { useEffect, useState } from "react";
import avatar from "./assets/avatar.jpg";

const content = {
  id: {
    nav: {
      hero: "Beranda",
      about: "Tentang",
      skills: "Keahlian",
      projects: "Proyek",
      experience: "Pengalaman",
      testimonials: "Ekspektasi",
      contact: "Kontak",
    },
    theme: {
      light: "Mode Terang",
      dark: "Mode Gelap",
    },
    languageToggle: "Ganti ke English",
    hero: {
      chip: "Full Stack Web Developer - 6 Tahun Pengalaman",
      name: "Dani",
      titlePrefix: "Saya Dani - Full-Stack Developer untuk aplikasi ",
      titleHighlight: "operasional",
      titleSuffix: " yang siap dipakai di lapangan.",
      subtitle:
        "Saya mengerjakan end-to-end: web, mobile, database, dan rilis. Fokus saya sistem internal seperti pelaporan nasional, ritase terintegrasi hardware, dan absensi GPS geofence.",
      ctaPrimary: "Lihat Proyek",
      ctaSecondary: "Hubungi Saya",
      highlights: [
        "End-to-end (Web/Mobile/DB)",
        "Integrasi Sistem Lapangan",
        "Maintenance & Rilis",
      ],
      availabilityLabel: "Ketersediaan",
      availabilityValue: "Terbuka untuk freelance",
      basedInLabel: "Lokasi",
      basedInValue: "Indonesia",
    },
    about: {
      title: "Tentang",
      subtitle:
        "Saya membantu perusahaan/instansi membangun aplikasi internal yang stabil, rapi, dan mudah dikembangkan. Saya nyaman menangani proses dari kebutuhan, pengembangan fitur, database, sampai aplikasi siap dipakai operasional.",
      paragraphs: [
        "Proyek yang pernah saya tangani: SILABIN (pelaporan bulanan nasional), UCan (ritase + integrasi hardware + dashboard), dan Primasen (absensi GPS geofence).",
        "Saya terbuka untuk freelance: sistem baru, lanjut sistem existing, atau maintenance.",
      ],
      skillsTitle: "Keahlian Utama",
      skillCards: [
        {
          title: "End-to-End Delivery",
          desc: "Dari kebutuhan -> fitur -> rilis (web, mobile, database).",
        },
        {
          title: "Integrasi Sistem Lapangan",
          desc: "Terbiasa integrasi hardware/sistem lain untuk operasional.",
        },
        {
          title: "Backend & Database",
          desc: "API dan skema data yang konsisten dan mudah dirawat.",
        },
        {
          title: "Rilis & Maintenance",
          desc: "Membantu deployment dan menjaga aplikasi tetap stabil.",
        },
      ],
    },
    skillsSection: {
      title: "Keahlian",
      subtitle: "Stack yang saya pakai untuk membangun sistem operasional web & mobile.",
    },
    projectsSection: {
      title: "Proyek",
      subtitle: "Proyek sensitif tanpa link publik. Detail tersedia saat diskusi.",
      labels: {
        role: "Peran",
        stack: "Stack",
        privateRepo: "Repo privat",
      },
    },
    experienceSection: {
      title: "Pengalaman",
      subtitle: "Riwayat pekerjaan dan milestone karir profesional.",
    },
    testimonialsSection: {
      title: "Yang Bisa Kamu Harapkan",
      subtitle: "Hal sederhana yang membuat kerja sama tetap jelas.",
    },
    contactSection: {
      title: "Kontak",
      subtitle:
        "Butuh bantuan membangun atau melanjutkan sistem IT (web/mobile)? Hubungi saya.",
      bestMethodTitle: "Paling cepat dibalas via",
      bestMethodDesc: "Email.",
      infoNote: "Sertakan kebutuhan singkat, deadline, dan stack yang dipakai.",
      socialTitle: "Sosial Media",
    },
    footer: {
      copyright: "(c) 2026 Dani. All rights reserved.",
    },
  },
  en: {
    nav: {
      hero: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      testimonials: "Expectations",
      contact: "Contact",
    },
    theme: {
      light: "Light Mode",
      dark: "Dark Mode",
    },
    languageToggle: "Switch to Indonesian",
    hero: {
      chip: "Full Stack Web Developer - 6 Years Experience",
      name: "Dani",
      titlePrefix: "I build internal ",
      titleHighlight: "operational",
      titleSuffix: " apps end-to-end (web & mobile).",
      subtitle:
        "From database and APIs to deployment. Experience: reporting system, haulage/ritase with hardware integration, GPS attendance with geofence.",
      ctaPrimary: "View Projects",
      ctaSecondary: "Contact Me",
      highlights: [
        "End-to-end (Web/Mobile/DB)",
        "Field system integration",
        "Maintenance & release",
      ],
      availabilityLabel: "Availability",
      availabilityValue: "Open to freelance",
      basedInLabel: "Location",
      basedInValue: "Indonesia",
    },
    about: {
      title: "About",
      subtitle:
        "I help teams build internal apps that are stable, clean, and easy to maintain. I handle needs, features, database, and production readiness.",
      paragraphs: [
        "Projects: SILABIN (national reporting), UCan (haulage + hardware integration + dashboard), and Primasen (GPS attendance with geofence).",
        "Open for freelance: new system, existing system, or maintenance.",
      ],
      skillsTitle: "Core Strengths",
      skillCards: [
        {
          title: "End-to-End Delivery",
          desc: "Needs -> features -> release (web, mobile, database).",
        },
        {
          title: "Field System Integration",
          desc: "Integrate hardware/systems for daily operations.",
        },
        {
          title: "Backend & Database",
          desc: "Consistent APIs and data schema, easy to maintain.",
        },
        {
          title: "Release & Maintenance",
          desc: "Deploy and keep the system stable in production.",
        },
      ],
    },
    skillsSection: {
      title: "Skills",
      subtitle: "Stack used to build operational web and mobile systems.",
    },
    projectsSection: {
      title: "Projects",
      subtitle: "Sensitive projects without public links. Details available on request.",
      labels: {
        role: "Role",
        stack: "Stack",
        privateRepo: "Private repo",
      },
    },
    experienceSection: {
      title: "Experience Timeline",
      subtitle: "Career history and milestones.",
    },
    testimonialsSection: {
      title: "Expectations",
      subtitle: "Simple principles for clear collaboration.",
    },
    contactSection: {
      title: "Contact",
      subtitle: "Need help building or continuing an IT system (web/mobile)?",
      bestMethodTitle: "Fastest reply",
      bestMethodDesc: "Email.",
      infoNote: "Include needs, deadline, and current stack.",
      socialTitle: "Social Links",
    },
    footer: {
      copyright: "(c) 2026 Dani. All rights reserved.",
    },
  },
};

const navLinks = ["hero", "about", "skills", "projects", "experience", "testimonials", "contact"];

const skills = [
  {
    title: "Frontend",
    items: ["React.js"],
  },
  {
    title: "Backend",
    items: ["Node.js (Express)", "PHP (Symfony, Laravel)", "Python"],
  },
  {
    title: "Database",
    items: ["MySQL", "PostgreSQL"],
  },
  {
    title: "Mobile",
    items: ["React Native"],
  },
];

const projects = [
  {
    title: {
      id: "SILABIN",
      en: "SILABIN",
    },
    client: {
      id: "Kejaksaan Tinggi Jawa Timur & Kejaksaan Agung RI",
      en: "East Java High Prosecutor Office & Attorney General of Indonesia",
    },
    description: {
      id: "Pelaporan bulanan untuk seluruh satuan kerja kejaksaan di Indonesia.",
      en: "Monthly reporting for prosecutor offices across Indonesia.",
    },
    role: {
      id: "Full ownership aplikasi + database (+ sebagian rilis/operasional).",
      en: "Full ownership of app + database (+ part of release/operations).",
    },
    tech: ["PHP 7.4", "Symfony", "MySQL", "PostgreSQL"],
    tone: "from-cyan-400/30 via-blue-500/30 to-violet-500/30",
  },
  {
    title: {
      id: "UCan",
      en: "UCan",
    },
    client: {
      id: "PT Borneo Indobara (Kalimantan Selatan)",
      en: "PT Borneo Indobara (South Kalimantan)",
    },
    description: {
      id: "Input ritase terintegrasi hardware & sistem lain + dashboard laporan interaktif.",
      en: "Haulage input with hardware integration + interactive dashboard.",
    },
    role: {
      id: "Full ownership aplikasi + microservice + mayoritas deployment.",
      en: "Full ownership app + microservices + most deployment.",
    },
    tech: ["React.js", "Node.js/Express", "Python", "MySQL"],
    tone: "from-emerald-400/30 via-cyan-500/30 to-blue-500/30",
  },
  {
    title: {
      id: "Primasen",
      en: "Primasen",
    },
    client: {
      id: "Produk internal perusahaan",
      en: "Internal company product",
    },
    description: {
      id: "Absensi GPS dengan geofence area kerja (web + mobile).",
      en: "GPS attendance with geofence work areas (web + mobile).",
    },
    role: {
      id: "Web (admin/rekap) + mobile (absen harian).",
      en: "Web (admin/recap) + mobile (daily attendance).",
    },
    tech: ["Laravel", "React Native"],
    tone: "from-fuchsia-400/30 via-violet-500/30 to-sky-500/30",
  },
];

const timeline = [
  {
    role: {
      id: "Full-Stack App Developer",
      en: "Full-Stack App Developer",
    },
    company: {
      id: "PT Bening Guru Semesta",
      en: "PT Bening Guru Semesta",
    },
    period: {
      id: "2025 - sekarang",
      en: "2025 - present",
    },
    summary: {
      id: "Penempatan di Kalimantan Selatan (site PT Borneo Indobara). Fokus pengembangan aplikasi operasional & integrasi sistem.",
      en: "Placed in South Kalimantan (PT Borneo Indobara site). Focused on operational application development and system integration.",
    },
  },
  {
    role: {
      id: "Full-Stack Developer",
      en: "Full-Stack Developer",
    },
    company: {
      id: "PT Prima Visi Globalindo",
      en: "PT Prima Visi Globalindo",
    },
    period: {
      id: "2020 - 2025",
      en: "2020 - 2025",
    },
    summary: {
      id: "Membangun dan merawat aplikasi web & mobile untuk kebutuhan operasional/internal, termasuk produk absensi GPS dengan geofence (Primasen).",
      en: "Built and maintained web and mobile apps for operational/internal needs, including GPS attendance with geofence (Primasen).",
    },
  },
  {
    role: {
      id: "Latar belakang",
      en: "Background",
    },
    company: {
      id: "Pendidikan & awal karir",
      en: "Education & early career",
    },
    period: {
      id: "Maret 2020 - September 2020",
      en: "March 2020 - September 2020",
    },
    summary: {
      id: "Lulus Maret 2020 dan mulai kerja profesional pada September 2020.",
      en: "Graduated in March 2020 and started professional work in September 2020.",
    },
  },
];

const testimonials = [
  {
    name: {
      id: "Komunikasi jelas",
      en: "Clear communication",
    },
    role: {
      id: "Update progress dan risiko sejak awal.",
      en: "Progress and risk updates early.",
    },
    quote: {
      id: "Selalu jelas sejak awal.",
      en: "Clear from the start.",
    },
  },
  {
    name: {
      id: "Ownership",
      en: "Ownership",
    },
    role: {
      id: "Fokus sampai sistem siap produksi.",
      en: "Focused on production readiness.",
    },
    quote: {
      id: "Tidak berhenti di fitur.",
      en: "Not just shipping features.",
    },
  },
  {
    name: {
      id: "Kode rapi",
      en: "Clean code",
    },
    role: {
      id: "Mudah dilanjutkan dan di-maintain.",
      en: "Easy to continue and maintain.",
    },
    quote: {
      id: "Struktur jelas dan aman.",
      en: "Clear and safe structure.",
    },
  },
];

const socialLinks = [
  {
    label: { id: "GitHub", en: "GitHub" },
    value: "github.com/DaniCahyaSuryanda",
    href: "https://github.com/DaniCahyaSuryanda",
  },
  {
    label: { id: "LinkedIn", en: "LinkedIn" },
    value: "linkedin.com/in/dani-cahya-988016215",
    href: "https://www.linkedin.com/in/dani-cahya-988016215/",
  },
  {
    label: { id: "Instagram", en: "Instagram" },
    value: "@_dani.cahya",
    href: "https://www.instagram.com/_dani.cahya",
  },
  {
    label: { id: "Email", en: "Email" },
    value: "danicahya1100@gmail.com",
    href: "mailto:danicahya1100@gmail.com",
  },
];

const ProjectCard = ({ project, lang, labels }) => (
  <div className="glass-card group flex flex-col gap-5 transition hover:-translate-y-1">
    <div
      className={`relative h-40 w-full overflow-hidden rounded-xl bg-gradient-to-br ${project.tone}`}
      role="img"
      aria-label={`Thumbnail project ${project.title[lang]}`}
    >
      <div className="absolute inset-0 bg-slate-900/30"></div>
      <div className="absolute bottom-4 left-4 text-sm font-semibold text-white">
        {project.title[lang]}
      </div>
    </div>
    <div className="space-y-4">
      <p className="text-sm text-slate-600 dark:text-slate-300">
        {project.description[lang]}
      </p>
      <p className="text-xs text-slate-600 dark:text-slate-300">
        <span className="font-semibold text-slate-900 dark:text-white">
          {labels.role}:
        </span>{" "}
        {project.role[lang]}
      </p>
      <p className="text-xs text-slate-600 dark:text-slate-300">
        <span className="font-semibold text-slate-900 dark:text-white">
          {labels.stack}:
        </span>{" "}
        {project.tech.join(", ")} - {labels.privateRepo}
      </p>
    </div>
  </div>
);

const TimelineItem = ({ item, lang }) => (
  <div className="flex gap-5">
    <div className="flex flex-col items-center">
      <div className="h-3 w-3 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"></div>
      <div className="mt-2 h-full w-px bg-slate-300 dark:bg-slate-700"></div>
    </div>
    <div className="pb-10">
      <div className="text-sm font-semibold text-slate-900 dark:text-white">
        {item.role[lang]}
      </div>
      <div className="text-sm text-slate-500 dark:text-slate-400">
        {item.company[lang]} - {item.period[lang]}
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
        {item.summary[lang]}
      </p>
    </div>
  </div>
);

const TestimonialCard = ({ item, lang }) => (
  <div className="glass-card">
    <p className="text-sm text-slate-600 dark:text-slate-300">
      "{item.quote[lang]}"
    </p>
    <div className="mt-4 text-sm font-semibold text-slate-900 dark:text-white">
      {item.name[lang]}
    </div>
    <div className="text-xs text-slate-500 dark:text-slate-400">{item.role[lang]}</div>
  </div>
);

const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 4V2M12 22v-2M4 12H2M22 12h-2M5.6 5.6 4.2 4.2M19.8 19.8l-1.4-1.4M18.4 5.6 19.8 4.2M4.2 19.8l1.4-1.4M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M20.4 15.6A8.5 8.5 0 0 1 8.4 3.6a7.5 7.5 0 1 0 12 12Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "dark";
    }
    const stored = localStorage.getItem("theme");
    if (stored) {
      return stored;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });
  const [lang, setLang] = useState(() => {
    if (typeof window === "undefined") {
      return "id";
    }
    const storedLang = localStorage.getItem("lang");
    return storedLang === "en" ? "en" : "id";
  });
  const t = content[lang] || content.id;

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);
  }, [lang]);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  const toggleLang = () => setLang((prev) => (prev === "id" ? "en" : "id"));
  const themeLabel = theme === "dark" ? t.theme.light : t.theme.dark;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-[120px]" />
        <div className="absolute right-0 top-64 h-96 w-96 rounded-full bg-violet-500/20 blur-[160px]" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-emerald-400/10 blur-[140px]" />
        <div className="absolute inset-0 opacity-20 dark:opacity-10">
          <div className="h-full w-full grid-pattern"></div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur dark:border-slate-800/60 dark:bg-slate-950/70">
        <div className="container-base flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-500"></div>
            <div className="text-sm font-semibold">Dani</div>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((id) => (
              <a key={id} className="nav-link" href={`#${id}`}>
                {t.nav[id]}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleLang}
              title={t.languageToggle}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500"
            >
              <span className="text-xs">{lang === "id" ? "EN" : "ID"}</span>
            </button>
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500"
            >
              <span className="text-xs">{themeLabel}</span>
              <span
                aria-hidden="true"
                className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                {theme === "dark" ? <SunIcon /> : <MoonIcon />}
              </span>
            </button>
          </div>
        </div>
      </header>

      <main>
        <section id="hero" className="section">
          <div className="container-base grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div data-reveal className="reveal space-y-6">
              <span className="chip">{t.hero.chip}</span>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                {t.hero.name}
              </div>
              <h1 className="font-display text-4xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
                {t.hero.titlePrefix}
                <span className="text-gradient">{t.hero.titleHighlight}</span>
                {t.hero.titleSuffix}
              </h1>
              <p className="text-base text-slate-600 dark:text-slate-300 sm:text-lg">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <a className="btn-primary" href="#projects">
                  {t.hero.ctaPrimary}
                </a>
                <a className="btn-ghost" href="#contact">
                  {t.hero.ctaSecondary}
                </a>
              </div>
              <div className="grid gap-3 text-sm text-slate-600 dark:text-slate-300 sm:grid-cols-3">
                {t.hero.highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 shadow-sm dark:border-slate-800/60 dark:bg-slate-950/60"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div data-reveal className="reveal relative flex items-center justify-center">
              <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-cyan-400/30 via-blue-500/20 to-violet-500/30 blur-2xl"></div>
              <div className="relative rounded-[32px] border border-white/20 bg-white/60 p-6 shadow-2xl backdrop-blur dark:border-slate-800/60 dark:bg-slate-900/60">
                <img
                  src={avatar}
                  alt="Avatar Dani"
                  className="h-64 w-64 rounded-[24px] object-cover shadow-xl animate-float"
                />
                <div className="mt-5 grid gap-3 rounded-2xl border border-slate-200/70 bg-white/80 p-4 text-sm text-slate-600 shadow-sm dark:border-slate-800/60 dark:bg-slate-950/80 dark:text-slate-200">
                  <div className="flex items-center justify-between">
                    <span>{t.hero.availabilityLabel}</span>
                    <span className="font-semibold text-emerald-500">
                      {t.hero.availabilityValue}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>{t.hero.basedInLabel}</span>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {t.hero.basedInValue}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container-base grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div data-reveal className="reveal glass-card">
              <h2 className="section-title">{t.about.title}</h2>
              <p className="section-subtitle">{t.about.subtitle}</p>
              <div className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {t.about.paragraphs.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
            <div data-reveal className="reveal glass-card">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {t.about.skillsTitle}
              </h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {t.about.skillCards.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200/70 bg-white/80 p-4 text-sm text-slate-700 shadow-sm dark:border-slate-800/60 dark:bg-slate-950/80 dark:text-slate-200"
                  >
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">
                      {item.title}
                    </div>
                    <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container-base space-y-12">
            <div data-reveal className="reveal">
              <h2 className="section-title">{t.skillsSection.title}</h2>
              <p className="section-subtitle">{t.skillsSection.subtitle}</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {skills.map((group) => (
                <div key={group.title} data-reveal className="reveal glass-card space-y-4">
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    {group.title}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container-base space-y-12">
            <div data-reveal className="reveal">
              <h2 className="section-title">{t.projectsSection.title}</h2>
              <p className="section-subtitle">{t.projectsSection.subtitle}</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project) => (
                <div key={project.title.id} data-reveal className="reveal">
                  <ProjectCard
                    project={project}
                    lang={lang}
                    labels={t.projectsSection.labels}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="container-base grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div data-reveal className="reveal">
              <h2 className="section-title">{t.experienceSection.title}</h2>
              <p className="section-subtitle">{t.experienceSection.subtitle}</p>
            </div>
            <div data-reveal className="reveal glass-card">
              {timeline.map((item) => (
                <TimelineItem key={item.role.id} item={item} lang={lang} />
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="section">
          <div className="container-base space-y-12">
            <div data-reveal className="reveal">
              <h2 className="section-title">{t.testimonialsSection.title}</h2>
              <p className="section-subtitle">{t.testimonialsSection.subtitle}</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((item) => (
                <div key={item.name.id} data-reveal className="reveal">
                  <TestimonialCard item={item} lang={lang} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container-base grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div data-reveal className="reveal space-y-6">
              <h2 className="section-title">{t.contactSection.title}</h2>
              <p className="section-subtitle">{t.contactSection.subtitle}</p>
              <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-4 text-sm text-slate-700 shadow-sm dark:border-slate-800/60 dark:bg-slate-950/70 dark:text-slate-200">
                <p className="text-sm text-slate-700 dark:text-slate-200">
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {t.contactSection.bestMethodTitle}:
                  </span>{" "}
                  {t.contactSection.bestMethodDesc}
                </p>
                <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
                  {t.contactSection.infoNote}
                </p>
              </div>
            </div>
            <div data-reveal className="reveal glass-card">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {t.contactSection.socialTitle}
              </h3>
              <div className="mt-6 space-y-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    className="flex items-center justify-between rounded-2xl border border-slate-200/60 bg-white/80 px-4 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800/60 dark:bg-slate-950/70 dark:text-slate-200"
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>{link.label[lang]}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {link.value}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200/60 py-10 text-sm dark:border-slate-800/60">
        <div className="container-base flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-slate-500 dark:text-slate-400">
            {t.footer.copyright}
          </div>
          <div className="flex flex-wrap items-center gap-4">
            {navLinks.map((id) => (
              <a key={id} className="nav-link" href={`#${id}`}>
                {t.nav[id]}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
