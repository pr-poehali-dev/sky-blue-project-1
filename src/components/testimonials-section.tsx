import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Артём К.",
    role: "Организатор турниров по CS2",
    initials: "АК",
    content:
      "MajesticGuard выявил 3 читера на нашем турнире, которых другие инструменты пропустили. Теперь используем обязательно перед каждым матчем.",
  },
  {
    name: "Дмитрий Л.",
    role: "Администратор игрового сервера",
    initials: "ДЛ",
    content:
      "Наконец-то нормальный инструмент для проверки игроков. Простой интерфейс, подробные отчёты и реально работает. Рекомендую всем серверам.",
  },
  {
    name: "Влад М.",
    role: "Профессиональный игрок, команда NoChance",
    initials: "ВМ",
    content:
      "Как честный игрок я сам прошу проверить себя через MajesticGuard перед матчами. Доверие в команде стало намного выше.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Нам доверяют игроки и организаторы</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Что говорят те, кто уже использует MajesticGuard для честной игры
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-red-500/20 text-red-400 font-bold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
