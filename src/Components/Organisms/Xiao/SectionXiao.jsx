import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../../services/cartContext.jsx';
import Card from '../../Molecules/Xiao/Card';

function SectionXiao() {
  const [data, setData] = useState([
    {index:1, src: "Ai Hoshino 1.jpeg", name: "Ai Hoshino 1", price: "$50.00", category: "Otros"}, 
    {index:2, src: "Calcifer 1.jpeg", name: "Calcifer 1", price: "$50.00", category: "Studio Ghibli"}, 
    {index:3, src: "Totoro1.jpeg", name: "Totoro 1", price: "$50.00", category: "Studio Ghibli"}, 
    {index:4, src: "Clan Uchiha Simbolo1.jpeg", name: "Clan Uchiha Simbolo 1", price: "$50.00", category: "Naruto"}, 
    {index:5, src: "Denji 1.jpeg", name: "Denji 1", price: "$50.00", category: "Chainsaw Man"}, 
    {index:6, src: "Denji 2.jpeg", name: "Denji 2", price: "$50.00", category: "Chainsaw Man"}, 
    {index:7, src: "Frieren 1.jpeg", name: "Frieren 1", price: "$50.00", category: "Otros"}, 
    {index:8, src: "Giyu Tomioka1.jpeg", name: "Giyu Tomioka 1", price: "$50.00", category: "Demon Slayer"},
    {index:9, src: "Ichigo Kurosaki 1.jpeg", name: "Ichigo Kurosaki 1", price: "$50.00", category: "Otros"}, 
    {index:10, src: "Kakashi Hatake1.jpeg", name: "Kakashi Hatake 1", price: "$50.00", category: "Naruto"}, 
    {index:11, src: "Katsuki Bakugo 1.jpeg", name: "Katsuki Bakugo 1", price: "$50.00", category: "Otros"}, 
    {index:12, src: "Killua Zoldyck1.jpeg", name: "Killua Zoldyck", price: "$50.00", category: "Hunter x Hunter"},
    {index:13, src: "Kirito 1.jpeg", name: "Kirito 1", price: "$50.00", category: "Otros"},
    {index:14, src: "Kyojuro Rengoku1.jpeg", name: "Kyojuro Rengoku 1", price: "$50.00", category: "Demon Slayer"},
    {index:15, src: "L 1).jpeg", name: "L", price: "$50.00", category: "Otros"},
    {index:16, src: "Makina 1.jpeg", name: "Makina", price: "$50.00", category: "Chainsaw Man"},
    {index:17, src: "Manjiro Sano 1.jpeg", name: "Manjiro Sano 1", price: "$50.00", category: "Otros"},
    {index:18, src: "Manjiro Sano 2.jpeg", name: "Manjiro Sano 2", price: "$50.00", category: "Otros"},
    {index:19, src: "Mob (Shigeo Kageyama) 1.jpeg", name: "Mob (Shigeo Kageyama) 1", price: "$50.00", category: "Otros"},
    {index:20, src: "Monkey D. Luffy 1.jpeg", name: "Monkey D. Luffy 1", price: "$50.00", category: "One Piece"},
    {index:21, src: "Nezuko Kamado 1.jpeg", name: "Nezuko Kamado 1", price: "$50.00", category: "Demon Slayer"},
    {index:22, src: "Nezuko Kamado 2.jpeg", name: "Nezuko Kamado 2", price: "$50.00", category: "Demon Slayer"},
    {index:23, src: "Power 1.jpeg", name: "Power 1", price: "$50.00", category: "Otros"},
    {index:24, src: "Roronoa Zoro 1.jpeg", name: "Roronoa Zoro 1", price: "$50.00", category: "One Piece"},
    {index:25, src: "Roronoa Zoro 2.jpeg", name: "Roronoa Zoro 2", price: "$50.00", category: "One Piece"},
    {index:26, src: "Sanemi Shinazugawa 1.jpeg", name: "Sanemi Shinazugawa 1", price: "$50.00", category: "Otros"},
    {index:27, src: "Sanemi Shinazugawa 2.jpeg", name: "Sanemi Shinazugawa 2", price: "$50.00", category: "Otros"},
    {index:28, src: "Shoto Todoroki 1.jpeg", name: "Shoto Todoroki 1", price: "$50.00", category: "Otros"},
    {index:29, src: "Sung Jinwoo 1.jpeg", name: "Sung Jinwoo 1", price: "$50.00", category: "Otros"},
    {index:30, src: "Titan De Ataque 1.jpeg", name: "Titan De Ataque 1", price: "$50.00", category: "Attack on Titan"}

  ]);
  
  const [filteredData, setFilteredData] = useState(data);
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  
  const categories = [
    'Todos',
    'Demon Slayer',
    'Chainsaw Man',
    'Studio Ghibli',
    'One Piece',
    'Naruto',
    'Attack on Titan',
    'Hunter x Hunter',
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