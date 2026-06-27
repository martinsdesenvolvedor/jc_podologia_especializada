import { useState, useEffect } from "react";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Sobre", href: "#sobre" },
    { name: "Tratamentos", href: "#tratamentos" },
    { name: "Contato", href: "#contato" },
  ];

const handleLinkClick = (e: React.MouseEvent<HTMLButtonElement>, href: string) => {
  e.preventDefault();
  e.stopPropagation();
  
  // 1. Fecha o menu imediatamente
  setIsOpen(false); 
  
  // 2. Aguarda um curtíssimo tempo para o React processar o fechamento
  // e o navegador encontrar o elemento no DOM
  setTimeout(() => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, 150); 
};

  return (
    <>
      <nav
        id="app-navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "glass-dark py-3 shadow-lg"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <div className="flex-shrink-0 flex items-center">
              <a href="#inicio" onClick={() => handleLinkClick("#inicio")} className="flex items-center gap-3">
                <div className="relative h-12 w-12 rounded-full overflow-hidden border border-gold-rose/30 bg-black flex items-center justify-center shadow-rose-glow">
                  <img
                    src="/Screenshot_20260626-214638.jpg"
                    alt="JC Podologia Logo"
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Graceful fallback to stylish text icon if image is not ready
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const fallback = document.getElementById("logo-fallback");
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                  <div
                    id="logo-fallback"
                    className="hidden absolute inset-0 items-center justify-center bg-gradient-to-br from-charcoal to-obsidian text-gold-rose font-serif text-sm font-bold tracking-widest"
                  >
                    JC
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-md tracking-wider font-semibold text-white">
                    JC Podologia
                  </span>
                  <span className="font-sans text-[9px] tracking-widest uppercase text-gold-rose">
                    Especializada
                  </span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-sans text-xs uppercase tracking-widest text-cream/80 hover:text-gold-rose transition-colors duration-300 font-medium cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="https://wa.me/5500000000000?text=Olá! Gostaria de agendar uma consulta com a podóloga Jucilene Camara."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-gold-dark to-gold-rose hover:from-gold-rose hover:to-gold-light text-white font-sans text-xs uppercase tracking-widest px-5 py-3 rounded-full transition-all duration-300 shadow-rose-glow hover:shadow-rose-glow-lg font-medium"
              >
                <Calendar className="w-4 h-4" />
                Agendar Consulta
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-cream hover:text-gold-rose transition-colors p-2"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden glass-dark border-t border-gold-rose/10"
            >
              <div className="px-4 pt-3 pb-6 space-y-3">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="block w-full text-left font-sans text-xs uppercase tracking-widest text-cream/90 hover:text-gold-rose py-2 border-b border-gold-rose/5"
                  >
                    {link.name}
                  </button>
                ))}
                <div className="pt-4">
                  <a
                    href="https://wa.me/5500000000000?text=Olá! Gostaria de agendar uma consulta com a podóloga Jucilene Camara."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-gold-dark to-gold-rose text-white font-sans text-xs uppercase tracking-widest py-3 px-4 rounded-full shadow-rose-glow"
                  >
                    <Calendar className="w-4 h-4" />
                    Agendar Consulta
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
