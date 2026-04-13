import styles from "./TituloColumna.module.css";
import CardBadge from "../CardBadge/CardBadge"; 

export default function TituloColumna({texto, cantidad}){
    return(
        <>
            <div className={styles.titulo}>
                <p>{texto}</p>
                <CardBadge tipo="info" texto={`${cantidad} en total`}/>
            </div>
        </>
    )
}