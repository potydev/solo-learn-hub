import { Code2 } from "lucide-react";

const footerLinks = {
  Product: ["Courses", "Code Playground", "Compiler", "Blog"],
  Community: ["Discuss", "Leaderboard", "Code Bits", "Code Coach"],
  Company: ["About", "Careers", "Press", "Contact"],
  Legal: ["Terms", "Privacy", "Cookies", "Licenses"],
};

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border bg-card/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary">
                <Code2 className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">sololearn</span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-xs">
              The world's largest community of people learning to code. Start your journey today.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors">
                <span className="text-lg">𝕏</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors">
                <span className="text-lg">📘</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors">
                <span className="text-lg">📸</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors">
                <span className="text-lg">💼</span>
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-12 mt-12 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © 2024 Sololearn. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              App Store
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Google Play
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
