import Layout from "@/components/Layout";
import { Calendar, Tag, ChevronRight } from "lucide-react";
import riverSpot from "@/assets/river-spot.jpg";

const News = () => {
  const newsItems = [
    {
      id: 1,
      date: "15.03.2024",
      title: "Обновление карты: добавлены новые точки на Волге",
      description: "Сообщество обнаружило 12 новых перспективных точек для ловли трофейного сома. Все точки проверены и добавлены на интерактивную карту с подробным описанием снастей и времени клёва.",
      tags: ["Обновление", "Волга", "Сом"],
      image: riverSpot,
    },
    {
      id: 2,
      date: "14.03.2024",
      title: "Гайд: Ночная ловля судака на Ахтубе",
      description: "Подробное руководство по выбору снастей и времени для успешной рыбалки. Рассматриваем лучшие воблеры, технику проводки и оптимальные погодные условия для ловли трофейного судака.",
      tags: ["Гайд", "Судак", "Ахтуба"],
    },
    {
      id: 3,
      date: "13.03.2024",
      title: "Турнир сообщества: Охота за трофеем",
      description: "Присоединяйтесь к весеннему турниру с призовым фондом. Соревнование продлится две недели, победители получат уникальные снасти и премиум-доступ к базе точек.",
      tags: ["Турнир", "Призы"],
    },
    {
      id: 4,
      date: "12.03.2024",
      title: "Обновление игры 4.0.15: новые виды рыб",
      description: "В последнем обновлении добавлены 5 новых видов рыб, включая редкого белого амура и трофейного толстолобика. Также исправлены баги с физикой заброса.",
      tags: ["Обновление игры", "Новые рыбы"],
    },
    {
      id: 5,
      date: "11.03.2024",
      title: "Секреты ловли карпа весной",
      description: "Опытные рыболовы делятся секретами успешной ловли карпа в весенний период. Особое внимание уделено выбору прикормки и тактике прикармливания.",
      tags: ["Советы", "Карп", "Весна"],
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">
          Новости и обновления
        </h1>
        <p className="text-muted-foreground mb-8">
          Следите за последними новостями игры, обновлениями карты и советами от сообщества
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main news feed */}
          <div className="lg:col-span-2 space-y-8">
            {newsItems.map((item) => (
              <article key={item.id} className="card-fishing">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                )}
                
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                </div>

                <h2 className="text-2xl font-heading font-semibold mb-3 hover:text-primary transition-colors cursor-pointer">
                  {item.title}
                </h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center space-x-1 px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm"
                      >
                        <Tag className="w-3 h-3" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                  
                  <button className="flex items-center space-x-1 text-primary hover:text-primary-hover transition-colors font-medium">
                    <span>Читать далее</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}

            {/* Pagination */}
            <div className="flex justify-center space-x-2 pt-8">
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg">
                1
              </button>
              <button className="px-4 py-2 bg-white text-muted-foreground hover:bg-accent rounded-lg transition-colors">
                2
              </button>
              <button className="px-4 py-2 bg-white text-muted-foreground hover:bg-accent rounded-lg transition-colors">
                3
              </button>
              <button className="px-4 py-2 bg-white text-muted-foreground hover:bg-accent rounded-lg transition-colors">
                Далее →
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Categories */}
            <div className="card-fishing">
              <h3 className="text-xl font-heading font-semibold mb-4">Категории</h3>
              <ul className="space-y-2">
                <li>
                  <button className="text-muted-foreground hover:text-primary transition-colors">
                    Обновления игры (12)
                  </button>
                </li>
                <li>
                  <button className="text-muted-foreground hover:text-primary transition-colors">
                    Новые точки (24)
                  </button>
                </li>
                <li>
                  <button className="text-muted-foreground hover:text-primary transition-colors">
                    Гайды (18)
                  </button>
                </li>
                <li>
                  <button className="text-muted-foreground hover:text-primary transition-colors">
                    Турниры (6)
                  </button>
                </li>
                <li>
                  <button className="text-muted-foreground hover:text-primary transition-colors">
                    Советы (31)
                  </button>
                </li>
              </ul>
            </div>

            {/* Popular tags */}
            <div className="card-fishing">
              <h3 className="text-xl font-heading font-semibold mb-4">Популярные теги</h3>
              <div className="flex flex-wrap gap-2">
                {["Карп", "Щука", "Фидер", "Спиннинг", "Ахтуба", "Волга", "Турнир", "Обновление"].map((tag) => (
                  <button
                    key={tag}
                    className="px-3 py-1 bg-accent hover:bg-primary hover:text-primary-foreground text-accent-foreground rounded-full text-sm transition-colors"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="card-fishing bg-gradient-to-br from-primary/10 to-secondary/10">
              <h3 className="text-xl font-heading font-semibold mb-2">Подписка на новости</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Получайте уведомления о новых точках и обновлениях
              </p>
              <input
                type="email"
                placeholder="Ваш email"
                className="w-full px-4 py-2 rounded-xl border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all mb-3"
              />
              <button className="btn-primary w-full">Подписаться</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default News;