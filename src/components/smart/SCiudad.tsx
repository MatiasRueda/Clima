import { useCiudadContext } from "../../context/CiudadContext";

import DCiudad from "../dumb/DCiudad";

export default function SCiudad(): JSX.Element {
  const clima = useCiudadContext();

  return <DCiudad {...clima.ciudad!} />;
}
