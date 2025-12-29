const About = () => {
  return (
    <div className="about-area bg-grey section-ptb" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 order-1 order-lg-2">
            <div className="about-image text-center">
              <img src="/images/about/02.jpg" alt="About ecDoE" />

              <div className="about-video-button">
                <a
                  href="https://www.youtube.com/watch?v=2cTVtjzk9Ec"
                  className="video-btn popup-youtube"
                >
                  <i className="fa fa-play"></i>
                </a>

                <div className="video-animation">
                  <div className="animation animation-1"></div>
                  <div className="animation animation-2"></div>
                  <div className="animation animation-3"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 order-2 order-lg-1">
            <div className="about-content-inner">
              <div className="about-title">
                <h4>
                  Your multilingual resource for subject terminology and
                  educational tools
                </h4>
                <h2>
                  Eastern Cape Education <span> - Glossary & Learning Hub</span>
                </h2>
              </div>

              <div className="about-text">
                <p>
                  This is your essential source for multilingual educational
                  resources, developed by the Eastern Cape Department of
                  Education.
                </p>
                <p>
                  Easily search thousands of subject-specific terms and access
                  valuable tools, including official spelling rules and engaging
                  educational activities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
