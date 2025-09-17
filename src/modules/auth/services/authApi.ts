const API_BASE = 'http://127.0.0.1:8000/auth';

export interface RegisterData {
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface ForgotPasswordData {
  email: string;
}

export interface ResetPasswordData {
  code: string;
  new_password: string;
}

export interface User {
  id: string;
  email: string;
}

// Интерфейсы для ответов от backend
export interface AuthResponse {
  access_token?: string;  // Если backend возвращает access_token
  token?: string;         // Если backend возвращает token
  user?: User;
  email?: string;         // Если backend возвращает только email
  id?: string;           // Если backend возвращает только id
}

class AuthAPI {
  async register(data: RegisterData): Promise<{ user: User; token: string }> {
    const response = await fetch(`${API_BASE}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: data.email,
        password: data.password
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Registration error:', errorText);
      throw new Error(errorText || 'Ошибка регистрации');
    }

    const result: AuthResponse = await response.json();
    console.log('Registration response:', result); // Для отладки
    
    // Адаптируем ответ backend к ожидаемому формату frontend
    return {
      token: result.access_token || result.token || '',
      user: result.user || { 
        id: result.id || '', 
        email: result.email || data.email 
      }
    };
  }

  async login(data: LoginData): Promise<{ user: User; token: string }> {
    const response = await fetch(`${API_BASE}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Login error:', errorText);
      throw new Error(errorText || 'Неверный email или пароль');
    }
    
    const result: AuthResponse = await response.json();
    console.log('Login response:', result); // Для отладки
    
    // Адаптируем ответ backend к ожидаемому формату frontend
    return {
      token: result.access_token || result.token || '',
      user: result.user || { 
        id: result.id || '', 
        email: result.email || data.email 
      }
    };
  }

  async forgotPassword(data: ForgotPasswordData): Promise<{ message: string }> {
    const response = await fetch(`${API_BASE}/forgot-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || 'Ошибка отправки кода');
    }
    
    return response.json();
  }

  async resetPassword(data: ResetPasswordData): Promise<{ message: string }> {
    const response = await fetch(`${API_BASE}/reset-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || 'Ошибка сброса пароля');
    }
    
    return response.json();
  }

  async getUser(id: string): Promise<User> {
    const response = await fetch(`${API_BASE}/me/${id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });
    
    if (!response.ok) {
      throw new Error('Ошибка получения данных пользователя');
    }
    
    return response.json();
  }
}

export const authAPI = new AuthAPI();