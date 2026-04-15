import React from "react";
import styles from './StatisticsCard.module.css';

export default function StatisticsCard ({nombreCard, imagen, contador, colorClase}) {

    return (
        <>
            <div className={`${styles.card} ${styles[colorClase]}`}>
                <div className={styles.contenedorIcon}>
                    <img 
                    src={imagen} 
                    className={styles.iconoImagen}
                    alt={nombreCard} 
                    ></img>
                </div>
                <div className={styles.contenidoCard}>
                    <div className="nombre">
                        <p className={styles.nombreCard}>{nombreCard}</p>
                        <p className={styles.contador}>{contador}</p>
                    </div>
                </div>
            </div>
        </>  
    )
    
}