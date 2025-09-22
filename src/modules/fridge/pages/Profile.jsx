import Layout from "../pages/Layout";
import { User, Target, Bell, Settings } from "lucide-react";

export default function Profile() {
  const user = { 
    email: localStorage.getItem("email") || "user@example.com",
    name: localStorage.getItem("email")?.split("@")[0] || "Пользователь",
  };

  return (
    <Layout user={user}>
      <div className="p-6">
        <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
          <User className="w-8 h-8 text-indigo-600" />
          Мой профиль
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Личные данные */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-6">
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <User className="w-5 h-5" />
              Личные данные
            </h3>
            <div className="space-y-3">
              <p className="text-slate-600">Имя: <span className="font-medium">{user.name}</span></p>
              <p className="text-slate-600">Email: <span className="font-medium">{user.email}</span></p>
              <button className="w-full py-2 bg-blue-100 text-blue-700 rounded-xl hover:bg-blue-200 transition-colors">
                Редактировать профиль
              </button>
            </div>
          </div>

          {/* Пищевые предпочтения и цели */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-6">
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Target className="w-5 h-5" />
              Цели по питанию
            </h3>
            <div className="space-y-3">
              <p className="text-slate-600">Текущая цель: <span className="font-medium">Поддержание веса</span></p>
              <p className="text-slate-600">Предпочтения: <span className="font-medium">Вегетарианство</span></p>
              <button className="w-full py-2 bg-purple-100 text-purple-700 rounded-xl hover:bg-purple-200 transition-colors">
                Изменить цели и предпочтения
              </button>
            </div>
          </div>

          {/* Настройки уведомлений */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-6">
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Настройки уведомлений
            </h3>
            <div className="space-y-3">
              <p className="text-slate-600">Уведомления о сроках годности: <span className="font-medium text-green-600">Включены</span></p>
              <p className="text-slate-600">Рекомендации рецептов: <span className="font-medium text-green-600">Включены</span></p>
              <button className="w-full py-2 bg-orange-100 text-orange-700 rounded-xl hover:bg-orange-200 transition-colors">
                Настроить уведомления
              </button>
            </div>
          </div>

          {/* Общие настройки */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-6">
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Общие настройки
            </h3>
            <div className="space-y-3">
              <button className="w-full py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors">
                Изменить пароль
              </button>
              <button className="w-full py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors">
                Управление аккаунтом
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

