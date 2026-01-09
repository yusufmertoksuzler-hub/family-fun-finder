import { Link } from "react-router-dom";
import { ArrowRight, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    slug: "benefits-of-extracurricular-activities",
    title: "Çocuklar İçin Okul Dışı Aktivitelerin 10 Faydası",
    excerpt: "Okul dışı aktivitelerin çocuğunuzun özgüvenini, sosyal becerilerini ve akademik performansını nasıl artırabileceğini keşfedin.",
    category: "Ebeveyn İpuçları",
    author: "Dr. Elif Demir",
    readTime: "5 dk okuma",
    date: "2024-01-15",
    image: "🎯",
  },
  {
    id: 2,
    slug: "choosing-right-sport-for-your-child",
    title: "Çocuğunuz İçin Doğru Sporu Nasıl Seçersiniz?",
    excerpt: "Çocuğunuzun ilgi alanlarını ve yeteneklerini mükemmel sporla eşleştirmek için kapsamlı bir rehber.",
    category: "Spor",
    author: "Antrenör Ahmet Yılmaz",
    readTime: "7 dk okuma",
    date: "2024-01-10",
    image: "⚽",
  },
  {
    id: 3,
    slug: "stem-activities-at-home",
    title: "Evde Yapabileceğiniz Eğlenceli STEM Aktiviteleri",
    excerpt: "Merak uyandıran kolay ve ilgi çekici bilim deneyleri ve kodlama aktiviteleri.",
    category: "STEM",
    author: "Selin Kaya",
    readTime: "6 dk okuma",
    date: "2024-01-05",
    image: "🔬",
  },
];

const BlogHighlightsSection = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-width">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2">
              Blogumuzdan
            </h2>
            <p className="text-muted-foreground">
              Ebeveynler için ipuçları, rehberler ve içgörüler
            </p>
          </div>
          <Button variant="tealOutline" asChild>
            <Link to="/blog">
              Tüm Yazıları Gör
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft card-hover"
            >
              {/* Image placeholder */}
              <div className="aspect-video bg-gradient-to-br from-coral-light/30 to-teal-light/30 flex items-center justify-center">
                <span className="text-6xl">{post.image}</span>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                  {post.category}
                </span>
                
                <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <User size={14} />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogHighlightsSection;
