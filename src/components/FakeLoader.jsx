import {
  useEffect,
  useState
} from 'react'

const FakeLoader = ({
  timeToHide = 500,
  bgColor = "#09C7E0",
  spinner = "spinner1",
  zIndex = 99999
}) => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, timeToHide);

    return () => clearTimeout(timer);
  }, [timeToHide]);

  const renderSpinner = () => {
    switch (spinner) {
      case "spinner1":
        return (
          <div className="fl spinner1">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
          </div>
        );
      case "spinner7":
        return (
          <div className="fl spinner7">
            <div className="circ1"></div>
            <div className="circ2"></div>
            <div className="circ3"></div>
            <div className="circ4"></div>
          </div>
        );
      default:
        return (
          <div className="fl spinner1">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
          </div>
        );
    }
  };

  return (
    <div
      className={`fakeloader ${hide ? "hide" : ""}`}
      style={{ backgroundColor: bgColor, zIndex }}
    >
      {renderSpinner()}
    </div>
  );
};

export default FakeLoader;
