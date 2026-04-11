import InfoPeli from "../InfoPeli/InfoPeli";
import Rating from "../Rating/Rating";
import { Trash2, RotateCcw } from "lucide-react";
import styles from './MediaCardCompact.module.css'

export default function MediaCardCompact() {
  return (
    <>
      <div className={styles.card}>
        <div>
          <img
            src="../../rapsody.jpg"
            className={styles.cardImage}
          ></img>
        </div>
        <div className={styles.cardContent}>
          <InfoPeli
            texto="2018 • Musical / Documental"
            nombre="Bohemian Rhapsody: la historia de Freddie Mercury"
            compacta={true}
          />
          <div className={styles.spacer}></div>
        </div>
        <div className={styles.cardActions}>
          <Rating puntuacion="4.5" />
          <div className={styles.buttonGroup}>
            <button className={styles.iconButton}>
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
            <button className={styles.iconButton}>
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
