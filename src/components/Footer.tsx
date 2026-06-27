import { ArrowUp, Instagram, Facebook, ShieldCheck } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="app-footer" className="bg-obsidian border-t border-gold-rose/15 text-white py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start pb-12 border-b border-gold-rose/10">
          
          {/* Column 1: Brand & Logo */}
          <div className="md:col-span-5 flex flex-col space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 rounded-full overflow-hidden border border-gold-rose/30 bg-black flex items-center justify-center">
                <img
                  src="/Screenshot_20260626-214638.jpg"
                  alt="JC Podologia Logo"
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const fallback = document.getElementById("footer-logo-fallback");
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
                <div
                  id="footer-logo-fallback"
                  className="hidden absolute inset-0 items-center justify-center bg-gradient-to-br from-charcoal to-obsidian text-gold-rose font-serif text-sm font-bold"
                >
                  JC
                </div>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-serif text-md tracking-wider font-semibold text-white">
                  JC Podologia
                </span>
                <span className="font-sans text-[9px] tracking-widest uppercase text-gold-rose">
                  Especializada
                </span>
              </div>
            </div>

            <p className="font-sans text-xs text-cream/60 leading-relaxed font-light max-w-sm text-left">
              Clínica de reabilitação podológica de alto padrão guiada pela Dra. Jucilene Camara. Excelência e biossegurança máxima em diabetes, feridas, unhas e cuidados geriátricos.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-cream/10 flex items-center justify-center hover:border-gold-rose hover:text-gold-rose text-cream/70 transition cursor-pointer"
                aria-label="Siga-nos no Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-cream/10 flex items-center justify-center hover:border-gold-rose hover:text-gold-rose text-cream/70 transition cursor-pointer"
                aria-label="Siga-nos no Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 flex flex-col space-y-4 text-left">
            <h4 className="font-sans text-[10px] tracking-widest uppercase text-gold-rose font-bold">Navegação</h4>
            <div className="flex flex-col space-y-2">
              <a href="#inicio" className="font-sans text-xs text-cream/70 hover:text-white transition">Início</a>
              <a href="#sobre" className="font-sans text-xs text-cream/70 hover:text-white transition">A Especialista</a>
              <a href="#tratamentos" className="font-sans text-xs text-cream/70 hover:text-white transition">Nossos Tratamentos</a>
              <a href="#contato" className="font-sans text-xs text-cream/70 hover:text-white transition">Agendamentos</a>
            </div>
          </div>

          {/* Column 3: Medical / Quality standard disclaimer */}
          <div className="md:col-span-4 flex flex-col space-y-4 text-left">
            <h4 className="font-sans text-[10px] tracking-widest uppercase text-gold-rose font-bold">Rigor Clínico & Biossegurança</h4>
            <p className="font-sans text-xs text-cream/60 leading-relaxed font-light">
              Nossos materiais são 100% esterilizados em autoclave com embalagens cirúrgicas seladas individualmente. Cumprimos rigorosamente todas as normas sanitárias e resoluções da Vigilância Sanitária (ANVISA).
            </p>
            <div className="flex items-center gap-2.5 text-gold-rose font-sans text-[10px] uppercase tracking-widest font-bold">
              <ShieldCheck className="w-4 h-4" />
              Procedimento Seguro Garantido
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col space-y-1 text-center sm:text-left">
            <p className="font-sans text-[10px] text-cream/40">
              &copy; {new Date().getFullYear()} JC Podologia Especializada. Todos os direitos reservados.
            </p>
            <p className="font-sans text-[9px] text-cream/30">
              Dra. Jucilene Camara — Podóloga Graduada • Registro Profissional Especializado.
            </p>
          </div>

          {/* Back to top */}
          <button
            onClick={handleScrollToTop}
            className="group flex items-center gap-2 font-sans text-[10px] uppercase tracking-widest text-cream/60 hover:text-gold-rose transition cursor-pointer"
          >
            Voltar ao topo
            <span className="w-8 h-8 rounded-full border border-cream/10 group-hover:border-gold-rose flex items-center justify-center transition">
              <ArrowUp className="w-4 h-4" />
            </span>
          </button>
        </div>

      </div>
    </footer>
  );
}
