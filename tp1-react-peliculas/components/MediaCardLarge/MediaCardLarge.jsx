import InfoPeli from "../InfoPeli/InfoPeli";
import CardBadge from "../CardBadge/CardBadge";
import { Trash2, Pencil, CirclePlus } from "lucide-react";
import styles from "./MediaCardLarge.module.css";
import ModalConfirmacion from "../ModalConfirmacion/ModalConfirmacion";
import { useState } from "react";

export default function MediaCardLarge({
  id,
  poster,
  genero,
  anio,
  tipo,
  titulo,
  calificacion,
  moverAVisto,
  eliminarDeLista,
  alEditar,
}) {
  const [mostrarModal, setMostrarModal] = useState(false);

  return (
    <>
      <div className={styles.card}>
        <div>
          <img src={poster} className={styles.cardImage}></img>
        </div>
        <div className={styles.cardContent}>
          <InfoPeli
            texto={`${anio} • ${genero}`}
            nombre={titulo}
            calificacion={calificacion}
            compacta={false}
          />
          <div className={styles.spacer}>
            <button
              className={styles.actionButton}
              onClick={() => moverAVisto(id)}
            >
              <CirclePlus/>
              <p className={styles.actionButtonText}>Mark As Watched</p>
            </button>
          </div>
        </div>
        <div className={styles.cardActions}>
          <CardBadge tipo={tipo} texto={tipo} size="large" />
          <div className={styles.buttonGroup}>
            <button
              className={styles.iconButton}
              onClick={() => alEditar({ id, titulo })}
            >
              <Pencil/>
            </button>
            <button
              className={styles.iconButton}
              onClick={() => setMostrarModal(true)}
            >
              <Trash2/>
            </button>
          </div>
        </div>
        {mostrarModal ? (
          <ModalConfirmacion
            titulo="¿Eliminar pelicula?"
            onConfirmar={() => eliminarDeLista(id,"porVer")}
            onCancelar={() => setMostrarModal(false)}
            cerrarModal={() => setMostrarModal(false)}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
}
