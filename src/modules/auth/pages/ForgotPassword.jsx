import { useState } from 'react';
import { Link } from 'react-router-dom';
import { authAPI } from '../services/authApi';
import { Mail, ArrowLeft } from 'lucide-react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await authAPI.forgotPassword({ email });
      setSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-100 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-slate-800 mb-4">Проверьте почту</h1>
            <p className="text-slate-600 mb-8">
              Мы отправили код восстановления на {email}
            </p>
            <Link
              to="/reset-password"
              className="w-full inline-block py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-2xl hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg"
            >
              Ввести код
            </Link>
            <div className="mt-6">
              <Link
                to="/login"
                className="text-slate-600 hover:text-slate-700 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Вернуться к входу
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-amber-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-800 mb-2">Забыли пароль?</h1>
            <p className="text-slate-600">Введите email для восстановления</p>
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
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-12 pr-4 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-slate-700 placeholder-slate-400"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-semibold rounded-2xl hover:from-orange-700 hover:to-amber-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {loading ? 'Отправка...' : 'Отправить код'}
            </button>
          </form>

          <div className="mt-8 text-center">
            <Link
              to="/login"
              className="text-slate-600 hover:text-slate-700 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Вернуться к входу
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

