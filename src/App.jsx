import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Login from './modules/auth/pages/Login';
import Register from './modules/auth/pages/Register';
import ForgotPassword from './modules/auth/pages/ForgotPassword';
import ResetPassword from './modules/auth/pages/ResetPassword';
import Dashboard from './modules/fridge/pages/Dashboard';
import Products from './modules/fridge/pages/Products';
import Recipes from './modules/fridge/pages/Recipes';
import Profile from './modules/fridge/pages/Profile';
import Goals from './modules/fridge/pages/Goals';
import Settings from './modules/fridge/pages/Settings';

import './App.css';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/settings" element={<Settings />} />
          </Routes>
      </Router>
    </DndProvider>
  );
}

export default App;

