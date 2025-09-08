import Layout from "@/components/Layout";
import { useState } from "react";
import { Search, Filter, MapPin, Star, Clock, Cloud, Fish as FishIcon } from "lucide-react";
import pondLilies from "@/assets/pond-lilies.jpg";
import riverSpot from "@/assets/river-spot.jpg";
import fishCollection from "@/assets/fish-collection.jpg";

const Map = () => {
  const [selectedSpot, setSelectedSpot] = useState<number | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [filters, setFilters] = useState({
    location: "",
    fish: "",
    bait: "",
    time: "",
  });

  // Все локации из игры Русская рыбалка 4
  const gameLocations = [
    { value: "belaya", name: "Река Белая", type: "river" },
    { value: "volkhov", name: "Река Волхов", type: "river" },
    { value: "seversky", name: "Северский Донец", type: "river" },
    { value: "sura", name: "Река Сура", type: "river" },
    { value: "ladoga", name: "Ладожское озеро", type: "lake" },
    { value: "kuori", name: "Озеро Куори", type: "lake" },
    { value: "bear", name: "Медвежье озеро", type: "lake" },
    { value: "ostrog", name: "Старый Острог", type: "lake" },
    { value: "mosquito", name: "Комариное озеро", type: "lake" },
    { value: "beloe", name: "Озеро Белое", type: "lake" },
    { value: "yantarnoe", name: "Янтарное озеро", type: "lake" },
    { value: "kristal", name: "Кристальное озеро", type: "lake" },
    { value: "akhtuba", name: "Река Ахтуба", type: "river" },
    { value: "lower-tunguska", name: "Нижняя Тунгуска", type: "river" },
    { value: "vitim", name: "Река Витим", type: "river" },
    { value: "yama", name: "Река Яма", type: "river" },
    { value: "bystraya", name: "Река Быстрая", type: "river" },
    { value: "zhizdra", name: "Река Жиздра", type: "river" },
    { value: "kama", name: "Река Кама", type: "river" },
    { value: "vonga", name: "Река Вонга", type: "river" },
    { value: "oka", name: "Река Ока", type: "river" },
    { value: "sosnovaya", name: "Сосновая бухта", type: "bay" },
    { value: "amur", name: "Река Амур", type: "river" },
    { value: "don", name: "Река Дон", type: "river" },
    { value: "volga", name: "Река Волга", type: "river" },
    { value: "dnepr", name: "Река Днепр", type: "river" },
    { value: "pripyat", name: "Река Припять", type: "river" },
    { value: "ob", name: "Река Обь", type: "river" },
    { value: "enisey", name: "Река Енисей", type: "river" },
    { value: "lena", name: "Река Лена", type: "river" },
    { value: "irtysh", name: "Река Иртыш", type: "river" },
    { value: "angara", name: "Река Ангара", type: "river" },
    { value: "pechora", name: "Река Печора", type: "river" },
    { value: "kolyma", name: "Река Колыма", type: "river" },
    { value: "indigirka", name: "Река Индигирка", type: "river" },
    { value: "neva", name: "Река Нева", type: "river" },
    { value: "severnaya-dvina", name: "Северная Двина", type: "river" },
    { value: "mezen", name: "Река Мезень", type: "river" },
    { value: "onega", name: "Река Онега", type: "river" },
    { value: "narva", name: "Река Нарва", type: "river" },
    { value: "zapadnaya-dvina", name: "Западная Двина", type: "river" },
  ];

  // Примеры точек с координатами для демонстрации
  const spots = [
    {
      id: 1,
      name: "Старый Острог - Карповая яма",
      location: "ostrog",
      coordinates: { x: 25, y: 35 },
      fish: "Карп, Белый амур, Карась",
      bait: "Кукуруза, Бойлы, Картофель",
      bestTime: "Утро 4:00-8:00, Вечер 18:00-22:00",
      weather: "Тёплая, Безветренная",
      rating: 4.8,
      depth: "3-5м",
      image: pondLilies,
    },
    {
      id: 2,
      name: "Ахтуба - Судаковый перекат",
      location: "akhtuba",
      coordinates: { x: 60, y: 45 },
      fish: "Судак, Жерех, Окунь",
      bait: "Воблер, Силикон, Блесна",
      bestTime: "Ночь 22:00-04:00",
      weather: "Прохладная, Пасмурная",
      rating: 4.6,
      depth: "2-4м",
      image: riverSpot,
    },
    {
      id: 3,
      name: "Медвежье - Форелевая заводь",
      location: "bear",
      coordinates: { x: 40, y: 25 },
      fish: "Форель, Сиг, Хариус",
      bait: "Мушка, Червь, Опарыш",
      bestTime: "Раннее утро 5:00-7:00",
      weather: "Пасмурная, Дождливая",
      rating: 4.9,
      depth: "1-3м",
      image: fishCollection,
    },
    {
      id: 4,
      name: "Волхов - Щучья коряга",
      location: "volkhov",
      coordinates: { x: 70, y: 60 },
      fish: "Щука, Окунь, Язь",
      bait: "Спиннербейт, Живец, Твистер",
      bestTime: "День 10:00-14:00",
      weather: "Переменная облачность",
      rating: 4.5,
      depth: "4-6м",
      image: riverSpot,
    },
    {
      id: 5,
      name: "Куори - Лососевые пороги",
      location: "kuori",
      coordinates: { x: 15, y: 50 },
      fish: "Лосось, Форель, Голец",
      bait: "Нахлыст, Колебалка, Креветка",
      bestTime: "Вечер 17:00-20:00",
      weather: "Прохладная",
      rating: 4.7,
      depth: "2-5м",
      image: pondLilies,
    },
    {
      id: 6,
      name: "Белая - Сомовья яма",
      location: "belaya",
      coordinates: { x: 50, y: 70 },
      fish: "Сом, Налим, Карп",
      bait: "Живец, Лягушка, Пучок червей",
      bestTime: "Ночь 23:00-03:00",
      weather: "Тёплая, Тихая",
      rating: 4.6,
      depth: "8-12м",
      image: fishCollection,
    },
    {
      id: 7,
      name: "Ладога - Нерестилище леща",
      location: "ladoga",
      coordinates: { x: 30, y: 55 },
      fish: "Лещ, Густера, Плотва",
      bait: "Опарыш, Перловка, Мотыль",
      bestTime: "Утро 6:00-10:00",
      weather: "Слабый ветер",
      rating: 4.4,
      depth: "3-6м",
      image: riverSpot,
    },
    {
      id: 8,
      name: "Сура - Голавлевый перекат",
      location: "sura",
      coordinates: { x: 80, y: 40 },
      fish: "Голавль, Язь, Елец",
      bait: "Майский жук, Кузнечик, Хлеб",
      bestTime: "День 12:00-16:00",
      weather: "Солнечная",
      rating: 4.3,
      depth: "1-2м",
      image: pondLilies,
    },
  ];

  // Фильтрация точек по выбранной локации
  const filteredSpots = selectedLocation 
    ? spots.filter(spot => spot.location === selectedLocation)
    : spots;

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
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                  >
                    <option value="">Все локации</option>
                    <optgroup label="Озёра">
                      {gameLocations.filter(loc => loc.type === "lake").map(loc => (
                        <option key={loc.value} value={loc.value}>
                          {loc.name}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Реки">
                      {gameLocations.filter(loc => loc.type === "river").map(loc => (
                        <option key={loc.value} value={loc.value}>
                          {loc.name}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Заливы">
                      {gameLocations.filter(loc => loc.type === "bay").map(loc => (
                        <option key={loc.value} value={loc.value}>
                          {loc.name}
                        </option>
                      ))}
                    </optgroup>
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
                    <option value="bream">🐟 Лещ</option>
                    <option value="roach">🐟 Плотва</option>
                    <option value="crucian">🐟 Карась</option>
                    <option value="trout">🐟 Форель</option>
                    <option value="salmon">🐟 Лосось</option>
                    <option value="sturgeon">🐟 Осётр</option>
                    <option value="asp">🐟 Жерех</option>
                    <option value="zander">🐟 Судак</option>
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
                    <option value="wobbler">Воблер</option>
                    <option value="maggot">Опарыш</option>
                    <option value="bread">Хлеб</option>
                    <option value="fly">Мушка</option>
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
                    <option value="morning">Утро (4:00-10:00)</option>
                    <option value="day">День (10:00-17:00)</option>
                    <option value="evening">Вечер (17:00-22:00)</option>
                    <option value="night">Ночь (22:00-04:00)</option>
                  </select>
                </div>

                <div className="flex space-x-2 pt-4">
                  <button className="btn-primary flex-1">Применить</button>
                  <button 
                    onClick={() => {
                      setSelectedLocation("");
                      setFilters({ location: "", fish: "", bait: "", time: "" });
                    }}
                    className="btn-outline flex-1"
                  >
                    Сбросить
                  </button>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <h3 className="font-semibold mb-3">Статистика локаций</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Всего локаций:</span>
                    <span className="font-semibold">{gameLocations.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Активных точек:</span>
                    <span className="font-semibold">{filteredSpots.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Обновлено сегодня:</span>
                    <span className="font-semibold text-green-600">12</span>
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
                  {/* Current location display */}
                  {selectedLocation && (
                    <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-md">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="font-semibold">
                          {gameLocations.find(loc => loc.value === selectedLocation)?.name}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Water texture */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="animate-water-ripple absolute top-10 left-20 text-6xl">💧</div>
                    <div className="animate-water-ripple absolute top-40 right-30 text-4xl" style={{ animationDelay: '2s' }}>💧</div>
                    <div className="animate-water-ripple absolute bottom-20 left-40 text-5xl" style={{ animationDelay: '4s' }}>💧</div>
                  </div>

                  {/* Spot markers */}
                  {filteredSpots.map((spot) => (
                    <button
                      key={spot.id}
                      onClick={() => setSelectedSpot(spot.id)}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${
                        selectedSpot === spot.id ? 'scale-125 z-20' : 'hover:scale-110 z-10'
                      } transition-all`}
                      style={{ left: `${spot.coordinates.x}%`, top: `${spot.coordinates.y}%` }}
                      aria-label={`Точка ${spot.name}`}
                    >
                      <div className="relative">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          selectedSpot === spot.id 
                            ? 'bg-primary text-white shadow-xl ring-4 ring-primary/30' 
                            : 'bg-white text-primary shadow-md hover:shadow-lg'
                        } transition-all`}>
                          <FishIcon className="w-6 h-6" />
                        </div>
                        {selectedSpot === spot.id && (
                          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rotate-45" />
                        )}
                        {/* Spot name tooltip */}
                        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
                          {spot.name}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Spot Detail Panel */}
              {selectedSpot && (
                <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-border p-6 animate-float shadow-xl">
                  {(() => {
                    const spot = filteredSpots.find((s) => s.id === selectedSpot);
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
                            <div>
                              <span className="text-muted-foreground">Рыба: </span>
                              <span className="font-medium">{spot.fish}</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Глубина: </span>
                              <span className="font-medium">{spot.depth}</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Наживка: </span>
                              <span className="font-medium">{spot.bait}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4 text-muted-foreground" />
                              <span className="text-xs">{spot.bestTime}</span>
                            </div>
                            <div className="col-span-2 flex items-center space-x-1">
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

            {/* Legend */}
            <div className="mt-4 p-4 bg-white rounded-xl border border-border">
              <h3 className="font-semibold mb-2">Легенда</h3>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                  <span>Выбранная точка</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-white border-2 border-primary rounded-full"></div>
                  <span>Доступная точка</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FishIcon className="w-4 h-4 text-primary" />
                  <span>Активный клёв</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Map;