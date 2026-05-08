/**
 * Muestra una etiqueta de campo con opcion para indicar que es requerido.
 *
 * @param {Object} props Propiedades del componente.
 * @param {string} props.texto Texto principal de la etiqueta.
 * @param {boolean} [props.requerido=false] Indica si se muestra la marca de requerido.
 * @param {string} [props.tamano='Grande'] Tamano visual de la etiqueta.
 * @returns {JSX.Element} Etiqueta para campos del formulario.
 */
function Label({ texto, requerido = false, tamano = 'Grande' }) {
  return (
    <div className={`label label--${tamano.toLowerCase()}`} data-figma-name="Label">
      <span>{texto}</span>
      {requerido && <small>Requerido</small>}
    </div>
  );
}

export default Label;
