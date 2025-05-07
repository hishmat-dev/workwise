"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle login logic here
    console.log("Login with:", email, password)
  }

  return (
    <div className="w-full">
      <div className="w-full shadow-xl bg-white/90 backdrop-blur-sm border-0 rounded-xl">
        <div className="space-y-1 text-center p-6">
          <h2 className="text-2xl font-bold">Welcome</h2>
          <p className="text-sm text-slate-500">Enter your login credentials to continue</p>
        </div>
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 rounded-lg w-full px-3 py-2 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-hosta focus:border-transparent"
                required
              />
            </div>
            <div className="space-y-2 relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 rounded-lg w-full px-3 py-2 pr-10 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-hosta focus:border-transparent"
                required
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            <button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-blue-hosta to-vivid-cerise hover:from-vivid-cerise hover:to-blue-hosta rounded-lg text-white font-medium transition-all duration-200"
            >
              Sign In
            </button>
          </form>
          <div className="mt-4 text-center text-sm">
            <a href="#" className="text-blue-hosta hover:text-vivid-cerise">
              Forgot Password?
            </a>
          </div>
        </div>
        <div className="p-6 flex flex-col">
          <div className="relative w-full mb-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-slate-500">Or continue with</span>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex items-center justify-center p-2 rounded-md border border-slate-200 hover:border-blue-hosta cursor-pointer hover:-translate-y-1 transition-transform duration-200"
              >
                <img
                  src={`https://placehold.co/24x24?text=${i}`}
                  alt={`Social login option ${i}`}
                  width={24}
                  height={24}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
