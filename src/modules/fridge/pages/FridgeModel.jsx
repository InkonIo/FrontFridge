import { useState } from 'react';
import { useDrop } from 'react-dnd';

const MOCK_PRODUCTS = [
  { id: 1, name: 'Молоко', emoji: '🥛', shelf: 'top', expiryDays: 3 },
  { id: 2, name: 'Яйца', emoji: '🥚', shelf: 'middle', expiryDays: 7 },
  { id: 3, name: 'Сыр', emoji: '🧀', shelf: 'middle', expiryDays: 14 },
  { id: 4, name: 'Яблоки', emoji: '🍎', shelf: 'bottom', expiryDays: 10 },
  { id: 5, name: 'Морковь', emoji: '🥕', shelf: 'bottom', expiryDays: 21 },
];

function FridgeShelf({ shelf, products, onProductClick }) {
  const [{ isOver }, drop] = useDrop({
    accept: 'product',
    drop: (item) => {
      // Здесь будет логика перемещения продукта
      console.log(`Moved ${item.name} to ${shelf}`);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const shelfProducts = products.filter(p => p.shelf === shelf);

  return (
    <div
      ref={drop}
      className={`h-20 border-2 border-dashed border-slate-300 rounded-lg p-2 flex items-center gap-2 transition-colors ${
        isOver ? 'border-blue-400 bg-blue-50' : 'bg-slate-50'
      }`}
    >
      {shelfProducts.map(product => (
        <div
          key={product.id}
          onClick={() => onProductClick(product)}
          className="relative cursor-pointer hover:scale-110 transition-transform"
        >
          <div className="text-3xl">{product.emoji}</div>
          <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full text-xs flex items-center justify-center text-white ${
            product.expiryDays <= 3 ? 'bg-red-500' : product.expiryDays <= 7 ? 'bg-yellow-500' : 'bg-green-500'
          }`}>
            {product.expiryDays}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function FridgeModel({ onProductSelect }) {
  const [products, setProducts] = useState(MOCK_PRODUCTS);

  return (
    <div className="flex flex-col items-center">
      {/* Холодильник */}
      <div className="bg-gradient-to-b from-slate-200 to-slate-300 rounded-3xl p-6 shadow-2xl border-4 border-slate-400">
        <div className="bg-white rounded-2xl p-4 space-y-4" style={{ width: '300px', height: '400px' }}>
          <h3 className="text-center font-bold text-slate-700 mb-4">Мой Холодильник</h3>
          
          <div className="space-y-3">
            <div>
              <p className="text-sm text-slate-600 mb-1">Верхняя полка</p>
              <FridgeShelf shelf="top" products={products} onProductClick={onProductSelect} />
            </div>
            
            <div>
              <p className="text-sm text-slate-600 mb-1">Средняя полка</p>
              <FridgeShelf shelf="middle" products={products} onProductClick={onProductSelect} />
            </div>
            
            <div>
              <p className="text-sm text-slate-600 mb-1">Нижняя полка</p>
              <FridgeShelf shelf="bottom" products={products} onProductClick={onProductSelect} />
            </div>
            
            <div>
              <p className="text-sm text-slate-600 mb-1">Овощной отсек</p>
              <FridgeShelf shelf="vegetable" products={products} onProductClick={onProductSelect} />
            </div>
          </div>
        </div>
      </div>

      {/* Добавить продукт */}
      <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
        + Добавить продукт
      </button>
    </div>
  );
}

