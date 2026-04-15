import MediaCardLarge from "../MediaCardLarge/MediaCardLarge";
import MediaCardCompact from "../MediaCardCompact/MediaCardCompact";
import styles from './MainContent.module.css'
import TituloColumna from "../TituloColumnas/TituloColumna";
import DashboardControl from "../DashboardControl/DashboardControl";
import { useMemo } from "react";
import StatisticsCard from "../StatiticsCard/StatisticCard";

export default function MainContent({ vistas, porVer, moverAVisto, eliminarDeLista, moverAPorVer, catalogoCompleto, catalogoFiltrado, alEditar }) {
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
  
    const titulosPorVer = catalogoCompleto.filter(item => porVer.map(String).includes(String(item.id)));
    const titulosVistos = vistas.length > 0 ? catalogoCompleto.filter(item => vistas.includes(item.id)) : [];
    const cantPorVer = obrasUsuario.pelisPorVer.length;
    const cantVistas = obrasUsuario.pelisVistas.length; //cambiar por titulos!
    const totalTitulos = catalogoCompleto.length;
    const totalSeriesVistas = (titulosVistos.filter(item => item.tipo == "serie")).length;
    const totaltitulosVistos = (titulosVistos.filter(item => item.tipo == "movie")).length;


    if (catalogoCompleto.length === 0) {
        return <p style={{ color: "white", textAlign: "center" }}>Cargando catalogo</p>
    }
    return (
        <>
            <div className={styles.container}>
                <div style={{ display: "flex", gap: "7rem", marginBottom: "2rem", width: "200px" }}>
                    <div style={{minWidth: "400px"}}>
                        <StatisticsCard
                            nombreCard="Total de titulos"
                            imagen="https://img.icons8.com/ios/50/818cf8/film-reel--v1.png"
                            contador={totalTitulos}
                            colorClase="indigo"

                        />
                    </div>

                    <div style={{minWidth: "400px"}}>
                        <StatisticsCard

                            nombreCard="Peliculas Vistas"
                            imagen="https://img.icons8.com/ios/50/fb7185/eye-checked.png"
                            contador={totaltitulosVistos}
                            colorClase="rosa"
                        />
                    </div>

                    <div style={{minWidth: "400px"}}>
                        <StatisticsCard

                            nombreCard="Series Vistas"
                            imagen="https://img.icons8.com/ios/50/FB923C/eye-checked.png"
                            contador={totalSeriesVistas}
                            colorClase="naranja"
                        />
                    </div>

                </div>

                
                <DashboardControl

                />
                <div className={styles.section}>
                    <div className={styles.sectionTitle}>
                        <TituloColumna texto="Por Ver" cantidad={cantPorVer} />
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
                                    alEditar={() => alEditar(item)}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className={styles.section}>
                    <div className={styles.sectionTitle}>
                        <TituloColumna texto="Vistas" cantidad={cantVistas} />
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