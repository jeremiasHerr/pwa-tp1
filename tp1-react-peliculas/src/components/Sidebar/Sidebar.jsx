import styles from './Sidebar.module.css';
import NavItem from './NavItems';
import { MENU_ITEMS } from '../../constants/navegacion';
import {useState } from 'react';
import Formulario from '../Formulario/Formulario';

export default function Sidebar({agregarObraPorVer, agregarObraVista, porVer = [], vistas = []}){

    const titulos = JSON.parse(localStorage.getItem("titulos")) || [];
    
    // Filtrar solo los títulos que están en porVer o vistas
    const titulosUsuario = titulos.filter(titulo => 
      porVer.includes(titulo.id) || vistas.includes(titulo.id)
    );
    
    const [activeTab, setActiveTab] = useState('home');
    const [formularioActivo, mostrarFormulario] = useState(false);
    let tempDrama = 0;
    let tempAccion = 0;
    let tempTerror = 0;
    let tempComedia = 0;
    let tempRomance = 0;
    let tempCienciaFiccion = 0;
    let tempSuspenso = 0;
    let tempMusical = 0;
    let tempAnimacion = 0;
    let tempAventura = 0;
    let tempCrimen = 0;
    let tempDocumental = 0;
    let tempFamiliar = 0;
    let tempFantasia = 0;
    let tempMisterio = 0;

    titulosUsuario.forEach((item) => {
        switch (item.genero) {
            case 'Drama':
                tempDrama++;
                break;
            case 'Accion':
            case 'Acción':
                tempAccion++;
                break;
            case 'Terror':
                tempTerror++;
                break;
            case 'Comedia':
                tempComedia++;
                break;
            case 'Romance':
                tempRomance++;
                break;
            case 'Ciencia Ficcion':
            case 'Ciencia Ficción':
                tempCienciaFiccion++;
                break;
            case 'Suspenso':
                tempSuspenso++;
                break;
            case 'Musical':
                tempMusical++;
                break;
            case 'Animación':
                tempAnimacion++;
                break;
            case 'Aventura':
                tempAventura++;
                break;
            case 'Crimen':
                tempCrimen++;
                break;
            case 'Documental':
                tempDocumental++;
                break;
            case 'Familiar':
                tempFamiliar++;
                break;
            case 'Fantasía':
                tempFantasia++;
                break;
            case 'Misterio':
                tempMisterio++;
                break;
            default:
                break;
        }
    });


    
    
    //estos datos estan solamente para ver la visualizacion, cambiarlo luego para el conteo
    const generos = [
        {id: 1, nombre: 'Ciencia Ficción', count: tempCienciaFiccion, color: 'indigo'},
        {id: 2, nombre: 'Drama', count: tempDrama, color: 'rose'},
        {id: 3, nombre: 'Terror', count: tempTerror, color: 'orange'},
        {id: 4, nombre: 'Acción', count: tempAccion, color: 'blue'},
        {id: 5, nombre: 'Comedia', count: tempComedia, color: 'yellow'},
        {id: 6, nombre: 'Romance', count: tempRomance, color: 'pink'},
        {id: 7, nombre: 'Suspenso', count: tempSuspenso, color: 'green'},
        {id: 8, nombre: 'Musical', count: tempMusical, color: 'red'},
        {id: 9, nombre: 'Animación', count: tempAnimacion, color: 'violet'},
        {id: 10, nombre: 'Aventura', count: tempAventura, color: 'celeste'},
        {id: 11, nombre: 'Crimen', count: tempCrimen, color: 'vino'},
        {id: 12, nombre: 'Documental', count: tempDocumental, color: 'gray'},
        {id: 13, nombre: 'Familiar', count: tempFamiliar, color: 'yellow'},
        {id: 14, nombre: 'Fantasía', count: tempFantasia, color: 'pink'},
        {id: 15, nombre: 'Misterio', count: tempMisterio, color: 'gray'}
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
                    {generos.filter((genero) => genero.count >= 1).map((genero) => (
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


