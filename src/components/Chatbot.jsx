import { useEffect } from 'react'

const Chatbot = () => {
  useEffect(() => {
    if (window.__chainlit_loaded__) return;
    window.__chainlit_loaded__ = true;

    const loadWidget = () => {
      window.mountChainlitWidget({
        chainlitServer: "https://dedicated-vps.bbits.co.in:8443/chat",
        theme: "light",
        customCssUrl: "/chainlit.css",
        button: {
          imageUrl: "/images/logo/chat-button3.png",
          className: "w-20 h-25",
        },
      });
    };

    if (window.mountChainlitWidget) {
      loadWidget();
      return;
    }

    const script = document.createElement("script");
    script.src =
      "https://dedicated-vps.bbits.co.in:8443/chat/copilot/index.js";
    script.async = true;
    script.onload = loadWidget;

    document.body.appendChild(script);
  }, []);

  return null;
};

export default Chatbot;
