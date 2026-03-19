import { socialLinks } from "../../constants";
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const iconMap: { [key: string]: React.FC<any> } = {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaGithub,
};

const Footer = () => {
  return (
    <footer className="border-t border-border glass-effect">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left: Logo & Tagline */}
          <div>
            <h3 className="text-2xl font-bold text-text mb-2">
              Satyaprakash
            </h3>
            <p className="text-text-muted text-sm">
              Digital Marketing Strategist
              <br />
              Building brands that grow.
            </p>
          </div>

          {/* Center: Quick Links */}
          <div>
            <h4 className="text-text font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-text-muted">
              <li>
                <a href="#home" className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-primary transition-colors">
                  Work
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Right: Social Links */}
          <div>
            <h4 className="text-text font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-primary transition-colors"
                    aria-label={link.name}
                  >
                    {Icon && <Icon size={20} />}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-text-muted text-sm">
            © 2025 Satyaprakash · AirDesk · Digital Marketing
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
