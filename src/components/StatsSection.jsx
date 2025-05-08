import { Clock, Users, BarChart } from "lucide-react"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"

function StatsSection() {
  const [statsRef, isStatsVisible] = useIntersectionObserver({ threshold: 0.1 })

  const stats = [
    {
      icon: Clock,
      title: "32",
      subtitle: "Days lost annually",
      description: "Due to app switching and context shifting",
      color: "bg-gradient-to-r from-blue-hosta to-medium-turquoise",
      textColor: "text-blue-hosta",
    },
    {
      icon: Users,
      title: "10+",
      subtitle: "Apps per employee",
      description: "The average number of tools used daily",
      color: "bg-gradient-to-r from-medium-turquoise to-waikawa-grey",
      textColor: "text-medium-turquoise",
    },
  ]

  return (
    <section ref={statsRef} className="py-20 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-700 ${isStatsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl font-bold text-slate-900">A corporate Social Solution</h2>

          <p className="mt-4 text-lg text-slate-600 max-w-6xl mx-auto">
            Having everything in the same place, while enhancing operational efficiency, managing time more effectively, and bringing employees to a single system to access the right information at the right time.
          </p>

          <p className="mt-6 text-base text-slate-700 max-w-2xl mx-auto italic">
            Most workers toggle between apps 10 times an hour which equates to 32 days lost in workplace productivity.
          </p>

          <cite className="mt-3 text-sm text-slate-500 block">Published by Forbes.com</cite>

        </div>


        <div className="flex flex-row md:flex-wrap justify-center gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 text-center hover:shadow-lg hover:cursor-pointer transition-all duration-700 border border-slate-100 ${isStatsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full ${stat.color} flex items-center justify-center hover:scale-105 transition-transform duration-300`}
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-slate-900">{stat.title}</h3>
                <p className={`text-lg font-medium ${stat.textColor}`}>{stat.subtitle}</p>
                <p className="mt-2 text-slate-600">{stat.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
