import { ReactNode, createContext, useContext, useState } from "react";

type UseEstadoContext = {
  cargando: boolean;
  error: boolean;
  exito: boolean;
  cambiarCargando: () => void;
  cambiarError: () => void;
  cambiarExito: () => void;
};

const Estado = createContext<undefined | UseEstadoContext>(undefined);

export const useEstadoContext = (): UseEstadoContext => {
  return useContext(Estado)!;
};

export default function EstadoContext(props: {
  children: ReactNode;
}): JSX.Element {
  const [cargando, setCargando] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [exito, setExito] = useState<boolean>(false);

  const cambiarCargando = () => {
    setCargando((prev) => !prev);
  };

  const cambiarError = () => {
    setError((prev) => !prev);
  };

  const cambiarExito = () => {
    setExito((prev) => !prev);
  };

  const value: UseEstadoContext = {
    cargando,
    error,
    exito,
    cambiarCargando,
    cambiarError,
    cambiarExito,
  };

  return <Estado.Provider value={value}>{props.children}</Estado.Provider>;
}
