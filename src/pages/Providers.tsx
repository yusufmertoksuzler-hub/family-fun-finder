import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, TrendingUp, Calendar, DollarSign, Shield, Upload, X } from "lucide-react";
import { toast } from "sonner";

const benefits = [
  {
    icon: Users,
    title: "Binlerce Aileye Ulaşın",
    description: "Bölgenizde aktif olarak aktivite arayan ebeveynlerle bağlantı kurun.",
  },
  {
    icon: Calendar,
    title: "Kolay Planlama",
    description: "Rezervasyonları, bekleme listelerini ve programları tek bir yerden yönetin.",
  },
  {
    icon: DollarSign,
    title: "Güvenli Ödemeler",
    description: "Güvenli ödeme işleme sistemimizle zamanında ödeme alın.",
  },
  {
    icon: TrendingUp,
    title: "İşinizi Büyütün",
    description: "Erişiminizi genişletmek için pazarlama araçlarına ve analitiklere erişin.",
  },
  {
    icon: Shield,
    title: "Onaylı Rozet",
    description: "Doğrulama ve değerlendirme sistemimizle güven oluşturun.",
  },
];

const Providers = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    website: "",
    location: "",
    description: "",
    categories: [] as string[],
  });
  const [submitted, setSubmitted] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  const categories = [
    "Spor",
    "Sanat & El İşi",
    "Müzik",
    "STEM",
    "Dans",
    "Açık Hava",
    "Dil",
    "Diğer",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoryToggle = (category: string) => {
    setFormData((prev) => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category],
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newFiles = Array.from(files).map(f => f.name);
      setUploadedFiles([...uploadedFiles, ...newFiles]);
      toast.success(`${newFiles.length} dosya yüklendi!`);
    }
  };

  const removeFile = (fileName: string) => {
    setUploadedFiles(uploadedFiles.filter(f => f !== fileName));
    toast.info("Dosya kaldırıldı");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.categories.length === 0) {
      toast.error("Lütfen en az bir kategori seçin");
      return;
    }

    console.log("Form submitted:", formData);
    toast.success("Başvurunuz başarıyla gönderildi!");
    setSubmitted(true);
  };

  return (
    <Layout>
      <SEOHead
        title="Sağlayıcı Olun - Aktivitenizi Listeleyin"
        description="ÇocukMacera'ya aktivite sağlayıcısı olarak katılın. Binlerce yerel aileye ulaşın, rezervasyonları kolayca yönetin ve işinizi platformumuzla büyütün."
        canonical="/providers"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary/20 to-background section-padding py-12 md:py-20">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
                Aktivite İşinizi{" "}
                <span className="text-secondary">ÇocukMacera</span>{" "}
                ile Büyütün
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Güvenilir aktivite sağlayıcıları ağımıza katılın ve çocukları için harika deneyimler arayan binlerce aileyle bağlantı kurun.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-secondary" size={20} />
                  <span>Katılım ücretsiz</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-secondary" size={20} />
                  <span>Peşin ödeme yok</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-secondary" size={20} />
                  <span>İstediğiniz zaman iptal</span>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-3xl p-8 shadow-large">
              <div className="text-center mb-6">
                <p className="text-4xl font-display font-bold text-foreground">10.000+</p>
                <p className="text-muted-foreground">Platformdaki aktif aile</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-foreground">50+</p>
                  <p className="text-sm text-muted-foreground">Kapsanan şehir</p>
                </div>
                <div className="bg-muted rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-foreground">100+</p>
                  <p className="text-sm text-muted-foreground">Aktif sağlayıcı</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-muted/50">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Neden Bizimle Ortaklık Kurmalısınız?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Aktivite işinizi yönetmek ve büyütmek için ihtiyacınız olan her şey
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-card rounded-2xl p-6 shadow-soft card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-4">
                  <benefit.icon size={24} />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding" id="apply">
        <div className="container-width max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Sağlayıcı Olmak İçin Başvurun
            </h2>
            <p className="text-muted-foreground">
              Aşağıdaki formu doldurun, ekibimiz başvurunuzu 2-3 iş günü içinde inceleyecektir.
            </p>
          </div>

          {submitted ? (
            <div className="bg-secondary/10 rounded-3xl p-12 text-center">
              <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-secondary" size={40} />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Başvuru Gönderildi!
              </h3>
              <p className="text-muted-foreground mb-6">
                ÇocukMacera sağlayıcısı olmak için başvurduğunuz için teşekkür ederiz. Başvurunuzu inceleyip 2-3 iş günü içinde size döneceğiz.
              </p>
              <Button variant="teal" onClick={() => setSubmitted(false)}>
                Başka Bir Başvuru Gönder
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-card rounded-3xl p-8 shadow-medium">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    İşletme Adı *
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-muted border-0 focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="İşletmenizin adı"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    İletişim Kişisi *
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-muted border-0 focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="Adınız soyadınız"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    E-posta Adresi *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-muted border-0 focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="ornek@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Telefon Numarası *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-muted border-0 focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="0532 123 4567"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Web Sitesi (isteğe bağlı)
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-muted border-0 focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="https://websiteniz.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Konum *
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-muted border-0 focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="İlçe, Şehir"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Aktivite Kategorileri *
                </label>
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => handleCategoryToggle(category)}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                        formData.categories.includes(category)
                          ? "bg-secondary text-secondary-foreground"
                          : "bg-muted text-muted-foreground hover:bg-secondary/10"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                {formData.categories.length > 0 && (
                  <p className="text-sm text-muted-foreground mt-2">
                    Seçili: {formData.categories.join(", ")}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Aktiviteleriniz Hakkında Bilgi Verin *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-muted border-0 focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                  placeholder="Aktivitelerinizi, hedef yaş gruplarını, deneyiminizi ve programlarınızı özel kılan şeyleri anlatın..."
                />
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Fotoğraf Yükleyin (isteğe bağlı)
                </label>
                <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-secondary transition-colors cursor-pointer relative">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <Upload className="mx-auto text-muted-foreground mb-2" size={32} />
                  <p className="text-muted-foreground text-sm">
                    Fotoğrafları buraya sürükleyin veya göz atmak için tıklayın
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    PNG, JPG her biri max 10MB
                  </p>
                </div>
                {uploadedFiles.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {uploadedFiles.map((file) => (
                      <div key={file} className="flex items-center gap-2 bg-muted px-3 py-1 rounded-lg">
                        <span className="text-sm">{file}</span>
                        <button onClick={() => removeFile(file)} className="text-muted-foreground hover:text-foreground">
                          <X size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Button type="submit" variant="teal" size="xl" className="w-full">
                Başvuruyu Gönder
              </Button>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Göndererek, Kullanım Koşullarımızı ve Gizlilik Politikamızı kabul etmiş olursunuz.
              </p>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Providers;
