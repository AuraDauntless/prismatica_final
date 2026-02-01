export default function Hero() {
  return (
    <section className="relative w-full bg-white overflow-hidden pt-20">
      {/* Full Size Image Container */}
      <div className="relative w-full">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/f3912b8ad586bb93a96bd15284ea3613f85ffa89?width=2803"
          alt="Concert Background"
          className="w-full h-auto block"
        />

        {/* Subtle Wave SVG Bottom - Flatter to cover very little */}
        <div className="absolute -bottom-1 left-0 right-0 pointer-events-none z-20">
          <svg
            className="w-full h-auto"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="white"
              d="M0,80L48,74.7C96,69,192,59,288,64C384,69,480,91,576,96C672,101,768,91,864,80C960,69,1056,59,1152,53.3C1248,48,1344,48,1392,48L1440,48L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
