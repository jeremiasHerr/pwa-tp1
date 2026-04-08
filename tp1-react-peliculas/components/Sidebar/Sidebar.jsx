import NavItem from './navItems';
import { MENU_ITEMS } from '../../src/constants/navegacion';
import { useState } from 'react';

export default function Sidebar(){
    const [activeTab, setActiveTab] = useState('home');

    //estos datos estan solamente para ver la visualizacion, cambiarlo luego para el conteo
    const generos = [
        {id: 1, nombre: 'Ciencia-ficcion', count: 84, color: 'text-indigo-400'},
        {id: 2, nombre: 'Drama', count: 56, color: 'text-rose-400'},
        {id: 3, nombre: 'Terror', count: 32, color: 'text-orange-400'}
    ];

    return (
            <div className="flex flex-col h-screen w-64 bg-[#0a0d1f] p-4 font-sans border-white/5 ">
                {/*Navegacion principal */}
                <nav className="space-y-1 mb-8">
                    {MENU_ITEMS.map((item) => (
                        <NavItem
                            key={item.id}
                            etiqueta={item.etiqueta} 
                            estaActivo={activeTab === item.id}
                            onClick={() => setActiveTab(item.id)}
                            />
                    ))}
                </nav>

                {/*barra del contador de generos */}
                <div className="mt-auto mb-6 px-4">
                    <h3 className="text-[10px] font-bold text-gray-500 uppercase trackin-[0.2em] mb-4">
                        Cantidad de items por genero
                    </h3>
                    <div className="space-y-3">
                        {generos.map((genero) => (
                            <div key={genero.id}
                                 className="flex justify-between items-center text-sm text-gray-400"
                            >
                                <span>{genero.nombre}</span>
                                <span className={`font-mono font-bold ${genero.color}`}>
                                    {genero.count}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/*Boton para agregar titulos */}
                <button className="flex items-center justofy-center gap-2 bg-[#ff7d54] hover:bg[#ff6b3d] text-[#0a0d1f] font-bold py-3 px-4 rounded-xl transition-transform active:scale-95 mb-10">
                    <span className="text-xl">+</span>
                    <span>Agregar Titulo</span>
                </button>

                {/*footer*/}
                <div className="space-y-1 border-t border-white/5 pt-6">
                    <NavItem 
                        etiqueta="Settings"
                        estaActivo={activeTab === 'settings'}
                        onClick={() => setActiveTab('settings')}
                    />
                    <NavItem 
                        etiqueta="Help"
                        estaActivo={activeTab === 'help'}
                    />
                </div>
            </div>
    );
}   


