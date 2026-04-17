<h1>Programacion Web Avanzada 2026</h1>
<h3>Integrantes: </h3>
<ul>
  <li>Jeremias Ezequiel Herrera | FAI-3297</li>
  <li>Tomas Mengon Muñoz | FAI-3863</li>
  <li>Dana Garcia | FAI-3974</li>
</ul>

<h3>Instrucciones de instalación:</h3>
<p>Antes de comenzar, es necesario contar con Node.js y Git instalados en el sistema.</p>
<ol>
  <li>
    <strong>Clonar el repositorio:</strong> Descargá el código en tu máquina local usando la terminal.
    <pre><code>git clone https://github.com/jeremiasHerr/pwa-tp1</code></pre>
  </li>
  <li>
    <strong>Ingresar a la carpeta del proyecto:</strong> Es fundamental posicionarse en el directorio correcto donde reside el código de React.
    <pre><code>cd tp1-react-peliculas</code></pre>
  </li>
  <li>
    <strong>Instalar las dependencias:</strong> Descargá todas las librerías necesarias ejecutando el siguiente comando:
    <pre><code>npm install</code></pre>
  </li>
  <li>
    <strong>Levantar el servidor de desarrollo:</strong> Iniciá el entorno local de Vite para ver los cambios en tiempo real.
    <pre><code>npm run dev</code></pre>
  </li>
  <li>
    <strong>Visualizar la aplicación:</strong> Abrí tu navegador web e ingresá a la ruta indicada en la terminal (usualmente <code>http://localhost:5173</code>).
  </li>
</ol>

<h3>Funcionamiento de los archivos: </h3>
<p>La arquitectura del proyecto está basada en componentes funcionales de React, gestionada y optimizada con Vite. El flujo de trabajo se centra en la modularidad y la encapsulación:</p>
<ul>
  <li>
    <strong><code>src/main.jsx</code> y <code>src/App.jsx</code>:</strong> Punto de entrada de la aplicación. Se encargan de la inicialización de React y de orquestar la estructura general de la interfaz.
  </li>
  <li>
    <strong><code>src/components/</code>:</strong> Aloja los bloques de construcción reutilizables (como modales, botones y campos de formulario personalizados).
  </li>
  <li>
    <strong><code>src/pages/</code>:</strong> Contiene las vistas principales (en este caso Home) que se encargan de ensamblar los componentes pequeños y manejar la lógica de estado general.
  </li>
  <li>
    <strong>Módulos de Estilos (CSS Modules):</strong> Los estilos se manejan mediante archivos <code>.module.css</code> locales por componente. Esto garantiza que las clases (animaciones, bordes, layouts) queden encapsuladas y no generen conflictos globales en la aplicación.
  </li>
  <li>
    <strong>Manejo de Datos:</strong> La interacción del usuario con los formularios (como agregar o editar obras) se captura mediante <code>FormData</code> para evitar re-renderizados innecesarios, aplicando validaciones mediante el ciclo de vida de React (<code>useEffect</code> y <code>useState</code>).
  </li>
</ul>
