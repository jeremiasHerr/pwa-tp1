import './App.css';
import Home from '../pages/home/home.jsx';
 import { useState, useEffect} from 'react';

function App() {

  const [listaUsuario, setListaUsuario] = useState(() => {
    const datos = localStorage.getItem("seriesPelisUsuario");
    return datos ? JSON.parse(datos) : {porVer: [], vistas: []};
  });

  useEffect(() => {
    localStorage.setItem("seriesPelisUsuario", JSON.stringify(listaUsuario))
  }, [listaUsuario]);

  const moverAVisto = (id) => {
    setListaUsuario(prev => ({
        ...prev,
        porVer: prev.porVer.filter(itemId => itemId!== id),
        vistas: prev.vistas.includes(id) ? prev.vistas : prev.vistas = [...prev.vistas, id]
    }));
  };

  const moverAPorVer = (id) => {
    setListaUsuario(prev => ({
      ...prev,
      vistas: prev.vistas.filter(itemId => itemId !== id),
      porVer: prev.porVer.includes(id) ? prev.porVer : prev.porVer = [...prev.porVer, id]
    }))
  }

  const eliminarDeLista = (id, tipoLista) => {
    setListaUsuario(prev => ({
      ...prev,
      [tipoLista]: prev[tipoLista].filter(itemId => itemId!== id)
    }));
  }

  return (
    <>
      <Home
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
