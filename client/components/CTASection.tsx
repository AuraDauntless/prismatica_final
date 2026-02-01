import { MapPin, ClipboardList, Ticket, Shirt } from 'lucide-react';

export default function CTASection() {
  const ctaItems = [
    {
      title: 'Parbhani Medical College, Parbhani',
      color: 'text-prismatica-red',
      icon: MapPin,
    },
    {
      title: 'More Information',
      color: 'text-prismatica-yellow',
      icon: ClipboardList,
    },
    {
      title: 'Buy Tickets & Pricing',
      color: 'text-prismatica-green',
      icon: Ticket,
    },
    {
      title: 'Merch & More',
      color: 'text-prismatica-blue',
      icon: Shirt,
    },
  ];

  return (
    <section id="cta" className="relative bg-white py-12 border-t border-b border-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-stretch justify-between">
          {ctaItems.map((item, index) => (
            <div key={index} className="flex-1 flex flex-col items-center text-center px-4 py-8 relative group cursor-pointer border-b md:border-b-0 md:border-r border-gray-200 last:border-0">
              {/* Icon */}
              <div className={`w-16 h-16 mb-6 flex items-center justify-center transition-transform group-hover:scale-110 ${item.color}`}>
                <item.icon size={48} strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className={`text-xl md:text-2xl font-glacial ${item.color} font-medium leading-tight max-w-[200px]`}>
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
