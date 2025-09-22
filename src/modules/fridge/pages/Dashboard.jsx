import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../pages/Layout';
import FridgeModel from '../pages/FridgeModel';
import ProductInfoPanel from '../pages/ProductInfoPanel'

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

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <Layout>
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
    </Layout>
  );
}

