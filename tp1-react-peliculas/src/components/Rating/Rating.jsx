import { Star } from "lucide-react";
import styles from './Rating.module.css'

export default function Rating({puntuacion}) {
  return (
    <>
      <div className={styles.ratingContainer}>
        <div>
            <Star className={styles.icon} />
        </div>
        <p className={styles.ratingValue}>{puntuacion}</p>
      </div>
    </>
  );
}
