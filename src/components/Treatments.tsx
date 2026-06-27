import { useState } from "react";
import { ChevronLeft, ChevronRight, Activity, Sparkles, Check, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Treatment {
  id: string;
  title: string;
  tagline: string;
  description: string;
  protocols: string[];
  duration: string;
  image: string;
  icon: string;
}

export default function Treatments() {
  const [activeIndex, setActiveIndex] = useState(0);

  const treatments: Treatment[] = [
    {
      id: "pe-diabetico",
      title: "Pé Diabético",
      tagline: "Protocolo Preventivo & Rastreio de Sensibilidade",
      description: "Avaliação diagnóstica profunda para a preservação de membros inferiores em pacientes diabéticos. Realizamos rastreamento de neuropatias, testes de sensibilidade neurológica com monofilamento de Semmes-Weinstein, aferição circulatória periférica, hidratação profunda para evitar fissuras e orientação integral de hábitos e calçados.",
      protocols: [
        "Teste de sensibilidade neurológica estesiométrica",
        "Palpação de pulsos distais (perfusão vascular)",
        "Desbastamento preventivo de calosidades (redução de pressão)",
        "Hidratação terapêutica profunda contra xerose e fissuras",
        "Prescrição de diretrizes preventivas para cuidados domiciliares"
      ],
      duration: "45 a 60 minutos",
      image: "/diabetic_care_1782521855399.jpg",
      icon: "🩺"
    },
    {
      id: "tratamento-feridas",
      title: "Tratamento de Feridas",
      tagline: "Cicatrização Avançada & Laserterapia",
      description: "Tratamento de lesões ulcerosas, feridas pós-cirúrgicas ou crônicas nos pés. Jucilene Camara emprega coberturas de alta tecnologia (hidrogéis, alginatos, curativos regenerativos) associadas à Laserterapia Fotodinâmica de baixa intensidade (LLLT) para acelerar a atividade celular de regeneração e bloquear processos infecciosos.",
      protocols: [
        "Assepsia cirúrgica e desbridamento preciso de tecido desvitalizado",
        "Aplicação de coberturas bioativas de alta capacidade regenerativa",
        "Laserterapia de baixa intensidade (bioestimulação celular)",
        "Terapia fotodinâmica antimicrobiana localizada",
        "Controle rigoroso de umidade e pH da lesão"
      ],
      duration: "60 minutos",
      image: "/nail_treatment_1782521883186.jpg",
      icon: "⚡"
    },
    {
      id: "onicocriptose",
      title: "Onicocriptose",
      tagline: "Unha Encravada com Alívio Imediato da Dor",
      description: "Resolução cirúrgica conservadora para unhas encravadas (onicocriptose) com ou sem infecção (granuloma). Técnica de espículaectomia minimamente invasiva, retirando somente o pedaço de unha que lesiona a pele sob anestesia tópica de alto impacto. Aplicação de órteses (ortoniquia) para reeducar o crescimento correto.",
      protocols: [
        "Espículaectomia de alta precisão (indolor e conservadora)",
        "Remoção cirúrgica de espículas e drenagem de granulomas",
        "Esterilização do sulco ungueal com alta frequência ou laser",
        "Curativo oclusivo cicatrizante de rápida recuperação",
        "Aplicação de órteses de tração física para reeducar o crescimento"
      ],
      duration: "40 a 50 minutos",
      image: "/diabetic_care_1782521855399.jpg",
      icon: "✂️"
    },
    {
      id: "onicomicose",
      title: "Onicomicose",
      tagline: "Combate Definitivo a Fungos com Laserterapia",
      description: "Protocolo clínico focado na eliminação profunda das colônias de fungos que destroem as unhas. Combina o desbridamento físico e afinamento mecânico das unhas infectadas à terapia fotodinâmica com laser, destruindo as estruturas celulares fúngicas termicamente sem dor ou necessidade de medicação oral sobrecarregada.",
      protocols: [
        "Desbridamento mecânico e remoção de queratina parasitada",
        "Assepsia profunda e aplicação de fotossensibilizadores específicos",
        "Aplicação de laser terapêutico para eliminação térmica do fungo",
        "Aplicação de agentes antifúngicos tópicos de alta permeabilidade",
        "Monitoramento periódico do crescimento saudável da lâmina ungueal"
      ],
      duration: "30 a 45 minutos",
      image: "/nail_treatment_1782521883186.jpg",
      icon: "🧪"
    },
    {
      id: "podogeriatria",
      title: "Podogeriatria",
      tagline: "Saúde e Conforto na Melhor Idade",
      description: "Cuidado podológico adaptado para as alterações biológicas dos pés de pacientes idosos. Atendimento ultra-delicado focado na remoção de calos dolorosos, corte seguro de unhas espessas (onicogrifose) para evitar lesões, prevenção de quedas pela melhora de apoio e hidratação profunda de peles com alta fragilidade dérmica.",
      protocols: [
        "Corte técnico e seguro de unhas hipertróficas (espessas)",
        "Remoção delicada de hiperqueratoses e calosidades senis",
        "Avaliação biomecânica do apoio plantar para melhora do equilíbrio",
        "Massagem circulatória estimulante e relaxante",
        "Hidratação profunda com ativos emolientes e cicatrizantes"
      ],
      duration: "50 a 60 minutos",
      image: "/podogeriatria_1782521868884.jpg",
      icon: "👴"
    },
    {
      id: "calos-calosidades",
      title: "Calos e Calosidades",
      tagline: "Desbastamento Técnico e Remoção Indolor",
      description: "Tratamento de hiperqueratoses geradas por pressões ou atritos constantes nos calcanhares, plantas ou dedos. Remoção cirúrgica indolor com lâminas estéreis e fresas micromotoras finas, aliviando de imediato a pressão e dor ao caminhar. Inclui identificação biomecânica das causas físicas da fricção excessiva.",
      protocols: [
        "Desbastamento cirúrgico de camadas de queratina acumulada",
        "Enucleação precisa do núcleo doloroso do calo",
        "Suavização mecânica com lixas micromotoras esterilizadas",
        "Aplicação de proteções de silicone ou órteses de amortecimento",
        "Prescrição de cremes de ureia de alta concentração recomendados"
      ],
      duration: "30 a 45 minutos",
      image: "/podogeriatria_1782521868884.jpg",
      icon: "👣"
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % treatments.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + treatments.length) % treatments.length);
  };

  const activeTreatment = treatments[activeIndex];

  return (
    <section id="tratamentos" className="py-24 bg-charcoal text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-rose/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-dark/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-sans text-[11px] tracking-widest uppercase text-gold-rose font-bold block">
            Tratamentos Clínicos de Elite
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl tracking-tight">
            Especialidades com <span className="font-light italic text-gold-light">Rigor Científico</span>
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-gold-rose to-transparent mx-auto mt-4" />
          <p className="font-sans text-cream/70 text-xs sm:text-sm font-light leading-relaxed">
            Seus pés são a sua base de sustentação. Oferecemos protocolos estéreis e tecnológicos, focados na prevenção de amputações e alívio imediato da dor.
          </p>
        </div>

        {/* Carousel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Quick Selection Sidebar (List of treatments) */}
          <div className="lg:col-span-4 flex flex-col space-y-3">
            <span className="font-sans text-[10px] tracking-widest uppercase text-cream/40 font-bold mb-2 block">
              Menu de Especialidades
            </span>
            {treatments.map((t, index) => (
              <button
                key={t.id}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center gap-4 group cursor-pointer ${
                  index === activeIndex
                    ? "bg-gradient-to-r from-gold-deep/40 to-gold-rose/10 border-gold-rose shadow-rose-glow"
                    : "bg-obsidian/40 border-gold-rose/10 hover:border-gold-rose/30 hover:bg-obsidian/60"
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg shadow-inner ${
                  index === activeIndex ? "bg-gold-rose text-white" : "bg-charcoal text-cream/60 group-hover:text-gold-rose"
                }`}>
                  {t.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className={`font-sans text-xs uppercase tracking-widest font-bold truncate ${
                    index === activeIndex ? "text-white" : "text-cream/70 group-hover:text-cream"
                  }`}>
                    {t.title}
                  </h3>
                  <span className={`text-[10px] truncate block ${
                    index === activeIndex ? "text-gold-light" : "text-cream/40"
                  }`}>
                    {t.tagline}
                  </span>
                </div>
                <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${
                  index === activeIndex ? "text-gold-rose translate-x-1" : "text-cream/20 group-hover:text-cream/50 group-hover:translate-x-1"
                }`} />
              </button>
            ))}
          </div>

          {/* Active Treatment Card Details with Carousel Animation */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="glass-dark rounded-2xl overflow-hidden border border-gold-rose/25 shadow-rose-glow-lg flex flex-col md:grid md:grid-cols-12"
              >
                {/* Visual side of active card */}
                <div className="md:col-span-5 relative aspect-square md:aspect-auto md:h-full min-h-[250px] bg-obsidian">
                  <img
                    src={activeTreatment.image}
                    alt={activeTreatment.title}
                    className="w-full h-full object-cover opacity-85"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-obsidian/30 md:to-obsidian" />
                  
                  {/* Floating treatment details badge */}
                  <div className="absolute top-4 left-4 bg-obsidian/85 backdrop-blur-md border border-gold-rose/30 px-3 py-1.5 rounded-md text-gold-light font-sans text-[10px] tracking-widest uppercase font-bold">
                    ⏱️ Aprox. {activeTreatment.duration}
                  </div>
                </div>

                {/* Info side of active card */}
                <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  
                  {/* Title & Tagline */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-gold-rose" />
                      <span className="font-sans text-[10px] tracking-widest uppercase text-gold-light font-bold">
                        Destaque Clínico
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl tracking-tight text-white font-medium">
                      {activeTreatment.title}
                    </h3>
                    <p className="font-sans text-xs italic text-gold-rose tracking-wider font-light">
                      {activeTreatment.tagline}
                    </p>
                    <div className="h-[1px] w-12 bg-gold-rose/30 mt-2" />
                  </div>

                  {/* Description */}
                  <p className="font-sans text-cream/80 text-xs sm:text-sm font-light leading-relaxed">
                    {activeTreatment.description}
                  </p>

                  {/* Scientific protocols */}
                  <div className="space-y-2.5">
                    <span className="font-sans text-[10px] tracking-widest uppercase text-cream/40 font-bold block">
                      Protocolos Clínicos Aplicados:
                    </span>
                    <ul className="space-y-1.5">
                      {activeTreatment.protocols.map((protocol, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-cream/80 font-light">
                          <Check className="w-3.5 h-3.5 text-gold-rose mt-0.5 flex-shrink-0" />
                          <span>{protocol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Actions (prev/next + booking) */}
                  <div className="pt-4 border-t border-gold-rose/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    
                    {/* Navigation Buttons */}
                    <div className="flex items-center gap-2.5 w-full sm:w-auto justify-center sm:justify-start">
                      <button
                        onClick={handlePrev}
                        className="w-9 h-9 rounded-full border border-gold-rose/20 hover:border-gold-rose/60 bg-obsidian/40 hover:bg-gold-rose/10 flex items-center justify-center text-cream hover:text-white transition-all cursor-pointer"
                        aria-label="Anterior"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={handleNext}
                        className="w-9 h-9 rounded-full border border-gold-rose/20 hover:border-gold-rose/60 bg-obsidian/40 hover:bg-gold-rose/10 flex items-center justify-center text-cream hover:text-white transition-all cursor-pointer"
                        aria-label="Próximo"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                      <span className="font-sans text-[10px] text-cream/40 tracking-wider ml-1">
                        {activeIndex + 1} / {treatments.length}
                      </span>
                    </div>

                    {/* Book Specific Treatment */}
                    <a
                      href={`https://wa.me/5500000000000?text=Olá! Gostaria de agendar o tratamento específico de '${activeTreatment.title}' com a podóloga Jucilene Camara.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto text-center bg-gradient-to-r from-gold-dark to-gold-rose hover:from-gold-rose hover:to-gold-light text-white font-sans text-[10px] uppercase tracking-widest font-bold px-6 py-3 rounded-full transition-all duration-300 shadow-rose-glow"
                    >
                      Agendar {activeTreatment.title}
                    </a>

                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
