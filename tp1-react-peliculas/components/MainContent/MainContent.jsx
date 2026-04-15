import MediaCardLarge from "../MediaCardLarge/MediaCardLarge";
import MediaCardCompact from "../MediaCardCompact/MediaCardCompact";
import styles from './MainContent.module.css'
import TituloColumna from "../TituloColumnas/TituloColumna";
import DashboardControl from "../DashboardControl/DashboardControl";
import { useMemo } from "react";

export default function MainContent({vistas, porVer, moverAVisto, eliminarDeLista, moverAPorVer}){
    const obrasUsuario = useMemo(() => {
      const catalogo = JSON.parse(localStorage.getItem("titulos")) || [];

      const filtradasPorVer = catalogo.filter((item) =>
        porVer.includes(item.id),
      );
      const filtradasVistas =
        vistas.length > 0
          ? catalogo.filter((item) => vistas.includes(item.id))
          : [];
      console.log("3. MainContent: Recibí la orden. Leyendo localStorage...");
      console.log(filtradasPorVer)
      return {
        pelisPorVer: filtradasPorVer,
        pelisVistas: filtradasVistas,
      };
    }, [porVer, vistas]);

    const cantPorVer = obrasUsuario.pelisPorVer.length;
    const cantVistas = obrasUsuario.pelisVistas.length;
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
                            obrasUsuario.pelisPorVer.map((item) => (
                                <MediaCardLarge
                                    key={item.id}
                                    id={item.id}
                                    poster={item.poster}
                                    genero={item.genero}
                                    anio={item.anio}
                                    tipo={item.tipo}
                                    titulo={item.titulo}
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
                            obrasUsuario.pelisVistas.map((item) => (
                                <MediaCardCompact
                                    key={item.id}
                                    id={item.id}
                                    poster={item.poster}
                                    genero={item.genero}
                                    anio={item.anio}
                                    tipo={item.tipo}
                                    titulo={item.titulo}
                                    puntuacion={item.puntuacion}
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