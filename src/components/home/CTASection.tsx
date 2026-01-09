import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const providerBenefits = [
  "Binlerce yerel aileye ulaşın",
  "Kolay planlama ve rezervasyon yönetimi",
  "Güvenli ödeme işleme",
  "Pazarlama araçları ve analitik",
];

const CTASection = () => {
  const handleDownloadApp = () => {
    toast.success("Uygulama indirme linki e-postanıza gönderildi!", {
      description: "App Store ve Google Play bağlantıları için e-postanızı kontrol edin."
    });
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* For Parents */}
          <div className="bg-gradient-to-br from-primary to-coral-dark rounded-3xl p-8 md:p-12 text-primary-foreground">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Harika Aktiviteler Keşfetmeye Hazır mısınız?
            </h2>
            <p className="text-primary-foreground/80 mb-6">
              Uygulamamızı indirin ve çocuklarınız için yüzlerce aktiviteyi keşfetmeye başlayın. Anında rezervasyon yapın ve kalıcı anılar oluşturun.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/activities">
                  Aktiviteleri Gör
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" onClick={handleDownloadApp}>
                Uygulamayı İndir
              </Button>
            </div>
          </div>

          {/* For Providers */}
          <div className="bg-gradient-to-br from-secondary to-teal-dark rounded-3xl p-8 md:p-12 text-secondary-foreground">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Aktivite Sağlayıcısı mısınız?
            </h2>
            <ul className="space-y-3 mb-6">
              {providerBenefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-sunshine flex-shrink-0" />
                  <span className="text-secondary-foreground/90">{benefit}</span>
                </li>
              ))}
            </ul>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/providers">
                Hemen Başvurun
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
