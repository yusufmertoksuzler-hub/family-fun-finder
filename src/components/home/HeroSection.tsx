import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { toast } from "sonner";
import heroImage from "@/assets/hero-families.jpg";

const HeroSection = () => {
  const handleDownloadApp = () => {
    toast.success("Uygulama indirme linki e-postanıza gönderildi!", {
      description: "App Store ve Google Play bağlantıları için e-postanızı kontrol edin."
    });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-coral-light/20 to-background">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-sunshine/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal/20 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-lavender/20 rounded-full blur-2xl" />
      
      <div className="container-width section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sunshine/20 text-accent-foreground mb-6">
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm font-medium">10.000+ ailenin güvendiği platform</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
              Çocuklarınız İçin{" "}
              <span className="text-primary">Harika Aktiviteler</span>{" "}
              Keşfedin
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Spordan sanata, müzikten bilime — çocuklarınızın öğrenmesine, büyümesine ve eğlenmesine yardımcı olacak yaşa uygun aktiviteleri bulun.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" asChild>
                <Link to="/activities">
                  Aktiviteleri Keşfet
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button variant="tealOutline" size="xl" onClick={handleDownloadApp}>
                <Download size={20} />
                Uygulamayı İndir
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-8">
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Aktivite</p>
              </div>
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-foreground">50+</p>
                <p className="text-sm text-muted-foreground">Şehir</p>
              </div>
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-foreground">4.9★</p>
                <p className="text-sm text-muted-foreground">Uygulama Puanı</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-3xl overflow-hidden shadow-large">
              <img
                src={heroImage}
                alt="Mutlu aileler birlikte aktivite yapıyor - çocuklar spor yapıyor, sanat etkinlikleri ve eğlence"
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            
            {/* Floating cards */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-medium animate-bounce-slow">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-teal/20 flex items-center justify-center">
                  <span className="text-2xl">🎨</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Sanat Atölyesi</p>
                  <p className="text-sm text-muted-foreground">Yarın, 15:00</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-card rounded-2xl p-4 shadow-medium animate-bounce-slow" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-sunshine/30 flex items-center justify-center">
                  <span className="text-2xl">⚽</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Futbol Kampı</p>
                  <p className="text-sm text-muted-foreground">5-8 Yaş</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
