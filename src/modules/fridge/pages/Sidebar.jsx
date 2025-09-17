import { Refrigerator, Package, ChefHat, Target, Settings, User } from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab }) {
  const menuItems = [
    { id: 'fridge', icon: Refrigerator, label: 'Холодильник' },
    { id: 'products', icon: Package, label: 'Продукты' },
    { id: 'recipes', icon: ChefHat, label: 'Рецепты' },
    { id: 'goals', icon: Target, label: 'Цели' },
    { id: 'profile', icon: User, label: 'Профиль' },
    { id: 'settings', icon: Settings, label: 'Настройки' },
  ];

  return (
    <div className="w-64 bg-white/80 backdrop-blur-sm border-r border-white/20 shadow-lg">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-slate-800 mb-8">🧊 FridgeApp</h1>
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                activeTab === item.id
                  ? 'bg-blue-100 text-blue-700 shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}

