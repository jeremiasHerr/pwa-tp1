import './App.css';
import Home from '../pages/home/home.jsx';
import { useState, useEffect} from 'react';
import { catalogoBase } from './data/catalogo.js';

function App() {

  //Checkea si ya estan cargados para no sobreescribir datos
  const catalogoAux = localStorage.getItem("titulos");
  if(!catalogoAux){
      //Datos precargados para muestra
      localStorage.setItem("titulos", JSON.stringify(catalogoBase));
  }


  const [listaUsuario, setListaUsuario] = useState(() => {
    const datos = localStorage.getItem("seriesPelisUsuario");
    return datos ? JSON.parse(datos) : {porVer: [], vistas: []};
  });

  
  useEffect(() => {
    localStorage.setItem("seriesPelisUsuario", JSON.stringify(listaUsuario))
  }, [listaUsuario]);

  const agregarNuevaObraPorVer = (id) => {
    setListaUsuario(prev => ({
      ...prev,
      porVer: [...prev.porVer, id] 
    }));
  }

  const agregarNuevaObraVista = (id) => {
    setListaUsuario(prev => ({
      ...prev,
      vistas: [...prev.vistas, id] 
    }));
  }

  const moverAVisto = (id) => {
    setListaUsuario(prev => ({
        ...prev,
        porVer: prev.porVer.filter(itemId => itemId!== id),
        vistas: prev.vistas.includes(id) ? prev.vistas : [...prev.vistas, id]
    }));
  };

  const moverAPorVer = (id) => {
    setListaUsuario(prev => ({
      ...prev,
      vistas: prev.vistas.filter(itemId => itemId !== id),
      porVer: prev.porVer.includes(id) ? prev.porVer : [...prev.porVer, id]
    }))
  }

  const eliminarDeLista = (id, tipoLista) => {
    // Eliminar del array de porVer o vistas
    setListaUsuario(prev => ({
      ...prev,
      [tipoLista]: prev[tipoLista].filter(itemId => itemId!== id)
    }));
    
    // Eliminar del catálogo total en localStorage
    const titulos = JSON.parse(localStorage.getItem("titulos")) || [];
    const titulosActualizados = titulos.filter(item => item.id !== id);
    localStorage.setItem("titulos", JSON.stringify(titulosActualizados));
  }

  return (
    <>
      <Home
        agregarNuevaObraPorVer={agregarNuevaObraPorVer}
        agregarNuevaObraVista={agregarNuevaObraVista}
        moverAVisto={moverAVisto}
        eliminarDeLista={eliminarDeLista}
        porVer={listaUsuario.porVer ? listaUsuario.porVer : []}
        vistas={listaUsuario.vistas ? listaUsuario.vistas : []}
        moverAPorVer={moverAPorVer}
      />
    </>
  );
}

export default App
