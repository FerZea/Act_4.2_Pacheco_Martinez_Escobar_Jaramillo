import ContenedorSecundario from './ContenedorSecundario';
import Filtros from './Filtros';

/**
 * Muestra los filtros del calendario dentro de un contenedor secundario.
 *
 * @returns {JSX.Element} Seccion de filtros con titulo y chevron.
 */
function ContenedorFiltros() {
  return (
    <div className="contenedor-filtros" data-figma-name="contenedor-filtros">
      <ContenedorSecundario titulo="Filtros" mostrarChevron>
        <Filtros />
      </ContenedorSecundario>
    </div>
  );
}

export default ContenedorFiltros;
