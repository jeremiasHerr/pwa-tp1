import styles from "./Formulario.module.css";
import InfoPeli from "../InfoPeli/InfoPeli";
import { X, Clapperboard, TvMinimalPlay, Form, Save} from "lucide-react";
import FormInput from "../FormInput/FormInput";
import {useEffect, useState } from "react";
import BotonCerrarModal from "../BotonCerrarModal/BotonCerrarModal";

export default function Formulario({mostrarFormulario, agregarObraVista,agregarObraPorVer}) {
    const opcionesGenero = ["Acción","Animación","Aventura","Ciencia Ficción","Comedia","Crimen","Documental",
      "Drama","Familiar","Fantasía","Misterio","Romance","Suspenso","Terror",];
    
    const [tipoSeleccionado, setTipo] = useState("");
    const [errores, setErrores] = useState({})
    useEffect(() => {
        if (Object.keys(errores).length > 0) {
        const temporizador = setTimeout(() => {
            setErrores({});
        }, 3000);
        return () => clearTimeout(temporizador);
        }
    }, [errores]);
    const manejarEnvio = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const titulos = JSON.parse(localStorage.getItem("titulos"));
        const id = titulos.length > 0 ? (titulos.length+1).toString() : "1";
        const erroresAux = {};
        const titulo = formData.get("titulo")?.toString().trim() || "";
        const anio = formData.get("anio")?.toString().trim() || "";
        const director = formData.get("director")?.toString().trim() || "";
        const poster = formData.get("poster")?.toString().trim() || "";
        const puntuacion = formData.get("puntuacion")?.toString().trim() || "";
        const categoria = tipoSeleccionado;
        if (!titulo) erroresAux.titulo = true;
        if (!anio) erroresAux.anio = true;
        if (!director) erroresAux.director = true;
        if (!poster) erroresAux.poster = true;
        if (!puntuacion) erroresAux.puntuacion = true;
        if (!tipoSeleccionado) erroresAux.tipo = true;
        if (!categoria) erroresAux.categoria = true;
        //Si tiene errores cortamos
        if (Object.keys(erroresAux).length > 0 ){
            setErrores(erroresAux);
            return;
        }
        setErrores({});
        const nuevaPelicula = {
            id: id, 
            tipo: tipoSeleccionado,
            titulo: formData.get("titulo").trim() === "" ? erroresAux.titulo=true : formData.get("titulo").trim(), 
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
            agregarObraPorVer(id);
        }
        mostrarFormulario(false);
    };
    return (
        <div className={styles.modalCompleto}>
            <form className={styles.formLayout} onSubmit={manejarEnvio}>
            <div className={styles.containerTitulo}>
                <p>Subir titulo</p>
                <BotonCerrarModal cerrarModal={() => mostrarFormulario(false)}/>
            </div>
            <div className={styles.containerTipoContenido}>
                <fieldset>
                    <legend>
                        <InfoPeli texto="TIPO DE CONTENIDO" compacta="true" />
                    </legend>
                    <div className={styles.containerBtns}>
                        <button type="button" onClick={() => setTipo("movie")} className={`${styles.btnTipoContenido} ${tipoSeleccionado === "movie" ? styles.btnTipoContenidoActive:""} ${errores.categoria ? styles.inputErrorCategoria : ""}`}>
                            <Clapperboard />
                            <p>Pelicula</p>
                        </button>
                        <button type="button" onClick={() => setTipo("serie")} className={`${styles.btnTipoContenido} ${tipoSeleccionado === "serie" ? styles.btnTipoContenidoActive:""} ${errores.categoria ? styles.inputErrorCategoria : ""}`}>
                            <TvMinimalPlay />
                            <p>Serie</p>
                        </button>
                    </div>
                </fieldset>
            </div>
            <div className={styles.containerInputs}>
                <div className={styles.primerColumnaInput}>
                    <FormInput error={errores.titulo} nombre="titulo" value="" label="TITULO"/>
                </div>
                <div className={styles.columnaSelect}>
                    <FormInput error={errores.anio} nombre="anio" value="" label="AÑO" tipo="number"/>
                </div>
            </div>
            <div className={styles.containerInputs}>
                <div className={styles.primerColumnaInput}>
                    <FormInput error={errores.director} nombre="director" value="" label="DIRECTOR"/>
                </div>
                <div className={styles.columnaSelect}>
                    <FormInput error={errores.genero} nombre="genero" label="GENERO" esSelect="true" opciones={opcionesGenero}/>
                </div>
            </div>
            <div className={styles.containerInputs}>
                <div className={styles.primerColumnaInput}>
                    <FormInput error={errores.poster} nombre="poster" value="" label="URL DEL POSTER"/>
                </div>
                <div className={styles.columnaSelect}>
                    <FormInput error={errores.puntuacion} nombre="puntuacion" min={1} max={10} label="PUNTUACIÓN" tipo="number"/>
                </div>
            </div>
            <div className={styles.columnaRadio}>
                <FormInput error={errores.categoria} nombre="vista" value="ya-vista" tipo="radio" label="YA VISTA"/>
                <FormInput error={errores.categoria} nombre="vista" value="por-ver" tipo="radio" label="POR VER"/>
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
