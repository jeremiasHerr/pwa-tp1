import { useEffect } from 'react';
import { catalogoBase } from '../../src/data/catalogo';

const DataLoader = () => {
    useEffect(()=> {
        const titulosExistentes = localStorage.getItem('titulos');

        if (!titulosExistentes) {
            localStorage.setItem('titulos', JSON.stringify(catalogoBase));
            console.log('Catalogo inicial cargado con exito');
        }
    }, []);

    return null;
};

export default DataLoader;
