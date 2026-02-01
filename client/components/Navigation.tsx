import { useState } from 'react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/b60d104c94ce98954a9144cacc5f798bbf6ce75a?width=274"
              alt="Prismatica Logo"
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <button
              onClick={() => scrollToSection('about')}
              className="text-prismatica-dark font-glacial text-xl hover:text-prismatica-purple transition-colors"
            >
              About us
            </button>
            <button
              onClick={() => scrollToSection('vision')}
              className="text-prismatica-dark font-glacial text-xl hover:text-prismatica-purple transition-colors"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('events')}
              className="text-prismatica-dark font-glacial text-xl hover:text-prismatica-purple transition-colors"
            >
              Tickets
            </button>
            <button
              onClick={() => scrollToSection('events')}
              className="text-prismatica-dark font-glacial text-xl hover:text-prismatica-purple transition-colors"
            >
              Lineup
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-prismatica-dark font-glacial text-xl hover:text-prismatica-purple transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('cta')}
              className="text-prismatica-dark font-glacial text-xl hover:text-prismatica-purple transition-colors"
            >
              Merch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-prismatica-lavender">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-prismatica-dark font-glacial text-xl hover:text-prismatica-purple transition-colors text-left"
              >
                About us
              </button>
              <button
                onClick={() => scrollToSection('vision')}
                className="text-prismatica-dark font-glacial text-xl hover:text-prismatica-purple transition-colors text-left"
              >
                Vision
              </button>
              <button
                onClick={() => scrollToSection('events')}
                className="text-prismatica-dark font-glacial text-xl hover:text-prismatica-purple transition-colors text-left"
              >
                Tickets
              </button>
              <button
                onClick={() => scrollToSection('events')}
                className="text-prismatica-dark font-glacial text-xl hover:text-prismatica-purple transition-colors text-left"
              >
                Line-up
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-prismatica-dark font-glacial text-xl hover:text-prismatica-purple transition-colors text-left"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('cta')}
                className="text-prismatica-dark font-glacial text-xl hover:text-prismatica-purple transition-colors text-left"
              >
                Merch
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
