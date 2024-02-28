import { ReactNode, createContext, useContext, useState } from "react";

type UseEstadoContext = {
  cargando: boolean;
  error?: string;
  exito: boolean;
  cambiarCargando: () => void;
  agregarMensajeError: (mensaje: string) => void;
  sacarError: () => void;
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
  const [error, setError] = useState<string>();
  const [exito, setExito] = useState<boolean>(false);

  const cambiarCargando = () => {
    setCargando((prev) => !prev);
  };

  const agregarMensajeError = (mensaje: string) => {
    setError(mensaje);
  };

  const sacarError = () => {
    setError(undefined);
  };
  const cambiarExito = () => {
    setExito((prev) => !prev);
  };

  const value: UseEstadoContext = {
    cargando,
    error,
    exito,
    cambiarCargando,
    agregarMensajeError,
    sacarError,
    cambiarExito,
  };

  return <Estado.Provider value={value}>{props.children}</Estado.Provider>;
}
