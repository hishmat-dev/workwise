import { useIntersectionObserver } from "../hooks/useIntersectionObserver"

function CTASection() {
  const [ctaRef, isCTAVisible] = useIntersectionObserver({ threshold: 0.1 })

  const storeLinks = [
    { name: "Google Play", icon: "https://placehold.co/120x40?text=Google+Play" },
    { name: "App Store", icon: "https://placehold.co/120x40?text=App+Store" },
    { name: "Windows", icon: "https://placehold.co/40x40?text=Win" },
    { name: "Mac", icon: "https://placehold.co/40x40?text=Mac" },
  ]

  return (
    <section
      ref={ctaRef}
      className="py-20 bg-gradient-to-r from-waikawa-grey via-vivid-cerise to-bright-sun text-white"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div
          className={`max-w-3xl mx-auto text-center space-y-6 transition-all duration-700 ${isCTAVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold">Unlock The Power of Your Organization Now!</h2>
          <p className="text-lg text-white/80">
            Start your free trial now and get the opportunity to get the insights for a better understanding of the work
            itself. After the trial as low as ¥78 per user per month.
          </p>

          <div className="hover:scale-105 transition-transform duration-300">
            <button className="px-8 py-3 bg-white text-vivid-cerise hover:bg-white/90 rounded-full font-medium transition-colors duration-200">
              Start Your Free Trial Now
            </button>
          </div>

          {/* <div className="pt-4 flex items-center justify-center gap-6">
            {storeLinks.map((store, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${isCTAVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  <img src={store.icon || "/placeholder.svg"} alt={store.name} className="h-10 w-auto" />
                </a>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default CTASection
