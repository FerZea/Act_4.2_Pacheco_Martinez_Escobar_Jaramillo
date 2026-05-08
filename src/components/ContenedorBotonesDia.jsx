import ContenedorSecundario from './ContenedorSecundario';
import GridBotonesDias from './GridBotonesDias';

/**
 * Muestra la seccion de dias de clase dentro de un contenedor secundario.
 *
 * @param {Object} props Propiedades del componente.
 * @param {string[]} props.dias Lista de dias que se muestran como botones.
 * @returns {JSX.Element} Seccion con el titulo y el grid de dias.
 */
function ContenedorBotonesDia({ dias }) {
  return (
    <div className="contenedor-botones-dia" data-figma-name="Contenedor-Botones-dia">
      <ContenedorSecundario>
        <h3>Días clase</h3>
        <GridBotonesDias dias={dias} />
      </ContenedorSecundario>
    </div>
  );
}

export default ContenedorBotonesDia;
