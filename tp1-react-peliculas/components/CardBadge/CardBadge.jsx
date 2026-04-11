import styles from './CardBadge.module.css'

export default function CardBadge({ tipo, size = "normal" }) {
  
  const sizeClass = {
    compact: styles.compact,
    normal: styles.normal,    
    large: styles.large      
  };
  const selectedSizeClass = sizeClass[size] || sizeClass.normal;

  const colorClass = {
    movie: styles.movie,
    serie: styles.serie,
    documental: styles.documental
  };
  const selectedColorClass = colorClass[tipo] || styles.movie;

  return (
    <div className={`${styles.badge} ${selectedColorClass} ${selectedSizeClass}`}>
      {tipo}
    </div>
  );
}
