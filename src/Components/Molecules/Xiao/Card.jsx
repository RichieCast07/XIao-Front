import Img from "../../Atoms/Img"


function Card({ item }) {
  return (
    <div
      className="bg-gradient-to-br from-gray-100 to-gray-300 shadow-xl h-64 flex flex-col rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-1 animate-fadeIn cursor-pointer group"
    >
      <div className="flex-1 flex items-center justify-center bg-white/70 p-4">
        <Img src={item.src} alt={item.name} className="w-24 h-24 object-contain transition-transform duration-300 group-hover:scale-110" />
      </div>
      <div className="bg-white px-4 py-3 flex flex-col items-center gap-1">
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">{item.name}</h3>
        <p className="text-base text-gray-500 font-medium">{item.price}</p>
      </div>
    </div>
  )
}

export default Card