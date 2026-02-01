export default function EventsSection() {
  return (
    <section id="events" className="relative bg-white py-20 px-4 overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        {/* Title */}
        <h2 className="text-6xl md:text-7xl font-bold font-glacial text-prismatica-dark text-center mb-16">
          Events
        </h2>

        {/* Concert Poster Container */}
        <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-[#0F172A] aspect-[3/4]">
          {/* Background Image (Crowd) */}
          <div className="absolute inset-0 opacity-100">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/a32d7b950cc4e70a4d18d3aeef2920b2e18c4b3d"
              alt="Crowd"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Overlays */}
          <div className="relative h-full flex flex-col items-center justify-between py-12 px-6 text-white text-center">
            {/* Top Logos */}
            {/* <div className="w-full flex justify-center items-center gap-8 mb-4">
              <div className="text-2xl font-bold italic text-prismatica-yellow">PRISMATICA</div>
              <div className="text-3xl font-light">X</div>
              <div className="text-2xl font-bold italic tracking-widest">FITOOR</div>
            </div> */}

            {/* Artist Info */}
            {/* <div className="flex-grow flex flex-col justify-end items-center mb-10 w-full">
              <div className="text-xl md:text-2xl font-glacial mb-2 tracking-widest">WITH</div>
              <div className="text-2xl md:text-3xl font-bold font-glacial tracking-tighter mb-4">PRATYUSH & SHREVASH</div>

              <div className="relative w-full">
                <h3 className="text-[80px] md:text-[140px] font-bold font-glacial leading-none" style={{ WebkitTextStroke: '2px white', color: 'transparent' }}>
                  CONCERT
                </h3>
                <h3 className="text-[80px] md:text-[140px] font-bold font-glacial leading-none -mt-4 md:-mt-8">
                  NIGHT
                </h3>
              </div>
            </div> */}

            {/* Bottom Venue/Time info with Tearing Paper Effect */}
            <div className="absolute bottom-0 left-0 right-0 bg-white text-prismatica-dark py-6 px-10 flex flex-col md:flex-row items-center justify-between">
              {/* Tearing Edge SVG Placeholder (Visual Trick) */}
              <div className="absolute -top-6 left-0 right-0 h-6">
                <svg viewBox="0 0 1440 48" className="w-full h-full fill-white preserve-aspect-none">
                  <path d="M0,48 L1440,48 L1440,24 C1440,24 1360,0 1280,0 C1200,0 1120,24 1040,24 C960,24 880,0 800,0 C720,0 640,24 560,24 C480,24 400,0 320,0 C240,0 160,24 80,24 C0,24 0,24 0,24 L0,48 Z"></path>
                </svg>
              </div>
              <div className="flex items-center gap-2 text-lg font-bold">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                PMCH, PARBHANI
              </div>
              <div className="text-lg font-bold">
                17.02.25 | 6 PM
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
