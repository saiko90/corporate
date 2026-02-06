'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from 'framer-motion';
import {
  MapPin,
  Clock,
  Users,
  Building2,
  Mic2,
  Camera,
  ChevronDown,
  Check,
  X,
  Navigation,
  Sparkles,
  Calendar,
  Briefcase,
  Linkedin,
  ArrowRight,
  ShieldCheck,
  QrCode,
} from 'lucide-react';

// --- CONFIGURATION CORPORATE ---
const DATA = {
  event: 'NEXUS SUMMIT 2026',
  tagline: 'Shaping the Future of Finance',
  date: '24 Septembre 2026',
  place: 'SwissTech Convention Center, Lausanne',
  vision:
    "Une rencontre exclusive réservée aux leaders de l'industrie. Pas de streaming, pas de replay. Ce qui se dit au Nexus reste au Nexus. Une opportunité unique de redéfinir les standards de demain.",
  images: {
    hero: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1920&auto=format&fit=crop', // Crowd dark / concert style
    vision:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1920&auto=format&fit=crop', // Business man silhouette
    venue:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop', // Architecture modern
  },
  speakers: [
    {
      name: 'Sarah Connor',
      role: 'CEO, CyberDyne',
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&fit=crop',
    },
    {
      name: 'Marc Zuckerberg',
      role: 'Metaverse Architect',
      img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&fit=crop',
    },
    {
      name: 'Elon Musk',
      role: 'Founder, SpaceX',
      img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&fit=crop',
    },
    {
      name: 'Sheryl Sandberg',
      role: 'COO, LeanIn',
      img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&fit=crop',
    },
  ],
};

export default function CorporatePage() {
  // --- GESTION ACCÈS ---
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const SECRET_PASS = 'VIP2026';

  const handleLogin = (e) => {
    e.preventDefault();
    if (passwordInput.toUpperCase() === SECRET_PASS) {
      setIsAuthenticated(true);
    } else {
      setErrorMsg("Code d'accréditation invalide.");
    }
  };

  // --- ÉTATS ---
  const [isRsvpOpen, setRsvpOpen] = useState(false);
  const containerRef = useRef(null);

  // SI PAS CONNECTÉ -> ÉCRAN LOGIN CORPORATE
  if (!isAuthenticated) {
    return (
      <div className="h-screen w-full bg-slate-950 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-950 to-slate-950" />

        <div className="max-w-md w-full relative z-10">
          <div className="flex justify-center mb-6">
            <ShieldCheck className="w-12 h-12 text-indigo-500 animate-pulse" />
          </div>
          <p className="text-indigo-400 text-xs uppercase tracking-[0.3em] mb-4 font-bold">
            Accès Sécurisé
          </p>
          <h1 className="text-3xl md:text-5xl font-sans font-bold text-white mb-2 tracking-tighter">
            {DATA.event}
          </h1>
          <p className="text-slate-500 text-sm mb-12">Portal Invité</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-sm px-6 py-4 text-center text-white focus:border-indigo-500 outline-none transition-colors tracking-widest placeholder:text-slate-700 font-mono"
                placeholder="ENTER ACCESS CODE"
              />
            </div>
            {errorMsg && (
              <p className="text-red-400 text-xs uppercase tracking-wider">
                {errorMsg}
              </p>
            )}
            <button className="w-full bg-indigo-600 text-white font-bold py-4 rounded-sm hover:bg-indigo-500 transition-colors uppercase tracking-widest text-xs flex items-center justify-center gap-2">
              <QrCode size={16} /> Authentification
            </button>
          </form>
          <p className="mt-8 text-slate-700 text-[10px] uppercase tracking-widest">
            Powered by NeoCard Corporate
          </p>
        </div>
      </div>
    );
  }

  // SI CONNECTÉ -> LE SITE
  return (
    <div
      ref={containerRef}
      className="bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500 selection:text-white overflow-x-hidden"
    >
      <Hero />

      {/* COMPTE A REBOURS */}
      <Countdown />

      {/* --- LA VISION --- */}
      <section className="py-24 bg-white text-slate-900 relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 text-left">
              <span className="text-indigo-600 font-bold uppercase tracking-widest text-xs mb-4 block flex items-center gap-2">
                <Sparkles size={14} /> The Vision
              </span>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight leading-none">
                Redéfinir <br />
                l'Excellence.
              </h2>
              <p className="text-xl leading-relaxed text-slate-600 font-light mb-8 border-l-4 border-indigo-600 pl-6">
                "{DATA.vision}"
              </p>
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div>
                  <h4 className="text-4xl font-bold text-slate-900 mb-1">
                    250+
                  </h4>
                  <p className="text-xs uppercase tracking-widest text-slate-500">
                    Invités VIP
                  </p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold text-slate-900 mb-1">12</h4>
                  <p className="text-xs uppercase tracking-widest text-slate-500">
                    Pays Représentés
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative h-[500px]">
              <div className="absolute inset-0 bg-indigo-600/10 -translate-x-4 -translate-y-4 z-0" />
              <motion.img
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                src={DATA.images.vision}
                className="relative z-10 w-full h-full object-cover grayscale shadow-2xl"
                alt="Vision"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- INTERVENANTS (Remplacement Galerie) --- */}
      <section className="py-24 bg-slate-900 relative border-t border-slate-800">
        <div className="container mx-auto px-6 relative z-10 max-w-6xl">
          <SectionTitle
            subtitle="Excellence"
            title="Keynote Speakers"
            light={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {DATA.speakers.map((speaker, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-96 overflow-hidden bg-slate-800 cursor-pointer"
              >
                <img
                  src={speaker.img}
                  alt={speaker.name}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {speaker.name}
                  </h3>
                  <p className="text-indigo-400 text-xs uppercase tracking-wider font-bold mb-4">
                    {speaker.role}
                  </p>
                  <div className="w-8 h-1 bg-indigo-600 group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- AGENDA --- */}
      <section className="py-24 bg-slate-950 relative">
        <div className="container mx-auto px-6 relative z-10 max-w-3xl">
          <div className="text-center mb-16">
            <span className="text-indigo-500 font-bold uppercase tracking-widest text-xs mb-2 block">
              Timeline
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              L'Agenda
            </h2>
          </div>

          <div className="relative border-l border-indigo-900/50 ml-4 md:ml-0 space-y-12">
            <TimelineItem
              time="09:00"
              title="Welcome Coffee"
              desc="Réseautage & Enregistrement."
              icon={<Users />}
            />
            <TimelineItem
              time="10:30"
              title="Keynote d'Ouverture"
              desc="L'avenir de l'IA générative dans l'industrie."
              icon={<Mic2 />}
              active={true}
            />
            <TimelineItem
              time="12:30"
              title="Networking Lunch"
              desc="Buffet gastronomique par le Chef Rochat."
              icon={<Building2 />}
            />
            <TimelineItem
              time="14:30"
              title="Round Tables"
              desc="Ateliers stratégiques en petits groupes."
              icon={<Briefcase />}
            />
            <TimelineItem
              time="17:00"
              title="Closing Cocktail"
              desc="Champagne & Closing remarks."
              icon={<Sparkles />}
            />
          </div>
        </div>
      </section>

      {/* --- INFO LIEU --- */}
      <ParallaxSection image={DATA.images.venue} text="The Place to Be" />

      <section className="py-20 bg-white text-slate-900 text-center">
        <MapPin className="w-10 h-10 text-indigo-600 mx-auto mb-6" />
        <h2 className="text-3xl font-bold mb-2">{DATA.place}</h2>
        <p className="text-slate-500 mb-8">
          Route Louis-Favre 2, 1024 Ecublens
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-8 py-3 bg-slate-900 text-white rounded-sm hover:bg-indigo-600 transition-colors flex items-center gap-2 uppercase text-xs font-bold tracking-widest">
            <Navigation size={14} /> Plan d'accès
          </button>
          <button className="px-8 py-3 border border-slate-300 text-slate-900 rounded-sm hover:border-indigo-600 hover:text-indigo-600 transition-colors flex items-center gap-2 uppercase text-xs font-bold tracking-widest">
            <Calendar size={14} /> Add to Calendar
          </button>
        </div>
      </section>

      {/* --- RSVP STICKY BAR --- */}
      <div className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent pt-12 flex justify-center pointer-events-none">
        <motion.button
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setRsvpOpen(true)}
          className="pointer-events-auto bg-indigo-600 text-white px-10 py-4 rounded-sm shadow-[0_0_30px_rgba(79,70,229,0.4)] flex items-center gap-3 font-bold uppercase tracking-widest text-sm hover:bg-indigo-500 transition-colors"
        >
          <QrCode className="w-5 h-5" /> Confirmer Accréditation
        </motion.button>
      </div>

      <footer className="bg-slate-950 py-12 text-center border-t border-white/5 pb-32">
        <h1 className="font-bold text-2xl text-white mb-2">{DATA.event}</h1>
        <p className="text-slate-600 text-xs uppercase tracking-widest">
          Powered by NeoCard Corporate Solutions
        </p>
      </footer>

      <AnimatePresence>
        {isRsvpOpen && <RsvpOverlay onClose={() => setRsvpOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}

// --- SOUS-COMPOSANTS ---

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 500]);
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-slate-950">
      <motion.div style={{ y }} className="absolute inset-0 z-0 opacity-40">
        <img
          src={DATA.images.hero}
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-indigo-900/20" />
      </motion.div>
      <div className="relative z-20 text-center px-4 max-w-4xl">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="inline-block border border-indigo-500/30 px-4 py-1 rounded-sm mb-8 bg-indigo-900/10 backdrop-blur-md">
            <span className="text-indigo-400 text-xs uppercase tracking-[0.3em] font-bold">
              {DATA.date} — Lausanne
            </span>
          </div>
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tighter leading-none">
            SHAPING THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              FUTURE.
            </span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto">
            {DATA.tagline}
          </p>
        </motion.div>
      </div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-12 text-indigo-500 z-20"
      >
        <ChevronDown />
      </motion.div>
    </div>
  );
}

function SectionTitle({ subtitle, title, light = false }) {
  return (
    <div className="text-center mb-8">
      <span className="text-indigo-500 uppercase tracking-widest text-xs font-bold mb-2 block">
        {subtitle}
      </span>
      <h2
        className={`text-3xl md:text-5xl font-bold ${
          light ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>
    </div>
  );
}

function TimelineItem({ time, title, desc, icon, active = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row md:items-center gap-6 group relative pl-8 md:pl-0"
    >
      {/* Dot on timeline */}
      <div
        className={`absolute left-[-5px] md:left-auto md:right-full md:mr-8 w-3 h-3 rounded-full ${
          active
            ? 'bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]'
            : 'bg-slate-700'
        }`}
      />

      <div className="md:w-32 text-indigo-400 font-mono text-sm font-bold flex-shrink-0">
        {time}
      </div>

      <div className="bg-white/5 border border-white/10 p-6 rounded-sm w-full hover:border-indigo-500/50 transition-colors flex items-start gap-4">
        <div
          className={`p-3 rounded-sm ${
            active ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'
          }`}
        >
          {icon}
        </div>
        <div>
          <h4 className="text-xl font-bold text-white mb-1">{title}</h4>
          <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
        </div>
      </div>
    </motion.div>
  );
}

function ParallaxSection({ image, text }) {
  return (
    <div className="relative h-[50vh] overflow-hidden flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-slate-900/80" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20"
      >
        <h3 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter text-center border-4 border-white p-8">
          {text}
        </h3>
      </motion.div>
    </div>
  );
}

function Countdown() {
  // Version statique pour démo
  return (
    <div className="py-8 bg-indigo-900/20 border-y border-indigo-500/10 backdrop-blur-sm">
      <div className="flex justify-center gap-8 md:gap-20 text-center">
        {['04', '12', '45', '10'].map((val, i) => (
          <div key={i} className="flex flex-col">
            <span className="text-3xl md:text-5xl font-mono font-bold text-white">
              {val}
            </span>
            <span className="text-[10px] uppercase text-indigo-400 tracking-widest">
              {['Jours', 'Heures', 'Min', 'Sec'][i]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function RsvpOverlay({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4"
    >
      <div className="w-full max-w-lg bg-white rounded-sm overflow-hidden shadow-2xl">
        <div className="bg-slate-900 p-6 flex justify-between items-center text-white sticky top-0 z-10 border-b border-indigo-500">
          <div>
            <h3 className="font-bold text-xl text-white">Accréditation</h3>
            <p className="text-xs text-indigo-400 uppercase tracking-widest mt-1">
              Confirmez votre présence
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X />
          </button>
        </div>

        <div className="p-8 space-y-6 bg-slate-50">
          <div>
            <label className="block text-xs font-bold text-slate-500 mb-1 uppercase">
              Nom Complet
            </label>
            <input
              type="text"
              className="w-full border border-slate-300 rounded-sm p-3 bg-white focus:border-indigo-500 outline-none text-slate-900"
              placeholder="Elon Musk"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-500 mb-1 uppercase">
              Entreprise
            </label>
            <input
              type="text"
              className="w-full border border-slate-300 rounded-sm p-3 bg-white focus:border-indigo-500 outline-none text-slate-900"
              placeholder="SpaceX"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-500 mb-1 uppercase">
              Email Professionnel
            </label>
            <input
              type="email"
              className="w-full border border-slate-300 rounded-sm p-3 bg-white focus:border-indigo-500 outline-none text-slate-900"
              placeholder="elon@spacex.com"
            />
          </div>

          <div className="pt-4">
            <label className="flex items-center gap-3 p-4 border border-indigo-100 bg-indigo-50 rounded-sm cursor-pointer">
              <input
                type="checkbox"
                className="w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500"
                defaultChecked
              />
              <span className="text-xs font-bold text-slate-700">
                Je serai présent au Dîner de Gala (19:00)
              </span>
            </label>
          </div>

          <button className="w-full bg-indigo-600 text-white font-bold py-4 rounded-sm hover:bg-indigo-700 transition-all shadow-lg uppercase tracking-widest text-xs flex justify-center gap-2">
            Générer mon Pass <QrCode size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
