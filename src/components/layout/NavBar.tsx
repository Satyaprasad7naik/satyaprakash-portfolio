import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "../common/Button";
import { navLinks } from "../../constants";
import gsap from "gsap";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    // Navbar entrance animation
    gsap.fromTo(
      "nav",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.3 }
    );

    // Handle scroll to update active link
    const handleScroll = () => {
      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      );

      sections.forEach((section, idx) => {
        if (!section) return;
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom > 0) {
          setActiveLink(navLinks[idx].name.toLowerCase());
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    setActiveLink(href.substring(1));
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-text">Satyaprakash</h1>
          <span className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/40">
            @ AirDesk
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`text-sm font-medium transition-colors ${
                activeLink === link.name.toLowerCase()
                  ? "text-primary"
                  : "text-text-muted hover:text-text"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button variant="primary" size="sm">
            Let's Talk
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-text"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border glass-effect">
          <div className="flex flex-col gap-4 p-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-text hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button variant="primary" size="md" className="w-full">
              Let's Talk
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
