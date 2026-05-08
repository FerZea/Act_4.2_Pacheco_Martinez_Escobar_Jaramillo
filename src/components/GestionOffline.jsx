import Boton from './Boton';
import CampoDeArchivo from './CampoDeArchivo';
import ContenedorSecundario from './ContenedorSecundario';

/**
 * Muestra las acciones relacionadas con la gestion offline.
 *
 * @returns {JSX.Element} Seccion con boton de descarga y campo de archivo.
 */
function GestionOffline() {
  return (
    <div className="gestion-offline" data-figma-name="Gestiòn offline">
      <ContenedorSecundario titulo="Gestión offline">
        <div className="gestion-offline__opciones" data-figma-name="opciones offline">
          <Boton variante="Descarga">Descargar formato offline</Boton>
          <CampoDeArchivo />
        </div>
      </ContenedorSecundario>
    </div>
  );
}

export default GestionOffline;
