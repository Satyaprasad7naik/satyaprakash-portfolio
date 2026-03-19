import React from "react";

interface TitleHeaderProps {
  overline?: string;
  title: string;
  description?: string;
  center?: boolean;
}

const TitleHeader: React.FC<TitleHeaderProps> = ({
  overline,
  title,
  description,
  center = true,
}) => {
  return (
    <div className={`${center ? "text-center" : ""} mb-12`}>
      {overline && (
        <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
          {overline}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl font-bold text-text mb-4 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-text-muted text-lg max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default TitleHeader;
