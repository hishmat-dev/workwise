import { useIntersectionObserver } from "../hooks/useIntersectionObserver"
import { CheckCircle, Quote } from "lucide-react"

function DifferenceSection() {
  const [differenceRef, isDifferenceVisible] = useIntersectionObserver({ threshold: 0.1 })

  const differences = [
    "All-in-one place with easy-to-use solutions",
    "Making team members more effective",
    "Making organizations more efficient",
    "Customer-centric approach",
    "Advanced analytics and reporting capabilities",
    "Detailed view of your customers' preferences and needs",
  ]

  return (
    <section ref={differenceRef} className="py-20 bg-gradient-to-b from-white to-slate-100 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-700 ${isDifferenceVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-waikawa-grey">What makes us different?</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            We do it all in one place with an easy-to-use solutions making team members more effective and organisations
            more efficient
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {differences.map((item, index) => (
            <div
              key={index}
              className={`flex items-start gap-3 transition-all duration-700 ${isDifferenceVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CheckCircle className="h-6 w-6 text-blue-hosta flex-shrink-0" />
              <p className="text-lg text-slate-700">{item}</p>
            </div>
          ))}
        </div>

        <div
          className={`bg-white rounded-xl p-8 border border-slate-200 shadow-lg relative transition-all duration-700 ${isDifferenceVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "600ms" }}
        >
          <Quote className="absolute text-bright-sun/20 h-16 w-16 -top-6 -left-6" />
          <div className="relative z-10">
            <p className="text-lg md:text-xl text-slate-700 italic">
              "Today's workforce is under siege by a flood of communications apps. More than ever, our attention is
              scattered across a wide array of different apps and communications channels. These apps are meant to
              bolster our productivity, but managing myriad apps is proving difficult—with serious repercussions for
              businesses."
            </p>
            <div className="mt-6 flex justify-end">
              <p className="text-vivid-cerise font-medium">Riadh Dridi, CMO, RingCentral</p>
            </div>
          </div>
        </div>

        <div
          className={`mt-16 text-center transition-all duration-700 ${isDifferenceVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "700ms" }}
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-6">
            Making a company feel more connected, improving productivity and communication while making work fun.
          </h3>
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-hosta to-vivid-cerise hover:from-vivid-cerise hover:to-blue-hosta text-white font-medium transition-all duration-200">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  )
}

export default DifferenceSection
