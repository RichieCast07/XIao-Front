import { Helmet } from "react-helmet-async"
import Sidebar from "../Components/Organisms/Sidebar"
import SectionXiao from "../Components/Organisms/Xiao/SectionXiao"

function Xiao() {
  return (
    <>
    <Helmet>
      <title>Xiao</title>
      <meta name="description" content="Xiao page description" />
    </Helmet>
    <div className="w-screen">
        <Sidebar />
        <SectionXiao />
    </div>
    </>
  )
}

export default Xiao