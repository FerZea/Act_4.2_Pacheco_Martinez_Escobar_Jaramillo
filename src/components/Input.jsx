import Boton from './Boton';
import Label from './Label';

/**
 * Muestra un campo tipo selector con etiqueta y valor visible.
 *
 * @param {Object} props Propiedades del componente.
 * @param {string} props.etiqueta Texto que identifica el selector.
 * @param {string} props.valor Texto que se muestra dentro del selector.
 * @param {boolean} [props.requerido=false] Indica si el selector se marca como requerido.
 * @returns {JSX.Element} Selector visual usado en formularios y filtros.
 */
function Input({ etiqueta, valor, requerido = false }) {
  return (
    <label className="input-select" data-figma-name="Input">
      <Label texto={etiqueta} requerido={requerido} tamano="Mediano" />
      <button className="input-select__button" type="button">
        <span>{valor}</span>
        <Boton soloIcono tamano="Chico" icono="chevron-up" ariaLabel={`Abrir ${etiqueta}`} />
      </button>
    </label>
  );
}

export default Input;
