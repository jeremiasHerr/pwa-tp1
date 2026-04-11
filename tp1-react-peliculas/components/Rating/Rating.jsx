import { Star } from "lucide-react";
import styles from './Rating.module.css'

export default function Rating(props) {
  return (
    <>
      <div className={styles.ratingContainer}>
        <div>
            <Star className="h-4 w-3.5 fill-[#f789c2]" />
        </div>
        <p className={styles.ratingValue}>{props.puntuacion}</p>
      </div>
    </>
  );
}
