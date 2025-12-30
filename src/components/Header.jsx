import {
  useEffect,
  useState
} from 'react'

const sections = ["slider", "about", "glossary", "feature"];

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("slider");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const pos = scrollY + 120;

      setIsSticky(scrollY > 300);

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        if (pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header header-sticky ${isSticky ? "is-sticky" : ""}`}>
      <div id="main-menu" className="header-top inner-header">
        <div className="container">
          <div className="row header-top-inner align-items-center">

            {/* LOGO */}
            <div className="col-8 col-lg-4">
              <div className="logo d-flex align-items-center">
                <a href="#slider">
                  <img src="/images/logo/ecDoE_logo.svg" alt="Logo" />
                </a>
                <span className="logo-text ms-2">
                  <span className="company-main">Multi Lingual Learning</span>
                </span>
              </div>
            </div>

            {/* DESKTOP MENU (UNCHANGED) */}
            <div className="col-lg-8 d-none d-lg-block">
              <div className="main-menu">
                <nav className="main-navigation">
                  <ul>
                    <li className={activeSection === "slider" ? "active" : ""}>
                      <a href="#slider">Home</a>
                    </li>
                    <li className={activeSection === "about" ? "active" : ""}>
                      <a href="#about">About</a>
                    </li>
                    <li className={activeSection === "glossary" ? "active" : ""}>
                      <a href="#glossary">Glossaries</a>
                    </li>
                    <li className={activeSection === "feature" ? "active" : ""}>
                      <a href="#feature">Word Games</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            {/* MOBILE HAMBURGER */}
            <div className="col-4 d-lg-none">
              <div className="mobile-menu text-end">
                <div className="mean-bar">

                  <a
                    className="meanmenu-reveal"
                    onClick={() => setMobileOpen(!mobileOpen)}
                  >
                    <span className={mobileOpen ? "menu-close" : "menu-bar"} />
                  </a>

                </div>
              </div>
            </div>

          </div>
        </div>

        {/* MOBILE NAV (DROPDOWN) */}
        {mobileOpen && (
          <div className="mobile-menu d-lg-none">
            <div className="mean-bar">
              <nav className="mean-nav">
                <ul>
                  <li><a href="#slider" onClick={() => setMobileOpen(false)}>Home</a></li>
                  <li><a href="#about" onClick={() => setMobileOpen(false)}>About</a></li>
                  <li><a href="#glossary" onClick={() => setMobileOpen(false)}>Glossaries</a></li>
                  <li><a href="#feature" onClick={() => setMobileOpen(false)}>Word Games</a></li>
                </ul>
              </nav>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};

export default Header;
