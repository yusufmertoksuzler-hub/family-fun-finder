import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Mail,
    title: "E-posta",
    value: "merhaba@cocukmacera.com",
    description: "24 saat içinde yanıt veririz",
  },
  {
    icon: Phone,
    title: "Telefon",
    value: "0212 555 12 34",
    description: "Pzt-Cum, 09:00-18:00",
  },
  {
    icon: MapPin,
    title: "Adres",
    value: "Levent Mah. Çocuk Sk. No:1",
    description: "İstanbul, Türkiye",
  },
  {
    icon: Clock,
    title: "Çalışma Saatleri",
    value: "Pzt-Cum: 09:00-18:00",
    description: "Hafta sonu destek mevcut",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Mesajınız başarıyla gönderildi!");
    setSubmitted(true);
  };

  return (
    <Layout>
      <SEOHead
        title="İletişim - Bize Ulaşın"
        description="ÇocukMacera hakkında sorularınız mı var? Aktivite bulma, sağlayıcı başvuruları veya genel sorularınız için ekibimizle iletişime geçin."
        canonical="/contact"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-lavender/20 to-background section-padding py-12 md:py-16">
        <div className="container-width text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Bize Ulaşın
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bir sorunuz veya geri bildiriminiz mi var? Sizden haber almaktan memnuniyet duyarız. Ekibimiz çocuklarınız için mükemmel aktiviteleri bulmanıza yardımcı olmak için burada.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section-padding pt-0">
        <div className="container-width">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 -mt-8">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="bg-card rounded-2xl p-6 shadow-soft text-center card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-lavender/30 text-foreground flex items-center justify-center mx-auto mb-4">
                  <info.icon size={24} />
                </div>
                <h3 className="font-display font-bold text-foreground mb-1">
                  {info.title}
                </h3>
                <p className="text-foreground font-medium mb-1">{info.value}</p>
                <p className="text-muted-foreground text-sm">{info.description}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Bize Mesaj Gönderin
              </h2>
              <p className="text-muted-foreground mb-8">
                Formu doldurun, en kısa sürede size döneceğiz. Acil konular için lütfen bizi doğrudan arayın.
              </p>

              {submitted ? (
                <div className="bg-secondary/10 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="text-secondary" size={32} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    Mesaj Gönderildi!
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Bize ulaştığınız için teşekkür ederiz. 24 saat içinde yanıt vereceğiz.
                  </p>
                  <Button variant="secondary" onClick={() => setSubmitted(false)}>
                    Başka Bir Mesaj Gönder
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Adınız *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-muted border-0 focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Ahmet Yılmaz"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        E-posta Adresiniz *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-muted border-0 focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="ornek@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Konu *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-muted border-0 focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Bir konu seçin</option>
                      <option value="general">Genel Sorular</option>
                      <option value="activities">Aktivite Bulma</option>
                      <option value="provider">Sağlayıcı Desteği</option>
                      <option value="technical">Teknik Sorun</option>
                      <option value="feedback">Geri Bildirim</option>
                      <option value="partnership">İş Birliği Teklifi</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Mesajınız *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-muted border-0 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Size nasıl yardımcı olabiliriz?"
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full sm:w-auto">
                    <Send size={18} />
                    Mesaj Gönder
                  </Button>
                </form>
              )}
            </div>

            {/* FAQ Preview */}
            <div className="bg-muted/50 rounded-3xl p-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Sık Sorulan Sorular
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Nasıl aktivite rezervasyonu yaparım?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Aktivitelerimize göz atın, beğendiğiniz bir tanesini seçin, uygun bir zaman dilimi belirleyin ve güvenli ödeme sistemimiz üzerinden rezervasyonunuzu tamamlayın.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Rezervasyonu iptal edebilir miyim?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Evet, çoğu rezervasyon aktiviteden 24 saat öncesine kadar iptal edilebilir. İptal politikaları sağlayıcıya göre değişir ve rezervasyon öncesinde gösterilir.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Nasıl sağlayıcı olurum?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    "Sağlayıcılar" sayfamızı ziyaret edin ve başvuru formunu doldurun. Ekibimiz başvurunuzu 2-3 iş günü içinde inceleyecektir.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    ÇocukMacera şehrimde mevcut mu?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Şu anda Türkiye genelinde 50'den fazla şehirde hizmet veriyoruz ve büyümeye devam ediyoruz! Bölgenizdeki mevcut aktiviteleri görmek için aktiviteler sayfamızı ziyaret edin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-96 bg-muted relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin size={48} className="text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">Harita entegrasyonu yakında</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
