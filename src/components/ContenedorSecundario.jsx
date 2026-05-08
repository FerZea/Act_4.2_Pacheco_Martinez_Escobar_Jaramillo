import Boton from './Boton';

/**
 * Contenedor reutilizable para secciones con titulo, contenido y chevron opcional.
 *
 * @param {Object} props Propiedades del componente.
 * @param {string} [props.titulo] Titulo que se muestra en la parte superior.
 * @param {import('react').ReactNode} props.children Contenido interno de la seccion.
 * @param {boolean} [props.mostrarChevron=false] Indica si se muestra el boton de chevron.
 * @param {string} [props.className=''] Clase CSS adicional para ajustar estilos.
 * @returns {JSX.Element} Seccion visual reutilizable.
 */
function ContenedorSecundario({ titulo, children, mostrarChevron = false, className = '' }) {
  return (
    <section className={`contenedor-secundario ${className}`} data-figma-name="Contenedor-Secundario">
      {titulo && (
        <div className="contenedor-secundario__header" data-figma-name="Header">
          <h2>{titulo}</h2>
          {mostrarChevron && <Boton soloIcono icono="chevron-up" ariaLabel={`Alternar ${titulo}`} />}
        </div>
      )}

      <div className="contenedor-secundario__contenido" data-figma-name="Conenido">
        {children}
      </div>
    </section>
  );
}

export default ContenedorSecundario;
