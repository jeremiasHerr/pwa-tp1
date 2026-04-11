import styles from './FilterDropdown.module.css';

export const FilterDropdown = ({ label, children }) => (
    <button className={styles.button}>
        {label}
        {children}
    </button>
);
