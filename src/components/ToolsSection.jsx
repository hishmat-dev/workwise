import { Calendar, Users, Shield, Globe, MessageSquare, BarChart, Check } from "lucide-react"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"

function ToolsSection() {
  const [toolsRef, isToolsVisible] = useIntersectionObserver({ threshold: 0.1 })

  const tools = [
    {
      icon: Calendar,
      title: "Project/Task Management",
      description: "Team member inclusion, scheduling, tasks, and progress tracking",
      color: "from-blue-hosta to-medium-turquoise",
    },
    {
      icon: Users,
      title: "HR Management",
      description: "Including remote hiring, leaves, loans, resignations, complains, rewards, appraisals and much more",
      color: "from-medium-turquoise to-waikawa-grey",
    },
    {
      icon: Shield,
      title: "Document Management",
      description: "Including a complete office suite and digital equivalents",
      color: "from-waikawa-grey to-vivid-cerise",
    },
    {
      icon: Globe,
      title: "Process/Approval Management",
      description: "Expenses, Travel and much more",
      color: "from-vivid-cerise to-bright-sun",
    },
    {
      icon: MessageSquare,
      title: "Communication Center",
      description: "Email, Chat, Video Conferencing, and integrated messaging",
      color: "from-bright-sun to-blue-hosta",
    },
    {
      icon: BarChart,
      title: "Finance Management",
      description: "Payroll processing, lending solutions, profit & loss tracking, and comprehensive financial oversight",
      color: "from-blue-hosta to-vivid-cerise",
    },
  ]

  return (
    <section ref={toolsRef} className="py-20 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isToolsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Solution Tools</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Everything you need to streamline your workflow and boost productivity in one integrated platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => {
            const Icon = tool.icon
            return (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 hover:bg-gradient-to-br hover:from-white hover:to-slate-50 transition-all duration-700 hover:-translate-y-1 hover:shadow-lg border border-slate-100 ${isToolsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-r ${tool.color} flex items-center justify-center mb-4`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{tool.title}</h3>
                <p className="text-slate-600">{tool.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ToolsSection
