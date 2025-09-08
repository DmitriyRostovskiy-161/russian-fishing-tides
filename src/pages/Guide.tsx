import Layout from "@/components/Layout";
import { useState } from "react";
import { Fish, Anchor, Package } from "lucide-react";
import fishCollection from "@/assets/fish-collection.jpg";
import fishingTackle from "@/assets/fishing-tackle.jpg";

const Guide = () => {
  const [activeTab, setActiveTab] = useState("fish");

  const fishData = [
    { name: "Карп", type: "Мирная", weight: "5-20 кг", season: "Весна-Осень", icon: "🐟" },
    { name: "Щука", type: "Хищник", weight: "2-15 кг", season: "Круглый год", icon: "🐟" },
    { name: "Судак", type: "Хищник", weight: "1-10 кг", season: "Лето-Осень", icon: "🐟" },
    { name: "Окунь", type: "Хищник", weight: "0.2-2 кг", season: "Круглый год", icon: "🐟" },
    { name: "Лещ", type: "Мирная", weight: "1-5 кг", season: "Весна-Лето", icon: "🐟" },
    { name: "Сом", type: "Хищник", weight: "10-50 кг", season: "Лето", icon: "🐟" },
  ];

  const tackleData = [
    { name: "Спиннинг", type: "Удилище", suitable: "Хищная рыба", price: "💰💰💰" },
    { name: "Фидер", type: "Удилище", suitable: "Мирная рыба", price: "💰💰" },
    { name: "Поплавочная удочка", type: "Удилище", suitable: "Универсальная", price: "💰" },
    { name: "Катушка безынерционная", type: "Катушка", suitable: "Все виды", price: "💰💰" },
    { name: "Плетёнка", type: "Леска", suitable: "Спиннинг", price: "💰💰" },
    { name: "Монофил", type: "Леска", suitable: "Поплавок, Фидер", price: "💰" },
  ];

  const baitData = [
    { name: "Кукуруза", type: "Растительная", fish: "Карп, Карась", effectiveness: "⭐⭐⭐⭐" },
    { name: "Червь", type: "Животная", fish: "Универсальная", effectiveness: "⭐⭐⭐⭐⭐" },
    { name: "Опарыш", type: "Животная", fish: "Лещ, Плотва", effectiveness: "⭐⭐⭐⭐" },
    { name: "Бойлы", type: "Искусственная", fish: "Карп", effectiveness: "⭐⭐⭐⭐⭐" },
    { name: "Воблер", type: "Приманка", fish: "Щука, Судак", effectiveness: "⭐⭐⭐⭐" },
    { name: "Блесна", type: "Приманка", fish: "Окунь, Щука", effectiveness: "⭐⭐⭐" },
  ];

  const tabs = [
    { id: "fish", label: "Рыбы", icon: <Fish className="w-5 h-5" /> },
    { id: "tackle", label: "Снасти", icon: <Anchor className="w-5 h-5" /> },
    { id: "bait", label: "Приманки", icon: <Package className="w-5 h-5" /> },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-heading font-bold mb-8">
          Справочник рыболова
        </h1>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-white text-muted-foreground hover:bg-accent"
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Fish Tab */}
        {activeTab === "fish" && (
          <div>
            <div className="card-fishing mb-8">
              <img
                src={fishCollection}
                alt="Коллекция рыб"
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              <h2 className="text-2xl font-heading font-semibold mb-4">Виды рыб</h2>
              <p className="text-muted-foreground mb-6">
                В игре «Русская рыбалка 4» представлено более 100 видов рыб. Каждый вид имеет свои особенности поведения, предпочтения в наживке и места обитания.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fishData.map((fish, index) => (
                <div key={index} className="card-fishing">
                  <div className="flex items-start space-x-4">
                    <span className="text-4xl">{fish.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-xl font-heading font-semibold mb-2">{fish.name}</h3>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Тип:</span>
                          <span className={fish.type === "Хищник" ? "text-red-600" : "text-green-600"}>
                            {fish.type}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Вес:</span>
                          <span>{fish.weight}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Сезон:</span>
                          <span>{fish.season}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tackle Tab */}
        {activeTab === "tackle" && (
          <div>
            <div className="card-fishing mb-8">
              <img
                src={fishingTackle}
                alt="Рыболовные снасти"
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              <h2 className="text-2xl font-heading font-semibold mb-4">Снасти и оборудование</h2>
              <p className="text-muted-foreground mb-6">
                Правильный выбор снастей — залог успешной рыбалки. Каждый тип снастей подходит для определённых условий и видов рыбы.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tackleData.map((tackle, index) => (
                <div key={index} className="card-fishing">
                  <h3 className="text-xl font-heading font-semibold mb-3">{tackle.name}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Тип:</span>
                      <span>{tackle.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Подходит для:</span>
                      <span>{tackle.suitable}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Цена:</span>
                      <span>{tackle.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bait Tab */}
        {activeTab === "bait" && (
          <div>
            <div className="card-fishing mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-4">Наживки и приманки</h2>
              <p className="text-muted-foreground mb-6">
                Выбор правильной наживки может существенно повлиять на результат рыбалки. Учитывайте предпочтения рыбы, время года и погодные условия.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {baitData.map((bait, index) => (
                <div key={index} className="card-fishing">
                  <h3 className="text-xl font-heading font-semibold mb-3">{bait.name}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Тип:</span>
                      <span>{bait.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Рыба:</span>
                      <span>{bait.fish}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Эффективность:</span>
                      <span>{bait.effectiveness}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Guide;