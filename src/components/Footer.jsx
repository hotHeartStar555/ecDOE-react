const Footer = () => {
  return (
    <footer className="footer-area footer-bg">
      <div className="footer-top section-pt-70 section-pb">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-logo">
                <a href="#">
                  <img
                    src="/images/logo/ecDoE_logo.svg"
                    alt="Multi Lingual Learning Logo"
                  />
                </a>
                <span className="logo-text">
                  <span className="company-main">Multi Lingual Learning</span>
                </span>
              </div>
            </div>

            <div className="col-lg-2 col-md-6">
              <div className="footer-list">
                <ul>
                  <li><a href="#slider">Home</a></li>
                  <li><a href="#glossary">Glossaries</a></li>
                  <li><a href="#feature">Word Games</a></li>
                  <li><a href="#about">About</a></li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12"></div>
            <div className="col-lg-6 col-md-12"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
