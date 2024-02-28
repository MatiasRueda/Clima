import { Fragment } from "react";
import { useCiudadInicioContext } from "../../context/CiudadInicioContext";
import SNavigation from "./SNavigation";
import Comenzar from "../../screen/Comenzar";

export default function SScreens(): JSX.Element {
  const ciudadInicio = useCiudadInicioContext();
  return (
    <Fragment>{ciudadInicio.ciudad ? <SNavigation /> : <Comenzar />}</Fragment>
  );
}
