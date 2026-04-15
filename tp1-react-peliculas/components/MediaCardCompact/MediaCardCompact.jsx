import InfoPeli from "../InfoPeli/InfoPeli";
import Rating from "../Rating/Rating";
import { Trash2, Pencil, RotateCcw } from "lucide-react";
import styles from './MediaCardCompact.module.css'

export default function MediaCardCompact({id,poster, anio, genero, titulo, puntuacion, tipo, eliminarDeLista, moverAPorVer, alEditar}) {
  const tipoTexto = tipo === "movie" ? "Pelicula":"Serie";
  return (
    <>
      <div className={styles.card}>
        <div>
          <img
            src={poster}
            className={styles.cardImage}
          ></img>
        </div>
        <div className={styles.cardContent}>
          <InfoPeli
            texto={`${anio} • ${genero} • ${tipoTexto}`}
            nombre={titulo}
            compacta={true}
          />
          <div className={styles.spacer}></div>
        </div>
        <div className={styles.cardActions}>
          <Rating puntuacion={puntuacion} />
          <div className={styles.buttonGroup}>
             <button className={styles.iconButton} onClick={() => alEditar({id, titulo})}>
              <Pencil className="w-3.5 h-3.5" />
            </button>
            <button className={styles.iconButton} onClick={() => moverAPorVer(id)}>
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
            <button className={styles.iconButton} onClick={() => eliminarDeLista(id, "vistas")}>
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
