import React from 'react';
import { FilterDropdown } from '../../ui/FilterDropdown/FilterDropdown';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.iconWrapper}>
        <svg className={styles.searchIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      <input
        type="text"
        placeholder="Buscar por titulo o director..."
        className={styles.input}
      />

      <div className={styles.filtersWrapper}>
        <FilterDropdown>
          <select name="generos" className={styles.select}>
            <option value="genero0">Géneros</option>
            <option value="genero1">Acción</option>
            <option value="genero2">Terror</option>
            <option value="genero3">Comedia</option>
            <option value="genero4">Romance</option>
          </select>
        </FilterDropdown>

        <FilterDropdown>
          <select name="tipos" className={styles.select}>
            <option value="tipo0">Tipos</option>
            <option value="tipo1">Película</option>
            <option value="tipo2">Serie</option>
          </select>
        </FilterDropdown>

        <button className={styles.searchButton}>
          <svg className={styles.searchButtonIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
