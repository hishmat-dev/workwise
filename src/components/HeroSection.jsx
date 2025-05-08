import { useState, useEffect } from "react"
import { ChevronRight } from "lucide-react"
import LoginForm from "./LoginForm"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"
import logo from '../components/assets/logo.png';

function HeroSection() {
  const [heroRef, isHeroVisible] = useIntersectionObserver({ threshold: 0.1 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const scrollToFeatures = () => {
    document.getElementById("features-section").scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-blue-hosta blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-vivid-cerise blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-bright-sun blur-3xl opacity-20"></div>
      </div>

      <div className="container px-4 md:px-6 flex flex-col lg:flex-row items-center justify-between gap-12 z-10">
        <div
          className={`flex-1 space-y-8 text-center lg:text-left transition-all duration-700 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "100ms" }}
        >
          <div className="space-y-2">
            <div
              className={`flex items-center justify-center lg:justify-start mb-16 transition-all duration-700 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: "300ms" }}
            >
              <img  src={logo} alt="WORKWISE Logo" className="h-80 w-auto" />
            </div>

            <h1
              className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 transition-all duration-700 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: "400ms" }}
            >
              Corporate Social{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-hosta to-vivid-cerise">
                Solution
              </span>
            </h1>

            <p
              className={`max-w-[600px] mx-auto lg:mx-0 text-base text-slate-600 transition-all duration-700 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: "500ms" }}
            >
              Work from home the way it should be: Easy • Effective • Efficient. Streamline your workflow and boost
              productivity.
            </p>
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-700 ${isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "600ms" }}
          >
            <button className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-blue-hosta to-medium-turquoise hover:from-medium-turquoise hover:to-blue-hosta text-white font-medium transition-all duration-200">
              Get Started <ChevronRight className="ml-2 h-4 w-4" />
            </button>
            <button className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-waikawa-grey hover:border-vivid-cerise bg-white text-waikawa-grey hover:text-vivid-cerise font-medium transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>

        <div
          className={`flex-1 w-full max-w-md transition-all duration-700 ${isHeroVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          style={{ transitionDelay: "300ms" }}
        >
          <LoginForm />
        </div>
      </div>

      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-center transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        style={{ transitionDelay: "800ms" }}
      >
        <button
          className="p-2 rounded-full bg-white/80 shadow-md hover:bg-white hover:shadow-lg transition-all duration-300 animate-bounce"
          onClick={scrollToFeatures}
        >
          <ChevronRight className="h-5 w-5 rotate-90" />
        </button>
      </div>
    </section>
  )
}

export default HeroSection
