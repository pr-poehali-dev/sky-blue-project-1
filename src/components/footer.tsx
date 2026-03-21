import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer className="bg-black border-t border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-orbitron text-2xl font-bold text-white mb-4">
              Majestic<span className="text-red-500">Guard</span>
            </h2>
            <p className="font-space-mono text-gray-300 mb-6 max-w-md">
              Профессиональная утилита для проверки на читы. Честная игра — честная победа.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:majesticguard@gmail.com"
                className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                title="Email"
              >
                <Icon name="Mail" size={20} />
              </a>
              <a
                href="https://t.me/majesticguard"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                title="Telegram"
              >
                <Icon name="Send" size={20} />
              </a>
              <a
                href="https://discord.gg/YMUrmSaQxt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                title="Discord"
              >
                <Icon name="MessageSquare" size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#features"
                  className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Возможности
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Как работает
                </a>
              </li>
              <li>
                <a
                  href="#download"
                  className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Скачать
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:majesticguard@gmail.com"
                  className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200 flex items-center gap-2"
                >
                  <Icon name="Mail" size={14} />
                  majesticguard@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/majesticguard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200 flex items-center gap-2"
                >
                  <Icon name="Send" size={14} />
                  @majesticguard
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/YMUrmSaQxt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200 flex items-center gap-2"
                >
                  <Icon name="MessageSquare" size={14} />
                  Discord сервер
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-red-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-space-mono text-gray-400 text-sm">© 2025 MajesticGuard. Все права защищены.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="font-space-mono text-gray-400 hover:text-red-500 text-sm transition-colors duration-200"
              >
                Конфиденциальность
              </a>
              <a
                href="#"
                className="font-space-mono text-gray-400 hover:text-red-500 text-sm transition-colors duration-200"
              >
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
