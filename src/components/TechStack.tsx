import "./styles/TechStack.css";

const tools = [
  "Google Ads",
  "Meta Ads",
  "LinkedIn Ads",
  "SEO",
  "Google Analytics",
  "HubSpot",
  "Mailchimp",
  "Semrush",
  "Hotjar",
  "Notion",
  "Canva",
  "Figma",
];

const TechStack = () => {
  return (
    <section className="techstack" id="techstack">
      <div className="techstack-overlay" />
      <div className="techstack-inner section-container">
        <h2>
          Tools I <span>Master</span>
        </h2>
        <p>
          Platforms I use to scale acquisition, optimize conversion, and drive
          measurable growth at AirDesk.
        </p>
        <div className="techstack-grid">
          {tools.map((tool) => (
            <div key={tool} className="techstack-chip" data-cursor="disable">
              {tool}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
