export default function AboutSection() {
  return (
    <section id="about" className="relative bg-white py-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Main Title "About" */}
          <h2
            className="text-[120px] md:text-[200px] lg:text-[250px] font-bold font-glacial leading-none mb-4"
            style={{
              WebkitTextStroke: '2px #434343',
              color: 'transparent',
            }}
          >
            About
          </h2>

          {/* Content Container with Vertical "US" */}
          <div className="relative flex flex-col md:flex-row items-center gap-4">
            {/* Content Box */}
            <div className="bg-[#E4E8FF] rounded-[40px] p-8 md:p-14 max-w-4xl shadow-sm relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold font-glacial text-prismatica-dark mb-6">
                More than just a college fest!!!
              </h3>

              <div className="space-y-4 text-prismatica-dark-gray font-glacial text-lg md:text-xl leading-relaxed">
                <p>
                  Prismatica is a celebration of ideas, colors, culture, and creativity. Just like a prism transforms light into a beautiful spectrum, Prismatica brings together diverse talents, perspectives, and passions onto one grand stage.
                </p>

                <p>
                  From high-energy competitions and cultural performances to interactive events and creative showcases, Prismatica offers something for everyone. It is a space where students challenge limits, discover new skills, and create unforgettable memories.
                </p>

                <p>
                  Driven by youthful energy and innovation, Prismatica reflects the spirit of today's generation - bold, expressive, and limitless.
                </p>
              </div>
            </div>

            {/* Vertical "US" */}
            <div className="absolute -right-10 md:-right-20 top-1/2 -translate-y-1/2 hidden md:block">
              <h2
                className="text-[120px] md:text-[200px] lg:text-[250px] font-bold font-glacial leading-none rotate-90"
                style={{
                  WebkitTextStroke: '2px #434343',
                  color: 'transparent',
                }}
              >
                Us
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Wave SVG Top */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none -mt-1">
        <svg
          className="w-full h-auto"
          viewBox="0 0 1280 1178"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M1280 78.8547V1099.14C1212.95 1133.43 1108.63 1175.34 979.387 1177.88C831.48 1180.78 735.013 1130.46 636.833 1099.14C505.733 1057.33 302.107 1027.24 0 1099.14V78.8547C67.0467 44.5693 171.367 2.65071 300.613 0.119932C448.52 -2.77907 544.987 47.5443 643.167 78.8547C774.267 120.674 977.9 150.763 1280 78.8547Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
