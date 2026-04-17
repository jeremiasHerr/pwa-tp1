import styles from "./FormInput.module.css";

export default function FormInput({label, value, tipo="text",esSelect=false, opciones=[], min, max, nombre, error}) {
    return (
        <div className={styles.inputContainer}>
            <label>{label}</label>
            {esSelect ? (
                <select name={nombre} defaultValue={value} className={`${styles.field} ${error ? styles.input-error : ""}`}>
                    {opciones.map((opcion) => (
                        <option key={opcion} value={opcion}>{opcion}</option>
                    ))
                    }
                </select>
                ) :
                <input name={nombre} min={min} max={max} className={`${styles.field} ${error ? styles[`input-error`] : ""}`} type={tipo} defaultValue={value}></input>
            }
        </div>
    )
}