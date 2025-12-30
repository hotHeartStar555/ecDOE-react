import Header from "./components/Header"
import HeroSlider from "./components/HeroSlider"
import About from "./components/About"
import Glossary from "./components/Glossary"
import Feature from "./components/Features"
import Footer from "./components/Footer"
import AdminSec from "./components/AdminSec"

import FakeLoader from "./components/FakeLoader"
import Chatbot from "./components/Chatbot"

const App = () => {
  return (
    <>
      <FakeLoader
        timeToHide={500}
        bgColor="#09C7E0"
        spinner="spinner1"
        zIndex={99999}
      />

      <div className="main-wrapper">
        {/* Header Component */}
        <Header />

        {/* Hero Slider Component */}
        <HeroSlider />

        {/* About Component */}
        <About />

        {/* Glossary Component */}
        <Glossary />

        {/* Feature Component */}
        <Feature />

        {/* Admin Sec */}
        <AdminSec />

        {/* Footer Component */}
        <Footer />

        {/* Chatbot */}
        <Chatbot />
      </div>
    </>
  )
}

export default App;