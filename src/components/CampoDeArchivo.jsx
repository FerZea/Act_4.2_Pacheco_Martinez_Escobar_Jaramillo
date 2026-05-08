import Icono from './Icono';

/**
 * Muestra el area visual para subir o seleccionar un archivo.
 *
 * @returns {JSX.Element} Contenedor con icono de archivo en la gestion offline.
 */
function CampoDeArchivo() {
  return (
    <div className="campo-archivo" data-figma-name="Campo de Archivo">
      <Icono nombre="cloud-saving" />
    </div>
  );
}

export default CampoDeArchivo;
