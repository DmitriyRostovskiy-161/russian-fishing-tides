import Layout from "@/components/Layout";
import { useState } from "react";
import { Search, Filter, MapPin, Star, Clock, Cloud } from "lucide-react";
import pondLilies from "@/assets/pond-lilies.jpg";
import riverSpot from "@/assets/river-spot.jpg";

const Map = () => {
  const [selectedSpot, setSelectedSpot] = useState<number | null>(null);
  const [filters, setFilters] = useState({
    location: "",
    fish: "",
    bait: "",
    time: "",
  });

  const spots = [
    {
      id: 1,
      name: "Озеро Старый Острог",
      coordinates: { x: 30, y: 40 },
      fish: "Карп, Белый амур",
      bait: "Кукуруза, Бойлы",
      bestTime: "Утро, Вечер",
      weather: "Тёплая, Безветренная",
      rating: 4.8,
      image: pondLilies,
    },
    {
      id: 2,
      name: "Река Ахтуба",
      coordinates: { x: 60, y: 55 },
      fish: "Судак, Жерех",
      bait: "Воблер, Блесна",
      bestTime: "Ночь",
      weather: "Прохладная",
      rating: 4.6,
      image: riverSpot,
    },
    {
      id: 3,
      name: "Озеро Медвежье",
      coordinates: { x: 45, y: 25 },
      fish: "Форель, Сиг",
      bait: "Мушка, Червь",
      bestTime: "Раннее утро",
      weather: "Пасмурная",
      rating: 4.9,
      image: pondLilies,
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-heading font-bold mb-8">
          Карта точек клёва
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Filters Panel */}
          <div className="lg:col-span-1">
            <div className="card-fishing">
              <h2 className="text-xl font-heading font-semibold mb-4 flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                Фильтры
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Поиск</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Название места или рыбы..."
                      className="w-full pl-10 pr-4 py-2 rounded-xl border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Локация</label>
                  <select
                    value={filters.location}
                    onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                    className="w-full px-4 py-2 rounded-xl border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  >
                    <option value="">Все локации</option>
                    <option value="lake">Озеро</option>
                    <option value="river">Река</option>
                    <option value="canal">Канал</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Вид рыбы</label>
                  <select
                    value={filters.fish}
                    onChange={(e) => setFilters({ ...filters, fish: e.target.value })}
                    className="w-full px-4 py-2 rounded-xl border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  >
                    <option value="">Все виды</option>
                    <option value="carp">🐟 Карп</option>
                    <option value="pike">🐟 Щука</option>
                    <option value="perch">🐟 Окунь</option>
                    <option value="catfish">🐟 Сом</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Наживка</label>
                  <select
                    value={filters.bait}
                    onChange={(e) => setFilters({ ...filters, bait: e.target.value })}
                    className="w-full px-4 py-2 rounded-xl border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  >
                    <option value="">Любая</option>
                    <option value="corn">Кукуруза</option>
                    <option value="worm">Червь</option>
                    <option value="boilies">Бойлы</option>
                    <option value="lure">Блесна</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Время суток</label>
                  <select
                    value={filters.time}
                    onChange={(e) => setFilters({ ...filters, time: e.target.value })}
                    className="w-full px-4 py-2 rounded-xl border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  >
                    <option value="">Любое</option>
                    <option value="morning">Утро</option>
                    <option value="day">День</option>
                    <option value="evening">Вечер</option>
                    <option value="night">Ночь</option>
                  </select>
                </div>

                <div className="flex space-x-2 pt-4">
                  <button className="btn-primary flex-1">Применить</button>
                  <button className="btn-outline flex-1">Сбросить</button>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <h3 className="font-semibold mb-3">Последние обновления</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Новая точка на Ахтубе</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Обновлён клёв на Медвежьем</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Area */}
          <div className="lg:col-span-2">
            <div className="card-fishing relative h-[600px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100">
                {/* Map background */}
                <div className="relative w-full h-full">
                  {/* Water texture */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="animate-water-ripple absolute top-10 left-20 text-6xl">💧</div>
                    <div className="animate-water-ripple absolute top-40 right-30 text-4xl" style={{ animationDelay: '2s' }}>💧</div>
                    <div className="animate-water-ripple absolute bottom-20 left-40 text-5xl" style={{ animationDelay: '4s' }}>💧</div>
                  </div>

                  {/* Spot markers */}
                  {spots.map((spot) => (
                    <button
                      key={spot.id}
                      onClick={() => setSelectedSpot(spot.id)}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${
                        selectedSpot === spot.id ? 'scale-125' : 'hover:scale-110'
                      } transition-transform`}
                      style={{ left: `${spot.coordinates.x}%`, top: `${spot.coordinates.y}%` }}
                      aria-label={`Точка ${spot.name}`}
                    >
                      <div className="relative">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          selectedSpot === spot.id 
                            ? 'bg-primary text-white shadow-lg' 
                            : 'bg-white text-primary shadow-md'
                        }`}>
                          <MapPin className="w-6 h-6" />
                        </div>
                        {selectedSpot === spot.id && (
                          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rotate-45" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Spot Detail Panel */}
              {selectedSpot && (
                <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-border p-6 animate-float">
                  {(() => {
                    const spot = spots.find((s) => s.id === selectedSpot);
                    if (!spot) return null;
                    return (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="md:col-span-1">
                          <img
                            src={spot.image}
                            alt={spot.name}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <h3 className="text-xl font-heading font-semibold mb-2">
                            {spot.name}
                          </h3>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div className="flex items-center space-x-2">
                              <span className="text-muted-foreground">Рыба:</span>
                              <span className="font-medium">{spot.fish}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4 text-muted-foreground" />
                              <span>{spot.bestTime}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-muted-foreground">Наживка:</span>
                              <span className="font-medium">{spot.bait}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Cloud className="w-4 h-4 text-muted-foreground" />
                              <span>{spot.weather}</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between mt-3">
                            <div className="flex items-center space-x-1">
                              <Star className="w-5 h-5 text-yellow-500 fill-current" />
                              <span className="font-semibold">{spot.rating}</span>
                            </div>
                            <button className="btn-primary text-sm">
                              Подробнее
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Map;