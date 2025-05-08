import logo from '../components/assets/workwise_white.svg'
import googlePlay from "../components/assets/googlePlay.png"
import appStore from "../components/assets/appStore.png"
import mac from "../components/assets/apple.png"
import windows from "../components/assets/windows.png"
function Footer() {
  
  const storeLinks = [
    { name: "Google Play", icon: googlePlay },
    { name: "App Store", icon: appStore },
    { name: "Windows", icon: windows },
    { name: "Mac", icon: mac },
  ]
  return (
    <footer className="py-12 bg-gray-700 text-slate-300">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-6 md:mb-0">
            <img src={logo} alt="WORKWISE Logo" className="h-24 w-auto" />

            <p className="mt-2 text-sm text-slate-400">
              Work from anywhere the way it should be
              <br />
              Easy • Effective • Efficient
            </p>
          </div>

          <div className="pt-4 md:pt-0 flex items-center justify-center md:justify-end gap-6">
            {storeLinks.map((store, index) => (
              <div
                key={index}
                className={`transition-all duration-700 opacity-100 translate-y-0`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                <img src={store.icon} alt={store.name} className="h-10 w-auto object-contain" />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-400">©2016-{new Date().getFullYear()} WORKWISE. All rights reserved.</p>

          <div className="mt-4 md:mt-0 flex gap-4">
            <a href="https://www.workw.com/login" className="text-slate-400 hover:text-bright-sun transition-colors">
            https://www.workw.com
            </a>
            <a href="#" className="text-slate-400 hover:text-bright-sun transition-colors">
              Terms
            </a>
            <a href="#" className="text-slate-400 hover:text-bright-sun transition-colors">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
