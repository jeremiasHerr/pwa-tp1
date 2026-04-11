import styles from './Header.module.css'
import React from 'react';
import SearchBar from './SearchBar';
import TopBar from './TopBar';
export default function Header(){
    return (
        <div className={styles.header}>
            <TopBar />
        </div>
    );
}