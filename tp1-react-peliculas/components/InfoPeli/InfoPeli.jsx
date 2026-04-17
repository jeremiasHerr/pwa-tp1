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
          <img src= "https://img.icons8.com/?size=100&id=81980&format=png&color=000000" style={{width: '35px', marginBottom: '-5px'}}/> {props.calificacion}
        </p>
      </div>
    </div>
  );
}
