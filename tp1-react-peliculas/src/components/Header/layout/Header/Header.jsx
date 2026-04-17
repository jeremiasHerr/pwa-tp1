import styles from './Header.module.css';
import React from 'react';
import TopBar from '../TopBar/TopBar';

export default function Header( {onFilter} ) {
    return (
        <div className={styles.header}>
            <TopBar onFilter={onFilter}/>
        </div>
    );
}
