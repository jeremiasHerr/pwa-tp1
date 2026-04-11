//import Titulo from '../../components/Titulo/titulo' parte del tp pero no se para que
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import MainContent from "../../components/MainContent/MainContent.jsx";
import Header from "../../components/Header/Header.jsx";
import styles from './home.module.css'

function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.content}>
        <Sidebar/>
        <MainContent/>
      </div>
    </div>
  )
}

export default Home