import { ReactNode, createContext, useContext, useState } from "react";
import { CiudadClima } from "../types/types";

type UseCiudadContext = {
  ciudad?: CiudadClima;
  agregarCiudad: (ciudad: CiudadClima) => void;
  sacarCiudad: () => void;
};

const Ciudad = createContext<undefined | UseCiudadContext>(undefined);

export const useCiudadContext = (): UseCiudadContext => {
  return useContext(Ciudad)!;
};

export default function CiudadContext(props: {
  children: ReactNode;
}): JSX.Element {
  const [ciudad, setCiudad] = useState<CiudadClima>();

  const agregarCiudad = (ciudad: CiudadClima) => {
    setCiudad(ciudad);
  };

  const sacarCiudad = () => {
    setCiudad(undefined);
  };
  const value: UseCiudadContext = {
    ciudad,
    agregarCiudad,
    sacarCiudad,
  };

  return <Ciudad.Provider value={value}>{props.children}</Ciudad.Provider>;
}
