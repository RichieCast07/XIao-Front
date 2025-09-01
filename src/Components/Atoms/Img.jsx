
function Img({ src, alt }) {
  return (
    <div className="h-3/4 w-full">
        <img className="rounded-t-lg  w-full h-full" src={src} alt={alt} />
    </div>
  )
}

export default Img