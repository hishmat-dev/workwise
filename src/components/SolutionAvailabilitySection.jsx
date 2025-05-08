import { useIntersectionObserver } from "../hooks/useIntersectionObserver"
import solAvail from '../Components/assets/solution_availiablity.svg';

function SolutionAvailabilitySection() {
  const [availabilityRef, isAvailabilityVisible] = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section ref={availabilityRef} className="py-20 bg-white overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <div
            className={`flex-1 transition-all duration-700 ${isAvailabilityVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="relative">
              <div className="absolute -inset-4  blur-xl opacity-30"></div>
              <div className="relative rounded-xl overflow-hidden drop-shadow-[0_10px_25px_rgba(0,0,0,0.3)]">
                <img
                  src={solAvail}
                  alt="Access Anywhere"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div
            className={`flex-1 space-y-6 transition-all duration-700 ${isAvailabilityVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-waikawa-grey">Solution Availability</h2>
            <p className="text-lg text-slate-600">
              Our solution has been crafted with the vision of easy access to everyone who has access to the internet
              and it is based on technology which enables secure, peer to peer communication without the need for
              intermediaries.
            </p>
            <p className="text-lg text-slate-600">
              WORKWISE is easy to access via web browser or any mobile platform i.e. iOS and android.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-hosta/10 rounded-lg">
                <span className="w-3 h-3 rounded-full bg-blue-hosta"></span>
                <span className="text-slate-700">Web Browser</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-medium-turquoise/10 rounded-lg">
                <span className="w-3 h-3 rounded-full bg-medium-turquoise"></span>
                <span className="text-slate-700">iOS</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-waikawa-grey/10 rounded-lg">
                <span className="w-3 h-3 rounded-full bg-waikawa-grey"></span>
                <span className="text-slate-700">Android</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-vivid-cerise/10 rounded-lg">
                <span className="w-3 h-3 rounded-full bg-vivid-cerise"></span>
                <span className="text-slate-700">Secure P2P</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SolutionAvailabilitySection
