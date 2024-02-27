import { CiudadClima } from "../types/types";

function calcularCelcius(kelvin: number): number {
  return Number((kelvin - 273.15).toFixed(2));
}

export default function celcius(ciudad: CiudadClima): CiudadClima {
  const { feels_like, pressure, humidity, ...temperaturas } = ciudad.main;
  const nuevasTemperaturas = Object.fromEntries(
    Object.entries(temperaturas).map(([temp, valor]) => [
      temp,
      calcularCelcius(valor),
    ])
  );
  return {
    ...ciudad,
    main: { ...ciudad.main, ...nuevasTemperaturas },
  };
}
