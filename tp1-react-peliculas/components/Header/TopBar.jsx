import React from 'react';
import SearchBar from './SearchBar';
import UserControls from './UserControls';

const TopBar = () => {
    return (
        <>
       <div className="flex h-20 w-full items-center justify-between bg-[#10172A]/90 px-8 backdrop-blur-sm sticky top-0 z-40">
            <div className="flex flex-shrink-0 flex-col items-start mr-10">
                <h1 className="text-2xl font-bold text-white tracking-tight leading-none">Dunder Mifflin</h1>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mt-1">
                    PELICULAS DE SCRANTON
                </span>
            </div>
      
        
        <SearchBar />

      <div className="w-64 flex justify-end">
                <UserControls />
            </div>
  </div>
        </>
    );
};

export default TopBar;