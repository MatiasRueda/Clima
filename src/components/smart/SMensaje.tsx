import { ActivityIndicator } from "react-native";
import { useEstadoContext } from "../../context/EstadoContext";
import { Fragment } from "react";
import SPantalla from "./SPantalla";

export default function SMensaje(): JSX.Element {
  const estado = useEstadoContext();

  return (
    <Fragment>
      {estado.cargando && (
        <SPantalla>
          {estado.cargando && <ActivityIndicator size={50} color={"#6666ff"} />}
        </SPantalla>
      )}
    </Fragment>
  );
}
