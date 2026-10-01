import { useEffect, useRef, useState } from "react";
import {
  Home,
  User,
  Code2,
  FolderOpen,
  Briefcase,
  Star,
  Mail,
  Rocket,
  Plug,
  Database,
  Wrench,
  Monitor,
  Server,
  Smartphone,
  MapPin,
  ChevronLeft,
  ChevronRight,
  FileText,
  Truck,
  Navigation,
  MessageSquare,
  Headphones,
  ShoppingCart,
  BarChart3,
  Activity,
  Radio,
} from "lucide-react";
import reactStackIcon from "./assets/stack/react-original.svg";
import vueStackIcon from "./assets/stack/vuejs-original.svg";
import nodejsStackIcon from "./assets/stack/nodejs-original.svg";
import phpStackIcon from "./assets/stack/php-original.svg";
import pythonStackIcon from "./assets/stack/python-original.svg";
import mysqlStackIcon from "./assets/stack/mysql-original.svg";
import postgresqlStackIcon from "./assets/stack/postgresql-original.svg";
import reactNativeStackIcon from "./assets/stack/reactnative-original.svg";
import avatar from "./assets/avatar.jpg";
import aboutPhoto from "./assets/about.jpg";

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

const sectionIcons = {
  hero: Home,
  about: User,
  skills: Code2,
  projects: FolderOpen,
  experience: Briefcase,
  testimonials: Star,
  contact: Mail,
};

const skillIcons = [Rocket, Plug, Database, Wrench];

const skillGroupIcons = {
  Frontend: Monitor,
  Backend: Server,
  Database: Database,
  Mobile: Smartphone,
};

const stackIcons = {
  "React.js": reactStackIcon,
  "Vue.js": vueStackIcon,
  "Node.js (Express)": nodejsStackIcon,
  "PHP (Symfony, Laravel)": phpStackIcon,
  "Python": pythonStackIcon,
  "MySQL": mysqlStackIcon,
  "PostgreSQL": postgresqlStackIcon,
  "React Native": reactNativeStackIcon,
};

const Sidebar = ({ activeSection, labels }) => (
  <div className="w-20 h-screen fixed left-0 top-0 z-50 hidden md:flex flex-col justify-center items-center transition-all duration-300">
    {/* Dynamic SVG wave — 100% identik dengan referensi */}
    <svg
      className="absolute inset-0 w-full h-full drop-shadow-2xl z-0"
      preserveAspectRatio="none"
      viewBox="0 0 100 1000"
    >
      <defs>
        <linearGradient id="sidebarGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#450a0a" />
          <stop offset="100%" stopColor="#6A040F" />
        </linearGradient>
      </defs>
      <path
        d="M0,0 L20,0 C20,120 95,200 95,300 L95,700 C95,800 20,880 20,1000 L0,1000 Z"
        fill="url(#sidebarGradient)"
      />
    </svg>

    <div className="relative z-10 w-full flex flex-col items-center pr-1 space-y-2">
      {navLinks.map((id) => {
        const Icon = sectionIcons[id];
        const isActive = activeSection === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            title={labels[id]}
            aria-label={labels[id]}
            className={`w-10 h-10 flex items-center justify-center rounded-[14px] transition-all duration-300 relative group
              ${
                isActive
                  ? "bg-[#0a0a0a]/60 text-red-400 shadow-md border border-white/5 backdrop-blur-sm"
                  : "text-white/50 hover:text-white hover:bg-white/5"
              }`}
          >
            <Icon className="w-[18px] h-[18px]" strokeWidth={isActive ? 2.5 : 2} />
            {isActive && (
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#450a0a]"></span>
            )}
            <span className="pointer-events-none absolute left-12 px-2.5 py-1 rounded-lg bg-black/80 text-white text-xs font-medium whitespace-nowrap opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 border border-white/10 shadow-lg">
              {labels[id]}
            </span>
          </a>
        );
      })}
    </div>
  </div>
);

const skills = [
  {
    title: "Frontend",
    items: ["React.js", "Vue.js"],
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
    tone: "from-red-400/30 via-rose-500/30 to-[#6A040F]/40",
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
    tone: "from-rose-400/30 via-red-500/30 to-[#450a0a]/40",
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
    tone: "from-red-300/30 via-rose-400/30 to-red-900/40",
  },
  {
    title: {
      id: "Chatbot Penagihan",
      en: "Billing Chatbot",
    },
    client: {
      id: "Proyek internal",
      en: "Internal project",
    },
    description: {
      id: "Bot WhatsApp yang mengirim penagihan terjadwal ke client secara otomatis — tim tidak perlu lagi menagih satu per satu secara manual.",
      en: "A WhatsApp bot that sends scheduled billing reminders to clients automatically — no more chasing invoices one by one.",
    },
    role: {
      id: "Backend + frontend PHP, bot WhatsApp dibangun dengan Node.js.",
      en: "PHP backend + frontend, WhatsApp bot built with Node.js.",
    },
    tech: ["PHP", "Node.js", "WhatsApp Bot"],
    tone: "from-red-400/30 via-rose-500/30 to-[#6A040F]/40",
  },
  {
    title: {
      id: "Chatbot Customer Service",
      en: "Customer Service Chatbot",
    },
    client: {
      id: "Proyek internal",
      en: "Internal project",
    },
    description: {
      id: "Chatbot pendamping customer 24/7 — pertanyaan umum dijawab langsung, kasus yang lebih kompleks diteruskan ke tim.",
      en: "A 24/7 chatbot companion for customers — common questions answered instantly, complex cases escalated to the team.",
    },
    role: {
      id: "Backend Python, frontend React.js, database MongoDB, bot WhatsApp Node.js.",
      en: "Python backend, React.js frontend, MongoDB, Node.js WhatsApp bot.",
    },
    tech: ["Python", "React.js", "MongoDB", "Node.js"],
    tone: "from-rose-400/30 via-red-500/30 to-[#450a0a]/40",
  },
  {
    title: {
      id: "SmartCu",
      en: "SmartCu",
    },
    client: {
      id: "Produk untuk UMKM lokal",
      en: "Product for local SMEs",
    },
    description: {
      id: "E-commerce untuk UMKM lokal Indonesia — dari katalog sampai checkout, dibuat ringan supaya mudah dipakai siapa saja.",
      en: "An e-commerce platform for local Indonesian SMEs — catalog to checkout, kept lightweight so anyone can use it.",
    },
    role: {
      id: "Pengerjaan full stack menggunakan Laravel + MySQL.",
      en: "Full-stack build using Laravel + MySQL.",
    },
    tech: ["Laravel", "MySQL"],
    tone: "from-red-300/30 via-rose-400/30 to-red-900/40",
  },
  {
    title: {
      id: "Data HUB",
      en: "Data HUB",
    },
    client: {
      id: "Proyek internal",
      en: "Internal project",
    },
    description: {
      id: "Dashboard eksekutif multi-sumber — data dari beberapa database dirangkum jadi satu tampilan yang mudah dibaca manajemen.",
      en: "A multi-source executive dashboard — data from multiple databases summarized into one clear view for management.",
    },
    role: {
      id: "Backend Node.js + microservice Python, frontend React.js, database PostgreSQL.",
      en: "Node.js backend + Python microservice, React.js frontend, PostgreSQL.",
    },
    tech: ["Node.js", "Python", "React.js", "PostgreSQL"],
    tone: "from-rose-500/30 via-[#6A040F]/40 to-red-950/40",
  },
  {
    title: {
      id: "PingPulse",
      en: "PingPulse",
    },
    client: {
      id: "Proyek internal",
      en: "Internal project",
    },
    description: {
      id: "Layanan monitoring uptime untuk hardware dan IP address — tahu masalah lebih dulu, sebelum user mengeluh.",
      en: "An uptime monitoring service for hardware and IP addresses — know about issues before users do.",
    },
    role: {
      id: "Backend Node.js, frontend React.js, database PostgreSQL.",
      en: "Node.js backend, React.js frontend, PostgreSQL.",
    },
    tech: ["Node.js", "React.js", "PostgreSQL"],
    tone: "from-red-400/30 via-rose-500/30 to-[#6A040F]/40",
  },
  {
    title: {
      id: "RFID Connector",
      en: "RFID Connector",
    },
    client: {
      id: "Proyek internal",
      en: "Internal project",
    },
    description: {
      id: "Service penyambung ke UHF RFID reader — membaca tag RFID lalu meneruskannya ke sistem lain secara real-time.",
      en: "A bridge service to UHF RFID readers — reads RFID tags and forwards them to other systems in real time.",
    },
    role: {
      id: "Service Node.js dengan database SQLite.",
      en: "Node.js service with SQLite.",
    },
    tech: ["Node.js", "SQLite"],
    tone: "from-rose-400/30 via-red-500/30 to-[#450a0a]/40",
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

const projectThumbnails = {
  SILABIN: FileText,
  UCan: Truck,
  Primasen: Navigation,
  "Chatbot Penagihan": MessageSquare,
  "Billing Chatbot": MessageSquare,
  "Chatbot Customer Service": Headphones,
  "Customer Service Chatbot": Headphones,
  SmartCu: ShoppingCart,
  "Data HUB": BarChart3,
  PingPulse: Activity,
  "RFID Connector": Radio,
};

const ProjectCard = ({ project, lang, labels }) => {
  const ThumbIcon = projectThumbnails[project.title.id] || projectThumbnails[project.title.en] || FolderOpen;
  return (
  <div className="glass-card group flex flex-col gap-5 transition hover:-translate-y-1">
    <div
      className={`relative h-40 w-full overflow-hidden rounded-xl bg-gradient-to-br ${project.tone}`}
      role="img"
      aria-label={`Thumbnail project ${project.title[lang]}`}
    >
      {project.image ? (
        <img
          src={project.image}
          alt={`Tampilan aplikasi ${project.title[lang]}`}
          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]"
        />
      ) : (
        <>
          <div className="absolute inset-0 bg-slate-900/30"></div>
          <div className="absolute inset-0 opacity-30">
            <div className="h-full w-full grid-pattern"></div>
          </div>
          <div className="absolute -right-6 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl transition duration-500 group-hover:bg-white/20"></div>
          <ThumbIcon
            aria-hidden="true"
            className="absolute -bottom-5 -right-4 h-28 w-28 -rotate-6 text-white/15 transition duration-500 group-hover:rotate-0 group-hover:text-white/25"
            strokeWidth={1.2}
          />
        </>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
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
};

const TimelineItem = ({ item, lang }) => (
  <div className="flex gap-5">
    <div className="flex flex-col items-center">
      <div className="h-3 w-3 rounded-full bg-gradient-to-r from-red-500 to-[#6A040F]"></div>
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
  const [activeSection, setActiveSection] = useState("hero");
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

  // Scroll-spy untuk sidebar
  useEffect(() => {
    const sections = navLinks
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Parallax halus: satu variabel CSS, di-drive rAF saat scroll
  useEffect(() => {
    let frame = 0;
    const apply = () => {
      document.documentElement.style.setProperty(
        "--px",
        `${window.scrollY}px`
      );
      frame = 0;
    };
    const onScroll = () => {
      if (!frame) {
        frame = requestAnimationFrame(apply);
      }
    };
    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, []);

  // Parallax mouse (desktop): gerak kursor menggeser lapisan hero via --mx/--my
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) {
      return undefined;
    }
    let frame = 0;
    let lastEvent = null;
    const apply = () => {
      if (lastEvent) {
        const x = lastEvent.clientX / window.innerWidth - 0.5;
        const y = lastEvent.clientY / window.innerHeight - 0.5;
        document.documentElement.style.setProperty("--mx", x.toFixed(3));
        document.documentElement.style.setProperty("--my", y.toFixed(3));
      }
      frame = 0;
    };
    const onMove = (event) => {
      lastEvent = event;
      if (!frame) {
        frame = requestAnimationFrame(apply);
      }
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, []);

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  const toggleLang = () => setLang((prev) => (prev === "id" ? "en" : "id"));
  const themeLabel = theme === "dark" ? t.theme.light : t.theme.dark;

  // Carousel proyek: navigasi per-halaman (1 slide = 1 set kartu penuh, tidak tumpang tindih)
  const carouselRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(3);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      setVisibleCount(w >= 1280 ? 3 : w >= 640 ? 2 : 1);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  const pageCount = Math.ceil(projects.length / visibleCount);
  const currentSlide = Math.min(activeSlide, pageCount - 1);

  const handleCarouselScroll = () => {
    const el = carouselRef.current;
    if (!el || el.children.length === 0) return;
    const step = (el.children[0].offsetWidth + 24) * visibleCount;
    setActiveSlide(Math.min(Math.round(el.scrollLeft / step), pageCount - 1));
  };

  const goToSlide = (idx) => {
    const el = carouselRef.current;
    if (!el || el.children.length === 0) return;
    const clamped = Math.max(0, Math.min(idx, pageCount - 1));
    const first = el.children[0].offsetLeft;
    const targetIndex = Math.min(clamped * visibleCount, el.children.length - 1);
    const target = el.children[targetIndex];
    el.scrollTo({ left: target.offsetLeft - first, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-red-900/30 dark:bg-slate-950 dark:text-slate-100 md:pl-20">
      <Sidebar activeSection={activeSection} labels={t.nav} />
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="parallax-slow absolute -left-32 top-24 h-72 w-72 rounded-full bg-red-500/15 blur-[120px]" />
        <div className="parallax-mid absolute right-0 top-64 h-96 w-96 rounded-full bg-[#6A040F]/25 blur-[160px]" />
        <div className="parallax-slow absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-rose-400/10 blur-[140px]" />
        <div className="absolute inset-0 opacity-20 dark:opacity-10">
          <div className="h-full w-full grid-pattern"></div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur dark:border-slate-800/60 dark:bg-slate-950/70">
        <div className="container-base flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <img
              src={avatar}
              alt="Dani"
              className="h-9 w-9 rounded-full object-cover shadow-glow ring-1 ring-white/20"
            />
            <div className="text-sm font-semibold">Dani</div>
          </div>
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
          <nav className="container-base flex gap-5 overflow-x-auto pb-3 md:hidden scrollbar-none">
            {navLinks.map((id) => (
              <a key={id} className="nav-link whitespace-nowrap text-xs" href={`#${id}`}>
                {t.nav[id]}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section id="hero" className="section">
          <div className="container-base grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
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
            <div data-reveal className="reveal relative mx-auto w-full max-w-sm py-6 lg:max-w-md">
              <div className="parallax-hero absolute -inset-8 rounded-[40px] bg-gradient-to-br from-red-500/25 via-[#6A040F]/30 to-red-800/20 blur-3xl"></div>
              <div className="hero-depth-1 relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/90 shadow-2xl shadow-[#6A040F]/40">
                <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/80"></span>
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80"></span>
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80"></span>
                  <span className="ml-2 font-mono text-xs text-slate-400">dani@sakuracore — zsh</span>
                </div>
                <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-relaxed">
                  <code>
                    <span className="text-slate-500">{"// sistem operasional siap dipakai di lapangan"}</span>
                    {"\n"}
                    <span className="text-rose-400">const</span>{" "}
                    <span className="text-slate-100">dani</span>{" "}
                    <span className="text-slate-400">= {"{"}</span>
                    {"\n  "}
                    <span className="text-slate-300">fokus</span>
                    <span className="text-slate-400">: </span>
                    <span className="text-red-300">["web", "mobile", "database"]</span>
                    <span className="text-slate-400">,</span>
                    {"\n  "}
                    <span className="text-slate-300">pengalaman</span>
                    <span className="text-slate-400">: </span>
                    <span className="text-red-300">"6 tahun"</span>
                    <span className="text-slate-400">,</span>
                    {"\n  "}
                    <span className="text-slate-300">spesialisasi</span>
                    <span className="text-slate-400">: </span>
                    <span className="text-red-300">"ritase · GPS geofence · pelaporan"</span>
                    <span className="text-slate-400">,</span>
                    {"\n"}
                    <span className="text-slate-400">{"};"}</span>
                    {"\n\n"}
                    <span className="text-rose-400">deploy</span>
                    <span className="text-slate-400">(</span>
                    <span className="text-slate-300">dani</span>
                    <span className="text-slate-400">);</span>{" "}
                    <span className="text-slate-500">{"// ✓ live di lapangan"}</span>
                    {"\n"}
                    <span className="animate-pulse text-emerald-400">▍</span>
                  </code>
                </pre>
              </div>
              <div className="hero-depth-2 absolute -right-3 -top-5 flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white/85 p-3.5 pr-5 shadow-xl backdrop-blur dark:border-slate-800/70 dark:bg-slate-900/85">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                </span>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {t.hero.availabilityLabel}
                  </div>
                  <div className="text-xs font-semibold text-slate-900 dark:text-white">
                    {t.hero.availabilityValue}
                  </div>
                </div>
              </div>
              <div className="hero-depth-3 absolute -bottom-5 -left-3 flex items-center gap-2.5 rounded-2xl border border-slate-200/70 bg-white/85 p-3.5 pr-5 shadow-xl backdrop-blur dark:border-slate-800/70 dark:bg-slate-900/85">
                <MapPin className="h-4 w-4 shrink-0 text-[#b91c1c] dark:text-red-400" strokeWidth={2} />
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {t.hero.basedInLabel}
                  </div>
                  <div className="text-xs font-semibold text-slate-900 dark:text-white">
                    {t.hero.basedInValue}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container-base space-y-10">
            <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div data-reveal className="reveal">
                <div className="group relative mx-auto max-w-md overflow-hidden rounded-2xl shadow-xl ring-1 ring-[#6A040F]/30 lg:max-w-none">
                  <img
                    src={aboutPhoto}
                    alt="Foto Dani"
                    className="aspect-[3/4] w-full object-cover object-center transition duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#450a0a]/50 via-transparent to-transparent"></div>
                </div>
              </div>
              <div data-reveal className="reveal">
                <h2 className="section-title">{t.about.title}</h2>
                <p className="section-subtitle">{t.about.subtitle}</p>
                <div className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {t.about.paragraphs.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
            </div>
            <div data-reveal className="reveal">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {t.about.skillsTitle}
              </h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {t.about.skillCards.map((item, idx) => {
                  const Icon = skillIcons[idx];
                  return (
                    <div
                      key={item.title}
                      className="group flex flex-col rounded-2xl border border-slate-200/70 bg-white/80 p-4 text-sm text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#6A040F]/40 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-950/80 dark:text-slate-200 dark:hover:border-[#6A040F]/60"
                    >
                      {Icon && (
                        <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#6A040F]/20 bg-[#6A040F]/10 text-[#b91c1c] transition-colors group-hover:bg-[#6A040F]/20 dark:text-red-400">
                          <Icon className="h-4 w-4" strokeWidth={2} />
                        </div>
                      )}
                      <div className="text-sm font-semibold text-slate-900 dark:text-white">
                        {item.title}
                      </div>
                      <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
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
              {skills.map((group) => {
                const GroupIcon = skillGroupIcons[group.title];
                return (
                  <div key={group.title} data-reveal className="reveal glass-card space-y-4">
                    <div className="flex items-center gap-3">
                      {GroupIcon && (
                        <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#6A040F]/20 bg-[#6A040F]/10 text-[#b91c1c] dark:text-red-400">
                          <GroupIcon className="h-4 w-4" strokeWidth={2} />
                        </div>
                      )}
                      <div className="text-sm font-semibold text-slate-900 dark:text-white">
                        {group.title}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span key={item} className="chip inline-flex items-center gap-1.5">
                          {stackIcons[item] && (
                            <img
                              src={stackIcons[item]}
                              alt=""
                              aria-hidden="true"
                              className="h-3.5 w-3.5"
                            />
                          )}
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container-base space-y-12">
            <div data-reveal className="reveal">
              <h2 className="section-title">{t.projectsSection.title}</h2>
              <p className="section-subtitle">{t.projectsSection.subtitle}</p>
            </div>
            <div className="relative">
              <div
                ref={carouselRef}
                onScroll={handleCarouselScroll}
                className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 scrollbar-none"
              >
                {projects.map((project) => (
                  <div
                    key={project.title.id}
                    data-reveal
                    className="reveal w-[85%] shrink-0 snap-start sm:w-[calc((100%-1.5rem)/2)] xl:w-[calc((100%-3rem)/3)]"
                  >
                    <ProjectCard
                      project={project}
                      lang={lang}
                      labels={t.projectsSection.labels}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {Array.from({ length: pageCount }).map((_, idx) => (
                    <button
                      key={`dot-page-${idx}`}
                      type="button"
                      aria-label={`Halaman ${idx + 1}`}
                      onClick={() => goToSlide(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        currentSlide === idx
                          ? "w-6 bg-[#6A040F] dark:bg-red-500"
                          : "w-2 bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-600"
                      }`}
                    ></button>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    aria-label={lang === "id" ? "Proyek sebelumnya" : "Previous project"}
                    onClick={() => goToSlide(currentSlide - 1)}
                    disabled={currentSlide === 0}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:border-[#6A040F] hover:text-[#6A040F] disabled:opacity-30 disabled:hover:border-slate-300 disabled:hover:text-slate-700 dark:border-slate-700 dark:text-slate-200 dark:hover:border-red-500 dark:hover:text-red-400 dark:disabled:hover:border-slate-700 dark:disabled:hover:text-slate-200"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    aria-label={lang === "id" ? "Proyek berikutnya" : "Next project"}
                    onClick={() => goToSlide(currentSlide + 1)}
                    disabled={currentSlide === pageCount - 1}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:border-[#6A040F] hover:text-[#6A040F] disabled:opacity-30 disabled:hover:border-slate-300 disabled:hover:text-slate-700 dark:border-slate-700 dark:text-slate-200 dark:hover:border-red-500 dark:hover:text-red-400 dark:disabled:hover:border-slate-700 dark:disabled:hover:text-slate-200"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
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
