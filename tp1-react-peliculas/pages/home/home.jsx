//import Titulo from '../../components/Titulo/titulo' parte del tp pero no se para que
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import MainContent from "../../components/MainContent/MainContent.jsx";
import Header from "../../components/Header/Header.jsx";

function Home() {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-gray-100">
      <Header/>
      <div className="flex flex-1 overflow-hidden">
        <Sidebar/>
        <MainContent/>
      </div>
    </div>
  )
}

export default Home