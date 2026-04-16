import styles from "./Formulario.module.css";
import InfoPeli from "../InfoPeli/InfoPeli";
import { X, Clapperboard, TvMinimalPlay, Form, Save} from "lucide-react";
import FormInput from "../FormInput/FormInput";
import { useState } from "react";

export default function Formulario({mostrarFormulario, agregarObraVista,agregarObraPorVer}) {
    const opcionesGenero = [
      "Acción",
      "Animación",
      "Aventura",
      "Ciencia Ficción",
      "Comedia",
      "Crimen",
      "Documental",
      "Drama",
      "Familiar",
      "Fantasía",
      "Misterio",
      "Romance",
      "Suspenso",
      "Terror",
    ];

    const [tipoSeleccionado, setTipo] = useState("");

    const manejarEnvio = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const titulos = JSON.parse(localStorage.getItem("titulos"));
        const id = titulos.length > 0 ? (titulos.length+1).toString() : "1";
        const nuevaPelicula = {
            id: id, 
            tipo: tipoSeleccionado,
            titulo: formData.get("titulo"), 
            anio: formData.get("anio"),
            director: formData.get("director"),
            poster: formData.get("poster"),
            puntuacion: formData.get("puntuacion"),
            genero: formData.get("genero")
        }
    

        const titulosUsuario = JSON.parse(localStorage.getItem("titulos"));
        titulosUsuario.push(nuevaPelicula);
        localStorage.setItem("titulos", JSON.stringify(titulosUsuario))
        
        if(formData.get("vista")==="ya-vista"){
           
            agregarObraVista(id);
        } else if(formData.get("vista")==="por-ver") {
             console.log("asd");
            agregarObraPorVer(id);
        }
        mostrarFormulario(false);
    };
    return (
        <div className={styles.modalCompleto}>
            <form className={styles.formLayout} onSubmit={manejarEnvio}>
            <div className={styles.containerTitulo}>
                <p>Subir titulo</p>
                <button onClick={() => mostrarFormulario(false)} type="button" className={styles.btnCerrar}>
                    <X/>
                </button>
            </div>
            <div className={styles.containerTipoContenido}>
                <fieldset>
                    <legend>
                        <InfoPeli texto="TIPO DE CONTENIDO" compacta="true" />
                    </legend>
                    <div className={styles.containerBtns}>
                        <button type="button" onClick={() => setTipo("movie")} className={`${styles.btnTipoContenido} ${tipoSeleccionado === "movie" ? styles.btnTipoContenidoActive:""}`}>
                            <Clapperboard />
                            <p>Pelicula</p>
                        </button>
                        <button type="button" onClick={() => setTipo("serie")} className={`${styles.btnTipoContenido} ${tipoSeleccionado === "serie" ? styles.btnTipoContenidoActive:""}`}>
                            <TvMinimalPlay />
                            <p>Serie</p>
                        </button>
                    </div>
                </fieldset>
            </div>
            <div className={styles.containerInputs}>
                <div className={styles.primerColumnaInput}>
                    <FormInput nombre="titulo" value="" label="TITULO"/>
                </div>
                <div className={styles.columnaSelect}>
                    <FormInput nombre="anio" value="" label="AÑO" tipo="number"/>
                </div>
            </div>
            <div className={styles.containerInputs}>
                <div className={styles.primerColumnaInput}>
                    <FormInput nombre="director" value="" label="DIRECTOR"/>
                </div>
                <div className={styles.columnaSelect}>
                    <FormInput nombre="genero" label="GENERO" esSelect="true" opciones={opcionesGenero}/>
                </div>
            </div>
            <div className={styles.containerInputs}>
                <div className={styles.primerColumnaInput}>
                    <FormInput nombre="poster" value="" label="URL DEL POSTER"/>
                </div>
                <div className={styles.columnaSelect}>
                    <FormInput nombre="puntuacion" min={1} max={10} label="PUNTUACIÓN" tipo="number"/>
                </div>
            </div>
            <div className={styles.columnaRadio}>
                <FormInput nombre="vista" value="ya-vista" tipo="radio" label="YA VISTA"/>
                <FormInput nombre="vista" value="por-ver" tipo="radio" label="POR VER"/>
            </div>
            <div className={styles.containerSubmit}>
                <button className={styles.btnGuardar} type="submit">
                    <Save className={styles.iconSave}/>
                    <p>Guardar Obra</p>
                </button>
            </div>
        </form>
        </div>
    );
}
