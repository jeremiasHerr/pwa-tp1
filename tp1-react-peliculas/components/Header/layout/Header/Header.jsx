import styles from './Header.module.css';
import React from 'react';
import TopBar from '../TopBar/TopBar';

export default function Header() {
    return (
        <div className={styles.header}>
            <TopBar />
        </div>
    );
}
