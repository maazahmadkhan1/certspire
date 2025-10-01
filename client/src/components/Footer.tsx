import { Link } from "wouter";

const footerLinks = {
  Product: [
    { name: "Courses", href: "#courses" },
    { name: "AI Practice", href: "#practice" },
    { name: "Resources", href: "#resources" },
    { name: "Pricing", href: "#pricing" },
  ],
  Company: [
    { name: "About Us", href: "#about" },
    { name: "Careers", href: "#careers" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Cookie Policy", href: "#cookies" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/">
              <a className="flex items-center space-x-2 mb-4" data-testid="link-footer-home">
                <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">C</span>
                </div>
                <span className="text-xl font-semibold tracking-tight">CertSpire</span>
              </a>
            </Link>
            <p className="text-sm text-muted-foreground">
              Empowering professionals to achieve certification success through AI-powered learning.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      data-testid={`link-footer-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} CertSpire. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
