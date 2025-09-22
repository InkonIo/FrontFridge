import React, { useState, useEffect } from 'react';

// --- Helper Components (to make the file self-contained) ---

// Icon components to replace the `lucide-react` library dependency.
const SettingsIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2.4l-.15.08a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1 0-2.4l.15-.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const BellIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

const MailIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const LockIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

// A simple Layout component to wrap the page content.
const Layout = ({ children }) => (
  <div className="min-h-screen bg-gray-100 font-sans">
    <div className="container mx-auto max-w-3xl py-8">
      {children}
    </div>
  </div>
);

// A notification component to replace alert()
const Notification = ({ notification, onClear }) => {
  useEffect(() => {
    if (notification.message) {
      const timer = setTimeout(() => {
        onClear();
      }, 3000); // Clears the notification after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [notification, onClear]);

  if (!notification.message) return null;

  const baseClasses = "fixed top-5 right-5 p-4 rounded-lg shadow-lg text-white transition-opacity duration-300";
  const typeClasses = {
    success: "bg-green-500",
    error: "bg-red-500",
  };

  return (
    <div className={`${baseClasses} ${typeClasses[notification.type] || 'bg-gray-500'}`}>
      {notification.message}
    </div>
  );
};


// --- Main Settings Page Component ---

function SettingsPageComponent() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [newEmail, setNewEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [notification, setNotification] = useState({ message: '', type: '' });

  const showNotification = (message, type = 'error') => {
    setNotification({ message, type });
  };

  const handleEmailChange = async () => {
    if (!newEmail) {
      showNotification("Пожалуйста, введите новый email.", "error");
      return;
    }
    // Simulate API call
    console.log("Changing email to:", newEmail);
    showNotification("Email успешно изменен.", "success");
    setNewEmail("");
  };

  const handlePasswordChange = async () => {
    if (!currentPassword || !newPassword || !confirmNewPassword) {
      showNotification("Пожалуйста, заполните все поля для смены пароля.", "error");
      return;
    }
    if (newPassword !== confirmNewPassword) {
      showNotification("Новый пароль и подтверждение не совпадают.", "error");
      return;
    }
    // Simulate API call
    console.log("Changing password...");
    showNotification("Пароль успешно изменен.", "success");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
  };

  return (
    <Layout>
      <Notification notification={notification} onClear={() => setNotification({ message: '', type: '' })} />
      <div className="p-6">
        <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
          <SettingsIcon className="w-8 h-8 text-gray-600" />
          Настройки
        </h2>

        {/* Notifications Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <BellIcon className="w-5 h-5 text-slate-600" />
            Уведомления
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-slate-700">Включить уведомления</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={notificationsEnabled}
                onChange={() => setNotificationsEnabled(!notificationsEnabled)}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>

        {/* Change Email Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <MailIcon className="w-5 h-5 text-slate-600" />
            Сменить Email
          </h3>
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Новый Email"
              className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
            <button 
              onClick={handleEmailChange}
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Сохранить Email
            </button>
          </div>
        </div>

        {/* Change Password Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <LockIcon className="w-5 h-5 text-slate-600" />
            Сменить Пароль
          </h3>
          <div className="space-y-4">
            <input
              type="password"
              placeholder="Текущий Пароль"
              className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Новый Пароль"
              className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Подтвердите Новый Пароль"
              className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
            <button 
              onClick={handlePasswordChange}
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Сменить Пароль
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

// The main App component that renders the settings page.
export default function App() {
  return (
    <SettingsPageComponent />
  );
}
