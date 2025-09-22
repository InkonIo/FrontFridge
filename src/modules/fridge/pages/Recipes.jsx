import Layout from "../pages/Layout";
import { ChefHat, Heart, BookOpen, Search } from "lucide-react";

export default function Recipes() {
  const user = { email: localStorage.getItem("email") || "user@example.com" };

  return (
    <Layout user={user}>
      <div className="p-6">
        <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
          <ChefHat className="w-8 h-8 text-orange-600" />
          Рецепты и планирование
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Рецепты по ингредиентам */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-6">
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Search className="w-5 h-5" />
              Найти рецепты
            </h3>
            <p className="text-slate-600 mb-4">Ищите рецепты на основе продуктов в вашем холодильнике.</p>
            <button className="w-full py-3 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition-colors">
              Найти рецепты
            </button>
          </div>

          {/* Сохраненные рецепты */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-6">
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Любимые рецепты
            </h3>
            <p className="text-slate-600 mb-4">Просматривайте и управляйте вашими любимыми рецептами.</p>
            <button className="w-full py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors">
              Мои рецепты
            </button>
          </div>

          {/* Пошаговые инструкции */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-6">
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Пошаговые инструкции
            </h3>
            <p className="text-slate-600 mb-4">Подробные инструкции для приготовления каждого блюда.</p>
            <button className="w-full py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors">
              Начать готовить
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

