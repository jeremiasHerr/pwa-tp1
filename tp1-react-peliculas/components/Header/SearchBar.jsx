import React from 'react';
import { FilterDropdown } from './FilterDropdown.jsx';

const SearchBar = () => {

  return (
    <>
      <div className="relative w-full max-w-xl mx-auto">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
          <svg className="w-4.5 h-4.5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <input
          type="text"
          placeholder="Buscar por titulo o director..."
          className="w-full bg-[#1e293b]/80 text-[13px] text-slate-100 pl-11 pr-48 py-3 rounded-xl border border-transparent focus:border-indigo-600 outline-none"
        />

        <div className="absolute inset-y-0 right-0 flex items-center pr-3 gap-2">
          <FilterDropdown >
            <select name="generos">
              <option value="genero0">Generos</option>
              <option value="genero1">Accion</option>
              <option value="genero2">Terror</option>
              <option value="genero3">Comedia</option>
              <option value="genero4">Romance</option>
            </select>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
          </FilterDropdown>

          <FilterDropdown>
            <select name="tipos">
              <option value="tipo0">Tipos</option>
              <option value="tipo1">Pelicula</option>
              <option value="tipo2">Serie</option>
            </select>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7" />
          </FilterDropdown>
          <button className="p-2 ml-1 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-all shadow-md active:scale-95 group">
            <svg className="w-4.5 h-4.5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

        </div>
      </div>
    </>
  );
};
export default SearchBar;