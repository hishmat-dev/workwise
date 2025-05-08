import { Check, ArrowRight } from "lucide-react"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"
import solution from "../components/assets/solution.png"

function SolutionSection() {
  const [solutionRef, isSolutionVisible] = useIntersectionObserver({ threshold: 0.1 })

  const solutionFeatures = [
    "Unified communication platform with video conferencing and virtual meetings",
    "Approval flow and process management",
    "Finance and payroll automation",
    "HR management and employee engagement",
    "Project management and task tracking",
    "Document creation, sharing, and collaboration",
    "Lending and business credit solutions"
  ]

  return (
    <section ref={solutionRef} className="py-20 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div
            className={`flex-1 space-y-6 transition-all duration-700 ${isSolutionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bright-sun/20 text-sm font-medium text-slate-800">
              <Check className="h-4 w-4 text-bright-sun" /> The Solution
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">One platform for all your needs</h2>
            <p className="text-lg text-slate-600">
              Centralize all services and strategies that a business can use to optimize its operations and increase
              overall productivity. WORKWISE is a corporate social solution or simply put an Enterprise SaaS which hosts
              a number of innovative modules.
            </p>

            <ul className="space-y-3">
              {solutionFeatures.map((item, index) => (
                <li
                  key={index}
                  className={`flex items-start gap-2 transition-all duration-700 ${isSolutionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="rounded-full bg-blue-hosta/20 p-1 mt-1">
                    <Check className="h-3 w-3 text-blue-hosta" />
                  </div>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>

            <div className="hover:scale-102 transition-transform duration-300">
              <button className="mt-4 rounded-full bg-waikawa-grey hover:bg-vivid-cerise text-white px-6 py-3 inline-flex items-center font-medium transition-colors duration-200">
                Explore Features <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>

          <div
            className={`flex-1 transition-all duration-700 ${isSolutionVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="relative">
              
              <div className="absolute -inset-4 rounded-2xl  blur-xl opacity-30"></div>

        
              <div className="relative rounded-xl overflow-hidden drop-shadow-[0_10px_25px_rgba(0,0,0,0.3)]">
                <img
                  src={solution}
                  alt="WORKWISE Dashboard"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default SolutionSection
