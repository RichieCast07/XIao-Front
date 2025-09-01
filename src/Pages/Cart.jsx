import { useNavigate } from 'react-router-dom';
import { useCart } from '../services/cartContext.jsx';
import { useNotification } from '../services/notificationContext.jsx';

function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
  const { addNotification } = useNotification();
  const navigate = useNavigate();
  const phone = '529661236243';
  
  // Calculate total
  const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[$,]/g, '')) || 0;
    return sum + price;
  }, 0);
  
  // Create professional WhatsApp message
  const createWhatsAppMessage = () => {
    if (cart.length === 0) return '';
    
    let message = `*Nuevo Pedido - Llaveros*\n\n`;
    message += `* - Productos seleccionados:*\n`;
    
    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*\n`;
      message += `   Precio: ${item.price}\n`;
      message += `   Code: ${item.index}\n\n`;
    });
    
    message += `* - Resumen del pedido:*\n`;
    message += `• Total de productos: ${cart.length}\n`;
    message += `• Total a pagar: *$${total.toFixed(2)}*\n\n`;
    message += `* - Enviado desde la tienda online*\n`;
    message += `¡Gracias por su preferencia! 🙏`;
    
    return message;
  };
  
  const waMsg = encodeURIComponent(createWhatsAppMessage());
  const waUrl = `https://wa.me/${phone}?text=${waMsg}`;

  const handleRemoveFromCart = (item) => {
    removeFromCart(item.index);
    addNotification(`${item.name} eliminado del carrito`, 'error');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-sm border-b border-gray-200 p-4 sm:p-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-red-600 hover:text-red-800 font-medium transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver a productos
          </button>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Mi Carrito</h1>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        {cart.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 1.5M7 13l-1.5-1.5M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Tu carrito está vacío</h3>
            <p className="text-gray-500 mb-6">Agrega algunos productos para comenzar</p>
            <button
              onClick={() => navigate('/')}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              Ver productos
            </button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Productos seleccionados</h2>
              <div className="space-y-4">
                {cart.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl hover:shadow-md transition-shadow duration-300">
                    <img 
                      src={item.src} 
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{item.name}</h3>
                      <p className="text-red-600 font-bold">{item.price}</p>
                    </div>
                    <button
                      onClick={() => handleRemoveFromCart(item)}
                      className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-colors duration-300"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-gray-700">Total de productos:</span>
                <span className="text-lg font-bold text-gray-900">{cart.length}</span>
              </div>
              <div className="flex justify-between items-center mb-6 text-xl font-bold">
                <span className="text-gray-900">Total a pagar:</span>
                <span className="text-red-600">${total.toFixed(2)}</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={clearCart}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-xl transition-all duration-300"
                >
                  Vaciar carrito
                </button>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 text-center flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.520-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.588z"/>
                  </svg>
                  Pedir por WhatsApp
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
