import styles from './InfoPeli.module.css'

export default function InfoPeli(props) {
  const textSizeClass = props.compacta ? styles.textCompact : styles.textNormal;
  return (
    <div className={styles.container}>
      <div>
        <p className={`${styles.title} ${textSizeClass}`}>{props.nombre}</p>
      </div>
      <div>
        <p className={`${styles.subtitle} ${textSizeClass}`}>
          {props.texto} <br></br>
          
        </p>
      </div>
    </div>
  );
}
