
import React from 'react';
import SearchBar from './SearchBar';
import TopBar from './TopBar';
export default function Header(){
    return (
        <>
            <div className="h-20 bg-[#10172A] shadow-md flex items-center px-0 z-10 shrink-0">
                <TopBar />
            </div>
        </>
    );
}