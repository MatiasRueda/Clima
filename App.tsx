import SMensaje from "./src/components/smart/SMensaje";
import EstadoContext from "./src/context/EstadoContext";
import Inicio from "./src/page/Inicio";

export default function App() {
  return (
    <EstadoContext>
      <Inicio />
      <SMensaje />
    </EstadoContext>
  );
}
