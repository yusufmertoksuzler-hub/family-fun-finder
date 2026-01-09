import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ayşe K.",
    role: "2 Çocuk Annesi",
    content: "ÇocukMacera ailemiz için bir devrim oldu! Çocuklarımız için harika aktiviteler keşfettik. Rezervasyon süreci çok kolay.",
    rating: 5,
    avatar: "AK",
  },
  {
    id: 2,
    name: "Mehmet T.",
    role: "3 Çocuk Babası",
    content: "Yoğun bir ebeveyn olarak, programımıza uygun aktiviteler bulmak çok kolay. Çocuklarım sanat derslerinden kodlama kamplarına kadar her şeyi denedi!",
    rating: 5,
    avatar: "MT",
  },
  {
    id: 3,
    name: "Zeynep L.",
    role: "1 Çocuk Annesi",
    content: "Platformdaki aktivite sağlayıcılarının kalitesi harika. Her deneyim profesyoneldi ve kızım haftalık dans dersini çok seviyor.",
    rating: 5,
    avatar: "ZL",
  },
];

const stats = [
  { value: "10.000+", label: "Mutlu Aile" },
  { value: "500+", label: "Aktivite" },
  { value: "100+", label: "Onaylı Sağlayıcı" },
  { value: "4.9/5", label: "Ortalama Puan" },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-width">
        {/* Stats Bar */}
        <div className="bg-gradient-to-r from-primary to-coral-dark rounded-3xl p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-primary-foreground/80 text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Aileler Ne Diyor?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Çocukları için mükemmel aktiviteleri keşfetmenin mutluluğunu yaşayan binlerce aileye katılın
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-2xl p-6 shadow-soft card-hover"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-sunshine text-sunshine"
                  />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-foreground mb-6">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-semibold text-primary">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
