import React from "react";
import SEstado from "./src/components/smart/SEstado";
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
          <SEstado />
        </EstadoContext>
      </CiudadContext>
    </CiudadInicioContext>
  );
}
