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
    <section ref={toolsRef} className="py-20 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isToolsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-waikawa-grey">Solution Tools</h2>
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
                className={`flex items-start gap-3 p-4 bg-white rounded-lg border border-slate-300 hover:cursor-pointer shadow-sm transition-all duration-700 ${isToolsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r ${tool.color} flex items-center justify-center`}
                >
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{tool.title}</h3>
                  <p className="text-sm text-slate-600">{tool.description}</p>
                </div>
              </div>

            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ToolsSection
