import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { MapPin, Users, TrendingUp, Clock, Star, ChevronRight } from "lucide-react";
import heroLake from "@/assets/hero-lake.jpg";
import headerBear from "@/assets/header-bear-fishing.jpg";
import pondLilies from "@/assets/pond-lilies.jpg";
import riverSpot from "@/assets/river-spot.jpg";
import fishCollection from "@/assets/fish-collection.jpg";

const Home = () => {
  const features = [
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Актуальность",
      description: "База точек обновляется ежедневно силами сообщества",
    },
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      title: "Детали",
      description: "Всё о рыбе, снастях, приманках и времени ловли",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Сообщество",
      description: "Делитесь опытом и находите новые трофеи",
    },
  ];

  const popularSpots = [
    {
      id: 1,
      name: "Озеро Старый Острог",
      fish: "Карп, Белый амур",
      rating: 4.8,
      image: pondLilies,
    },
    {
      id: 2,
      name: "Река Ахтуба",
      fish: "Судак, Жерех",
      rating: 4.6,
      image: riverSpot,
    },
    {
      id: 3,
      name: "Озеро Медвежье",
      fish: "Форель, Сиг",
      rating: 4.9,
      image: fishCollection,
    },
  ];

  const news = [
    {
      id: 1,
      date: "15.03.2024",
      title: "Обновление карты: добавлены новые точки на Волге",
      description: "Сообщество обнаружило 12 новых перспективных точек для ловли трофейного сома",
    },
    {
      id: 2,
      date: "14.03.2024",
      title: "Гайд: Ночная ловля судака на Ахтубе",
      description: "Подробное руководство по выбору снастей и времени для успешной рыбалки",
    },
    {
      id: 3,
      date: "13.03.2024",
      title: "Турнир сообщества: Охота за трофеем",
      description: "Присоединяйтесь к весеннему турниру с призовым фондом",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroLake})`,
          }}
        />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <img 
            src={headerBear} 
            alt="Медведь ловит рыбу" 
            className="absolute right-0 bottom-0 h-full w-full object-cover opacity-90"
          />
          <div className="max-w-2xl text-white relative z-10">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 animate-float" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.4), -1px -1px 2px rgba(0,0,0,0.4), 1px -1px 2px rgba(0,0,0,0.4), -1px 1px 2px rgba(0,0,0,0.4)' }}>
              Веди свой улов к рекорду
            </h1>
            <p className="text-xl md:text-2xl mb-8" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.4), -1px -1px 2px rgba(0,0,0,0.4), 1px -1px 2px rgba(0,0,0,0.4), -1px 1px 2px rgba(0,0,0,0.4)' }}>
              Актуальные точки клёва, проверенные снасти и советы бывалых для игры «Русская рыбалка 4»
            </p>
            <Link to="/map" className="btn-primary inline-flex items-center space-x-2">
              <span>Найти точку клёва</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
        {/* Decorative reeds */}
        <div className="absolute bottom-0 left-0 w-32 h-64 opacity-30">
          <div className="animate-reed-sway text-white/20 text-[200px] -rotate-12">🌾</div>
        </div>
        <div className="absolute bottom-0 right-0 w-32 h-64 opacity-30">
          <div className="animate-reed-sway text-white/20 text-[200px] rotate-12">🌾</div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            Преимущества
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card-fishing text-center group"
              >
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Spots */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Популярные точки
            </h2>
            <Link
              to="/map"
              className="text-primary hover:text-primary-hover transition-colors font-medium"
            >
              Все точки →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularSpots.map((spot) => (
              <Link
                key={spot.id}
                to={`/map?spot=${spot.id}`}
                className="card-fishing group overflow-hidden"
              >
                <div className="h-48 -mx-6 -mt-6 mb-4 overflow-hidden">
                  <img
                    src={spot.image}
                    alt={spot.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">
                  {spot.name}
                </h3>
                <p className="text-muted-foreground mb-3">{spot.fish}</p>
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="font-semibold">{spot.rating}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Последние новости
            </h2>
            <Link
              to="/news"
              className="text-primary hover:text-primary-hover transition-colors font-medium"
            >
              Все новости →
            </Link>
          </div>
          <div className="space-y-6">
            {news.map((item) => (
              <Link
                key={item.id}
                to={`/news/${item.id}`}
                className="card-fishing block group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{item.date}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;