import React from 'react';

const NavItem = ({icon, etiqueta, estaActivo, onClick}) => {
    return (
        <div onClick={onClick}
            className={`flex items-center gap-4 px-4 py-3 rounded-lg cursor-pointed transition-all duration-200
                ${estaActivo ? 'bg-white/5 text-white border-l-4 border-orange-500 rounded-l-none' : 'text-gray-400 hover:bg-white/5 hover:text-withe'}`}
        >
            {/*agregar icon luego*/}
            {icon && <div className="flex-shrink-0">{icon}</div>}
            <span className="font-medium text-[15px]">{etiqueta}</span>
        </div>
    );
};
export default NavItem;