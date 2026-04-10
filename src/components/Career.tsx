import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
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
                <h4>UI/UX Designer & 3D Artist</h4>
                <h5>Creative Agency</h5>
              </div>
              <h3>2018</h3>
            </div>
            <p>
              Started my journey by combining traditional UI design with 3D modeling. 
              Developed unique visual identities and interactive prototypes for a diverse range of clients.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Frontend Engineer</h4>
                <h5>Innovate Tech</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Focused on building scalable web applications using React and TypeScript. 
              Implemented complex state management and optimized application performance for high-traffic platforms.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Lead Creative Developer</h4>
                <h5>Digital Studio</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently leading the development of immersive 3D web experiences. 
              Integrating Three.js and GSAP to create award-winning interactive websites that push the boundaries of the web.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
