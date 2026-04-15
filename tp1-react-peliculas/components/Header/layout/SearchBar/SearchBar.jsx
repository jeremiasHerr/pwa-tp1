import React from 'react';
import { FilterDropdown } from '../../ui/FilterDropdown/FilterDropdown';
import styles from './SearchBar.module.css';
import { useState } from 'react';
import { useEffect } from 'react';

const SearchBar = ({ onFilter }) => {
  const [valorBusqueda, setValorBusqueda] = useState('');
  const [valorTipo, setValorTipo] = useState('all');
  const [valorGenero, setValorGenero] = useState('all');
  useEffect(() => {
    onFilter?.({ busqueda: valorBusqueda, tipo: valorTipo, genero: valorGenero});
  }, [valorBusqueda, valorTipo, valorGenero]);

  const handleInputChange = (e) => {
    setValorBusqueda(e.target.value);
  }

  const handleTypeChange = (e) => {
    setValorTipo(e.target.value);
  }

  const handleGenreChange = (e) => {
    setValorGenero(e.target.value);
  }

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
        value={valorBusqueda}
        onChange={handleInputChange}
      />

      <div className={styles.filtersWrapper}>
        <FilterDropdown>
          <select name="generos" className={styles.select} value={valorGenero} onChange={handleGenreChange}>
            <option value="all">Todos los géneros</option>
            <option value="Accion">Acción</option>
            <option value="Terror">Terror</option>
            <option value="Comedia">Comedia</option>
            <option value="Romance">Romance</option>
            <option value="Drama">Drama</option>
            <option value="Ciencia Ficción"> Ciencia Ficcion</option>
            <option value="Suspenso">Suspenso</option>
            <option value="Musical">Musical</option>
          </select>
        </FilterDropdown>

        <FilterDropdown>
          <select name="tipos" className={styles.select} value={valorTipo} onChange={handleTypeChange}>
            <option value="all">Todos los tipos</option>
            <option value="movie">Película</option>
            <option value="serie">Serie</option>
          </select>
        </FilterDropdown>

         {/*Estaba pensando que este boton lo podemos poner dentro del searchbar para que sea estetico y guapo xd */}
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
