import { ParallaxProvider } from "react-scroll-parallax";
import './App.css'
import { AdvancedBannerTop } from "./AdvancedBannerTop";
import ImageSlider from "./ImageSlider";


function App() {
  return (
    <>
      <ParallaxProvider>
      <AdvancedBannerTop />
      <div className="center full">
        <ImageSlider/>

      </div>
  </ParallaxProvider>
    </>
  )
}

export default App
