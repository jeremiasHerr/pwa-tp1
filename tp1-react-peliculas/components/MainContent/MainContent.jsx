import MediaCardLarge from "../MediaCardLarge/MediaCardLarge";
import MediaCardCompact from "../MediaCardCompact/MediaCardCompact";
import styles from './MainContent.module.css'

export default function MainContent(){
    return (
        <>
            <div className={styles.container}>
                <div className={styles.section}>
                    <div className={styles.sectionTitle}>
                        To Watch
                    </div>
                    <div className={styles.sectionContent}>
                        <MediaCardLarge/>
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