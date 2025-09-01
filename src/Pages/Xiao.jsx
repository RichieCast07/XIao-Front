import { Helmet } from "react-helmet-async"
import Sidebar from "../Components/Organisms/Sidebar"
import SectionXiao from "../Components/Organisms/Xiao/SectionXiao"

function Xiao() {
  return (
    <>
    <Helmet>
      <title> Llaveros Anime - Xiao Store</title>
      <meta name="description" content="Tienda de llaveros de anime - Demon Slayer, Spy x Family, Dragon Ball, Naruto y más" />
      <link rel="icon" type="image/jpeg" href="/Images/logo.jpg" />
    </Helmet>
    <div className="w-screen">
        <Sidebar />
        <SectionXiao />
    </div>
    </>
  )
}

export default Xiao