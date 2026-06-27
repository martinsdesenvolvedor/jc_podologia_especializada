import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Treatments from "./components/Treatments";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ShieldCheck, Sparkles, Award } from "lucide-react";
import { motion } from "motion/react";

export default function App() {
  return (
    <div className="relative min-h-screen bg-obsidian selection:bg-gold-rose selection:text-white overflow-hidden">
      
      {/* Decorative Elegant Global Boarders (Luxury Frame) */}
      <div className="fixed inset-0 pointer-events-none z-50 border-4 sm:border-8 border-obsidian/5" />

      {/* Floating Sparkles Ambient Glow background */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-gold-rose/5 to-transparent pointer-events-none z-0" />

      {/* FIXED GLASS NAVBAR */}
      <Navbar />

      {/* MAIN CONTAINER */}
      <main id="app-main">
        {/* HERO BANNER SECTION (Obsidian Black & Parallax Rose Gold) */}
        <Hero />

        {/* CLINICAL STATS BAR (High Contrast Elegant Accent) */}
        <section className="bg-obsidian py-12 relative z-10 border-y border-gold-rose/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center gap-4 p-4 rounded-xl hover:bg-gold-rose/5 transition duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-gold-rose/10 flex items-center justify-center text-gold-rose flex-shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="text-center md:text-left">
                  <h4 className="font-sans text-xs uppercase tracking-widest font-bold text-white">Biossegurança Máxima</h4>
                  <p className="font-sans text-[11px] text-cream/60 font-light mt-1">Materiais 100% autoclavados e selados</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="flex flex-col md:flex-row items-center gap-4 p-4 rounded-xl hover:bg-gold-rose/5 transition duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-gold-rose/10 flex items-center justify-center text-gold-rose flex-shrink-0">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div className="text-center md:text-left">
                  <h4 className="font-sans text-xs uppercase tracking-widest font-bold text-white">Laserterapia Avançada</h4>
                  <p className="font-sans text-[11px] text-cream/60 font-light mt-1">Alta tecnologia de cicatrização e assepsia</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col md:flex-row items-center gap-4 p-4 rounded-xl hover:bg-gold-rose/5 transition duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-gold-rose/10 flex items-center justify-center text-gold-rose flex-shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div className="text-center md:text-left">
                  <h4 className="font-sans text-xs uppercase tracking-widest font-bold text-white">Atendimento Humanizado</h4>
                  <p className="font-sans text-[11px] text-cream/60 font-light mt-1">Especialista titulada com ampla vivência</p>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ABOUT THE SPECIALIST */}
        <About />

        {/* TREATMENT DYNAMIC CAROUSEL */}
        <Treatments />

        {/* CLINICAL BENEFITS / PATIENT SATISFACTION HIGHLIGHT */}
        <section className="py-20 bg-obsidian border-t border-gold-rose/10 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <span className="font-sans text-[11px] tracking-widest uppercase text-gold-rose font-bold block">Diferencial Exclusivo</span>
              <h3 className="font-serif text-3xl sm:text-4xl text-white">
                Por que escolher a <span className="font-light italic text-gold-light">JC Podologia Especializada</span>?
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left pt-6">
                
                <div className="p-6 bg-charcoal rounded-xl border border-gold-rose/15 shadow-rose-glow">
                  <h4 className="font-sans text-xs uppercase tracking-widest font-bold text-white mb-2">Foco no Pé Diabético</h4>
                  <p className="font-sans text-xs text-cream/70 leading-relaxed font-light">
                    Protocolos exclusivos de prevenção de amputações baseados nas diretrizes mais recentes da Sociedade Brasileira de Diabetes. Monitoramento constante e exames de sensibilidade precisos.
                  </p>
                </div>

                <div className="p-6 bg-charcoal rounded-xl border border-gold-rose/15 shadow-rose-glow">
                  <h4 className="font-sans text-xs uppercase tracking-widest font-bold text-white mb-2">Equipamentos de Ponta</h4>
                  <p className="font-sans text-xs text-cream/70 leading-relaxed font-light">
                    Uso de laser de baixa intensidade para bioestimulação e cicatrização acelerada, além de brocas e instrumentos de última geração, garantindo tratamentos indolores e com alta taxa de eficácia.
                  </p>
                </div>

                <div className="p-6 bg-charcoal rounded-xl border border-gold-rose/15 shadow-rose-glow">
                  <h4 className="font-sans text-xs uppercase tracking-widest font-bold text-white mb-2">Esterilização Cirúrgica</h4>
                  <p className="font-sans text-xs text-cream/70 leading-relaxed font-light">
                    Rigidíssimo controle de infecções. Todos os instrumentais são embalados em envelopes de grau cirúrgico, esterilizados em autoclave e abertos estritamente na frente do paciente.
                  </p>
                </div>

                <div className="p-6 bg-charcoal rounded-xl border border-gold-rose/15 shadow-rose-glow">
                  <h4 className="font-sans text-xs uppercase tracking-widest font-bold text-white mb-2">Tratamento Personalizado</h4>
                  <p className="font-sans text-xs text-cream/70 leading-relaxed font-light">
                    Cada paciente recebe uma ficha clínica completa com prontuário individualizado para acompanhamento evolutivo fotográfico, medicação sob indicação e as melhores práticas pós-procedimento.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION (Map, Form, Address) */}
        <Contact />
      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}
