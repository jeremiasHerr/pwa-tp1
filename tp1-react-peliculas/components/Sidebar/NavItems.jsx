
import React from 'react';
import styles from './Sidebar.module.css';

const NavItem = ({icon, etiqueta, estaActivo, onClick, icono}) => {
    return (
        <div onClick={onClick}
            className={`${styles.navItem}
                ${estaActivo ? styles.active : styles.inactive}
            `}
        >
            {/*agregar icon luego*/}
            {icon && <div className={styles.iconContainer}>
                <img 
                                src={icono} 
                                //className={styles.iconoImagen}
                                alt={etiqueta} 
                                ></img></div>}
            <span className={styles.navText}>{etiqueta}</span>
        </div>
    );
};
export default NavItem;