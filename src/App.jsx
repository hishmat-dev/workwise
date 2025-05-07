
import HeroSection from "./components/HeroSection"
import StatsSection from "./components/StatsSection"
import SolutionSection from "./components/SolutionSection"
import ToolsSection from "./components/ToolsSection"
import FeaturesSection from "./components/FeaturesSection"
import CTASection from "./components/CTASection"
import Footer from "./components/Footer"

function App() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <StatsSection />
      <SolutionSection />
      <ToolsSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </main>
  )
}

export default App
