import { useRef, useState } from "react";
import ContactExperience from "../components/canvas/ContactExperience";
import Button from "../components/common/Button";
import TitleHeader from "../components/common/TitleHeader";
import { contactInfo } from "../constants";
import gsap from "gsap";
import { useEffect } from "react";

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      ".contact-form",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      alert("Thanks for reaching out! I'll get back to you soon.");
    }, 1000);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <TitleHeader
            overline="Get In Touch"
            title={contactInfo.heading}
            description={contactInfo.subtext}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: 3D Globe */}
          <div className="hidden lg:block relative w-full h-96 rounded-lg overflow-hidden">
            <div className="absolute inset-0 rounded-lg glass-effect border border-border/50">
              <ContactExperience />
            </div>
          </div>

          {/* Right: Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="contact-form grid gap-6 md:gap-8"
          >
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="text-text font-semibold mb-2 block">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg glass-effect border border-border/50 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 text-text placeholder-text-muted transition-all duration-300"
                placeholder="Satyaprakash"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="text-text font-semibold mb-2 block">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg glass-effect border border-border/50 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 text-text placeholder-text-muted transition-all duration-300"
                placeholder="you@example.com"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="text-text font-semibold mb-2 block">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg glass-effect border border-border/50 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 text-text placeholder-text-muted transition-all duration-300 resize-none"
                placeholder="Tell me about your project or campaign..."
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? "Sending..." : `${contactInfo.cta} →`}
            </Button>

            {/* Contact Email Link */}
            <div className="text-center pt-4 border-t border-border/50">
              <p className="text-text-muted text-sm mb-2">Or email directly:</p>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-primary font-semibold hover:text-accent transition-colors"
              >
                {contactInfo.email}
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
