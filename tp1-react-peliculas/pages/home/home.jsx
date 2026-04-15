import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import MainContent from "../../components/MainContent/MainContent.jsx";
import Header from "../../components/Header/layout/Header/Header.jsx";
import styles from './home.module.css';
import { useState, useMemo, useEffect } from "react"; //
import DataLoader from "../../components/DataLoader/DataLoader.jsx"; //
import EditarTitulo from "../../components/EditarTitulo/EditarTitulo.jsx"; //

function Home({porVer, vistas, moverAVisto,eliminarDeLista, moverAPorVer, agregarNuevaObraPorVer, agregarNuevaObraVista}) {
  const [buscarTerm, setBuscarTerm] = useState('');
  const [tipoSeleccionado, setTipoSeleccionado] = useState('all');
  const [generoSeleccionado, setGeneroSeleccionado] = useState('all');
  const [peliculaEnEdicion, setPeliculaEnEdicion] = useState(null); //
  const [titulosLocales, setTitulosLocales] = useState([]); //

  // --- EL USEEFFECT VA AQUÍ ---
  useEffect(() => {
    // Intentamos obtener los títulos del localStorage
    const datos = localStorage.getItem('titulos'); 
    if (datos) {
      setTitulosLocales(JSON.parse(datos));
    }
  }, []); // Se ejecuta una sola vez al montar el componente

  const catalogoFiltrado = useMemo(() => {
    const normalizarBusqueda = buscarTerm.trim().toLowerCase();

    if (titulosLocales.length === 0) return [];
    
    // Filtramos sobre titulosLocales (los datos de la localStorage)
    return titulosLocales.filter((pelicula) => {
      const coincidirTipo = tipoSeleccionado === 'all' || pelicula.type === tipoSeleccionado;
      const coincidirGenero = generoSeleccionado === 'all' || pelicula.genre === generoSeleccionado;
      const coincidirTexto = normalizarBusqueda === '' || 
            pelicula.title.toLowerCase().includes(normalizarBusqueda) ||
            pelicula.director.toLowerCase().includes(normalizarBusqueda);
            
      return coincidirTipo && coincidirGenero && coincidirTexto;
    });
    // Es vital agregar titulosLocales a las dependencias para que se actualice la lista
  }, [buscarTerm, tipoSeleccionado, generoSeleccionado, titulosLocales]); 

  const handleFilter = ({ busqueda, tipo, genero}) => {
    setBuscarTerm(busqueda);
    setTipoSeleccionado(tipo);
    setGeneroSeleccionado(genero);
  };

  return (
    <div className={styles.container}>
      <DataLoader /> {/* Inicializa el localStorage si está vacío */}

      {peliculaEnEdicion && (
        <div className={styles.modalOverlay}>
          <EditarTitulo
            peliculaAEditar={peliculaEnEdicion}
            alCancelar={() => setPeliculaEnEdicion(null)}
            AlGuardar={() => {
              setPeliculaEnEdicion(null);
              // Recargamos para que el useEffect vuelva a leer el localStorage actualizado
              window.location.reload(); 
            }}
          />
        </div>
      )}

      <Header onfilter={handleFilter}/>
      <div className={styles.content}>
        <Sidebar agregarObraVista={agregarNuevaObraVista} agregarObraPorVer={agregarNuevaObraPorVer}/>
        <MainContent 
          moverAPorVer={moverAPorVer} 
          moverAVisto={moverAVisto} 
          eliminarDeLista={eliminarDeLista} 
          porVer={porVer} 
          vistas={vistas} 
          alEditar={(peli) => setPeliculaEnEdicion(peli)}
          catalogoCompleto={titulosLocales}
          catalogoFiltrado={catalogoFiltrado}
        />
      </div>
    </div>
  );
}

export default Home;