import styles from './UserAvatar.module.css';

export const UserAvatar = ({ src }) => (
    <div className={styles.avatar}>
        <img src={src} alt="User" className={styles.image} />
    </div>
);
