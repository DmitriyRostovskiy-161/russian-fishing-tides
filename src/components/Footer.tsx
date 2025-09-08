import { Link } from "react-router-dom";
import { Fish, Facebook, Send, Youtube } from "lucide-react";

const Footer = () => {
  const navigation = [
    { name: "Главная", href: "/" },
    { name: "Карта", href: "/map" },
    { name: "Справочник", href: "/guide" },
    { name: "Новости", href: "/news" },
    { name: "Сообщество", href: "/community" },
    { name: "О проекте", href: "/about" },
  ];

  return (
    <footer className="mt-20 bg-gradient-to-br from-primary to-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Fish className="w-8 h-8" />
              <span className="font-heading font-semibold text-xl">Точки клёва</span>
            </div>
            <p className="text-white/80 mb-4">
              Актуальные точки клёва, проверенные снасти и советы бывалых для игры «Русская рыбалка 4»
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Навигация</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Контакты</h3>
            <p className="text-white/80 mb-2">Email: info@fishingpoints.ru</p>
            <p className="text-white/80 mb-2">Discord: FishingRU4</p>
            <p className="text-white/80">Telegram: @fishing_ru4</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/60">
          <p>&copy; 2024 Точки клёва. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;