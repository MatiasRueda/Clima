import { ReactNode, createContext, useContext, useState } from "react";
import { CiudadClima } from "../types/types";
import { buenosAires } from "../auxiliar/ejemplo";

type UseCiudadInicioContext = {
  ciudad?: CiudadClima;
  agregarCiudad: () => Promise<void>;
};

const Ciudad = createContext<undefined | UseCiudadInicioContext>(undefined);

export const useCiudadInicioContext = (): UseCiudadInicioContext => {
  return useContext(Ciudad)!;
};

export default function CiudadInicioContext(props: {
  children: ReactNode;
}): JSX.Element {
  const [ciudad, setCiudad] = useState<CiudadClima>();
  const ciudadInicio = "BuenosAires";

  const agregarCiudad = async (): Promise<void> => {
    const resultado = buenosAires;
    setCiudad(resultado);
  };

  return (
    <Ciudad.Provider value={{ ciudad, agregarCiudad }}>
      {props.children}
    </Ciudad.Provider>
  );
}
