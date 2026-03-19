import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="experience">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SEO & Content Strategist</h4>
                <h5>ContentFirst Studio</h5>
              </div>
              <h3>2019</h3>
            </div>
            <p>
              Led SEO for startup clients through technical audits, content
              cluster strategy, and on-page optimization to rank commercial
              keywords in top search positions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Performance Marketing Specialist</h4>
                <h5>GrowthLab Agency</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Managed B2B SaaS paid media accounts across Google and Meta,
              improving ROAS through campaign restructuring, creative testing,
              and conversion-focused landing page experiments.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Digital Marketing Lead</h4>
                <h5>AirDesk</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Own the end-to-end growth engine from acquisition to nurture,
              running multi-channel campaigns and reporting weekly CAC, ROAS,
              and revenue impact to leadership.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
