const HeroSlider = () => {
  return (
    <div className="hero-slider hero-slider-1" id="slider">
      <div
        className="single-slide"
        style={{ backgroundImage: "url(/images/slider/slide-bg-1.jpg)" }}
      >
        <div className="hero-content-one container">
          <div className="row">
            <div className="col-lg-12">
              <div className="slider-text-info text-center">
                <h1>Precision Language Tools, Built for Engagement.</h1>
                <h3>
                  Expand your vocabulary, reinforce learning, and make language
                  education engaging for everyone.
                </h3>
                <div className="slider-button">
                  <a href="#glossary" className="slider-btn theme-btn">
                    Explore Glossaries
                  </a>
                  <br />
                  <br />
                  <a href="#feature" className="slider-btn theme-btn">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
