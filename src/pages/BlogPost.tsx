import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/seo/SEOHead";
import { Clock, User, Calendar, ArrowLeft, Share2, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock blog data - in production, this would come from a CMS
const blogPostsData: Record<string, {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  authorRole: string;
  readTime: string;
  date: string;
  image: string;
  tags: string[];
}> = {
  "benefits-of-extracurricular-activities": {
    title: "10 Benefits of Extracurricular Activities for Children",
    excerpt: "Discover how extracurricular activities can boost your child's confidence, social skills, and academic performance.",
    content: `
      <p>Extracurricular activities play a crucial role in a child's overall development. While academic education provides the foundation, activities outside the classroom help children develop essential life skills that will serve them well into adulthood.</p>
      
      <h2>1. Improved Academic Performance</h2>
      <p>Contrary to concerns that extracurricular activities take time away from studying, research consistently shows that children who participate in structured activities often perform better academically. These activities teach time management and help children develop better focus and concentration.</p>
      
      <h2>2. Social Skills Development</h2>
      <p>Team sports, group music lessons, and collaborative art projects provide excellent opportunities for children to interact with peers outside the classroom setting. They learn to communicate, cooperate, and resolve conflicts in constructive ways.</p>
      
      <h2>3. Building Self-Confidence</h2>
      <p>Mastering a new skill, whether it's scoring a goal or performing in a recital, builds tremendous self-confidence. This sense of accomplishment translates to other areas of life, including academics and social situations.</p>
      
      <h2>4. Physical Health Benefits</h2>
      <p>Active extracurricular activities like sports, dance, and martial arts help children develop healthy habits early in life. Regular physical activity reduces the risk of obesity and associated health problems.</p>
      
      <h2>5. Stress Reduction</h2>
      <p>Activities provide a healthy outlet for stress and anxiety. Creative pursuits like art and music, in particular, have been shown to reduce cortisol levels and promote emotional well-being.</p>
      
      <h2>6. Time Management Skills</h2>
      <p>Balancing homework, activities, and free time teaches children valuable organizational skills. They learn to prioritize and manage their schedules effectively.</p>
      
      <h2>7. Exploring Interests and Talents</h2>
      <p>Extracurricular activities give children the chance to explore different interests and discover hidden talents. This exploration is crucial for developing a sense of identity and future career interests.</p>
      
      <h2>8. Learning Resilience</h2>
      <p>Not every practice will go perfectly, and not every competition will be won. These experiences teach children how to handle disappointment, learn from failures, and keep trying.</p>
      
      <h2>9. Leadership Opportunities</h2>
      <p>Many activities provide natural leadership opportunities, whether it's being a team captain, leading a section in band, or mentoring younger participants.</p>
      
      <h2>10. College and Career Preparation</h2>
      <p>Participation in extracurricular activities demonstrates commitment, passion, and well-roundedness to college admissions officers and future employers.</p>
      
      <h2>Getting Started</h2>
      <p>The key is finding activities that match your child's interests and schedule. Don't overcommit – quality is more important than quantity. Let your child have input in choosing their activities, and be supportive but not pushy.</p>
    `,
    category: "Parenting Tips",
    author: "Dr. Emily Chen",
    authorRole: "Child Development Specialist",
    readTime: "5 min read",
    date: "2024-01-15",
    image: "🎯",
    tags: ["parenting", "child development", "activities", "education"],
  },
  "choosing-right-sport-for-your-child": {
    title: "How to Choose the Right Sport for Your Child",
    excerpt: "A comprehensive guide to matching your child's interests and abilities with the perfect sport.",
    content: `
      <p>Choosing the right sport for your child can set them up for years of enjoyment and healthy habits. Here's how to find the perfect match.</p>
      
      <h2>Consider Your Child's Personality</h2>
      <p>Is your child naturally competitive or more cooperative? Do they thrive in team environments or prefer individual achievement? Understanding your child's personality helps narrow down options.</p>
      
      <h2>Age-Appropriate Activities</h2>
      <p>Young children (ages 3-5) benefit from activities focused on basic motor skills. As children grow, they can handle more complex rules and strategies. Wait until age 6-8 before introducing competitive sports.</p>
      
      <h2>Physical Considerations</h2>
      <p>Every child has different physical strengths. Some may excel in activities requiring endurance, while others might be better suited for sports requiring quick bursts of energy or flexibility.</p>
      
      <h2>Try Before Committing</h2>
      <p>Many programs offer trial classes. Take advantage of these to let your child experience different activities before making a long-term commitment.</p>
    `,
    category: "Sports",
    author: "Coach Mike Johnson",
    authorRole: "Youth Sports Director",
    readTime: "7 min read",
    date: "2024-01-10",
    image: "⚽",
    tags: ["sports", "kids sports", "physical activity", "choosing activities"],
  },
};

const relatedPosts = [
  {
    slug: "stem-activities-at-home",
    title: "Fun STEM Activities You Can Do at Home",
    category: "STEM",
    image: "🔬",
  },
  {
    slug: "importance-of-creative-play",
    title: "The Importance of Creative Play",
    category: "Development",
    image: "🎨",
  },
  {
    slug: "summer-camp-preparation-guide",
    title: "Complete Summer Camp Prep Guide",
    category: "Summer",
    image: "🏕️",
  },
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPostsData[slug] : null;

  if (!post) {
    return (
      <Layout>
        <SEOHead
          title="Post Not Found"
          description="The blog post you're looking for doesn't exist."
        />
        <div className="section-padding container-width text-center py-24">
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">
            Post Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The article you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEOHead
        title={post.title}
        description={post.excerpt}
        canonical={`/blog/${slug}`}
        ogType="article"
        article={{
          publishedTime: post.date,
          author: post.author,
          tags: post.tags,
        }}
      />

      {/* Article Header */}
      <article>
        <header className="bg-gradient-to-b from-teal-light/20 to-background section-padding py-12 md:py-16">
          <div className="container-width max-w-4xl">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6"
            >
              <ArrowLeft size={18} />
              Back to Blog
            </Link>

            <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              {post.category}
            </span>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-8">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-semibold text-primary">
                    {post.author.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{post.author}</p>
                  <p className="text-sm">{post.authorRole}</p>
                </div>
              </div>
              <span className="flex items-center gap-2">
                <Calendar size={16} />
                {new Date(post.date).toLocaleDateString("en-US", { 
                  year: "numeric", 
                  month: "long", 
                  day: "numeric" 
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} />
                {post.readTime}
              </span>
            </div>

            {/* Share buttons */}
            <div className="flex gap-3 mt-8">
              <Button variant="outline" size="sm">
                <Share2 size={16} />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Bookmark size={16} />
                Save
              </Button>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="container-width max-w-4xl py-8">
          <div className="aspect-video bg-gradient-to-br from-coral-light/30 to-teal-light/30 rounded-3xl flex items-center justify-center">
            <span className="text-9xl">{post.image}</span>
          </div>
        </div>

        {/* Article Content */}
        <div className="container-width max-w-3xl section-padding py-8">
          <div
            className="prose prose-lg max-w-none 
              prose-headings:font-display prose-headings:text-foreground
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-strong:text-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-border">
            <h4 className="font-semibold text-foreground mb-4">Tags:</h4>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <section className="section-padding bg-muted/50">
          <div className="container-width">
            <h2 className="font-display text-2xl font-bold text-foreground mb-8">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  to={`/blog/${related.slug}`}
                  className="group bg-card rounded-2xl overflow-hidden shadow-soft card-hover"
                >
                  <div className="aspect-video bg-gradient-to-br from-coral-light/30 to-teal-light/30 flex items-center justify-center">
                    <span className="text-5xl">{related.image}</span>
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-secondary font-medium">
                      {related.category}
                    </span>
                    <h3 className="font-display font-bold text-foreground mt-2 group-hover:text-primary transition-colors">
                      {related.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
};

export default BlogPost;
