import { useIntersectionObserver } from "../hooks/useIntersectionObserver"
import { Users, BarChart2, MessageSquare, Heart } from "lucide-react"

function CustomerCentricSection() {
  const [customerRef, isCustomerVisible] = useIntersectionObserver({ threshold: 0.1 })

  const features = [
    {
      icon: Users,
      title: "Meaningful Relationships",
      description: "Build deeper connections with your customers",
      color: "from-blue-hosta to-medium-turquoise",
    },
    {
      icon: MessageSquare,
      title: "Ongoing Engagement",
      description: "Manage every aspect of the customer journey",
      color: "from-medium-turquoise to-waikawa-grey",
    },
    {
      icon: BarChart2,
      title: "Advanced Analytics",
      description: "Data indexing and cataloging capabilities",
      color: "from-waikawa-grey to-vivid-cerise",
    },
    {
      icon: Heart,
      title: "Tailored Experiences",
      description: "Understand preferences and provide personalized service",
      color: "from-vivid-cerise to-bright-sun",
    },
  ]

  return (
    <section ref={customerRef} className="py-20 bg-white overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-700 ${isCustomerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-waikawa-grey">Customer Centric Approach</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            WORKWISE provides you tools and resources to build a more meaningful relationship with the customers of your
            business by so you can connect with them on a deeper level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 hover:shadow-lg transition-all hover:cursor-pointer hover:scale-105 duration-700 border border-slate-100 ${isCustomerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            )
          })}
        </div>

        <div
          className={`bg-gradient-to-r from-blue-hosta/10 to-bright-sun/10 rounded-xl p-8 transition-all duration-700 ${isCustomerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "500ms" }}
        >
          <p className="text-lg text-slate-700">
            The system is designed to help you and your team manage every aspect of the customers journey from your
            initial contact to on going engagement and support with our advanced analytics and reporting capabilities.
            The data indexing and cataloging allows for customer facing employees to have a more detailed view of your
            customers to understand their preferences and needs enabling them to tailor their interactions and provide
            experiences that keeps them going the extra miles for those customers.
          </p>
        </div>
      </div>
    </section>
  )
}

export default CustomerCentricSection
