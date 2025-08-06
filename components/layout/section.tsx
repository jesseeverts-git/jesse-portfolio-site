type SectionProps = {
    children: React.ReactNode;
    className?: string;
    variant?: "light" | "dark";
    id?: string;
  };
  
  export default function Section({
    children,
    className = "",
    variant = "light",
    id
  }: SectionProps) {
    const baseStyle = variant === "dark"
      ? "bg-black text-white"
      : "bg-white text-black";
  
    return (
      <section id={id} className={`${baseStyle} ${className}`}>
        {children}
      </section>
    );
  }
  