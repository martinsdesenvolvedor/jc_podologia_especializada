import { motion } from "motion/react";
import { Award, GraduationCap, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function About() {
  const achievements = [
    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Graduação em Podologia",
      description: "Sólida base acadêmica com foco em anatomia, fisiologia e patologias cutâneas e ungueais dos pés."
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Especialista em Pé Diabético",
      description: "Capacitação avançada em prevenção, diagnóstico de neuropatias, testes de sensibilidade e condutas para evitar úlceras."
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Tratamento Avançado de Feridas",
      description: "Habilitação em curativos especiais, coberturas bioativas e laserterapia de baixa intensidade para cicatrização acelerada."
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-obsidian relative overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-gold-rose/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-0 top-1/4 w-80 h-80 bg-gold-light/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Image Column */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative group"
            >
              {/* Outer decorative border box */}
              <div className="absolute -inset-3 rounded-2xl border border-gold-rose/20 translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500" />
              
              {/* Main Image Container */}
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-rose-glow bg-charcoal border border-gold-rose/10">
                <img
                  src="/diabetic_care_1782521855399.jpg"
                  alt="Jucilene Camara em atendimento especializado de podologia"
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating clinical excellence badge */}
                <div className="absolute bottom-6 left-6 right-6 glass-dark rounded-xl p-4 border border-gold-rose/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold-deep flex items-center justify-center text-gold-rose shadow-inner">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-sans text-[11px] uppercase tracking-widest text-gold-light font-bold">Rigor Hospitalar</p>
                      <p className="font-sans text-[10px] text-cream/70">Ambiente 100% autoclavado e estéril</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            <div className="space-y-4">
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-sans text-[11px] tracking-widest uppercase text-gold-rose font-bold"
              >
                A Especialista Líder
              </motion.span>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-serif text-3xl sm:text-4xl text-white tracking-tight leading-tight"
              >
                Jucilene Camara: <span className="font-light italic text-gold-light">Ciência, Rigor Técnico</span> e Cuidado Humanizado
              </motion.h2>

              <div className="h-[2px] w-20 bg-gradient-to-r from-gold-rose to-transparent mt-2" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-sans text-cream/80 text-sm sm:text-base space-y-4 font-light leading-relaxed text-left"
            >
              <p>
                A podologia moderna exige muito mais do que técnicas tradicionais de embelezamento ou higiene. Exige ciência, profundo entendimento fisiológico e domínio de tecnologias de reabilitação dérmica. 
              </p>
              <p>
                Como fundadora da <strong className="text-white font-medium">JC Podologia Especializada</strong>, a podóloga graduada <strong className="text-white font-medium">Jucilene Camara</strong> estruturou um consultório guiado pela mais estrita biossegurança e dedicação integral à saúde. 
              </p>
              <p>
                Com especializações voltadas para o <span className="text-gold-light font-medium underline decoration-gold-rose/30 underline-offset-4">Pé Diabético e o Tratamento Avançado de Feridas</span>, ela tornou-se referência ao salvar membros e restabelecer a caminhada segura de centenas de pacientes que sofrem com neuropatias e lesões de cicatrização complexa.
              </p>
            </motion.div>

            {/* Achievements List */}
            <div className="space-y-4 pt-4">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3 }}
                  className="flex gap-4 p-4 rounded-xl bg-charcoal/60 border border-gold-rose/10 hover:bg-charcoal hover:border-gold-rose/30 transition-all duration-300 text-left"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold-rose/10 text-gold-rose flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-sans text-xs uppercase tracking-widest font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs text-cream/70 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Commitment Pledge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-3 p-4 border-l-2 border-gold-rose bg-gold-rose/5 rounded-r-xl text-left"
            >
              <CheckCircle2 className="w-5 h-5 text-gold-rose flex-shrink-0" />
              <span className="font-sans text-xs italic text-gold-light font-medium">
                "Minha missão é unir o rigor da medicina podológica com a sensibilidade e o acolhimento que o seu bem-estar merece." — Jucilene Camara
              </span>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
