import { motion } from "motion/react";
import { ArrowRight, Award, ShieldCheck, HeartPulse } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-obsidian py-20"
    >
      {/* Background Image with Parallax & Subtle Zoom */}
      <div className="absolute inset-0 z-0 opacity-40">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.45 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src="/clinical_hero_1782521837887.jpg"
            alt="Consultório Premium JC Podologia"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        {/* Obsidian Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/40 to-transparent" />
      </div>

      {/* Floating Ambient Rose Gold Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-rose/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold-light/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />

      {/* Hero Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-8 text-left">
            
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-deep/30 border border-gold-rose/20 text-gold-light text-xs font-semibold tracking-widest uppercase"
            >
              <Award className="w-4 h-4 text-gold-rose" />
              Alta Performance & Rigor Clínico
            </motion.div>

            {/* Title */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none"
              >
                JC Podologia:<br />
                <span className="text-gradient-rose font-light italic">Excelência em Saúde</span> dos Pés
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-sans text-cream/80 text-base sm:text-lg max-w-2xl font-light leading-relaxed"
              >
                Liderado por <strong className="text-white font-medium">Jucilene Camara</strong>, graduada em podologia e especialista dedicada em <span className="text-gold-light underline decoration-gold-rose/50 underline-offset-4">Pé Diabético e Tratamento de Feridas Complexas</span>. Restabelecemos a sua qualidade de vida através de tratamentos integrativos de altíssimo padrão clínico.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="https://wa.me/5500000000000?text=Olá! Gostaria de agendar uma avaliação com a podóloga Jucilene Camara."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-gold-dark to-gold-rose hover:from-gold-rose hover:to-gold-light text-white font-sans text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 shadow-rose-glow hover:shadow-rose-glow-lg font-bold"
              >
                Agende seu Cuidado Especializado
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => scrollToSection("#tratamentos")}
                className="flex items-center justify-center gap-2 border border-cream/20 hover:border-gold-rose/60 hover:bg-gold-rose/5 text-cream hover:text-white font-sans text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 font-medium cursor-pointer"
              >
                Conhecer Tratamentos
              </button>
            </motion.div>

            {/* Micro Pillars */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="grid grid-cols-3 gap-6 pt-6 border-t border-cream/10 w-full"
            >
              <div className="flex flex-col space-y-1">
                <div className="flex items-center gap-1.5 text-gold-rose">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="font-sans text-[10px] tracking-widest uppercase font-semibold">Higiene Estéril</span>
                </div>
                <span className="font-sans text-[11px] text-cream/50 font-light">Normas hospitalares rígidas</span>
              </div>
              <div className="flex flex-col space-y-1">
                <div className="flex items-center gap-1.5 text-gold-rose">
                  <HeartPulse className="w-4 h-4" />
                  <span className="font-sans text-[10px] tracking-widest uppercase font-semibold">Pé Diabético</span>
                </div>
                <span className="font-sans text-[11px] text-cream/50 font-light">Protocolos preventivos especializados</span>
              </div>
              <div className="flex flex-col space-y-1">
                <div className="flex items-center gap-1.5 text-gold-rose">
                  <Award className="w-4 h-4" />
                  <span className="font-sans text-[10px] tracking-widest uppercase font-semibold">Cicatrização</span>
                </div>
                <span className="font-sans text-[11px] text-cream/50 font-light">Laser e coberturas avançadas</span>
              </div>
            </motion.div>

          </div>

          {/* Right Visual Badge Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
              className="relative w-72 sm:w-80 lg:w-96 aspect-square rounded-full p-[1px] bg-gradient-to-tr from-gold-dark via-gold-rose/30 to-gold-light/20 shadow-rose-glow-lg flex items-center justify-center bg-obsidian overflow-hidden"
            >
            
              {/* Inner Circle Glow */}
              <div className="absolute inset-2 rounded-full bg-gradient-to-b from-charcoal to-obsidian flex flex-col items-center justify-center p-8 text-center border border-gold-rose/15">
                <img
                  src="/Screenshot_20260626-214638.jpg"
                  alt="JC Podologia Especializada Logo"
                  className="w-44 h-44 object-contain mb-4 filter drop-shadow-[0_0_15px_rgba(197,143,132,0.25)]"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const textBadge = document.getElementById("hero-logo-fallback");
                    if (textBadge) textBadge.style.display = "block";
                  }}
                />
                
                {/* Fallback typography */}
                <div id="hero-logo-fallback" className="hidden mb-4">
                  <div className="font-serif text-5xl font-extrabold text-gold-rose tracking-wider">JC</div>
                  <div className="font-sans text-xs tracking-widest uppercase text-cream/60 mt-2">Podologia Especializada</div>
                </div>

                <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-gold-rose/40 to-transparent my-2" />
                <span className="font-sans text-[10px] uppercase tracking-widest text-gold-light font-bold">
                  Dra. Jucilene Camara
                </span>
                <span className="font-sans text-[9px] text-cream/60 tracking-widest mt-1">
                  GRADUADA & ESPECIALISTA EM FERIDAS
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
