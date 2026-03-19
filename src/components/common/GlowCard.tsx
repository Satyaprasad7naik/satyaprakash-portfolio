import React from "react";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowing?: boolean;
}

const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className = "",
  glowing = true,
}) => {
  return (
    <div
      className={`
        glass-effect rounded-lg p-6 md:p-8 backdrop-blur-xl
        border border-border hover:border-primary/50 transition-all duration-300
        ${glowing ? "hover:shadow-lg hover:glow-border" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlowCard;
