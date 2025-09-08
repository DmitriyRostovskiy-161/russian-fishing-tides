import Layout from "@/components/Layout";
import { Heart, Mail, Send, MessageSquare } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const About = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-heading font-bold mb-8">
          О проекте
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* About Content */}
          <div>
            <div className="card-fishing mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-4">
                Почему мы создали «Точки клёва»
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Проект «Точки клёва» был создан сообществом игроков «Русской рыбалки 4» для того, чтобы объединить опыт тысяч рыболовов в одном месте. Мы верим, что делясь знаниями, мы делаем игру интереснее и доступнее для всех.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Наша миссия — предоставить каждому игроку актуальную информацию о лучших местах для рыбалки, эффективных снастях и проверенных техниках ловли. Мы постоянно обновляем базу данных, добавляем новые точки и совершенствуем функционал сайта.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Присоединяйтесь к нашему сообществу, делитесь своими находками и помогайте другим рыболовам достигать новых рекордов!
              </p>
            </div>

            <div className="card-fishing">
              <h3 className="text-xl font-heading font-semibold mb-4 flex items-center">
                <Heart className="w-5 h-5 mr-2 text-red-500" />
                Благодарности
              </h3>
              <p className="text-muted-foreground mb-3">
                Особая благодарность всем участникам сообщества, которые ежедневно пополняют базу точек, пишут гайды и помогают новичкам. Без вас этот проект был бы невозможен!
              </p>
              <p className="text-muted-foreground">
                Также благодарим разработчиков игры «Русская рыбалка 4» за создание потрясающего симулятора, который объединил тысячи любителей виртуальной рыбалки.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="card-fishing">
              <h2 className="text-2xl font-heading font-semibold mb-4">
                Обратная связь
              </h2>
              <p className="text-muted-foreground mb-6">
                Есть вопросы, предложения или хотите помочь проекту? Напишите нам!
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-2 rounded-xl border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="Иван Рыболов"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-2 rounded-xl border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="ivan@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-xl border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    placeholder="Расскажите нам о вашей идее или задайте вопрос..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Отправить сообщение
                </button>
              </form>
            </div>

            <div className="card-fishing mt-6">
              <h3 className="text-xl font-heading font-semibold mb-4">
                Контакты
              </h3>
              <div className="space-y-3">
                <a
                  href="mailto:info@fishingpoints.ru"
                  className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>info@fishingpoints.ru</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Send className="w-5 h-5" />
                  <span>@fishing_ru4</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Discord: FishingRU4</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;