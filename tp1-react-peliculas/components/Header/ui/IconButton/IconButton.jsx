import styles from './IconButton.module.css';

export const IconButton = ({ children, hasNotificacion }) => (
    <button className={styles.button}>
        {children}
        {hasNotificacion && (
            <span className={styles.notification}></span>
        )}
    </button>
);
