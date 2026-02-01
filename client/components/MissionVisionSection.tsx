export default function MissionVisionSection() {
  return (
    <section className="relative bg-[#E4E8FF] py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Mission Section */}
        <div id="mission" className="flex flex-col md:flex-row items-center justify-between gap-12 mb-32">
          <div className="md:w-1/2">
            <h2 className="text-6xl md:text-7xl font-bold font-glacial text-prismatica-dark mb-8 leading-tight">
              Our<br />Mission
            </h2>
            <p className="text-xl md:text-2xl font-glacial text-prismatica-dark-gray leading-relaxed">
              To provide students with opportunities to showcase their artistic, cultural, and intellectual skills. To encourage collaboration, leadership, and healthy competition. To create memorable experiences that inspire confidence, creativity, and community.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="rounded-[40px] overflow-hidden w-full max-w-md aspect-[4/3]">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/9a95f65a3d09bb1d71d61c76cb7f20e74d289ffc?width=1651"
                alt="Mission"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div id="vision" className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 order-2 md:order-1 flex justify-center md:justify-start">
            <div className="rounded-[40px] overflow-hidden w-full max-w-md aspect-[4/3]">
              <img
                src="/vision-image.png"
                alt="Vision"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2 order-1 md:order-2 text-left md:text-right">
            <h2 className="text-6xl md:text-7xl font-bold font-glacial text-prismatica-dark mb-8 leading-tight">
              Our<br />Vision
            </h2>
            <p className="text-xl md:text-2xl font-glacial text-prismatica-dark-gray leading-relaxed">
              To create a vibrant platform where creativity, innovation, and diversity come together, empowering students to express themselves beyond boundaries and celebrate the true spectrum of talent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
