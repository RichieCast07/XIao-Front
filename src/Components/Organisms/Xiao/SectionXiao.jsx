import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../../services/cartContext.jsx';
import Card from '../../Molecules/Xiao/Card';

function SectionXiao() {
  const [data, setData] = useState([
    {index:1, src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop&crop=center", name: "Auriculares Premium", price: "$99.99"}, 
    {index:2, src: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop&crop=center", name: "Reloj Inteligente", price: "$299.99"}, 
    {index:3, src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=300&fit=crop&crop=center", name: "Cámara Digital", price: "$799.99"}, 
    {index:4, src: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=300&fit=crop&crop=center", name: "Smartphone Pro", price: "$1,199.99"}, 
    {index:5, src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop&crop=center", name: "Zapatillas Sport", price: "$159.99"}, 
    {index:6, src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop&crop=center", name: "Reloj Clásico", price: "$449.99"}, 
    {index:7, src: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=300&h=300&fit=crop&crop=center", name: "Perfume Elegante", price: "$89.99"}, 
    {index:8, src: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300&h=300&fit=crop&crop=center", name: "Gafas de Sol", price: "$199.99"},
    {index:9, src: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=300&h=300&fit=crop&crop=center", name: "Laptop Gaming", price: "$1,499.99"}, 
    {index:10, src: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=300&h=300&fit=crop&crop=center", name: "Mochila Urbana", price: "$79.99"}, 
    {index:11, src: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=300&h=300&fit=crop&crop=center", name: "Taza Premium", price: "$24.99"}, 
    {index:12, src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=300&fit=crop&crop=center", name: "Tienda Virtual", price: "$39.99"}
  ]);
  
  const navigate = useNavigate();
  const { cart } = useCart();

  useEffect(() => {
    // Request notification permission
    if (window.Notification && Notification.permission === 'default') {
      Notification.requestPermission();
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-sm border-b border-gray-200 p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <img 
              src="/Images/logo.jpg" 
              alt="Logo de la empresa" 
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-lg shadow-md"
            />
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Llaveros</h1>
          </div>
          <button
            className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative"
            onClick={() => navigate('/cart')}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 1.5M7 13l-1.5-1.5M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
            Ver Carrito
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="p-4 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data && data.map(item => (
            <Card key={item.index} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SectionXiao