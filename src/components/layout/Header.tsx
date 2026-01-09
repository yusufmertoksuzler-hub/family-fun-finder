import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: "/", label: "Ana Sayfa" },
    { href: "/activities", label: "Aktiviteler" },
    { href: "/blog", label: "Blog" },
    { href: "/providers", label: "Sağlayıcılar" },
    { href: "/about", label: "Hakkımızda" },
    { href: "/contact", label: "İletişim" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleDownloadApp = () => {
    toast.success("Uygulama indirme linki e-postanıza gönderildi!", {
      description: "App Store ve Google Play bağlantıları için e-postanızı kontrol edin."
    });
  };

  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <nav className="container-width section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-xl">Ç</span>
            </div>
            <span className="font-display font-bold text-xl text-foreground">ÇocukMacera</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-medium transition-colors hover:text-primary ${
                  isActive(link.href) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="tealOutline" size="sm" onClick={handleDownloadApp}>
              Uygulamayı İndir
            </Button>
            <Button variant="hero" size="sm" asChild>
              <Link to="/providers">Aktivite Ekle</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menüyü aç/kapat"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium transition-colors py-2 ${
                    isActive(link.href) ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <Button variant="tealOutline" size="default" onClick={handleDownloadApp}>
                  Uygulamayı İndir
                </Button>
                <Button variant="hero" size="default" asChild>
                  <Link to="/providers">Aktivite Ekle</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
