import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import UserControls from '../UserControls/UserControls';
import styles from './TopBar.module.css';

const TopBar = () => {
    return (
        <div className={styles.topbar}>
            <div className={styles.branding}>
                <h1 className={styles.title}>Dunder Mifflin</h1>
                <span className={styles.subtitle}>
                    PELICULAS DE SCRANTON
                </span>
            </div>
            
            <SearchBar />

            <div className={styles.userControlsWrapper}>
                <UserControls />
            </div>
        </div>
    );
};

export default TopBar;
