import { useState } from "react";
import styles from './EditarTit.module.css';

export default function EditarTitulo({ peliculaAEditar, AlGuardar, alCancelar }) {
    const [form, setForm] = useState({ ...peliculaAEditar });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const catalogo = JSON.parse(localStorage.getItem('titulos')) || [];
        const nuevoCatalogo = catalogo.map(item => item.id === form.id ? form : item);

        localStorage.setItem('titulos', JSON.stringify(nuevoCatalogo));
        AlGuardar();
    };

    return (
        <form onSubmit={handleSubmit} className={styles.formContainer}>
            <h2 className={styles.title}>Editar Película</h2>
            
            <div className={styles.formGroup}>
                <label>Título</label>
                <input 
                    type="text"
                    name="title" 
                    value={form.title || ''} 
                    onChange={handleChange}
                    required
                />
            </div>

            <div className={styles.formGroup}>
                <label>Director</label>
                <input 
                    type="text"
                    name="director" 
                    value={form.director || ''} 
                    onChange={handleChange}
                    required
                />
            </div>

            <div className={styles.formRow}>
                <div className={styles.formGroup}>
                    <label>Año</label>
                    <input 
                        type="number"
                        name="year" 
                        value={form.year || ''} 
                        onChange={handleChange}
                        required
                    />
                </div>
                
                <div className={styles.formGroup}>
                    <label>Género</label>
                    <input 
                        type="text"
                        name="genre" 
                        value={form.genre || ''} 
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            <div className={styles.formRow}>
                <div className={styles.formGroup}>
                    <label>Calificación</label>
                    <input 
                        type="number"
                        step="0.1"
                        min="0"
                        max="10"
                        name="rating" 
                        value={form.rating || ''} 
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>Tipo</label>
                    <select 
                        name="type" 
                        value={form.type || 'movie'} 
                        onChange={handleChange}
                        required
                    >
                        <option value="movie">Película</option>
                        <option value="serie">Serie</option>
                    </select>
                </div>
            </div>

            <div className={styles.formGroup}>
                <label>URL del Póster</label>
                <input 
                    type="url"
                    name="poster" 
                    value={form.poster || ''} 
                    onChange={handleChange}
                    required
                />
            </div>

            <div className={styles.buttonGroup}>
                <button type="submit" className={styles.btnGuardar}>Guardar</button>
                <button type="button" onClick={alCancelar} className={styles.btnCancelar}>Cancelar</button>
            </div>
        </form>
    );
}