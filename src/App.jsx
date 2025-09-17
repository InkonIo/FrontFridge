import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Login from './modules/auth/pages/Login';
import Register from './modules/auth/pages/Register';
import ForgotPassword from './modules/auth/pages/ForgotPassword';
import ResetPassword from './modules/auth/pages/ResetPassword';
import Dashboard from './modules/fridge/pages/Dashboard';
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
        </Routes>
      </Router>
    </DndProvider>
  );
}

export default App;
