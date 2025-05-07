function Button({ children, className = "", variant = "default", size = "default", ...props }) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"

  const variantStyles = {
    default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
    outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
  }

  const sizeStyles = {
    default: "h-9 px-4 py-2 text-sm",
    sm: "h-8 rounded-md px-3 text-xs",
    lg: "h-10 rounded-md px-8 text-base",
  }

  const combinedClassName = `${baseStyles} ${variantStyles[variant] || ""} ${sizeStyles[size] || ""} ${className}`

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  )
}

export default Button
