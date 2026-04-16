import styles from "./BotonCerrarModal.module.css";
import {X} from "lucide-react";

export default function BotonCerrarModal ({cerrarModal}) {

    return (
        <>
            <button onClick={() => cerrarModal()} type="button" className={styles.btnCerrar}>
                <X/>
            </button>
        </>
    );
}