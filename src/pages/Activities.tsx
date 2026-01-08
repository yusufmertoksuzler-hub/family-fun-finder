import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Calendar, Users, Filter, Search } from "lucide-react";
import categoryArts from "@/assets/category-arts.jpg";
import categorySports from "@/assets/category-sports.jpg";
import categoryMusic from "@/assets/category-music.jpg";
import categoryStem from "@/assets/category-stem.jpg";
import categoryOutdoor from "@/assets/category-outdoor.jpg";
import categoryDance from "@/assets/category-dance.jpg";

const activities = [
  {
    id: 1,
    title: "Creative Art Studio",
    category: "Arts & Crafts",
    location: "Downtown SF",
    ageRange: "4-8 years",
    price: "$25/session",
    rating: 4.9,
    reviews: 128,
    image: categoryArts,
  },
  {
    id: 2,
    title: "Junior Soccer League",
    category: "Sports",
    location: "Golden Gate Park",
    ageRange: "5-10 years",
    price: "$20/session",
    rating: 4.8,
    reviews: 256,
    image: categorySports,
  },
  {
    id: 3,
    title: "Piano for Beginners",
    category: "Music",
    location: "Music Academy",
    ageRange: "6-12 years",
    price: "$35/session",
    rating: 5.0,
    reviews: 89,
    image: categoryMusic,
  },
  {
    id: 4,
    title: "Coding Adventures",
    category: "STEM",
    location: "Tech Hub",
    ageRange: "8-14 years",
    price: "$40/session",
    rating: 4.9,
    reviews: 167,
    image: categoryStem,
  },
  {
    id: 5,
    title: "Nature Explorers Camp",
    category: "Outdoor",
    location: "Muir Woods",
    ageRange: "7-12 years",
    price: "$45/day",
    rating: 4.7,
    reviews: 203,
    image: categoryOutdoor,
  },
  {
    id: 6,
    title: "Ballet Basics",
    category: "Dance",
    location: "Dance Studio",
    ageRange: "3-7 years",
    price: "$30/session",
    rating: 4.9,
    reviews: 145,
    image: categoryDance,
  },
];

const categories = [
  "All",
  "Arts & Crafts",
  "Sports",
  "Music",
  "STEM",
  "Outdoor",
  "Dance",
];

const Activities = () => {
  return (
    <Layout>
      <SEOHead
        title="Browse Kids Activities"
        description="Discover hundreds of age-appropriate activities for children in your area. From sports and arts to STEM and music lessons - find the perfect experience for your child."
        canonical="/activities"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-coral-light/20 to-background section-padding py-12 md:py-16">
        <div className="container-width">
          <div className="text-center mb-8">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Find the Perfect Activity
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse our curated collection of activities designed to help children learn, grow, and have fun across San Francisco and beyond.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto bg-card rounded-2xl shadow-medium p-4 flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search activities..."
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-muted border-0 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <Button variant="hero" size="lg">
              <Filter size={18} />
              Filter
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
                key={category}
                className={`px-4 py-2 rounded-xl font-medium transition-all ${
                  category === "All"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
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
              Showing <span className="font-semibold text-foreground">{activities.length}</span> activities
            </p>
            <select className="px-4 py-2 rounded-xl bg-muted border-0 text-foreground">
              <option>Sort by: Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Rating</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity) => (
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
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sunshine">★</span>
                    <span className="font-semibold">{activity.rating}</span>
                    <span className="text-muted-foreground text-sm">
                      ({activity.reviews} reviews)
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
                    <Button variant="tealOutline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Activities
            </Button>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="section-padding bg-muted/50">
        <div className="container-width max-w-4xl">
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">
            Finding the Best Kids Activities Near You
          </h2>
          <div className="prose prose-lg text-muted-foreground space-y-4">
            <p>
              At KidVenture, we understand that finding the right activities for your children can be overwhelming. That's why we've curated a comprehensive selection of age-appropriate activities across various categories including sports, arts and crafts, music, STEM, and outdoor adventures.
            </p>
            <p>
              Whether you're looking for weekly classes, weekend workshops, or summer camps, our platform connects you with verified providers who are passionate about helping children learn and grow. All activities are reviewed and rated by parents like you, ensuring quality experiences for your family.
            </p>
            <p>
              Browse by location to find activities in your neighborhood, or filter by age group to discover experiences perfectly suited for your child's developmental stage. From toddler-friendly art classes to teen coding bootcamps, KidVenture has something for every young adventurer.
            </p>
          </div>
          <div className="mt-8">
            <Link to="/blog" className="text-primary hover:underline font-medium">
              Read more parenting tips on our blog →
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Activities;
