import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Для каких игр работает MajesticGuard?",
      answer:
        "MajesticGuard поддерживает большинство популярных онлайн-шутеров и соревновательных игр: CS2, Valorant, Rust, DayZ и другие. Список поддерживаемых игр постоянно расширяется.",
    },
    {
      question: "Влияет ли утилита на производительность в игре?",
      answer:
        "Нет. MajesticGuard оптимизирован для работы в фоне с минимальным потреблением ресурсов. Потребление CPU — менее 1%, RAM — около 50 МБ. Вы не заметите разницы в FPS.",
    },
    {
      question: "Может ли MajesticGuard ошибочно заблокировать честного игрока?",
      answer:
        "Система использует многоуровневую проверку и выдаёт подробные доказательства. Ложные срабатывания сведены к минимуму. В случае спорных ситуаций администратор всегда может изучить детальный отчёт.",
    },
    {
      question: "Нужен ли интернет для работы утилиты?",
      answer:
        "Базовое сканирование работает офлайн. Для получения обновлений базы данных читов и облачной проверки требуется подключение к интернету — это повышает точность обнаружения.",
    },
    {
      question: "Как скачать MajesticGuard?",
      answer:
        "Перейдите в раздел «Скачать» на этой странице и нажмите кнопку скачивания. Файл будет загружен напрямую. Установка стандартная — запустите установщик и следуйте инструкциям.",
    },
    {
      question: "Как связаться с поддержкой?",
      answer:
        "Вы можете написать нам на почту majesticguard@gmail.com, в Telegram @majesticguard или присоединиться к нашему Discord-серверу discord.gg/YMUrmSaQxt. Отвечаем быстро!",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы о MajesticGuard — как работает, для кого подходит и как начать.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
