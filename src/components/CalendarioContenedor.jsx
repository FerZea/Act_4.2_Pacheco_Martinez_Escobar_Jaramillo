import Calendario from './Calendario';
import ContenedorSecundario from './ContenedorSecundario';

/**
 * Envuelve el calendario dentro del contenedor secundario del diseno.
 *
 * @param {Object} props Propiedades del componente.
 * @param {string[]} props.dias Lista de dias que recibe el calendario.
 * @returns {JSX.Element} Contenedor con titulo y calendario.
 */
function CalendarioContenedor({ dias }) {
  return (
    <div className="calendario-contenedor" data-figma-name="Calendario-Contenedor">
      <ContenedorSecundario titulo="Calendario" className="contenedor-secundario--sin-borde-redondo">
        <Calendario dias={dias} />
      </ContenedorSecundario>
    </div>
  );
}

export default CalendarioContenedor;
