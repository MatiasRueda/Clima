import { CiudadClima } from "../types/types";

function calcularCelcius(kelvin: number): number {
  return Number((kelvin - 273.15).toFixed(2));
}

function metrosAKilometros(metros: number): number {
  return Math.round(metros / 1000);
}

export default function celcius(ciudad: CiudadClima): CiudadClima {
  const { pressure, humidity, ...temperaturas } = ciudad.main;
  const nuevasTemperaturas = Object.fromEntries(
    Object.entries(temperaturas).map(([temp, valor]) => [
      temp,
      calcularCelcius(valor),
    ])
  );
  return {
    ...ciudad,
    visibility: metrosAKilometros(ciudad.visibility),
    main: { ...ciudad.main, ...nuevasTemperaturas },
  };
}
