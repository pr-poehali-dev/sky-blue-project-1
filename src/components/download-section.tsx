import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const ADMIN_PASSWORD = "majestic2025"

export function DownloadSection() {
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null)
  const [fileName, setFileName] = useState<string | null>(null)
  const [fileSize, setFileSize] = useState<string | null>(null)
  const [uploading, setUploading] = useState(false)
  const [adminMode, setAdminMode] = useState(false)
  const [passwordInput, setPasswordInput] = useState("")
  const [passwordError, setPasswordError] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleAdminLogin = () => {
    if (passwordInput === ADMIN_PASSWORD) {
      setAdminMode(true)
      setPasswordError(false)
      setPasswordInput("")
    } else {
      setPasswordError(true)
    }
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)

    const reader = new FileReader()
    reader.onload = () => {
      const base64 = reader.result as string
      localStorage.setItem("mg_download_url", base64)
      localStorage.setItem("mg_file_name", file.name)
      localStorage.setItem("mg_file_size", formatSize(file.size))

      setDownloadUrl(base64)
      setFileName(file.name)
      setFileSize(formatSize(file.size))
      setUploading(false)
    }
    reader.readAsDataURL(file)
  }

  const formatSize = (bytes: number) => {
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} КБ`
    return `${(bytes / (1024 * 1024)).toFixed(1)} МБ`
  }

  const loadSaved = () => {
    const url = localStorage.getItem("mg_download_url")
    const name = localStorage.getItem("mg_file_name")
    const size = localStorage.getItem("mg_file_size")
    if (url && name) {
      setDownloadUrl(url)
      setFileName(name)
      setFileSize(size)
    }
  }

  if (!downloadUrl && !adminMode) {
    loadSaved()
  }

  const handleDownload = () => {
    if (!downloadUrl || !fileName) return
    const a = document.createElement("a")
    a.href = downloadUrl
    a.download = fileName
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

        {/* Download card */}
        <Card className="border border-red-500/30 bg-gray-900/50 mb-8">
          <CardContent className="p-8">
            {downloadUrl && fileName ? (
              <div className="flex flex-col items-center gap-6">
                <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center border border-red-500/30">
                  <Icon name="Shield" size={40} className="text-red-500" />
                </div>
                <div className="text-center">
                  <p className="font-orbitron text-white text-xl font-bold mb-1">{fileName}</p>
                  {fileSize && <p className="text-gray-400 font-space-mono text-sm">Размер: {fileSize}</p>}
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
            ) : (
              <div className="flex flex-col items-center gap-4 py-8">
                <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center border border-gray-600">
                  <Icon name="Download" size={40} className="text-gray-500" />
                </div>
                <p className="text-gray-400 font-space-mono text-center">
                  Файл ещё не загружен. Зайдите как администратор ниже, чтобы добавить файл.
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Admin panel */}
        <div className="mt-8 border-t border-gray-800 pt-8">
          {!adminMode ? (
            <details className="group">
              <summary className="text-gray-600 font-space-mono text-xs cursor-pointer hover:text-gray-400 transition-colors select-none text-center">
                Панель администратора
              </summary>
              <div className="mt-4 flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
                <input
                  type="password"
                  placeholder="Пароль администратора"
                  value={passwordInput}
                  onChange={(e) => { setPasswordInput(e.target.value); setPasswordError(false) }}
                  onKeyDown={(e) => e.key === "Enter" && handleAdminLogin()}
                  className={`flex-1 bg-gray-900 border text-white px-4 py-2 rounded font-space-mono text-sm focus:outline-none focus:border-red-500 ${
                    passwordError ? "border-red-500" : "border-gray-700"
                  }`}
                />
                <Button
                  onClick={handleAdminLogin}
                  className="bg-gray-700 hover:bg-gray-600 text-white border-0 font-space-mono text-sm"
                >
                  Войти
                </Button>
              </div>
              {passwordError && (
                <p className="text-red-400 font-space-mono text-xs text-center mt-2">Неверный пароль</p>
              )}
            </details>
          ) : (
            <div className="max-w-md mx-auto">
              <div className="flex items-center justify-between mb-4">
                <p className="text-green-400 font-space-mono text-sm flex items-center gap-2">
                  <Icon name="CheckCircle" size={14} />
                  Режим администратора
                </p>
                <button
                  onClick={() => setAdminMode(false)}
                  className="text-gray-500 hover:text-gray-300 font-space-mono text-xs"
                >
                  Выйти
                </button>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                className="hidden"
                onChange={handleFileUpload}
              />
              <Button
                onClick={() => fileInputRef.current?.click()}
                disabled={uploading}
                className="w-full bg-red-500 hover:bg-red-600 text-white border-0 font-orbitron"
              >
                {uploading ? (
                  <>
                    <Icon name="Loader2" size={16} className="mr-2 animate-spin" />
                    Загрузка...
                  </>
                ) : (
                  <>
                    <Icon name="Upload" size={16} className="mr-2" />
                    {downloadUrl ? "Заменить файл" : "Загрузить файл утилиты"}
                  </>
                )}
              </Button>
              {downloadUrl && (
                <p className="text-gray-400 font-space-mono text-xs text-center mt-3">
                  Текущий файл: <span className="text-white">{fileName}</span>
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
