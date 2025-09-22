import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopNavbar from './TopNavbar';

export default function Layout({ children }) {
  const [activeTab, setActiveTab] = useState('fridge'); // Default active tab
  const navigate = useNavigate();
  const location = useLocation();

  // Update activeTab based on current path
  useState(() => {
    const currentPath = location.pathname;
    if (currentPath.includes('/dashboard')) setActiveTab('fridge');
    else if (currentPath.includes('/products')) setActiveTab('products');
    else if (currentPath.includes('/recipes')) setActiveTab('recipes');
    else if (currentPath.includes('/profile')) setActiveTab('profile');
    else if (currentPath.includes('/settings')) setActiveTab('settings');
    else if (currentPath.includes('/goals')) setActiveTab('goals');
  }, [location.pathname]);

  const handleSetActiveTab = (tabId) => {
    setActiveTab(tabId);
    // Navigate based on tabId
    switch (tabId) {
      case 'fridge':
        navigate('/dashboard');
        break;
      case 'products':
        navigate('/products');
        break;
      case 'recipes':
        navigate('/recipes');
        break;
      case 'goals':
        navigate('/goals');
        break;
      case 'profile':
        navigate('/profile');
        break;
      case 'settings':
        navigate('/settings');
        break;
      default:
        navigate('/dashboard');
    }
  };

  const user = {
    email: localStorage.getItem('email') || 'user@example.com',
    name: localStorage.getItem('email')?.split('@')[0] || 'Пользователь',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex">
      <Sidebar activeTab={activeTab} setActiveTab={handleSetActiveTab} />
      <div className="flex-1 flex flex-col">
        <TopNavbar user={user} />
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

