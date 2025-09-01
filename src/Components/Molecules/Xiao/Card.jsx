import { useState } from 'react';
import { useCart } from '../../../services/cartContext.jsx';
import { useNotification } from '../../../services/notificationContext.jsx';
import Img from "../../Atoms/Img";

function Card({ item }) {
  const { addToCart, cart } = useCart();
  const { addNotification } = useNotification();
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handleAddToCart = () => {
    setIsAnimating(true);
    
    // Wait for animation to complete before showing notification
    setTimeout(() => {
      setIsAnimating(false);
      
      // Check if item is already in cart
      const isAlreadyInCart = cart.some(cartItem => cartItem.index === item.index);
      
      // Show notification after a short delay
      setTimeout(() => {
        if (isAlreadyInCart) {
          addNotification(`${item.name} ya está en el carrito`, 'error');
        } else {
          addToCart(item);
          addNotification(`${item.name} agregado al carrito`, 'success');
        }
      }, 100);
    }, 1000);
  };
  
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-red-200 transform hover:-translate-y-2 hover:scale-[1.02]">
      {/* Animation overlay */}
      {isAnimating && (
        <>
          {/* Success/Error animation based on cart status */}
          <div className={`absolute inset-0 flex items-center justify-center z-20 animate-fade-in ${
            cart.some(cartItem => cartItem.index === item.index) 
              ? 'bg-red-500/90' 
              : 'bg-green-500/90'
          }`}>
            <div className="bg-white rounded-full p-4 animate-bounce-scale">
              {cart.some(cartItem => cartItem.index === item.index) ? (
                // Error X icon
                <svg className="w-12 h-12 text-red-500 animate-draw-check" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Success checkmark
                <svg className="w-12 h-12 text-green-500 animate-draw-check" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
          </div>
          
          {/* Flying icon - cart for success, warning for error */}
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 ${isAnimating ? 'animate-fly-to-notification' : ''}`}>
            <div className={`text-white p-3 rounded-full shadow-lg ${
              cart.some(cartItem => cartItem.index === item.index) 
                ? 'bg-red-600' 
                : 'bg-green-600'
            }`}>
              {cart.some(cartItem => cartItem.index === item.index) ? (
                // Warning icon for error
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              ) : (
                // Cart icon for success
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 1.5M7 13l-1.5-1.5M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              )}
            </div>
          </div>
        </>
      )}
      
      {/* Image Container */}
      <div className="relative h-48 sm:h-56 md:h-64 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <Img 
          src={item.src} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        {/* Price Badge */}
        <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
          {item.price}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4 sm:p-5">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-red-600 transition-colors duration-300">
          {item.name}
        </h3>
        {item.category && (
          <div className="mb-2">
            <span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded-full">
              {item.category}
            </span>
          </div>
        )}
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">
          Llavero de alta calidad con diseño único
        </p>
        
        {/* Action Button */}
        <button
          onClick={handleAddToCart}
          disabled={isAnimating}
          className={`w-full font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform shadow-lg hover:shadow-xl ${
            isAnimating 
              ? 'bg-green-500 text-white cursor-not-allowed' 
              : 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white hover:scale-105 active:scale-95'
          }`}
        >
          <span className="flex items-center justify-center gap-2">
            {isAnimating ? (
              <>
                <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Agregando...
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 1.5M7 13l-1.5-1.5M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
                Agregar al carrito
              </>
            )}
          </span>
        </button>
      </div>
    </div>
  )
}

export default Card