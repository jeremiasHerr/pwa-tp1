import Sidebar from "../../src/components/Sidebar/Sidebar.jsx";
import MainContent from "../../src/components/MainContent/MainContent.jsx";
import Header from "../../src/components/Header/layout/Header/Header.jsx";
import styles from './home.module.css';
import { useState, useMemo, useEffect } from "react"; //
import DataLoader from "../../src/components/DataLoader/DataLoader.jsx"; //
import EditarTitulo from "../../src/components/EditarTitulo/EditarTitulo.jsx"; //

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
  }, [porVer, vistas]); // Se ejecuta cada vez que cambien porVer o vistas

  const catalogoFiltrado = useMemo(() => {
    const normalizarBusqueda = buscarTerm.trim().toLowerCase();

    if (titulosLocales.length === 0) return [];
    
    // Filtramos sobre titulosLocales (los datos de la localStorage)
    return titulosLocales.filter((pelicula) => {
      const coincidirTipo = tipoSeleccionado === 'all' || pelicula.type === tipoSeleccionado;
      const coincidirGenero = generoSeleccionado === 'all' || pelicula.genre === generoSeleccionado;
      const titulo = (pelicula.title || pelicula.titulo || '').toLowerCase();
      const director = (pelicula.director || '').toLowerCase();
      const coincidirTexto = normalizarBusqueda === '' || 
            titulo.includes(normalizarBusqueda) ||
            director.includes(normalizarBusqueda);
            
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

      <Header onFilter={handleFilter}/>
      <div className={styles.content}>
        <Sidebar agregarObraVista={agregarNuevaObraVista} agregarObraPorVer={agregarNuevaObraPorVer} porVer={porVer} vistas={vistas}/>
        <MainContent 
          moverAPorVer={moverAPorVer} 
          moverAVisto={moverAVisto} 
          eliminarDeLista={eliminarDeLista} 
          porVer={porVer} 
          vistas={vistas} 
          alEditar={(peli) => setPeliculaEnEdicion(peli)}
          catalogoCompleto={titulosLocales}
          catalogoFiltrado={catalogoFiltrado}
          buscarTerm={buscarTerm}
          tipoSeleccionado={tipoSeleccionado}
          generoSeleccionado={generoSeleccionado}
        />
      </div>
    </div>
  );
}

export default Home;