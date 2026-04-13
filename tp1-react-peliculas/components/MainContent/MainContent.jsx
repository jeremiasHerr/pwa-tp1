import MediaCardLarge from "../MediaCardLarge/MediaCardLarge";
import MediaCardCompact from "../MediaCardCompact/MediaCardCompact";
import styles from './MainContent.module.css'
import TituloColumna from "../TituloColumnas/TituloColumna";
import DashboardControl from "../DashboardControl/DashboardControl";
import { catalogoBase } from "../../src/data/catalogo"; 

export default function MainContent({vistas, porVer, moverAVisto, eliminarDeLista, moverAPorVer}){
    const pelisPorVer = catalogoBase.filter(item => porVer.includes(item.id));
    const pelisVistas = vistas.length > 0 ? catalogoBase.filter(item => vistas.includes(item.id)):[];
    const cantPorVer = pelisPorVer.length;
    const cantVistas = pelisVistas.length;
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
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}