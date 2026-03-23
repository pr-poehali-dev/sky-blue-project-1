import { useState } from "react";

const AUTH_URL = "https://functions.poehali.dev/ba829fe8-bfca-4858-8a2a-5b59ac5fbbc4";

interface Props {
  onAuth: (login: string) => void;
}

export default function AuthPage({ onAuth }: Props) {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch(AUTH_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: mode, login, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(typeof data === "string" ? data : data.error || "Ошибка");
      } else {
        localStorage.setItem("auth_login", login);
        onAuth(login);
      }
    } catch {
      setError("Ошибка сети. Попробуй ещё раз.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-white font-orbitron tracking-widest uppercase">
            Majestic<span className="text-red-500">Guard</span>
          </h1>
          <p className="text-gray-400 mt-2 text-sm">
            {mode === "login" ? "Войдите в систему" : "Создайте аккаунт"}
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
          <div className="flex rounded-lg overflow-hidden mb-6 border border-zinc-700">
            <button
              type="button"
              onClick={() => { setMode("login"); setError(""); }}
              className={`flex-1 py-2 text-sm font-semibold transition-colors ${
                mode === "login"
                  ? "bg-red-500 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Вход
            </button>
            <button
              type="button"
              onClick={() => { setMode("register"); setError(""); }}
              className={`flex-1 py-2 text-sm font-semibold transition-colors ${
                mode === "register"
                  ? "bg-red-500 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Регистрация
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-300 text-sm mb-1">Логин</label>
              <input
                type="text"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                required
                autoComplete="username"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                placeholder="Введите логин"
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-1">Пароль</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete={mode === "login" ? "current-password" : "new-password"}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                placeholder="Введите пароль"
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-500 hover:bg-red-600 disabled:opacity-50 text-white font-bold py-3 rounded-lg transition-colors mt-2"
            >
              {loading ? "Загрузка..." : mode === "login" ? "Войти" : "Зарегистрироваться"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
