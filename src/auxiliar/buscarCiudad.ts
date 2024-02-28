import { CiudadClima, Coordenada } from "../types/types";

const chacarita: Coordenada[] = [
  { name: "Chacarita", lat: -34.5880107, lon: -58.4541562, country: "AR" },
];

function cumpleCondi(arg: { cod?: number } | Array<any>): boolean {
  return !(
    (Array.isArray(arg) && !arg.length) ||
    (arg as { cod: number }).cod?.toString()[0] === "4"
  );
}

async function buscarCoordenadas(ciudad?: string): Promise<Coordenada[]> {
  if (!ciudad) return chacarita;
  const respuesta = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad}&appid=${process.env.EXPO_PUBLIC_CLIMA_API_KEY}`
  );
  const coordenadas: Coordenada[] = await respuesta.json();
  if (!cumpleCondi(coordenadas)) return [];
  return coordenadas;
}

export default async function buscarCiudad(
  ciudad?: string
): Promise<boolean | CiudadClima> {
  const coordenada: Coordenada[] = await buscarCoordenadas(ciudad);
  if (!coordenada) return false;
  const respuesta = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${coordenada[0].lat}&lon=${coordenada[0].lon}&lang=es&appid=${process.env.EXPO_PUBLIC_CLIMA_API_KEY}`
  );
  const ciudadRespuesta: CiudadClima = await respuesta.json();
  if (!cumpleCondi(ciudadRespuesta)) return false;
  return ciudadRespuesta;
}
