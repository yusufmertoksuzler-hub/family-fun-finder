import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/seo/SEOHead";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Target, Users, Sparkles } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Family First",
    description: "We believe every child deserves access to enriching activities that help them discover their passions.",
  },
  {
    icon: Target,
    title: "Quality Matters",
    description: "We carefully vet every activity provider to ensure safe, educational, and enjoyable experiences.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Our platform is built on feedback from real parents and providers who shape everything we do.",
  },
  {
    icon: Sparkles,
    title: "Joy of Discovery",
    description: "We celebrate the magic of children trying new things and finding what makes them light up.",
  },
];

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-founder",
    bio: "Former teacher turned entrepreneur. Mom of two curious kids.",
    avatar: "SC",
  },
  {
    name: "Michael Torres",
    role: "CTO & Co-founder",
    bio: "Tech enthusiast passionate about making parenting easier.",
    avatar: "MT",
  },
  {
    name: "Jessica Lee",
    role: "Head of Provider Relations",
    bio: "10+ years connecting families with quality programs.",
    avatar: "JL",
  },
  {
    name: "David Kim",
    role: "Head of Product",
    bio: "UX expert focused on delightful family experiences.",
    avatar: "DK",
  },
];

const About = () => {
  return (
    <Layout>
      <SEOHead
        title="About Us - Our Mission & Story"
        description="Learn about KidVenture's mission to help families discover amazing activities for their children. Meet our team and discover what drives us."
        canonical="/about"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-sunshine/20 to-background section-padding py-16 md:py-24">
        <div className="container-width max-w-4xl text-center">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Helping Families Discover{" "}
            <span className="text-primary">Amazing</span> Experiences
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're on a mission to connect children with activities that spark joy, build skills, and create lasting memories.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  KidVenture was born from a simple frustration: finding quality activities for kids shouldn't be so hard. As parents ourselves, we spent countless hours researching programs, reading reviews, and calling providers just to book a single class.
                </p>
                <p>
                  In 2022, we set out to create a better way. We envisioned a platform where parents could easily discover, compare, and book activities that match their children's interests and their family's schedule.
                </p>
                <p>
                  Today, KidVenture connects thousands of families with hundreds of verified activity providers across the country. From art classes to sports leagues, music lessons to coding camps, we're making it easier than ever for children to explore their passions.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-coral-light/30 to-teal-light/30 rounded-3xl aspect-square flex items-center justify-center">
              <div className="text-center">
                <span className="text-8xl mb-4 block">👨‍👩‍👧‍👦</span>
                <p className="font-display font-bold text-2xl text-foreground">Founded by Parents</p>
                <p className="text-muted-foreground">For Parents</p>
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
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
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
              Meet Our Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The passionate people behind KidVenture
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
            Our Mission
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            "To empower every family to discover activities that help their children learn, grow, and create joyful memories—making the journey of exploration as easy as it should be."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/activities">Explore Activities</Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/providers">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
