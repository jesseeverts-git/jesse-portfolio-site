import Link from "next/link";
import { Button } from "@/components/ui/button";
import MaxWidthWrapper  from "@/components/layout/maxWidthWrapper";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10">
      {/* Full-width white background */}
      <div className="bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
        
        {/* ✅ Content van navbar gelimiteerd tot dezelfde breedte als Hero */}
        <MaxWidthWrapper  className="py-4 flex items-center justify-between">
          
          {/* LEFT: Logo */}
          <Link href="/" className="text-2xl font-bold tracking-tight text-black">
            Jesse&apos;s Portfolio
          </Link>

          {/* CENTER: Navigation */}
          <nav className="hidden md:flex gap-8 justify-center flex-1">
            <Link href="#about" className="text-lg font-medium text-black hover:text-gray-300 transition-colors">
              About me
            </Link>
            <Link href="#work" className="text-lg font-medium text-black hover:text-gray-300 transition-colors">
              Work
            </Link>
            <Link href="#skills" className="text-lg font-medium text-black hover:text-gray-300 transition-colors">
              Skills
            </Link>
          </nav>

          {/* RIGHT: Button */}
          <Button className="bg-black text-white hover:bg-gray-200 px-6 py-2 text-sm rounded-full">
            Contact me
          </Button>

        </MaxWidthWrapper>
      </div>
    </header>
  );
}
