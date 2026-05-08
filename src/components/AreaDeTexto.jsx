import Label from './Label';

/**
 * Renderiza un area de texto con etiqueta.
 *
 * @param {Object} props Propiedades del componente.
 * @param {string} props.etiqueta Texto que identifica el area de texto.
 * @returns {JSX.Element} Campo amplio para escribir texto.
 */
function AreaDeTexto({ etiqueta }) {
  return (
    <label className="area-texto" data-figma-name="Área de Texto">
      <Label texto={etiqueta} tamano="Mediano" />
      <textarea />
    </label>
  );
}

export default AreaDeTexto;
