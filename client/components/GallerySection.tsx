export default function GallerySection() {
  const galleryImages = [
    {
      src: 'https://api.builder.io/api/v1/image/assets/TEMP/99321d0201c71d61f1348c309db6458c358772da?width=648',
      alt: 'Gallery Image 1',
      className: 'row-span-2',
    },
    {
      src: 'https://api.builder.io/api/v1/image/assets/TEMP/bc2c53d750ebe4f409eb0a42b6eab084bd2043dd?width=928',
      alt: 'Gallery Image 2',
    },
    {
      src: 'https://api.builder.io/api/v1/image/assets/TEMP/9811893b0c1c30cc25baa9199f678894730b2a42?width=662',
      alt: 'Gallery Image 3',
      className: 'row-span-2',
    },
    {
      src: 'https://api.builder.io/api/v1/image/assets/TEMP/d529a5d7adf69aea40d4b130b8d5fec3315051b2?width=926',
      alt: 'Gallery Image 4',
    },
    {
      src: 'https://api.builder.io/api/v1/image/assets/TEMP/7fae9f7b8e13c067223c4b76926221edbd2f6054?width=648',
      alt: 'Gallery Image 5',
      className: 'row-span-2',
    },
    {
      src: 'https://api.builder.io/api/v1/image/assets/TEMP/08679c372156fd2cc1aa952b199ac2600e07a92b?width=662',
      alt: 'Gallery Image 6',
    },
    {
      src: 'https://api.builder.io/api/v1/image/assets/TEMP/86f7caa22fd24e5229fe374bbaf44c02fb8377dd?width=928',
      alt: 'Gallery Image 7',
    },
    {
      src: 'https://api.builder.io/api/v1/image/assets/TEMP/12be29189ab60bee4a63f4feecd02ee150c7645a?width=662',
      alt: 'Gallery Image 8',
      className: 'row-span-2',
    },
    {
      src: 'https://api.builder.io/api/v1/image/assets/TEMP/9cde2d355cb60583a9e31a9dfba205c9186c8102?width=652',
      alt: 'Gallery Image 9',
    },
    {
      src: 'https://api.builder.io/api/v1/image/assets/TEMP/cbdaf513a60761b76279c53de38f8f90a28d92fb?width=928',
      alt: 'Gallery Image 10',
    },
    {
      src: 'https://api.builder.io/api/v1/image/assets/TEMP/0a3ed6321885df80513ee76f9dcd505718226279?width=662',
      alt: 'Gallery Image 11',
      className: 'row-span-2',
    },
    {
      src: 'https://api.builder.io/api/v1/image/assets/TEMP/0126f7d00290a1960421b10186c20cab1e9431e5?width=928',
      alt: 'Gallery Image 12',
    },
    {
      src: 'https://api.builder.io/api/v1/image/assets/TEMP/887a937204cbbc50a916e0e37b86b45be2931289?width=652',
      alt: 'Gallery Image 13',
    },
  ];

  return (
    <section id="gallery" className="relative bg-[#E4E8FF] py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Title */}
        <h2 className="text-6xl md:text-7xl font-bold font-glacial text-prismatica-dark text-center mb-16">
          Gallery
        </h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px]">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${image.className || ''}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
