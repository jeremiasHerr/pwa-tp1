import MediaCardLarge from "../MediaCardLarge/MediaCardLarge";
import MediaCardCompact from "../MediaCardCompact/MediaCardCompact";
import styles from './MainContent.module.css'
import { catalogoBase } from "../../src/data/catalogo";

export default function MainContent({vistas, porVer}){
    return (
        <>
            <div className={styles.container}>
                <div className={styles.section}>
                    <div className={styles.sectionTitle}>
                        To Watch
                    </div>
                    <div className={styles.sectionContent}>
                        {
                            catalogoBase.map((item) => (
                                <MediaCardLarge
                                    key={item.id}
                                    poster={item.poster}
                                    genero={item.genre}
                                    anio={item.year}
                                    tipo={item.type}
                                    titulo={item.title}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className={styles.section}>
                    <div className={styles.sectionTitle}>
                        Watched
                    </div>
                    <div className={styles.watchedContent}>
                        <MediaCardCompact/>
                    </div>
                </div>
            </div>
        </>
    );
}