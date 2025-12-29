import { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    // Avoid loading script twice
    if (window.__chainlit_loaded__) return;
    window.__chainlit_loaded__ = true;

    const loadWidget = () => {
      window.mountChainlitWidget({
        chainlitServer: "https://dedicated-vps.bbits.co.in:8443",
        theme: "light",
        customCssUrl: "/chatbot.css", // MUST be in public
        button: {
          imageUrl: "/images/logo/chat-button3.png", // public/images
          className: "w-20 h-25",
        },
      });
    };

    // If script already exists
    if (window.mountChainlitWidget) {
      loadWidget();
      return;
    }

    // Load script
    const script = document.createElement("script");
    script.src =
      "https://dedicated-vps.bbits.co.in:8443/copilot/index.js";
    script.async = true;
    script.onload = loadWidget;

    document.body.appendChild(script);
  }, []);

  return null;
};

export default Chatbot;
