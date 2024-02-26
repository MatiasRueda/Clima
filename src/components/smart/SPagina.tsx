import { Fragment } from "react";
import { useCiudadContext } from "../../context/ClimaContext";
import Clima from "../../page/Clima";
import Inicio from "../../page/Inicio";

export default function SPagina(): JSX.Element {
  const ciudad = useCiudadContext();
  return <Fragment>{!ciudad.ciudad ? <Inicio /> : <Clima />}</Fragment>;
}
