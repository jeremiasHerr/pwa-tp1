import {ArrowDown,ArrowUp} from "lucide-react";
import styles from "./DashboardControl.module.css";

export default function DashboardControl ({ordenarPor, setOrdenarPor, ordenAscendente, setOrdenAscendente}){
    
    const handleAño = (direccion) => {
      setOrdenarPor("año");
      setOrdenAscendente(direccion === "up");
    };

    const handlePuntuacion = (direccion) => {
      setOrdenarPor("puntuacion");
      setOrdenAscendente(direccion === "up");
    };

    return (
        <>
            <div className={styles.dashboard}>
                <div>
                    <p className={styles.textoCategoria}>ORDENAR ARCHIVO</p>
                </div>
                <div className={styles.containerBotones}>
                    <div className={`${styles.containerCategoria} ${ordenarPor === "año" ? styles.containerCategoriaActivo : ''}`}>
                        <p>Año</p>
                    </div>
                    <div>
                        <button onClick={() => handleAño("down")} className={styles.flechas}>
                            <ArrowDown/>
                        </button>
                        <button onClick={() => handleAño("up")} className={styles.flechas}>
                            <ArrowUp/>
                        </button>
                    </div>
                </div>
                <div className={styles.containerBotones}>
                    <div className={`${styles.containerCategoria} ${ordenarPor === "puntuacion" ? styles.containerCategoriaActivo : ''}`}>
                        <p>Puntuacion</p>
                    </div>
                    <div>
                        <button onClick={() => handlePuntuacion("down")} className={styles.flechas}>
                            <ArrowDown/>
                        </button>
                        <button onClick={() => handlePuntuacion("up")} className={styles.flechas}>
                            <ArrowUp/>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}