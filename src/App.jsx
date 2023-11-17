import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './LetterAnimation.css'
import WolfTattoo from "./pages/WolfTattoo";
import ScrollToTop from "./components/ScrollToTop";
import PheonixTattoo from "./pages/PheonixTattoo";
import HoneyBeeTattoo from "./pages/HoneyBeeTattoo";
import SpiritualTattoo from "./pages/SpiritualTattoo"
import Flower from "./pages/Flower";
import CouplesTattoo from "./pages/CouplesTattoo";
import LadyBugTattoo from "./pages/LadyBugTattoo";
import CoverupTattoo from "./pages/CoverupTattoo";
import MinimalTattoo from "./pages/MinimalTattoo";
import BandTattoo from "./pages/BandTattoo";
import WaterColorTattoo from "./pages/WaterColorTattoo";
import ScriptTattoo from "./pages/ScriptTattoo";
import Service from "./pages/Service";
import Blog from "./pages/Blog";
import Faq from "./pages/Faq";
import Tattoos from "./pages/Tattoos";
import Piercing from "./pages/Piercing";
import PageError from "./pages/PageError";

function App() {
  
  return (
    <>
     <BrowserRouter  basename="/tatvika-tattoo/">
      <Navbar />
      <ScrollToTop/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Wolf_Tattoo" element={<WolfTattoo />}/>
        <Route path="/Pheonix_Tattoo" element={<PheonixTattoo/>}/>
        <Route path="/HoneyBee_Tattoo" element={<HoneyBeeTattoo/>}/>
        <Route path="/Spiritual_Tattoo" element={<SpiritualTattoo/>}/>
        <Route path="/Flower_Tattoo" element={<Flower/>}/>
        <Route path="/Couples_Tattoo" element={<CouplesTattoo/>}/>
        <Route path="/LadyBug_Tattoo" element={<LadyBugTattoo/>}/>
        <Route path="/CoverUp_Tattoo" element={<CoverupTattoo/>}/>
        <Route path="/Minimal_Tattoo" element={<MinimalTattoo/>}/>
        <Route path="/Minimal_Tattoo" element={<MinimalTattoo/>}/>
        <Route path="/Band_Tattoo" element={<BandTattoo/>}/>
        <Route path="/WaterColor_Tattoo" element={<WaterColorTattoo/>}/>
        <Route path="/Script_Tattoo" element={<ScriptTattoo/>}/>
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/Faq" element={<Faq/>}/>
        <Route path="/Service" element={<Service/>}/>
        <Route path="/Tattoos" element={<Tattoos/>}/>
        <Route path="/Piercing" element={<Piercing/>}/>
        <Route path="*" element={<PageError />} />      
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
