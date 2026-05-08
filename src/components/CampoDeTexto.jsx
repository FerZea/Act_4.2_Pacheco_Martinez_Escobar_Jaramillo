import Label from './Label';

/**
 * Renderiza un campo de texto con su etiqueta.
 *
 * @param {Object} props Propiedades del componente.
 * @param {string} props.etiqueta Texto que aparece arriba del campo.
 * @param {boolean} [props.requerido=false] Indica si el campo se marca como requerido.
 * @param {string} [props.type='text'] Tipo HTML del input.
 * @returns {JSX.Element} Campo de texto para formularios.
 */
function CampoDeTexto({ etiqueta, requerido = false, type = 'text' }) {
  return (
    <label className="campo-texto" data-figma-name="Campo de Texto">
      <Label texto={etiqueta} requerido={requerido} />
      <input type={type} />
    </label>
  );
}

export default CampoDeTexto;
