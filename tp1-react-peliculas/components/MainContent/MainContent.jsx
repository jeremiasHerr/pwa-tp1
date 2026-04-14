import MediaCardLarge from "../MediaCardLarge/MediaCardLarge";
import MediaCardCompact from "../MediaCardCompact/MediaCardCompact";
import styles from './MainContent.module.css'
import TituloColumna from "../TituloColumnas/TituloColumna";
import DashboardControl from "../DashboardControl/DashboardControl"; 

export default function MainContent({vistas, porVer, moverAVisto, eliminarDeLista, moverAPorVer, catalogoCompleto, catalogoFiltrado, alEditar}){
   const pelisPorVer = catalogoCompleto.filter(item => porVer.map(String).includes(String(item.id)));
    const pelisVistas = vistas.length > 0 ? catalogoCompleto.filter(item => vistas.includes(item.id)) : [];
    const cantPorVer = pelisPorVer.length;
    const cantVistas = pelisVistas.length;

    if (catalogoCompleto.length ===0) {
        return <p style={{color: "white", textAlign: "center"}}>Cargando catalogo</p>
    }
    return (
        <>
            <div className={styles.container}>
                <DashboardControl/>
                <div className={styles.section}>
                    <div className={styles.sectionTitle}>
                        <TituloColumna texto="Por Ver" cantidad={cantPorVer}/>
                    </div>
                    <div className={styles.sectionContent}>
                        {
                            pelisPorVer.map((item) => (
                                <MediaCardLarge
                                    key={item.id}
                                    id={item.id}
                                    poster={item.poster}
                                    genero={item.genre}
                                    anio={item.year}
                                    tipo={item.type}
                                    titulo={item.title}
                                    moverAVisto={moverAVisto}
                                    eliminarDeLista={eliminarDeLista}
                                    alEditar={() => alEditar(item)}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className={styles.section}>
                    <div className={styles.sectionTitle}>
                        <TituloColumna texto="Vistas" cantidad={cantVistas}/>
                    </div>
                    <div className={styles.watchedContent}>
                        {
                            pelisVistas.map((item) => (
                                <MediaCardCompact
                                    key={item.id}
                                    id={item.id}
                                    poster={item.poster}
                                    genero={item.genre}
                                    anio={item.year}
                                    tipo={item.type}
                                    titulo={item.title}
                                    puntuacion={item.rating}
                                    eliminarDeLista={eliminarDeLista}
                                    moverAPorVer={moverAPorVer}
                                    alEditar={() => alEditar(item)}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}