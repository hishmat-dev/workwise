import HeroSection from "./components/HeroSection"
import StatsSection from "./components/StatsSection"
import SolutionSection from "./components/SolutionSection"
import ToolsSection from "./components/ToolsSection"
import SolutionAvailabilitySection from "./components/SolutionAvailabilitySection"
import MarketPlaceSection from "./components/MarketPlaceSection"
import CustomerCentricSection from "./components/CustomerCentricSection"
import DifferenceSection from "./components/DifferenceSection"
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
      <SolutionAvailabilitySection />
      <MarketPlaceSection />
      <CustomerCentricSection />
      <FeaturesSection />
      <DifferenceSection />
      <CTASection />
      <Footer />
    </main>
  )
}

export default App