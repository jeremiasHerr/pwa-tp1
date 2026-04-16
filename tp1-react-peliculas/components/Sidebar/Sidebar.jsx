import styles from './Sidebar.module.css';
import NavItem from './NavItems';
import { MENU_ITEMS } from '../../src/constants/navegacion';
import {useState } from 'react';
import Formulario from '../Formulario/Formulario';

export default function Sidebar({agregarObraPorVer, agregarObraVista}){
    const [activeTab, setActiveTab] = useState('home');
    const [formularioActivo, mostrarFormulario] = useState(false);

    //estos datos estan solamente para ver la visualizacion, cambiarlo luego para el conteo
    const generos = [
        {id: 1, nombre: 'Ciencia-ficcion', count: 84, color: 'indigo'},
        {id: 2, nombre: 'Drama', count: 56, color: 'rose'},
        {id: 3, nombre: 'Terror', count: 32, color: 'orange'}
    ];

    return (
        <div className={styles.sidebar}>
            {/*Navegacion principal */}
            <nav className={styles.nav}>
                {MENU_ITEMS.map((item) => (
                    <NavItem
                        key={item.id}
                        etiqueta={item.etiqueta} 
                        estaActivo={activeTab === item.id}
                        onClick={() => setActiveTab(item.id)}
                        icon={true}
                        icono={item.src}
                        />
                ))}
            </nav>

            {/*barra del contador de generos */}
            <div className={styles.genreSection}>
                <h3 className={styles.genreTitle}>
                    Cantidad de items por genero
                </h3>
                <div className={styles.genreList}>
                    {generos.map((genero) => (
                        <div key={genero.id} className={styles.genreItem}>
                            <span>{genero.nombre}</span>
                            <span className={`${styles.genreCount} ${styles[genero.color]}`}>
                                {genero.count}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/*Boton para agregar titulos */}
            <button className={styles.addButton} onClick={() => mostrarFormulario(true)}>
                <span>+</span>
                <span>AGREGAR TITULO</span>
            </button>           
            {
                formularioActivo ? <Formulario agregarObraPorVer={agregarObraPorVer} agregarObraVista={agregarObraVista} mostrarFormulario={mostrarFormulario}/>:<></>
            }
            
        </div>
    );
}   


