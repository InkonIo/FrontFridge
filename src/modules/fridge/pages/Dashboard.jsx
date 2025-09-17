import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Refrigerator, User, LogOut, Bell, Search, Plus } from 'lucide-react';
import FridgeModel from '../pages/FridgeModel';
import ProductInfoPanel from '../pages/ProductInfoPanel';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');
    
    if (!token || !email) {
      navigate('/login');
      return;
    }
    
    setUser({ email, name: email.split('@')[0] });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white/80 backdrop-blur-sm border-r border-white/20 shadow-lg">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <Refrigerator className="h-8 w-8 text-blue-600" />
            <h1 className="text-xl font-bold text-slate-800">FridgeApp</h1>
          </div>
          
          <nav className="space-y-2">
            <a href="#" className="flex items-center gap-3 px-4 py-3 bg-blue-100 text-blue-700 rounded-xl">
              <Refrigerator className="h-5 w-5" />
              Холодильник
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-100 rounded-xl">
              <Search className="h-5 w-5" />
              Продукты
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-100 rounded-xl">
              <Plus className="h-5 w-5" />
              Рецепты
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-100 rounded-xl">
              <User className="h-5 w-5" />
              Профиль
            </a>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="bg-white/80 backdrop-blur-sm border-b border-white/20 shadow-sm">
          <div className="px-6 py-4 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-slate-800">Мой Холодильник</h2>
            <div className="flex items-center gap-4">
              <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
                <Bell className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {user.name[0].toUpperCase()}
                </div>
                <span className="text-slate-700">{user.name}</span>
                <button 
                  onClick={handleLogout}
                  className="p-2 text-slate-600 hover:bg-red-100 hover:text-red-600 rounded-lg"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 flex p-6 gap-6">
          {/* Fridge Area */}
          <div className="flex-1">
            <FridgeModel onProductSelect={setSelectedProduct} />
          </div>

          {/* Product Info Panel */}
          <div className="w-80">
            <ProductInfoPanel product={selectedProduct} />
          </div>
        </div>
      </div>
    </div>
  );
}

