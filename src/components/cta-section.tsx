import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="slide-up">
          <h2 className="text-5xl font-bold text-foreground mb-6 font-sans text-balance">
            Готовы к честной игре?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            Присоединяйтесь к тысячам игроков и организаторов, которые уже используют MajesticGuard.
            Скачайте бесплатно и убедитесь в честности уже сегодня.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 pulse-button text-lg px-8 py-4"
              onClick={() => {
                const a = document.createElement("a")
                a.href = "https://cdn.poehali.dev/projects/e6cbe39d-eb49-46b1-af09-261fdda1bd56/bucket/83a3c012-a54f-487e-8d6a-5b755606a685.zip"
                a.download = "MajesticGuard.zip"
                a.click()
              }}
            >
              Скачать MajesticGuard
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 bg-transparent"
              onClick={() => window.open("https://discord.gg/YMUrmSaQxt", "_blank")}
            >
              Наш Discord
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}