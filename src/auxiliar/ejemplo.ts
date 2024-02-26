import { CiudadClima } from "../types/types";

//ELIMINAR
const lon: number = -0.1276474;
const lat: number = 51.5073219;
const url: string =
  "https://api.openweathermap.org/data/2.5/weather?lat=51.5073219&lon=-0.1276474&lang=es&appid=1df2aa84a49c32ed733031f8909d089a";

export const london: CiudadClima = {
  coord: { lon: -0.1276, lat: 51.5073 },
  weather: [{ id: 804, main: "Clouds", description: "nubes", icon: "04n" }],
  base: "stations",
  main: {
    temp: 279.99,
    feels_like: 277.26,
    temp_min: 278.89,
    temp_max: 280.54,
    pressure: 1015,
    humidity: 69,
  },
  visibility: 10000, // metros
  wind: { speed: 4.02, deg: 65, gust: 5.81 },
  clouds: { all: 90 },
  timezone: 0,
  id: 2643743,
  name: "London",
};
