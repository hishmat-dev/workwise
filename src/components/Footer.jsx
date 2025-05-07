import logo from '../components/assets/logo.png'
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"
// import googlePlay from '../../components/assets/googlePlay'
function Footer() {
  const [ctaRef, isCTAVisible] = useIntersectionObserver({ threshold: 0.1 })
  const storeLinks = [
    { name: "Google Play", icon: "https://placehold.co/120x40?text=Google+Play" },
    { name: "App Store", icon: "https://placehold.co/120x40?text=App+Store" },
    { name: "Windows", icon: "https://placehold.co/40x40?text=Win" },
    { name: "Mac", icon: "https://placehold.co/40x40?text=Mac" },
  ]
  return (
    <footer className="py-12 bg-waikawa-grey text-slate-300">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <img  src={logo} alt="WORKWISE Logo" className="h-20 w-auto" />
            <p className="mt-2 text-sm text-slate-400">
              Work from anywhere the way it should be
              <br />
              Easy • Effective • Efficient
            </p>
          </div>

          <div className="pt-4 flex items-center justify-center gap-6">
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
          </div>
          {/* <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <a href="#" className="text-blue-hosta hover:text-white transition-colors">
              About
            </a>
            <a href="#" className="text-medium-turquoise hover:text-white transition-colors">
              Features
            </a>
            <a href="#" className="text-waikawa-grey hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#" className="text-vivid-cerise hover:text-white transition-colors">
              Contact
            </a>
          </div> */}
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} WORKWISE Ltd. All rights reserved.</p>

          <div className="mt-4 md:mt-0 flex gap-4">
            <a href="#" className="text-slate-400 hover:text-bright-sun transition-colors">
              Terms
            </a>
            <a href="#" className="text-slate-400 hover:text-bright-sun transition-colors">
              Privacy
            </a>
            <a href="#" className="text-slate-400 hover:text-bright-sun transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
