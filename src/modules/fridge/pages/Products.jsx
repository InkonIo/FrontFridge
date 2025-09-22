import Layout from "../pages/Layout";
import { Package, PlusCircle, ShoppingCart, Bell } from "lucide-react";

export default function Products() {
  const user = { email: localStorage.getItem("email") || "user@example.com" };

  return (
    <Layout user={user}>
      <div className="p-6">
        <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
          <Package className="w-8 h-8 text-blue-600" />
          Управление продуктами
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Каталог продуктов */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-6">
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Package className="w-5 h-5" />
              Каталог продуктов
            </h3>
            <p className="text-slate-600 mb-4">Здесь будет список всех доступных продуктов.</p>
            <button className="w-full py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
              Посмотреть каталог
            </button>
          </div>

          {/* Добавление продуктов вручную */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-6">
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <PlusCircle className="w-5 h-5" />
              Добавить продукт
            </h3>
            <p className="text-slate-600 mb-4">Добавьте новый продукт в холодильник.</p>
            <button className="w-full py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors">
              Добавить вручную
            </button>
          </div>

          {/* Списки покупок */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-6">
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Списки покупок
            </h3>
            <p className="text-slate-600 mb-4">Управляйте своими списками покупок.</p>
            <button className="w-full py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors">
              Открыть списки
            </button>
          </div>

          {/* Уведомления о сроках годности */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-6">
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Уведомления о сроках
            </h3>
            <p className="text-slate-600 mb-4">Просмотр продуктов с истекающим сроком годности.</p>
            <button className="w-full py-3 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition-colors">
              Посмотреть уведомления
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}


