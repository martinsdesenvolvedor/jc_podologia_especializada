import { useState, FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle, CalendarDays, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [treatment, setTreatment] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const treatmentsList = [
    "Pé Diabético",
    "Tratamento de Feridas",
    "Onicocriptose (Unha Encravada)",
    "Onicomicose (Micoses)",
    "Podogeriatria (Idosos)",
    "Calos e Calosidades"
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clinical dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Auto reset after some time
      setTimeout(() => {
        setSubmitted(false);
        setName("");
        setEmail("");
        setPhone("");
        setTreatment("");
        setDate("");
        setMessage("");
      }, 6000);
    }, 1500);
  };

  // Pre-fill WhatsApp link with form data for user convenience
  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Olá, meu nome é ${name}. Gostaria de solicitar um agendamento:\n\n` +
      `🩺 *Tratamento:* ${treatment || "Avaliação Geral"}\n` +
      `📅 *Data Preferencial:* ${date || "A combinar"}\n` +
      `📱 *Contato:* ${phone}\n` +
      `💬 *Mensagem:* ${message || "Nenhuma mensagem adicional."}`
    );
    return `https://wa.me/5500000000000?text=${text}`;
  };

  return (
    <section id="contato" className="py-24 bg-obsidian relative">
      {/* Ambient background blur */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gold-rose/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-sans text-[11px] tracking-widest uppercase text-gold-rose font-bold block">
            Agendamentos & Localização
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white tracking-tight">
            Inicie Seu Protocolo de <span className="font-light italic text-gold-light">Recuperação</span>
          </h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-gold-rose to-transparent mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Column & Map */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            
            {/* Contact Cards */}
            <div className="bg-charcoal rounded-2xl p-6 shadow-rose-glow border border-gold-rose/15 space-y-6">
              
              <div className="flex gap-4 text-left">
                <div className="w-10 h-10 rounded-lg bg-gold-rose/10 text-gold-rose flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-widest font-bold text-white">Clínica JC Podologia</h4>
                  <p className="font-sans text-xs text-cream/70 font-light mt-1 leading-relaxed">
                    Av. Paulista, 1000 - Conj. 501<br />
                    Bela Vista, São Paulo - SP, 01310-100
                  </p>
                </div>
              </div>

              <div className="flex gap-4 text-left">
                <div className="w-10 h-10 rounded-lg bg-gold-rose/10 text-gold-rose flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-widest font-bold text-white">Fale Conosco</h4>
                  <p className="font-sans text-xs text-cream/70 font-light mt-1">
                    WhatsApp: (11) 99999-0000<br />
                    Fixo: (11) 3333-0000
                  </p>
                </div>
              </div>

              <div className="flex gap-4 text-left">
                <div className="w-10 h-10 rounded-lg bg-gold-rose/10 text-gold-rose flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-widest font-bold text-white">E-mail Clínico</h4>
                  <p className="font-sans text-xs text-cream/70 font-light mt-1">
                    contato@jcpodologia.com.br
                  </p>
                </div>
              </div>

              <div className="flex gap-4 text-left">
                <div className="w-10 h-10 rounded-lg bg-gold-rose/10 text-gold-rose flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-widest font-bold text-white">Horário de Atendimento</h4>
                  <p className="font-sans text-xs text-cream/70 font-light mt-1 leading-relaxed">
                    Segunda a Sexta: 08h às 19h<br />
                    Sábados: 08h às 13h (com agendamento prévio)
                  </p>
                </div>
              </div>

            </div>

            {/* Google Map Frame with Custom Style wrapper */}
            <div className="relative rounded-2xl overflow-hidden shadow-rose-glow border border-gold-rose/15 aspect-video lg:aspect-square bg-charcoal">
              <iframe
                title="Localização JC Podologia Especializada"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197585481717!2d-46.65431628502224!3d-23.561349784681652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20São%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1680000000000!5m2!1spt-BR!2sbr"
                className="w-full h-full border-0 absolute inset-0 opacity-80"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-charcoal rounded-2xl p-6 sm:p-8 shadow-rose-glow border border-gold-rose/15 relative">
              
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6 text-left"
                  >
                    <div className="space-y-1">
                      <h3 className="font-serif text-xl sm:text-2xl text-white">Formulário de Pré-Agendamento</h3>
                      <p className="font-sans text-xs text-cream/50 font-light">
                        Preencha os campos abaixo e nosso concierge entrará em contato para confirmar sua sessão.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="flex flex-col space-y-1.5">
                        <label htmlFor="name" className="font-sans text-[10px] tracking-widest uppercase font-bold text-cream/70">
                          Nome Completo *
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Ex: Maria Oliveira"
                          className="font-sans text-xs px-4 py-3 rounded-lg bg-obsidian text-white border border-gold-rose/15 focus:outline-none focus:border-gold-rose focus:ring-1 focus:ring-gold-rose transition"
                        />
                      </div>

                      {/* Email */}
                      <div className="flex flex-col space-y-1.5">
                        <label htmlFor="email" className="font-sans text-[10px] tracking-widest uppercase font-bold text-cream/70">
                          E-mail *
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Ex: maria@email.com"
                          className="font-sans text-xs px-4 py-3 rounded-lg bg-obsidian text-white border border-gold-rose/15 focus:outline-none focus:border-gold-rose focus:ring-1 focus:ring-gold-rose transition"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone */}
                      <div className="flex flex-col space-y-1.5">
                        <label htmlFor="phone" className="font-sans text-[10px] tracking-widest uppercase font-bold text-cream/70">
                          Telefone / WhatsApp *
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Ex: (11) 99999-9999"
                          className="font-sans text-xs px-4 py-3 rounded-lg bg-obsidian text-white border border-gold-rose/15 focus:outline-none focus:border-gold-rose focus:ring-1 focus:ring-gold-rose transition"
                        />
                      </div>

                      {/* Preference Date */}
                      <div className="flex flex-col space-y-1.5">
                        <label htmlFor="date" className="font-sans text-[10px] tracking-widest uppercase font-bold text-cream/70">
                          Data Preferencial
                        </label>
                        <input
                          id="date"
                          type="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="font-sans text-xs px-4 py-3 rounded-lg bg-obsidian text-white border border-gold-rose/15 focus:outline-none focus:border-gold-rose focus:ring-1 focus:ring-gold-rose transition"
                        />
                      </div>
                    </div>

                    {/* Treatment dropdown */}
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="treatment" className="font-sans text-[10px] tracking-widest uppercase font-bold text-cream/70">
                        Qual cuidado ou tratamento necessita? *
                      </label>
                      <select
                        id="treatment"
                        required
                        value={treatment}
                        onChange={(e) => setTreatment(e.target.value)}
                        className="font-sans text-xs px-4 py-3 rounded-lg bg-obsidian text-white border border-gold-rose/15 focus:outline-none focus:border-gold-rose focus:ring-1 focus:ring-gold-rose transition cursor-pointer"
                      >
                        <option value="" className="bg-charcoal text-white">Selecione uma especialidade...</option>
                        {treatmentsList.map((t) => (
                          <option key={t} value={t} className="bg-charcoal text-white">
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="message" className="font-sans text-[10px] tracking-widest uppercase font-bold text-cream/70">
                        Descrição de Sintomas ou Histórico (Opcional)
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Ex: Sou diabético e notei uma fissura no calcanhar que não cicatriza..."
                        className="font-sans text-xs px-4 py-3 rounded-lg bg-obsidian text-white border border-gold-rose/15 focus:outline-none focus:border-gold-rose focus:ring-1 focus:ring-gold-rose transition resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      id="submit-appointment-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-gold-dark to-gold-rose hover:from-gold-rose hover:to-gold-light text-white font-sans text-xs uppercase tracking-widest px-6 py-4 rounded-xl transition duration-300 font-bold shadow-rose-glow cursor-pointer disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Enviando para o Prontuário...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Enviar Solicitação Clínica
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-screen"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center flex flex-col items-center space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-gold-rose/15 text-gold-rose flex items-center justify-center shadow-inner">
                      <CheckCircle className="w-10 h-10 animate-bounce" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-serif text-2xl text-white font-medium">Solicitação Enviada!</h3>
                      <p className="font-sans text-xs text-cream/70 max-w-md mx-auto leading-relaxed font-light">
                        Seus dados foram integrados ao nosso sistema de agendamentos. Agradecemos a sua confiança na Dra. Jucilene Camara.
                      </p>
                    </div>

                    <div className="p-4 bg-gold-rose/5 rounded-xl border border-gold-rose/10 text-left max-w-md w-full space-y-3">
                      <div className="flex items-center gap-2 text-gold-rose font-sans text-[11px] font-bold uppercase tracking-wider">
                        <CalendarDays className="w-4 h-4" />
                        Detalhes Enviados:
                      </div>
                      <div className="font-sans text-xs space-y-1 text-cream/80 text-left">
                        <p><strong>Paciente:</strong> {name}</p>
                        <p><strong>Cuidado:</strong> {treatment}</p>
                        <p><strong>Data Proposta:</strong> {date ? new Date(date).toLocaleDateString("pt-BR") : "A combinar"}</p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md pt-4">
                      <a
                        href={getWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-sans text-xs uppercase tracking-widest py-3 px-4 rounded-xl transition duration-300 font-bold"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Acelerar via WhatsApp
                      </a>
                      
                      <button
                        onClick={() => setSubmitted(false)}
                        className="flex-1 font-sans text-xs uppercase tracking-widest text-cream/60 hover:text-white py-3 px-4 rounded-xl border border-gold-rose/20 hover:bg-obsidian transition cursor-pointer"
                      >
                        Enviar outro
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>

      {/* Pulsing Floating WhatsApp concierge button */}
      <a
        id="whatsapp-floating-button"
        href="https://wa.me/5500000000000?text=Olá! Gostaria de agendar um atendimento na clínica de podologia de Jucilene Camara."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 p-4 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 animate-bounce cursor-pointer group hover:shadow-2xl"
        style={{ animationDuration: "3s" }}
        aria-label="Fale Conosco no WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        
        {/* Hover Tooltip tooltip */}
        <span className="absolute right-16 bg-obsidian text-white font-sans text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md border border-gold-rose/30">
          Concierge WhatsApp
        </span>
      </a>
    </section>
  );
}
