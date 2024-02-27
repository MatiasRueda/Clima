import SMensaje from "./src/components/smart/SMensaje";
import SNavigation from "./src/components/smart/SNavigation";
import CiudadContext from "./src/context/CiudadContext";
import EstadoContext from "./src/context/EstadoContext";

export default function App() {
  return (
    <CiudadContext>
      <EstadoContext>
        <SNavigation />
        <SMensaje />
      </EstadoContext>
    </CiudadContext>
  );
}
