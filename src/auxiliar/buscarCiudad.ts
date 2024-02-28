import { CiudadClima, Coordenada } from "../types/types";
import { coordenadas, london } from "./ejemplo";

const coordenada = [
  { name: "Chacarita", lat: -34.5880107, lon: -58.4541562, country: "AR" },
];

function cumpleCondi(arg: { cod?: number } | Array<any>): boolean {
  return (
    (Array.isArray(arg) && !arg.length) ||
    (arg as { cod: number }).cod?.toString()[0] === "4"
  );
}

export default async function buscarCiudad(
  ciudad?: string
): Promise<boolean | CiudadClima> {
  const coorRespuesta: Coordenada = ciudad ? coordenadas[0] : coordenada[0]; /// FETCH : "chacarita" FETCH
  const coorError = cumpleCondi(coorRespuesta);
  if (coorError) return false;
  const ciudadRespuesta: CiudadClima = london; /// FETCH
  const ciudadError = cumpleCondi(ciudadRespuesta);
  if (ciudadError) return false;
  return ciudadRespuesta;
}
