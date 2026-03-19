export type NavLink = {
  id: string;
  label: string;
  href: `#${string}`;
};

export const navLinks: NavLink[] = [
  { id: "about", label: "ABOUT", href: "#about" },
  { id: "work", label: "WORK", href: "#work" },
  { id: "experience", label: "EXPERIENCE", href: "#experience" },
  { id: "contact", label: "CONTACT", href: "#contact" },
];

export type SocialLink = {
  label: string;
  href: string;
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "X", href: "https://x.com" },
  { label: "Instagram", href: "https://www.instagram.com" },
];