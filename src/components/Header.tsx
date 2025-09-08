import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Fish } from "lucide-react";
import headerBear from "@/assets/header-bear-fishing.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Главная", href: "/" },
    { name: "Карта", href: "/map" },
    { name: "Справочник", href: "/guide" },
    { name: "Новости", href: "/news" },
    { name: "Сообщество", href: "/community" },
    { name: "О проекте", href: "/about" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="relative">
      {/* Header Image */}
      <div className="relative h-32 md:h-40 overflow-hidden">
        <img 
          src={headerBear} 
          alt="Медведь ловит рыбу" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
        
        {/* Logo on top of image */}
        <div className="absolute bottom-4 left-4 z-10">
          <Link to="/" className="flex items-center space-x-2 group">
            <Fish className="w-10 h-10 text-white drop-shadow-lg group-hover:scale-110 transition-transform" />
            <span className="font-heading font-bold text-2xl md:text-3xl text-white drop-shadow-lg">
              Точки клёва
            </span>
          </Link>
        </div>
      </div>
      
      {/* Navigation Bar */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors ml-auto"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-border">
              <div className="flex flex-col space-y-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`font-medium py-2 transition-colors ${
                      isActive(item.href)
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;