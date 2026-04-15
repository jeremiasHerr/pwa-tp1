//import Titulo from '../../components/Titulo/titulo' parte del tp pero no se para que
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import MainContent from "../../components/MainContent/MainContent.jsx";
import Header from "../../components/Header/layout/Header/Header.jsx";
import styles from './home.module.css'
import { useState } from "react";
import { useMemo} from "react";

function Home({porVer, vistas, moverAVisto,eliminarDeLista, moverAPorVer, agregarNuevaObraPorVer, agregarNuevaObraVista}) {
  const [buscarTerm, setBuscarTerm] = useState('');
  const [tipoSeleccionado, setTipoSeleccionado] = useState('all');
  const [generoSeleccionado, setGeneroSeleccionado] = useState('all');

  const catalogoFiltrado = useMemo(() => {
    const normalizarBusqueda = buscarTerm.trim().toLowerCase();
    return catalogoBase.filter((pelicula) => {
      const coincidirTipo = tipoSeleccionado === 'all' || pelicula.type === tipoSeleccionado;
      const coincidirGenero = generoSeleccionado === 'all' || pelicula.genre === generoSeleccionado;
      const coincidirTexto = normalizarBusqueda === '' || 
            pelicula.title.toLowerCase().includes(normalizarBusqueda) ||
            pelicula.director.toLowerCase().includes(normalizarBusqueda);
            return coincidirTipo && coincidirGenero && coincidirTexto;
    });
  }, [buscarTerm, tipoSeleccionado, generoSeleccionado]);

  const handleFilter = ({ busqueda, tipo, genero}) => {
    setBuscarTerm(busqueda);
    setTipoSeleccionado(tipo);
    setGeneroSeleccionado(genero);
  };

  return (
    <div className={styles.container}>
      <Header onfilter={handleFilter}/>
      <div className={styles.content}>
        <Sidebar agregarObraVista={agregarNuevaObraVista} agregarObraPorVer={agregarNuevaObraPorVer}/>
        <MainContent moverAPorVer={moverAPorVer} moverAVisto={moverAVisto} eliminarDeLista={eliminarDeLista} porVer={porVer} vistas={vistas}/>
      </div>
    </div>
  )
}

export default Home