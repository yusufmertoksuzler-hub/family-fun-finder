import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Users, Filter, Search, Heart, X } from "lucide-react";
import { toast } from "sonner";
import categoryArts from "@/assets/category-arts.jpg";
import categorySports from "@/assets/category-sports.jpg";
import categoryMusic from "@/assets/category-music.jpg";
import categoryStem from "@/assets/category-stem.jpg";
import categoryOutdoor from "@/assets/category-outdoor.jpg";
import categoryDance from "@/assets/category-dance.jpg";

const allActivities = [
  {
    id: 1,
    title: "Yaratıcı Sanat Atölyesi",
    category: "Sanat & El İşi",
    categoryId: "arts",
    location: "Kadıköy, İstanbul",
    ageRange: "4-8 yaş",
    price: "₺250/seans",
    rating: 4.9,
    reviews: 128,
    image: categoryArts,
  },
  {
    id: 2,
    title: "Minik Futbolcular Ligi",
    category: "Spor",
    categoryId: "sports",
    location: "Beşiktaş, İstanbul",
    ageRange: "5-10 yaş",
    price: "₺200/seans",
    rating: 4.8,
    reviews: 256,
    image: categorySports,
  },
  {
    id: 3,
    title: "Piyano Başlangıç",
    category: "Müzik",
    categoryId: "music",
    location: "Bakırköy, İstanbul",
    ageRange: "6-12 yaş",
    price: "₺350/seans",
    rating: 5.0,
    reviews: 89,
    image: categoryMusic,
  },
  {
    id: 4,
    title: "Kodlama Maceraları",
    category: "STEM",
    categoryId: "stem",
    location: "Levent, İstanbul",
    ageRange: "8-14 yaş",
    price: "₺400/seans",
    rating: 4.9,
    reviews: 167,
    image: categoryStem,
  },
  {
    id: 5,
    title: "Doğa Kaşifleri Kampı",
    category: "Açık Hava",
    categoryId: "outdoor",
    location: "Belgrad Ormanı",
    ageRange: "7-12 yaş",
    price: "₺450/gün",
    rating: 4.7,
    reviews: 203,
    image: categoryOutdoor,
  },
  {
    id: 6,
    title: "Bale Temelleri",
    category: "Dans",
    categoryId: "dance",
    location: "Nişantaşı, İstanbul",
    ageRange: "3-7 yaş",
    price: "₺300/seans",
    rating: 4.9,
    reviews: 145,
    image: categoryDance,
  },
  {
    id: 7,
    title: "Seramik & Heykel",
    category: "Sanat & El İşi",
    categoryId: "arts",
    location: "Moda, İstanbul",
    ageRange: "6-14 yaş",
    price: "₺280/seans",
    rating: 4.8,
    reviews: 92,
    image: categoryArts,
  },
  {
    id: 8,
    title: "Basketbol Okulu",
    category: "Spor",
    categoryId: "sports",
    location: "Ataşehir, İstanbul",
    ageRange: "8-15 yaş",
    price: "₺220/seans",
    rating: 4.6,
    reviews: 178,
    image: categorySports,
  },
];

const categories = [
  { id: "all", name: "Tümü" },
  { id: "arts", name: "Sanat & El İşi" },
  { id: "sports", name: "Spor" },
  { id: "music", name: "Müzik" },
  { id: "stem", name: "STEM" },
  { id: "outdoor", name: "Açık Hava" },
  { id: "dance", name: "Dans" },
];

const Activities = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("recommended");
  const [favorites, setFavorites] = useState<number[]>([]);

  const filteredActivities = allActivities
    .filter((activity) => {
      const matchesCategory = selectedCategory === "all" || activity.categoryId === selectedCategory;
      const matchesSearch = activity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        activity.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        activity.location.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return parseInt(a.price.replace(/\D/g, "")) - parseInt(b.price.replace(/\D/g, ""));
        case "price-high":
          return parseInt(b.price.replace(/\D/g, "")) - parseInt(a.price.replace(/\D/g, ""));
        case "rating":
          return b.rating - a.rating;
        default:
          return b.reviews - a.reviews;
      }
    });

  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((f) => f !== id));
      toast.info("Favorilerden çıkarıldı");
    } else {
      setFavorites([...favorites, id]);
      toast.success("Favorilere eklendi!");
    }
  };

  const handleBooking = (activity: typeof allActivities[0]) => {
    toast.success(`"${activity.title}" için rezervasyon talebi alındı!`, {
      description: "En kısa sürede sizinle iletişime geçeceğiz."
    });
  };

  return (
    <Layout>
      <SEOHead
        title="Çocuk Aktiviteleri Keşfet"
        description="Bölgenizdeki çocuklar için yüzlerce yaşa uygun aktiviteyi keşfedin. Spordan sanata, STEM'den müziğe - çocuğunuz için mükemmel deneyimi bulun."
        canonical="/activities"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-coral-light/20 to-background section-padding py-12 md:py-16">
        <div className="container-width">
          <div className="text-center mb-8">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Mükemmel Aktiviteyi Bulun
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Çocukların öğrenmesine, büyümesine ve eğlenmesine yardımcı olmak için tasarlanmış seçkin aktivite koleksiyonumuzu keşfedin.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto bg-card rounded-2xl shadow-medium p-4 flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Aktivite ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-muted border-0 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X size={18} />
                </button>
              )}
            </div>
            <Button variant="hero" size="lg">
              <Filter size={18} />
              Filtrele
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="section-padding py-6 border-b border-border">
        <div className="container-width">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-xl font-medium transition-all ${
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="section-padding">
        <div className="container-width">
          <div className="flex justify-between items-center mb-8">
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">{filteredActivities.length}</span> aktivite gösteriliyor
            </p>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 rounded-xl bg-muted border-0 text-foreground"
            >
              <option value="recommended">Sırala: Önerilen</option>
              <option value="price-low">Fiyat: Düşükten Yükseğe</option>
              <option value="price-high">Fiyat: Yüksekten Düşüğe</option>
              <option value="rating">Puan</option>
            </select>
          </div>

          {filteredActivities.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-2xl font-display font-bold text-foreground mb-2">Aktivite bulunamadı</p>
              <p className="text-muted-foreground mb-4">Arama kriterlerinizi değiştirmeyi deneyin.</p>
              <Button variant="outline" onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}>
                Filtreleri Temizle
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="group bg-card rounded-2xl overflow-hidden shadow-soft card-hover"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-card/90 backdrop-blur text-sm font-medium">
                        {activity.category}
                      </span>
                    </div>
                    <button
                      onClick={() => toggleFavorite(activity.id)}
                      className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                        favorites.includes(activity.id)
                          ? "bg-primary text-primary-foreground"
                          : "bg-card/90 backdrop-blur text-muted-foreground hover:text-primary"
                      }`}
                    >
                      <Heart size={18} className={favorites.includes(activity.id) ? "fill-current" : ""} />
                    </button>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sunshine">★</span>
                      <span className="font-semibold">{activity.rating}</span>
                      <span className="text-muted-foreground text-sm">
                        ({activity.reviews} değerlendirme)
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-foreground mb-2">
                      {activity.title}
                    </h3>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin size={16} />
                        {activity.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users size={16} />
                        {activity.ageRange}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-primary text-lg">
                        {activity.price}
                      </p>
                      <Button variant="tealOutline" size="sm" onClick={() => handleBooking(activity)}>
                        Rezervasyon Yap
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Load More */}
          {filteredActivities.length > 0 && (
            <div className="text-center mt-12">
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => toast.info("Daha fazla aktivite yükleniyor...")}
              >
                Daha Fazla Aktivite Yükle
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* SEO Content */}
      <section className="section-padding bg-muted/50">
        <div className="container-width max-w-4xl">
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">
            Yakınınızdaki En İyi Çocuk Aktivitelerini Bulun
          </h2>
          <div className="prose prose-lg text-muted-foreground space-y-4">
            <p>
              ÇocukMacera'da, çocuklarınız için doğru aktiviteleri bulmanın ne kadar zorlayıcı olabileceğini anlıyoruz. Bu yüzden spor, sanat, müzik, STEM ve açık hava maceraları dahil olmak üzere çeşitli kategorilerde yaşa uygun aktivitelerden oluşan kapsamlı bir seçki hazırladık.
            </p>
            <p>
              İster haftalık dersler, ister hafta sonu atölyeleri veya yaz kampları arıyor olun, platformumuz sizi çocukların öğrenmesine ve büyümesine yardımcı olmak için tutkulu, doğrulanmış sağlayıcılarla buluşturur. Tüm aktiviteler sizin gibi ebeveynler tarafından incelenir ve değerlendirilir, bu da aileniz için kaliteli deneyimler sağlar.
            </p>
            <p>
              Mahallenizde aktiviteler bulmak için konuma göre göz atın veya çocuğunuzun gelişim aşamasına mükemmel uygun deneyimleri keşfetmek için yaş grubuna göre filtreleyin. Minikler için sanat derslerinden gençler için kodlama kamplarına kadar, ÇocukMacera'da her genç kaşif için bir şeyler var.
            </p>
          </div>
          <div className="mt-8">
            <Link to="/blog" className="text-primary hover:underline font-medium">
              Blogumuzda daha fazla ebeveyn ipucu okuyun →
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Activities;
