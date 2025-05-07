import { ChevronRight } from "lucide-react"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"

function FeaturesSection() {
  const [featuresRef, isFeaturesVisible] = useIntersectionObserver({ threshold: 0.1 })

  const features = [
    {
      title: "Flexible Project Management",
      description:"Providing you with the tools for the art of planning, organising and managing resources to achieve specific goals and objectives within a defined time frame. Our solution provides you simple views in order to get your attention to details which otherwise maybe overlooked, clear objectives and collaboration among the team members to ensure that all project activities are aligned with the over all project goals.",
      gradient: "from-blue-hosta to-medium-turquoise",
    },
    {
      title: "Finance & More",
      description:"In order to ensure the stability and sustainability of the organization finance plays a crucial role. Workwise is equipped with the architecture to maintain accurate financial records while making it easy to cater to payroll, expenses, invoicing and more.",        
      gradient: "from-medium-turquoise to-waikawa-grey",
    },
    {
      title: "Schedule & Deadlines",
      description:"Workwise handles all the essentials for coordinating your tasks, assigning responsibilities, and ensuring that every task is completed on time with reminders and ongoing notifications. Our solution prioritises tasks and manages your time effectively.",
      gradient: "from-waikawa-grey to-vivid-cerise",
    },
    {
      title: "Digital Archives",
      description:"A vital component for any business is its data and the management of that data. Our solution not only allows you to create that data but provides the ease of storage and retrieval of various types of documents. On Workwise you are able to maintain the previous versions while making sure the up to date records are the ones in circulation with alerts being generated to let team members know to check for changes. With Workwise you get a complete office suit allowing you to create all sorts of documents whether is be a simple note, spreadsheet, mindmap or more.",
      gradient: "from-waikawa-grey to-vivid-cerise",
    },
    {
      title: "Expense & Travel",
      description:"A simple solution to manage all business expenses effectively whether incurred by the company or employees. With a complete approval flow process which ensure the expenses are legitimate. The solution provides you the real-time visibility into spending trends. Additionally within the travel space creating a more detailed expense view and management, from the approval of the travel to the point of completion of the travel with all expenses in between accounted and accordingly approved.",
      gradient: "from-waikawa-grey to-vivid-cerise",
    },
    {
      title: "HR Management",
      description:"In the business world, HR is a critical department within every organisation. Workwise, as a solution, offers a seamless resource management experience with a meticulously designed solution. From onboarding, salary management, rewards, bonuses, promotions, attendance, performance calibrations, warnings, Workwise covers it all and more. It empowers you to efficiently manage your time and resources to maximise efficiencies while keeping your team motivated and updated at all times.",
      gradient: "from-waikawa-grey to-vivid-cerise",
    },
  ]

  return (
    <section id="features-section" ref={featuresRef} className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isFeaturesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Key Features</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Designed with your team's productivity and collaboration in mind
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative rounded-xl border bg-white text-card-foreground shadow h-full overflow-hidden transition-all duration-700 ${isFeaturesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${feature.gradient}`}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
