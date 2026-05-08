import Boton from './Boton';

/**
 * Renderiza los botones que representan dias de clase.
 *
 * @param {Object} props Propiedades del componente.
 * @param {string[]} props.dias Lista de dias que se mostraran como botones.
 * @returns {JSX.Element} Grid con botones de dias.
 */
function GridBotonesDias({ dias }) {
  return (
    <div className="grid-botones-dias" data-figma-name="grid-botones dias">
      {dias.map((dia, index) => (
        <Boton key={`${dia}-${index}`} tamano="Mediano">
          {dia}
        </Boton>
      ))}
    </div>
  );
}

export default GridBotonesDias;
