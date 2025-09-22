import { Refrigerator, Package, ChefHat, Target, Settings, User, Home } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { id: 'dashboard', icon: Home, label: 'Главный экран', path: '/dashboard' },
    { id: 'fridge', icon: Refrigerator, label: 'Холодильник', path: '/dashboard' }, // Fridge is part of dashboard
    { id: 'products', icon: Package, label: 'Продукты', path: '/products' },
    { id: 'recipes', icon: ChefHat, label: 'Рецепты', path: '/recipes' },
    { id: 'goals', icon: Target, label: 'Цели', path: '/goals' },
    { id: 'profile', icon: User, label: 'Профиль', path: '/profile' },
    { id: 'settings', icon: Settings, label: 'Настройки', path: '/settings' },
  ];

  return (
    <div className="w-64 bg-white/80 backdrop-blur-sm border-r border-white/20 shadow-lg">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-slate-800 mb-8">🧊 FridgeApp</h1>
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                location.pathname === item.path
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

