import { useEffect, useState } from "react";
import avatar from "./assets/avatar.jpg";

const navLinks = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "testimonials", label: "Testimoni" },
  { id: "contact", label: "Kontak" },
];

const skills = [
  {
    title: "Frontend",
    items: ["React", "Vue", "Angular", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Python", "PHP", "Express", "Laravel"],
  },
  {
    title: "Database",
    items: ["MySQL", "MongoDB", "PostgreSQL", "Redis", "Prisma"],
  },
  {
    title: "Tools & Cloud",
    items: ["Git", "Docker", "AWS", "GitHub Actions", "Figma"],
  },
];

const projects = [
  {
    title: "E-Commerce Headless",
    description:
      "Platform belanja dengan performa tinggi, checkout cepat, dan integrasi pembayaran multi-gateway.",
    tech: ["React", "Node.js", "PostgreSQL"],
    demo: "https://demo.example.com/ecommerce",
    repo: "https://github.com/username/ecommerce-headless",
    tone: "from-cyan-400/30 via-blue-500/30 to-violet-500/30",
  },
  {
    title: "SaaS Analytics Dashboard",
    description:
      "Dashboard KPI real-time untuk tim growth dengan pipeline data dan alert otomatis.",
    tech: ["Vue", "Python", "MongoDB"],
    demo: "https://demo.example.com/analytics",
    repo: "https://github.com/username/saas-analytics",
    tone: "from-emerald-400/30 via-cyan-500/30 to-blue-500/30",
  },
  {
    title: "Fintech Onboarding",
    description:
      "Flow onboarding aman dengan KYC terintegrasi, e-sign, dan scoring risiko.",
    tech: ["Angular", "Node.js", "MySQL"],
    demo: "https://demo.example.com/fintech",
    repo: "https://github.com/username/fintech-onboarding",
    tone: "from-fuchsia-400/30 via-violet-500/30 to-sky-500/30",
  },
  {
    title: "Marketplace B2B",
    description:
      "Marketplace untuk procurement dengan approval multi-level dan katalog dinamis.",
    tech: ["React", "PHP", "PostgreSQL"],
    demo: "https://demo.example.com/b2b",
    repo: "https://github.com/username/marketplace-b2b",
    tone: "from-teal-400/30 via-emerald-500/30 to-lime-400/30",
  },
  {
    title: "Learning Management System",
    description:
      "LMS modern dengan live class, progress tracking, dan sertifikat otomatis.",
    tech: ["Vue", "Node.js", "MongoDB"],
    demo: "https://demo.example.com/lms",
    repo: "https://github.com/username/lms-modern",
    tone: "from-blue-400/30 via-indigo-500/30 to-purple-500/30",
  },
  {
    title: "Portfolio Generator",
    description:
      "Generator portfolio instan untuk kreator dengan template responsif dan CMS ringan.",
    tech: ["React", "Python", "PostgreSQL"],
    demo: "https://demo.example.com/portfolio",
    repo: "https://github.com/username/portfolio-generator",
    tone: "from-amber-400/30 via-orange-500/30 to-rose-500/30",
  },
];

const timeline = [
  {
    role: "Lead Full Stack Developer",
    company: "Studio Digital Atlas",
    period: "2024 - Sekarang",
    summary:
      "Memimpin tim 6 engineer, membangun sistem multi-tenant, dan meningkatkan performa aplikasi hingga 45%.",
  },
  {
    role: "Senior Full Stack Developer",
    company: "Nusantara Tech Lab",
    period: "2021 - 2024",
    summary:
      "Merancang arsitektur layanan mikro dan pipeline CI/CD untuk produk SaaS.",
  },
  {
    role: "Full Stack Developer",
    company: "Kreasi Produk Digital",
    period: "2019 - 2021",
    summary:
      "Mengembangkan aplikasi B2B dan memigrasi stack monolitik ke modul layanan.",
  },
  {
    role: "Frontend Engineer",
    company: "Freelance & Startup",
    period: "2018 - 2019",
    summary:
      "Membangun landing page konversi tinggi dan desain sistem UI.",
  },
];

const testimonials = [
  {
    name: "Hana Putri",
    role: "Product Manager, Fintechly",
    quote:
      "Eksekusi cepat, komunikatif, dan kualitas kode rapi. Roadmap kami jadi lebih jelas.",
  },
  {
    name: "Kevin Mahendra",
    role: "CTO, GrowthHub",
    quote:
      "Mampu menerjemahkan kebutuhan bisnis ke solusi teknis yang scalable.",
  },
];

const socialLinks = [
  { label: "Email", value: "hello@portfolio.dev", href: "mailto:hello@portfolio.dev" },
  { label: "LinkedIn", value: "linkedin.com/in/andipratama", href: "https://linkedin.com/in/andipratama" },
  { label: "GitHub", value: "github.com/andipratama", href: "https://github.com/andipratama" },
  { label: "Twitter", value: "@andipratama", href: "https://twitter.com/andipratama" },
];

const ProjectCard = ({ project }) => (
  <div className="glass-card group flex flex-col gap-5 transition hover:-translate-y-1">
    <div
      className={`relative h-40 w-full overflow-hidden rounded-xl bg-gradient-to-br ${project.tone}`}
      role="img"
      aria-label={`Thumbnail project ${project.title}`}
    >
      <div className="absolute inset-0 bg-slate-900/30"></div>
      <div className="absolute bottom-4 left-4 text-sm font-semibold text-white">
        {project.title}
      </div>
    </div>
    <div className="space-y-4">
      <p className="text-sm text-slate-600 dark:text-slate-300">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span key={tech} className="chip">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        <a className="btn-ghost" href={project.demo} target="_blank" rel="noreferrer">
          Demo
        </a>
        <a className="btn-ghost" href={project.repo} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </div>
  </div>
);

const TimelineItem = ({ item }) => (
  <div className="flex gap-5">
    <div className="flex flex-col items-center">
      <div className="h-3 w-3 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"></div>
      <div className="mt-2 h-full w-px bg-slate-300 dark:bg-slate-700"></div>
    </div>
    <div className="pb-10">
      <div className="text-sm font-semibold text-slate-900 dark:text-white">
        {item.role}
      </div>
      <div className="text-sm text-slate-500 dark:text-slate-400">
        {item.company} • {item.period}
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
        {item.summary}
      </p>
    </div>
  </div>
);

const TestimonialCard = ({ item }) => (
  <div className="glass-card">
    <p className="text-sm text-slate-600 dark:text-slate-300">"{item.quote}"</p>
    <div className="mt-4 text-sm font-semibold text-slate-900 dark:text-white">
      {item.name}
    </div>
    <div className="text-xs text-slate-500 dark:text-slate-400">{item.role}</div>
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
  const [formStatus, setFormStatus] = useState("");

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
  const themeLabel = theme === "dark" ? "Light Mode" : "Dark Mode";

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormStatus("Terima kasih! Pesanmu sudah terekam dan akan segera direspon.");
    event.currentTarget.reset();
  };

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
            <div className="text-sm font-semibold">Dani Cahya Suryanda</div>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a key={link.id} className="nav-link" href={`#${link.id}`}>
                {link.label}
              </a>
            ))}
          </nav>
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
      </header>

      <main>
        <section id="hero" className="section">
          <div className="container-base grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div data-reveal className="reveal space-y-6">
              <span className="chip">Full Stack Web Developer • 6 Tahun Pengalaman</span>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                Dani Cahya Suryanda
              </div>
              <h1 className="font-display text-4xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
                Membangun produk digital <span className="text-gradient">skalabel</span>{" "}
                dan siap tumbuh.
              </h1>
              <p className="text-base text-slate-600 dark:text-slate-300 sm:text-lg">
                Saya membantu tim dan bisnis meluncurkan aplikasi web modern dengan
                performa tinggi, UX yang rapi, dan arsitektur yang mudah dirawat.
              </p>
              <div className="flex flex-wrap gap-4">
                <a className="btn-primary" href="#projects">
                  Lihat Portfolio
                </a>
                <a className="btn-ghost" href="#contact">
                  Hubungi Saya
                </a>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-slate-600 dark:text-slate-300">
                <div>
                  <div className="text-lg font-semibold text-slate-900 dark:text-white">35+</div>
                  Project shipped
                </div>
                <div>
                  <div className="text-lg font-semibold text-slate-900 dark:text-white">12</div>
                  Produk skala startup
                </div>
                <div>
                  <div className="text-lg font-semibold text-slate-900 dark:text-white">6</div>
                  Tahun pengalaman
                </div>
              </div>
            </div>
            <div data-reveal className="reveal relative flex items-center justify-center">
              <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-cyan-400/30 via-blue-500/20 to-violet-500/30 blur-2xl"></div>
              <div className="relative rounded-[32px] border border-white/20 bg-white/60 p-6 shadow-2xl backdrop-blur dark:border-slate-800/60 dark:bg-slate-900/60">
                <img
                  src={avatar}
                  alt="Avatar Dani Cahya Suryanda"
                  className="h-64 w-64 rounded-[24px] object-cover shadow-xl animate-float"
                />
                <div className="mt-5 grid gap-3 rounded-2xl border border-slate-200/70 bg-white/80 p-4 text-sm text-slate-600 shadow-sm dark:border-slate-800/60 dark:bg-slate-950/80 dark:text-slate-200">
                  <div className="flex items-center justify-between">
                    <span>Availability</span>
                    <span className="font-semibold text-emerald-500">Open to work</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Based in</span>
                    <span className="font-semibold text-slate-900 dark:text-white">Indonesia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container-base grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div data-reveal className="reveal glass-card">
              <h2 className="section-title">Tentang Saya</h2>
              <p className="section-subtitle">
                6 tahun mengembangkan solusi full stack dari MVP hingga skala
                enterprise dengan fokus pada kualitas dan kecepatan eksekusi.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                <li>Value proposition: mempercepat time-to-market tanpa mengorbankan stabilitas.</li>
                <li>Pengalaman lintas industri: fintech, edtech, e-commerce, dan SaaS.</li>
                <li>Kolaborasi erat dengan product & design untuk UX yang konsisten.</li>
              </ul>
            </div>
            <div data-reveal className="reveal glass-card">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Keahlian Utama
              </h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                Saya menggabungkan pendekatan engineering modern, automasi CI/CD,
                dan observability untuk memastikan aplikasi tetap cepat, aman, dan mudah
                dikembangkan.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  "Arsitektur sistem & skala",
                  "Integrasi API & payment gateway",
                  "UX engineering & design systems",
                  "Performance tuning & monitoring",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200/70 bg-white/80 p-4 text-sm text-slate-700 shadow-sm dark:border-slate-800/60 dark:bg-slate-950/80 dark:text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container-base space-y-12">
            <div data-reveal className="reveal">
              <h2 className="section-title">Skills</h2>
              <p className="section-subtitle">
                Stack yang sering saya gunakan untuk membangun produk web modern end-to-end.
              </p>
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
              <h2 className="section-title">Portfolio</h2>
              <p className="section-subtitle">
                Pilihan project terbaik yang merepresentasikan kualitas dan variasi solusi.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project) => (
                <div key={project.title} data-reveal className="reveal">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="container-base grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div data-reveal className="reveal">
              <h2 className="section-title">Experience Timeline</h2>
              <p className="section-subtitle">
                Jejak karir yang menunjukkan pertumbuhan dan kontribusi strategis.
              </p>
            </div>
            <div data-reveal className="reveal glass-card">
              {timeline.map((item) => (
                <TimelineItem key={item.role} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="section">
          <div className="container-base space-y-12">
            <div data-reveal className="reveal">
              <h2 className="section-title">Testimoni</h2>
              <p className="section-subtitle">
                Pendapat klien dan rekan kerja tentang cara saya berkolaborasi.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {testimonials.map((item) => (
                <div key={item.name} data-reveal className="reveal">
                  <TestimonialCard item={item} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container-base grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div data-reveal className="reveal space-y-6">
              <h2 className="section-title">Kontak</h2>
              <p className="section-subtitle">
                Siap diskusi project baru, kolaborasi produk, atau konsultasi teknis.
              </p>
              <div className="space-y-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    className="flex items-center justify-between rounded-2xl border border-slate-200/60 bg-white/80 px-4 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800/60 dark:bg-slate-950/70 dark:text-slate-200"
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>{link.label}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{link.value}</span>
                  </a>
                ))}
              </div>
            </div>
            <div data-reveal className="reveal glass-card">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Kirim Pesan
              </h3>
              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-600 dark:text-slate-300" htmlFor="name">
                      Nama
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-100"
                      placeholder="Nama lengkap"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-600 dark:text-slate-300" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-100"
                      placeholder="nama@email.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-600 dark:text-slate-300" htmlFor="message">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-100"
                    placeholder="Ceritakan kebutuhan projectmu"
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">
                  Kirim Pesan
                </button>
                {formStatus ? (
                  <p className="text-xs text-emerald-500">{formStatus}</p>
                ) : null}
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200/60 py-10 text-sm dark:border-slate-800/60">
        <div className="container-base flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-slate-500 dark:text-slate-400">
            © 2026 Dani Cahya Suryanda. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            {navLinks.map((link) => (
              <a key={link.id} className="nav-link" href={`#${link.id}`}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
