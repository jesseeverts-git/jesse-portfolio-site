import Image from "next/image";
import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/layout/maxWidthWrapper";

export default function Hero() {
  return (
    <section className="py-24 md:py-36 bg-white text-black">
      <MaxWidthWrapper>
        {/* Grijze vlak BEGINT hierbinnen */}
        <div className="bg-[#f4f4f4] rounded-xl w-full px-6 md:px-12 xl:px-24 py-20 md:py-28">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24 lg:gap-32 xl:gap-40">
            {/* LEFT SIDE: TEXT */}
            <div className="flex-1 max-w-xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                Jesse Everts
              </h1>

              <p className="text-lg md:text-xl lg:text-2xl text-black-300 leading-relaxed mb-8">
                I design, build and test backend systems by combining
                development, analysis and automation to bring clarity and
                stability to complex software environments.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-black hover:bg-gray-200 px-6 py-3 text-lg rounded-lg font-medium">
                  View my experience
                </Button>
                <Button
                  variant="ghost"
                  className="text-black hover:bg-white/10 px-6 py-3 text-lg rounded-lg font-medium"
                >
                  About me
                </Button>
              </div>
            </div>

            {/* RIGHT SIDE: IMAGE */}
            <div className="relative flex-shrink-0 w-64 md:w-80 lg:w-96 aspect-square rounded-full overflow-hidden border-4 border-white/20">
              <Image
                src="/profile-picture.jpeg"
                alt="Jesse Everts"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
