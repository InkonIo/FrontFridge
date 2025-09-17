import { Bell, LogOut, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function TopNavbar({ user }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-white/20 shadow-sm">
      <div className="flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-4">
          <Bell className="h-6 w-6 text-slate-600" />
          <span className="text-sm text-slate-600">Молоко скоро испортится!</span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <User className="h-5 w-5 text-slate-600" />
            <span className="text-slate-700">{user?.email}</span>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-3 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
          >
            <LogOut className="h-4 w-4" />
            Выйти
          </button>
        </div>
      </div>
    </header>
  );
}

