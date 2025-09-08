import Layout from "@/components/Layout";
import { MessageSquare, Users, Trophy, Plus, ThumbsUp, MessageCircle } from "lucide-react";

const Community = () => {
  const forumSections = [
    {
      icon: <Trophy className="w-8 h-8 text-primary" />,
      title: "Отчёты о рыбалке",
      description: "Делитесь своими трофеями и успехами",
      topics: 342,
      posts: 2841,
      lastPost: "Трофейный сом 45кг на Ахтубе",
      lastAuthor: "FishMaster",
      lastTime: "2 часа назад",
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      title: "Вопросы и ответы",
      description: "Задавайте вопросы и помогайте новичкам",
      topics: 523,
      posts: 4123,
      lastPost: "Как правильно настроить фрикцион?",
      lastAuthor: "NewbieFisher",
      lastTime: "15 минут назад",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Предложения по сайту",
      description: "Ваши идеи по улучшению проекта",
      topics: 89,
      posts: 412,
      lastPost: "Добавить фильтр по глубине",
      lastAuthor: "IdeaMan",
      lastTime: "1 день назад",
    },
  ];

  const recentTopics = [
    {
      title: "Рекорд сезона: Карп 18.5кг на кукурузу",
      author: "CarpHunter",
      replies: 23,
      views: 451,
      likes: 45,
    },
    {
      title: "Ночная рыбалка на Медвежьем озере",
      author: "NightFisher",
      replies: 12,
      views: 234,
      likes: 18,
    },
    {
      title: "Сравнение воблеров для ловли щуки",
      author: "SpinMaster",
      replies: 34,
      views: 789,
      likes: 67,
    },
    {
      title: "Прикормка своими руками: мой рецепт",
      author: "DIYFisher",
      replies: 45,
      views: 1234,
      likes: 89,
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">
              Сообщество рыболовов
            </h1>
            <p className="text-muted-foreground">
              Общайтесь, делитесь опытом и находите единомышленников
            </p>
          </div>
          <button className="btn-primary flex items-center space-x-2 mt-4 md:mt-0">
            <Plus className="w-5 h-5" />
            <span>Создать тему</span>
          </button>
        </div>

        {/* Forum Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {forumSections.map((section, index) => (
            <div key={index} className="card-fishing hover:border-primary/30 cursor-pointer">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">{section.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-semibold mb-1">
                    {section.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {section.description}
                  </p>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="text-muted-foreground">
                      Тем: <span className="font-semibold text-foreground">{section.topics}</span>
                    </span>
                    <span className="text-muted-foreground">
                      Сообщений: <span className="font-semibold text-foreground">{section.posts}</span>
                    </span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-border">
                    <p className="text-sm font-medium truncate">{section.lastPost}</p>
                    <p className="text-xs text-muted-foreground">
                      {section.lastAuthor} • {section.lastTime}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Topics */}
        <div className="card-fishing">
          <h2 className="text-2xl font-heading font-semibold mb-6">Последние обсуждения</h2>
          <div className="space-y-4">
            {recentTopics.map((topic, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-background rounded-xl hover:bg-accent/50 transition-colors cursor-pointer"
              >
                <div className="flex-1">
                  <h3 className="font-semibold mb-1 hover:text-primary transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Автор: <span className="font-medium">{topic.author}</span>
                  </p>
                </div>
                <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>{topic.replies}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <ThumbsUp className="w-4 h-4" />
                    <span>{topic.likes}</span>
                  </div>
                  <div className="hidden md:block">
                    {topic.views} просмотров
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="card-fishing text-center">
            <div className="text-3xl font-bold text-primary mb-1">2,847</div>
            <div className="text-sm text-muted-foreground">Участников</div>
          </div>
          <div className="card-fishing text-center">
            <div className="text-3xl font-bold text-primary mb-1">954</div>
            <div className="text-sm text-muted-foreground">Тем</div>
          </div>
          <div className="card-fishing text-center">
            <div className="text-3xl font-bold text-primary mb-1">7,376</div>
            <div className="text-sm text-muted-foreground">Сообщений</div>
          </div>
          <div className="card-fishing text-center">
            <div className="text-3xl font-bold text-primary mb-1">142</div>
            <div className="text-sm text-muted-foreground">Онлайн</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Community;