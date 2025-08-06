export default function Container({
    children,
    className = "",
  }: {
    children: React.ReactNode
    className?: string
  }) {
    return (
      <div className={`w-full max-w-screen-xl mx-auto px-6 md:px-12 xl:px-24 ${className}`}>
        {children}
      </div>
    )
  }
  