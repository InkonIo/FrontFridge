import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authAPI } from '../services/authApi';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await authAPI.login(formData);
      
      console.log('API Response:', response); // Для отладки
      
      // Сохраняем данные в localStorage
      if (response.token) {
        localStorage.setItem('token', response.token);
        console.log('Token saved:', response.token);
      } else {
        console.error('No token received from API');
      }
      
      if (response.user?.email) {
        localStorage.setItem('email', response.user.email);
        console.log('Email saved:', response.user.email);
      } else {
        // Fallback - используем email из формы
        localStorage.setItem('email', formData.email);
        console.log('Email saved from form:', formData.email);
      }
      
      if (response.user?.id) {
        localStorage.setItem('userId', response.user.id);
        console.log('User ID saved:', response.user.id);
      }
      
      // Проверяем что сохранилось
      console.log('localStorage token:', localStorage.getItem('token'));
      console.log('localStorage email:', localStorage.getItem('email'));
      console.log('localStorage userId:', localStorage.getItem('userId'));
      
      // Проверяем есть ли необходимые данные перед навигацией
      const savedToken = localStorage.getItem('token');
      const savedEmail = localStorage.getItem('email');
      
      if (!savedToken || !savedEmail) {
        console.error('Required data not saved, cannot navigate');
        setError('Ошибка сохранения данных авторизации');
        return;
      }
      
      navigate('/dashboard');
    } catch (err) {
      console.error('Login error:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-800 mb-2">Добро пожаловать</h1>
            <p className="text-slate-600">Войдите в свой аккаунт</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl text-red-700 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-slate-700 placeholder-slate-400"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Пароль"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-12 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-slate-700 placeholder-slate-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-slate-400 hover:text-slate-600" />
                ) : (
                  <Eye className="h-5 w-5 text-slate-400 hover:text-slate-600" />
                )}
              </button>
            </div>

            <div className="text-right">
              <Link
                to="/forgot-password"
                className="text-sm text-blue-600 hover:text-blue-700 transition-colors duration-200"
              >
                Забыли пароль?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {loading ? 'Вход...' : 'Войти'}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-slate-600">
              Нет аккаунта?{' '}
              <Link
                to="/register"
                className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
              >
                Зарегистрироваться
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}