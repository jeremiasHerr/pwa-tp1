import styles from "./ModalConfirmacion.module.css";
import BotonCerrarModal from "../BotonCerrarModal/BotonCerrarModal";
import { AlertCircle, CheckCircle, X } from "lucide-react";

export default function ModalConfirmacion({
    titulo = "Confirmar acción",
    mensaje = "¿Estás seguro?",
    textoBtnConfirmar = "Confirmar",
    textoBtnCancelar = "Cancelar",
    tipoAccion = "eliminar", // eliminar, advertencia, exito
    onConfirmar = () => { },
    onCancelar = () => { },
    cerrarModal,
}) {
    const iconoConfig = {
        eliminar: { icono: AlertCircle, color: "#ff0033" },
        advertencia: { icono: AlertCircle, color: "#ff7d54" },
        exito: { icono: CheckCircle, color: "#10b981" },
    };

    const config = iconoConfig[tipoAccion] || iconoConfig.advertencia;
    const Icono = config.icono;

    return (
        <div className={styles.modalCompleto}>
            <div className={styles.modalContenido}>
                <div className={styles.contenedorBtnCerrar}>
                    <BotonCerrarModal cerrarModal={cerrarModal} />
                </div>
                <div className={styles.iconoContainer}>
                    <Icono size={48} color={config.color} strokeWidth={2} />
                </div>

                <h2 className={styles.titulo}>{titulo}</h2>
                <p className={styles.mensaje}>{mensaje}</p>

                <div className={styles.containerBotones}>
                    <button className={styles.btnCancelar} onClick={onCancelar}>
                        {textoBtnCancelar}
                    </button>
                    <button className={styles.btnConfirmar} onClick={onConfirmar}>
                        {textoBtnConfirmar}
                    </button>
                </div>
            </div>
        </div>
    );
}
