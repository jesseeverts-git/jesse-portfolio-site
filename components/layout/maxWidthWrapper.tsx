export default function MaxWidthWrapper({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`w-full max-w-screen-xl mx-4 sm:mx-6 md:mx-8 lg:mx-auto ${className}`}
    >
      {children}
    </div>
  );
}
