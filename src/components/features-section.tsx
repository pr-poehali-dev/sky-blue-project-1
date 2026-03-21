import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Обнаружение в реальном времени",
    description: "Мгновенное выявление читов, aimbot, wallhack и других нечестных программ во время игры без задержек.",
    icon: "scan",
    badge: "Real-time",
  },
  {
    title: "Глубокий анализ памяти",
    description: "Сканирование оперативной памяти процесса на предмет инъекций, DLL-хуков и манипуляций с игровыми данными.",
    icon: "shield",
    badge: "Anti-Inject",
  },
  {
    title: "Анализ поведения",
    description: "ИИ-алгоритмы определяют аномальное поведение игрока — статистику, движения, точность стрельбы.",
    icon: "brain",
    badge: "AI",
  },
  {
    title: "Защита ядра (Kernel)",
    description: "Работает на уровне ядра системы — невозможно обойти через стандартные методы обхода античитов.",
    icon: "lock",
    badge: "Ring-0",
  },
  {
    title: "Быстрая проверка файлов",
    description: "Проверка игровых файлов и клиента на целостность с верификацией цифровых подписей за секунды.",
    icon: "zap",
    badge: "Быстро",
  },
  {
    title: "Подробные отчёты",
    description: "Детализированные логи с доказательной базой: скриншоты, дампы памяти, статистика — для разбора нарушений.",
    icon: "target",
    badge: "Репорты",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Технологии защиты нового уровня</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            MajesticGuard использует передовые методы обнаружения, чтобы ни один чит не прошёл незамеченным
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "scan" && "🔍"}
                    {feature.icon === "shield" && "🛡️"}
                    {feature.icon === "brain" && "🧠"}
                    {feature.icon === "lock" && "🔒"}
                    {feature.icon === "zap" && "⚡"}
                    {feature.icon === "target" && "📊"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
