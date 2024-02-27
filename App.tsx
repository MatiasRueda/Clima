import SMensaje from "./src/components/smart/SMensaje";
import SPagina from "./src/components/smart/SPagina";
import CiudadContext from "./src/context/CiudadContext";
import EstadoContext from "./src/context/EstadoContext";

export default function App() {
  return (
    <CiudadContext>
      <EstadoContext>
        <SPagina />
        <SMensaje />
      </EstadoContext>
    </CiudadContext>
  );
}
