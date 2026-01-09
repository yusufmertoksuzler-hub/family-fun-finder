import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/seo/SEOHead";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Target, Users, Sparkles } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Önce Aile",
    description: "Her çocuğun tutkularını keşfetmelerine yardımcı olacak zenginleştirici aktivitelere erişimi hak ettiğine inanıyoruz.",
  },
  {
    icon: Target,
    title: "Kalite Önemli",
    description: "Güvenli, eğitici ve keyifli deneyimler sağlamak için her aktivite sağlayıcısını dikkatle değerlendiriyoruz.",
  },
  {
    icon: Users,
    title: "Topluluk Odaklı",
    description: "Platformumuz, yaptığımız her şeyi şekillendiren gerçek ebeveynlerden ve sağlayıcılardan gelen geri bildirimler üzerine kurulu.",
  },
  {
    icon: Sparkles,
    title: "Keşfin Mutluluğu",
    description: "Çocukların yeni şeyler denemesinin ve onları neyin heyecanlandırdığını keşfetmesinin büyüsünü kutluyoruz.",
  },
];

const team = [
  {
    name: "Ayşe Demir",
    role: "CEO & Kurucu Ortak",
    bio: "Eski öğretmen, şimdi girişimci. İki meraklı çocuk annesi.",
    avatar: "AD",
  },
  {
    name: "Mehmet Yılmaz",
    role: "CTO & Kurucu Ortak",
    bio: "Ebeveynliği kolaylaştırma tutkusu olan teknoloji meraklısı.",
    avatar: "MY",
  },
  {
    name: "Zeynep Kaya",
    role: "Sağlayıcı İlişkileri Müdürü",
    bio: "Aileleri kaliteli programlarla buluşturmada 10+ yıl deneyim.",
    avatar: "ZK",
  },
  {
    name: "Can Öztürk",
    role: "Ürün Müdürü",
    bio: "Keyifli aile deneyimlerine odaklanan UX uzmanı.",
    avatar: "CÖ",
  },
];

const About = () => {
  return (
    <Layout>
      <SEOHead
        title="Hakkımızda - Misyonumuz & Hikayemiz"
        description="ÇocukMacera'nın ailelerin çocukları için harika aktiviteler keşfetmelerine yardımcı olma misyonunu öğrenin. Ekibimizle tanışın ve bizi neyin motive ettiğini keşfedin."
        canonical="/about"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-sunshine/20 to-background section-padding py-16 md:py-24">
        <div className="container-width max-w-4xl text-center">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Ailelerin{" "}
            <span className="text-primary">Harika</span> Deneyimler Keşfetmesine Yardımcı Oluyoruz
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Çocukları mutluluk veren, beceri geliştiren ve kalıcı anılar yaratan aktivitelerle buluşturma misyonundayız.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Hikayemiz
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  ÇocukMacera, basit bir hayal kırıklığından doğdu: çocuklar için kaliteli aktiviteler bulmak bu kadar zor olmamalı. Kendimiz de ebeveyn olarak, tek bir derse kayıt olmak için bile saatlerce araştırma yapıp, yorumları okuyup, sağlayıcıları aradık.
                </p>
                <p>
                  2022'de daha iyi bir yol yaratmak için yola çıktık. Ebeveynlerin çocuklarının ilgi alanlarına ve ailelerinin programına uygun aktiviteleri kolayca keşfedebileceği, karşılaştırabileceği ve rezervasyon yapabileceği bir platform hayal ettik.
                </p>
                <p>
                  Bugün, ÇocukMacera ülke genelinde binlerce aileyi yüzlerce doğrulanmış aktivite sağlayıcısıyla buluşturuyor. Sanat derslerinden spor ligelerine, müzik eğitiminden kodlama kamplarına kadar, çocukların tutkularını keşfetmelerini her zamankinden daha kolay hale getiriyoruz.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-coral-light/30 to-teal-light/30 rounded-3xl aspect-square flex items-center justify-center">
              <div className="text-center">
                <span className="text-8xl mb-4 block">👨‍👩‍👧‍👦</span>
                <p className="font-display font-bold text-2xl text-foreground">Ebeveynler Tarafından Kuruldu</p>
                <p className="text-muted-foreground">Ebeveynler İçin</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted/50">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Değerlerimiz
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Yaptığımız her şeye rehberlik eden ilkeler
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card rounded-2xl p-6 shadow-soft text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <value.icon size={28} />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Ekibimizle Tanışın
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              ÇocukMacera'nın arkasındaki tutkulu insanlar
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-card rounded-2xl p-6 shadow-soft text-center card-hover"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-coral-dark flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold text-xl">
                    {member.avatar}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-foreground">
                  {member.name}
                </h3>
                <p className="text-secondary font-medium text-sm mb-2">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding bg-gradient-to-br from-primary to-coral-dark">
        <div className="container-width max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-6">
            Misyonumuz
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            "Her aileyi, çocuklarının öğrenmesine, büyümesine ve neşeli anılar yaratmasına yardımcı olan aktiviteleri keşfetmeleri için güçlendirmek — keşif yolculuğunu olması gerektiği kadar kolay hale getirmek."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/activities">Aktiviteleri Keşfet</Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/providers">Bizimle Ortak Olun</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
