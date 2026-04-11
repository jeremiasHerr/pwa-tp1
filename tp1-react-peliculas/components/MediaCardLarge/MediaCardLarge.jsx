import InfoPeli from "../InfoPeli/InfoPeli";
import CardBadge from "../CardBadge/CardBadge";
import { Trash2, Pencil, CirclePlus } from "lucide-react";
import styles from './MediaCardLarge.module.css'

export default function MediaCardLarge() {
  return (
    <>
      <div className={styles.card}>
        <div>
          <img
            src="../../marty_supreme.jpg"
            className={styles.cardImage}
          ></img>
        </div>
        <div className={styles.cardContent}>
          <InfoPeli texto="2025 • Drama / Biography" nombre="Marty Supreme" compacta={false}/>
          <div className={styles.spacer}>
            <button className={styles.actionButton}>
              <CirclePlus className="w-4 h-4" />
              <p className={styles.actionButtonText}>
                Mark As Watched
              </p>
            </button>
          </div>
        </div>
        <div className={styles.cardActions}>
          <CardBadge tipo="movie"/>
          <div className={styles.buttonGroup}>
            <button className={styles.iconButton}>
              <Pencil className="w-3.5 h-3.5" />
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
