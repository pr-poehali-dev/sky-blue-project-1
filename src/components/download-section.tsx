import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const FILE_URL = "https://cdn.poehali.dev/projects/e6cbe39d-eb49-46b1-af09-261fdda1bd56/bucket/dcf3c645-5659-4c79-95e9-974838c71ceb.rar"
const FILE_NAME = "MajesticGuard.rar"

export function DownloadSection() {
  const handleDownload = () => {
    const a = document.createElement("a")
    a.href = FILE_URL
    a.download = FILE_NAME
    a.click()
  }

  return (
    <section id="download" className="py-24 bg-black">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">
            Скачать <span className="text-red-500">MajesticGuard</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-space-mono">
            Официальная утилита для проверки на читы. Одно нажатие — и вы защищены.
          </p>
        </div>

        <Card className="border border-red-500/30 bg-gray-900/50">
          <CardContent className="p-8">
            <div className="flex flex-col items-center gap-6">
              <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center border border-red-500/30">
                <Icon name="Shield" size={40} className="text-red-500" />
              </div>
              <div className="text-center">
                <p className="font-orbitron text-white text-xl font-bold mb-1">{FILE_NAME}</p>
                <p className="text-gray-400 font-space-mono text-sm">Windows 10 / 11 · x64</p>
              </div>
              <Button
                size="lg"
                className="bg-red-500 hover:bg-red-600 text-white font-orbitron text-lg px-12 py-4 pulse-button border-0"
                onClick={handleDownload}
              >
                <Icon name="Download" size={20} className="mr-2" />
                Скачать сейчас
              </Button>
              <div className="flex items-center gap-2 text-green-400 font-space-mono text-sm">
                <Icon name="CheckCircle" size={16} />
                Официальный файл — безопасно
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}