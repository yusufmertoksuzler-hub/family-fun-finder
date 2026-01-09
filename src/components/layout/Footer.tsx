import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: [
      { href: "/activities", label: "Aktiviteleri Keşfet" },
      { href: "/providers", label: "Sağlayıcı Ol" },
      { href: "/blog", label: "Blog" },
      { href: "/about", label: "Hakkımızda" },
    ],
    activities: [
      { href: "/activities?category=sports", label: "Spor" },
      { href: "/activities?category=arts", label: "Sanat & El İşi" },
      { href: "/activities?category=music", label: "Müzik" },
      { href: "/activities?category=stem", label: "STEM" },
    ],
    support: [
      { href: "/contact", label: "İletişim" },
      { href: "/faq", label: "SSS" },
      { href: "/privacy", label: "Gizlilik Politikası" },
      { href: "/terms", label: "Kullanım Koşulları" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-width section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">Ç</span>
              </div>
              <span className="font-display font-bold text-xl">ÇocukMacera</span>
            </Link>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              Çocuklarınız için harika aktiviteler keşfedin. Spordan sanata, çocukların öğrenmesine, büyümesine ve eğlenmesine yardımcı olacak mükemmel deneyimleri bulun.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Platform</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Activities Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Aktiviteler</h4>
            <ul className="space-y-3">
              {footerLinks.activities.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">İletişim</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Mail size={18} />
                <span>merhaba@cocukmacera.com</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Phone size={18} />
                <span>0212 555 12 34</span>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin size={18} className="mt-1" />
                <span>Levent Mah. Çocuk Sk. No:1<br />İstanbul, Türkiye</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {currentYear} ÇocukMacera. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-6 text-sm">
            {footerLinks.support.slice(2).map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-primary-foreground/50 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
