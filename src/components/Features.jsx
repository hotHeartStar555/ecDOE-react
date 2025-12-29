import { useEffect } from 'react'

const Features = () => {
  useEffect(() => {
    // Load Genially embed script only once
    if (!document.getElementById("genially-embed-js")) {
      const script = document.createElement("script");
      script.id = "genially-embed-js";
      script.async = true;
      script.src = "https://view.genially.com/static/embed/embed.js";
      document.body.appendChild(script);
    }
  }, []);

  const GeniallyEmbed = ({ id, title }) => (
    <div style={{ marginBottom: "40px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>{title}</h2>

      <div
        className="container-wrapper-genially"
        style={{
          position: "relative",
          minHeight: "400px",
          maxWidth: "100%",
        }}
      >
        <video
          className="loader-genially"
          autoPlay
          loop
          playsInline
          muted
          style={{
            position: "absolute",
            top: "45%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80px",
            height: "80px",
          }}
        >
          <source
            src="https://static.genially.com/resources/loader-default-rebranding.mp4"
            type="video/mp4"
          />
        </video>

        <div
          id={id}
          className="genially-embed"
          style={{
            margin: "0 auto",
            position: "relative",
            width: "100%",
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <div className="feature-area section-pt section-pb-70" id="feature">
      <div className="container">
        <div className="signle-feature">

          {/* ✅ Font Awesome Icon */}
          <div className="feature-icon">
            <span className="bi bi-graph-bar"></span>
          </div>

          <div className="feature-content">
            <h3 style={{ textAlign: "center", marginBottom: "30px" }}>
              Get Started with Games
            </h3>

            <GeniallyEmbed
              id="6932e1af10560da7027cb099"
              title="Grade 3"
            />

            <GeniallyEmbed
              id="6933d95a417133ada4201742"
              title="Grade 5"
            />

            <GeniallyEmbed
              id="6939348f83fdee2e525002d4"
              title="Grade 7"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Features;
