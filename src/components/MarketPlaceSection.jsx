import { ShoppingCart, Globe, Clock, Shield } from "lucide-react"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"
import marketPlace from "../Components/assets/market_place.svg"

function MarketPlaceSection() {
  const [marketplaceRef, isMarketplaceVisible] = useIntersectionObserver({ threshold: 0.1 })

  const benefits = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connect with buyers and sellers around the world",
    },
    {
      icon: ShoppingCart,
      title: "Single Click",
      description: "Trade goods and services with just a single click",
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "Eliminating the difficulty of establishing trust between parties",
    },
    {
      icon: Clock,
      title: "Enhanced Experience",
      description: "Speed up the process and enhance procurement experience",
    },
  ]

  return (
    <section ref={marketplaceRef} className="py-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div
            className={`flex-1 transition-all duration-700 ${isMarketplaceVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl blur-xl opacity-30"></div>
              <div className="relative flex items-center justify-center rounded-xl overflow-hidden  drop-shadow-[0_10px_25px_rgba(0,0,0,0.3)]">
                <img
                  src={marketPlace} 
                  alt="Market Place"
                  className="w-2/3 h-auto"
                />
              </div>
            </div>
          </div>

          <div
            className={`flex-1 space-y-6 transition-all duration-700 ${isMarketplaceVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-waikawa-grey">Market Place</h2>
            <p className="text-lg text-slate-600">
              A digital platform established to connect buyers and seller around the world, allowing organisation to
              trade goods and services with just a single click. WORKWISE is a market place designed to get the best
              options in terms of services and goods, by eliminating the difficulty of establishing the trust between
              buyers and sellers simply by playing the mediator.
            </p>
            <p className="text-lg text-slate-600">
              The rise of e-commerce has fuelled the growth of online marketplaces which speed up the process and enhancing
              the overall experience of procurement.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div
                    key={index}
                    className={`flex items-start gap-3 p-4 bg-white rounded-lg border border-slate-100 hover:cursor-pointer shadow-sm transition-all duration-700 ${isMarketplaceVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                    style={{ transitionDelay: `${200 + index * 100}ms` }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-bright-sun to-vivid-cerise flex items-center justify-center">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">{benefit.title}</h3>
                      <p className="text-sm text-slate-600">{benefit.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MarketPlaceSection
