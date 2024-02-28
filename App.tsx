import React from "react";
import SMensaje from "./src/components/smart/SMensaje";
import SScreens from "./src/components/smart/SScreens";
import CiudadInicioContext from "./src/context/CiudadInicioContext";
import CiudadContext from "./src/context/CiudadContext";
import EstadoContext from "./src/context/EstadoContext";

export default function App() {
  return (
    <CiudadInicioContext>
      <CiudadContext>
        <EstadoContext>
          <SScreens />
          <SMensaje />
        </EstadoContext>
      </CiudadContext>
    </CiudadInicioContext>
  );
}
