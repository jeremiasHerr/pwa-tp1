import {ArrowDown,ArrowUp} from "lucide-react";
import styles from "./DashboardControl.module.css";
import { useState } from "react";

export default function DashboardControl (){
    const [estaActivo, setEstaActivo] = useState("año");
    return (
        <>
            <div className={styles.dashboard}>
                <div>
                    <p className={styles.textoCategoria}>ORDENAR ARCHIVO</p>
                </div>
                <div className={styles.containerBotones}>
                    <div className={`${styles.containerCategoria} ${estaActivo === "año" ? styles.containerCategoriaActivo : ''}`}>
                        <p>Año</p>
                    </div>
                    <div>
                        <button onClick={()=>{setEstaActivo("año")}} className={styles.flechas}>
                            <ArrowDown/>
                        </button>
                        <button onClick={()=>{setEstaActivo("año")}} className={styles.flechas}>
                            <ArrowUp/>
                        </button>
                    </div>
                </div>
                <div className={styles.containerBotones}>
                    <div className={`${styles.containerCategoria} ${estaActivo === "puntuacion" ? styles.containerCategoriaActivo : ''}`}>
                        <p>Puntuacion</p>
                    </div>
                    <div>
                        <button onClick={()=>{setEstaActivo("puntuacion")}} className={styles.flechas}>
                            <ArrowDown/>
                        </button>
                        <button onClick={()=>{setEstaActivo("puntuacion")}} className={styles.flechas}>
                            <ArrowUp/>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}