import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../../services/cartContext.jsx';
import Card from '../../Molecules/Xiao/Card';

function SectionXiao() {
  const [data, setData] = useState([
    {index:1, src: "Ai Hoshino 1.jpeg", name: "Llavero Tanjiro", price: "$15.99", category: "Demon Slayer"}, 
    {index:2, src: "Calcifer 1.jpeg", name: "Llavero Anya", price: "$12.99", category: "Spy x Family"}, 
    {index:3, src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=300&fit=crop&crop=center", name: "Llavero Totoro", price: "$18.99", category: "Mi Vecino Totoro"}, 
    {index:4, src: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=300&fit=crop&crop=center", name: "Llavero Goku", price: "$16.99", category: "Dragon Ball"}, 
    {index:5, src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop&crop=center", name: "Llavero Luffy", price: "$14.99", category: "One Piece"}, 
    {index:6, src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop&crop=center", name: "Llavero Naruto", price: "$13.99", category: "Naruto"}, 
    {index:7, src: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=300&h=300&fit=crop&crop=center", name: "Llavero Eren", price: "$17.99", category: "Attack on Titan"}, 
    {index:8, src: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300&h=300&fit=crop&crop=center", name: "Llavero Mafuyu", price: "$19.99", category: "Given"},
    {index:9, src: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=300&h=300&fit=crop&crop=center", name: "Llavero Light", price: "$21.99", category: "Death Note"}, 
    {index:10, src: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=300&h=300&fit=crop&crop=center", name: "Llavero Nezuko", price: "$15.99", category: "Demon Slayer"}, 
    {index:11, src: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=300&h=300&fit=crop&crop=center", name: "Llavero Loid", price: "$14.99", category: "Spy x Family"}, 
    {index:12, src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=300&fit=crop&crop=center", name: "Llavero Vegeta", price: "$16.99", category: "Dragon Ball"},
    {index:13, src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&crop=center", name: "Llavero Tomioka", price: "$18.99", category: "Demon Slayer"},
    {index:14, src: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=300&fit=crop&crop=center", name: "Llavero Edward Elric", price: "$17.99", category: "Otros"},
    {index:15, src: "https://images.unsplash.com/photo-1607734834519-d8576ae60ea4?w=300&h=300&fit=crop&crop=center", name: "Llavero Inuyasha", price: "$16.99", category: "Otros"},
    {index:16, src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=center", name: "Llavero Sailor Moon", price: "$19.99", category: "Otros"}
  ]);
  
  const [filteredData, setFilteredData] = useState(data);
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  
  const categories = [
    'Todos',
    'Demon Slayer',
    'Spy x Family', 
    'Mi Vecino Totoro',
    'Dragon Ball',
    'One Piece',
    'Naruto',
    'Attack on Titan',
    'Given',
    'Death Note',
    'Otros'
  ];
  
  const navigate = useNavigate();
  const { cart } = useCart();

  // Filter function
  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    if (category === 'Todos') {
      setFilteredData(data);
    } else {
      const filtered = data.filter(item => item.category === category);
      setFilteredData(filtered);
    }
  };

  useEffect(() => {
    // Initialize filtered data
    setFilteredData(data);
  }, [data]);

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
        <div className="flex justify-between items-center gap-4">
          {/* Left side: Logo and texts */}
          <div className="flex flex-col gap-1 flex-1">
            <div className="flex items-center gap-3">
              <img 
                src="/Images/logo.jpg" 
                alt="Logo de la empresa" 
                className="w-8 h-8 sm:w-12 sm:h-12 object-contain rounded-lg shadow-md"
              />
              <h1 className="text-xl sm:text-3xl font-bold text-gray-900">Llaveros</h1>
            </div>
            {/* Mobile: Show shortened description below */}
            <p className="text-xs sm:hidden text-gray-500 ml-11">
              Llaveros únicos de anime
            </p>
            {/* Desktop: Show full description inline */}
            <p className="hidden sm:block text-sm text-gray-500 ml-15">
              Los mejores llaveros de tus animes favoritos | Recuerda que son productos únicos
            </p>
          </div>
          
          {/* Right side: Cart button */}
          {/* Right side: Cart button */}
          <button
            className="flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-3 py-2 sm:px-6 sm:py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative"
            onClick={() => navigate('/cart')}
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 1.5M7 13l-1.5-1.5M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
            <span className="text-sm sm:text-base">Ver Carrito</span>
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center font-bold">
                {cart.length}
              </span>
            )}
          </button>
        </div>
        
        {/* Category Filters */}
        <div className="mt-4 sm:mt-6">
          <h3 className="text-sm font-medium text-gray-700 mb-2 sm:mb-3">Filtrar por categoría:</h3>
          
          {/* Mobile: Horizontal Scroll */}
          <div className="md:hidden">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryFilter(category)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                    selectedCategory === category
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-red-100 hover:text-red-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Desktop: Flex Wrap */}
          <div className="hidden md:flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-red-100 hover:text-red-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="p-4 sm:p-6">
        <div className="mb-4">
          <p className="text-gray-600">
            {selectedCategory === 'Todos' 
              ? `Mostrando todos los productos (${filteredData.length})` 
              : `Mostrando productos de ${selectedCategory} (${filteredData.length})`
            }
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredData && filteredData.map(item => (
            <Card key={item.index} item={item} />
          ))}
        </div>
        {filteredData.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No hay productos en esta categoría</h3>
            <p className="text-gray-500 mb-6">Intenta seleccionar otra categoría</p>
            <button
              onClick={() => handleCategoryFilter('Todos')}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              Ver todos los productos
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default SectionXiao