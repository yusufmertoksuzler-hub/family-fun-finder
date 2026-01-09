import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/seo/SEOHead";
import { Link } from "react-router-dom";
import { Clock, User, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const blogPosts = [
  {
    id: 1,
    slug: "benefits-of-extracurricular-activities",
    title: "Çocuklar İçin Okul Dışı Aktivitelerin 10 Faydası",
    excerpt: "Okul dışı aktivitelerin çocuğunuzun özgüvenini, sosyal becerilerini ve akademik performansını nasıl artırabileceğini keşfedin. Araştırmalar, yapılandırılmış aktivitelere katılan çocukların daha iyi zaman yönetimi ve liderlik becerileri geliştirdiğini gösteriyor.",
    category: "Ebeveyn İpuçları",
    author: "Dr. Elif Demir",
    readTime: "5 dk okuma",
    date: "15 Ocak 2024",
    image: "🎯",
    tags: ["ebeveynlik", "çocuk gelişimi", "aktiviteler"],
  },
  {
    id: 2,
    slug: "choosing-right-sport-for-your-child",
    title: "Çocuğunuz İçin Doğru Sporu Nasıl Seçersiniz?",
    excerpt: "Çocuğunuzun ilgi alanlarını, kişiliğini ve fiziksel yeteneklerini mükemmel sporla eşleştirmek için kapsamlı bir rehber. Farklı sporlar ve çeşitli yaş grupları için faydaları hakkında bilgi edinin.",
    category: "Spor",
    author: "Antrenör Ahmet Yılmaz",
    readTime: "7 dk okuma",
    date: "10 Ocak 2024",
    image: "⚽",
    tags: ["spor", "çocuk sporları", "fiziksel aktivite"],
  },
  {
    id: 3,
    slug: "stem-activities-at-home",
    title: "Evde Yapabileceğiniz Eğlenceli STEM Aktiviteleri",
    excerpt: "Her yaştaki çocuklarda merak uyandıran kolay ve ilgi çekici bilim deneyleri ve kodlama aktiviteleri. Mutfağınızı bir laboratuvara dönüştürün.",
    category: "STEM",
    author: "Selin Kaya",
    readTime: "6 dk okuma",
    date: "5 Ocak 2024",
    image: "🔬",
    tags: ["STEM", "bilim", "ev aktiviteleri"],
  },
  {
    id: 4,
    slug: "importance-of-creative-play",
    title: "Çocuk Gelişiminde Yaratıcı Oyunun Önemi",
    excerpt: "Yapılandırılmamış yaratıcı oyunun küçük çocuklarda bilişsel gelişim, duygusal düzenleme ve problem çözme becerileri için neden gerekli olduğunu anlayın.",
    category: "Çocuk Gelişimi",
    author: "Dr. Deniz Arslan",
    readTime: "8 dk okuma",
    date: "28 Aralık 2023",
    image: "🎨",
    tags: ["yaratıcılık", "oyun", "gelişim"],
  },
  {
    id: 5,
    slug: "summer-camp-preparation-guide",
    title: "Çocuğunuzu Yaz Kampına Hazırlamak İçin Kapsamlı Rehber",
    excerpt: "Çocuğunuzun ilk yaz kampı deneyimine hazırlanması için bilmeniz gereken her şey, bavul listesinden duygusal hazırlık ipuçlarına kadar.",
    category: "Yaz Aktiviteleri",
    author: "Kamp Müdürü Cem Öztürk",
    readTime: "10 dk okuma",
    date: "20 Aralık 2023",
    image: "🏕️",
    tags: ["yaz kampı", "hazırlık", "açık hava"],
  },
  {
    id: 6,
    slug: "music-education-benefits",
    title: "Müzik Eğitimi Neden Her Çocuk İçin Önemli?",
    excerpt: "Bir müzik aleti öğrenmenin akademik performansı, yaratıcılığı ve sosyal-duygusal gelişimi nasıl artırdığına dair araştırma destekli nedenler.",
    category: "Müzik",
    author: "Prof. Aylin Koç",
    readTime: "6 dk okuma",
    date: "15 Aralık 2023",
    image: "🎵",
    tags: ["müzik", "eğitim", "beyin gelişimi"],
  },
];

const categories = [
  "Tümü",
  "Ebeveyn İpuçları",
  "Spor",
  "STEM",
  "Çocuk Gelişimi",
  "Yaz Aktiviteleri",
  "Müzik",
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [email, setEmail] = useState("");

  const filteredPosts = selectedCategory === "Tümü"
    ? blogPosts
    : blogPosts.filter((post) => post.category === selectedCategory);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Bültene başarıyla abone oldunuz!", {
        description: "Haftalık ebeveynlik ipuçları için gelen kutunuzu kontrol edin."
      });
      setEmail("");
    }
  };

  return (
    <Layout>
      <SEOHead
        title="Blog - Ebeveyn İpuçları & Aktivite Rehberleri"
        description="Çocuk aktiviteleri, ebeveynlik ipuçları ve çocuklarınızın gelişmesine yardımcı olacak rehberler hakkında uzman tavsiyeleri. Spor, sanat, STEM ve daha fazlası hakkında içgörüler keşfedin."
        canonical="/blog"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-teal-light/20 to-background section-padding py-12 md:py-16">
        <div className="container-width">
          <div className="text-center">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
              ÇocukMacera Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Çocuklarınızın tutkularını keşfetmelerine ve tam potansiyellerine ulaşmalarına yardımcı olacak uzman tavsiyeleri, ipuçları ve rehberler.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding py-6 border-b border-border">
        <div className="container-width">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-secondary text-secondary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-secondary/10 hover:text-secondary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding py-12">
        <div className="container-width">
          <Link
            to={`/blog/${filteredPosts[0]?.slug}`}
            className="group block bg-card rounded-3xl overflow-hidden shadow-medium card-hover"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-coral-light/30 to-teal-light/30 flex items-center justify-center min-h-[300px]">
                <span className="text-8xl">{filteredPosts[0]?.image}</span>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 w-fit">
                  Öne Çıkan
                </span>
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {filteredPosts[0]?.title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {filteredPosts[0]?.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-2">
                    <User size={16} />
                    {filteredPosts[0]?.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock size={16} />
                    {filteredPosts[0]?.readTime}
                  </span>
                </div>
                <span className="inline-flex items-center gap-2 text-primary font-medium">
                  Devamını Oku <ArrowRight size={18} />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding pt-0">
        <div className="container-width">
          <h2 className="font-display text-2xl font-bold text-foreground mb-8">
            Son Yazılar
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group bg-card rounded-2xl overflow-hidden shadow-soft card-hover"
              >
                <div className="aspect-video bg-gradient-to-br from-coral-light/30 to-teal-light/30 flex items-center justify-center">
                  <span className="text-6xl">{post.image}</span>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-medium mb-3">
                    {post.category}
                  </span>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button 
              onClick={() => toast.info("Daha fazla makale yükleniyor...")}
              className="px-8 py-3 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Daha Fazla Makale Yükle
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-gradient-to-br from-primary to-coral-dark">
        <div className="container-width max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
            Ebeveyn İpuçlarını Gelen Kutunuza Alın
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Haftalık çocuk aktiviteleri, gelişim içgörüleri ve özel teklifler için bültenimize abone olun.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-posta adresiniz"
              required
              className="flex-1 px-4 py-3 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-primary-foreground"
            />
            <button 
              type="submit"
              className="px-6 py-3 rounded-xl bg-foreground text-background font-semibold hover:opacity-90 transition-opacity"
            >
              Abone Ol
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
