import Image from "next/image";

const logos = [
  { name: "CloudNC", image: "/images/5NH8pCJ1j0rLaYbFSgszAJw.png" },
  { name: "Delve", image: "/images/K1W8nMN5oDMN2mG4DkIhVpxsPLg.png" },
  { name: "Rho", image: "/images/eP3FlnJSLNAAR93TwU9PsZJws.png" },
  { name: "Greptile", image: "/images/T0BClwf4LoYO1iiqMK0oLP2dE.png" },
];

export default function LogoCloud() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-[#1b2d33]/60 mb-8 font-medium uppercase tracking-wider">
          Trusted by leading companies
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="relative h-8 w-24 md:h-10 md:w-32 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <Image
                src={logo.image}
                alt={logo.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
