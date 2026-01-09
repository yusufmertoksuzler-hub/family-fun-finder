import { Search, Calendar, Sparkles, Star } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Aktiviteleri Keşfedin",
    description: "Kategori, konum, yaş grubu ve ailenize uygun programa göre yüzlerce aktiviteyi keşfedin.",
    color: "bg-coral/10 text-primary",
  },
  {
    icon: Calendar,
    title: "Anında Rezervasyon",
    description: "Birkaç tıkla yer ayırtın. Anında onay ve takvim hatırlatıcıları alın.",
    color: "bg-teal/10 text-secondary",
  },
  {
    icon: Sparkles,
    title: "Keyifle Deneyimleyin",
    description: "Çocuklarınızın öğrenmesini, büyümesini ve harika deneyimlerle anılar biriktirmesini izleyin.",
    color: "bg-sunshine/20 text-accent-foreground",
  },
  {
    icon: Star,
    title: "Değerlendirin",
    description: "Deneyiminizi paylaşın ve diğer ailelerin en iyi aktiviteleri keşfetmesine yardımcı olun.",
    color: "bg-lavender/30 text-foreground",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            ÇocukMacera Nasıl Çalışır?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Çocuklarınız için mükemmel aktiviteleri bulmak ve rezervasyon yapmak hiç bu kadar kolay olmamıştı
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-border" />
              )}
              
              <div className="relative bg-card rounded-2xl p-6 shadow-soft card-hover text-center">
                {/* Step number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mx-auto mb-4`}>
                  <step.icon size={28} />
                </div>
                
                <h3 className="font-display font-bold text-lg text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
