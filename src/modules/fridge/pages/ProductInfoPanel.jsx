export default function ProductInfoPanel({ product }) {
  if (!product) {
    return (
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
        <h3 className="text-lg font-bold text-slate-800 mb-4">Информация о продукте</h3>
        <p className="text-slate-600">Выберите продукт в холодильнике</p>
      </div>
    );
  }

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
      <div className="text-center mb-6">
        <div className="text-6xl mb-2">{product.emoji}</div>
        <h3 className="text-xl font-bold text-slate-800">{product.name}</h3>
      </div>

      <div className="space-y-4">
        <div className="bg-slate-50 rounded-lg p-3">
          <h4 className="font-semibold text-slate-700 mb-2">Срок годности</h4>
          <p className={`font-medium ${
            product.expiryDays <= 3 ? 'text-red-600' : 
            product.expiryDays <= 7 ? 'text-yellow-600' : 'text-green-600'
          }`}>
            {product.expiryDays} дней осталось
          </p>
        </div>

        <div className="bg-slate-50 rounded-lg p-3">
          <h4 className="font-semibold text-slate-700 mb-2">Пищевая ценность</h4>
          <div className="text-sm space-y-1">
            <p>Калории: 150 ккал</p>
            <p>Белки: 8г</p>
            <p>Жиры: 8г</p>
            <p>Углеводы: 12г</p>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-3">
          <h4 className="font-semibold text-blue-800 mb-2">Рецепты</h4>
          <div className="text-sm space-y-1">
            <p>• Омлет с сыром</p>
            <p>• Молочная каша</p>
            <p>• Творожная запеканка</p>
          </div>
        </div>

        <button className="w-full bg-red-100 text-red-700 py-2 rounded-lg hover:bg-red-200 transition-colors">
          Удалить из холодильника
        </button>
      </div>
    </div>
  );
}

