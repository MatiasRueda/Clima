import { CiudadClima, Coordenada } from "../types/types";

//ELIMINAR

const url: string =
  "https://api.openweathermap.org/data/2.5/weather?lat=51.5073219&lon=-0.1276474&lang=es&appid=1df2aa84a49c32ed733031f8909d089a";

const urlCord: string =
  "http://api.openweathermap.org/geo/1.0/direct?q=BuenosAires&appid=1df2aa84a49c32ed733031f8909d089a";

export const coordenadas: Coordenada[] = [
  {
    name: "Buenos Aires",
    lat: -34.6075682,
    lon: -58.4370894,
    country: "AR",
    cod: 200,
  },
];

export const london: CiudadClima = {
  coord: { lon: -0.1276, lat: 51.5073 },
  weather: [{ id: 804, main: "Clouds", description: "nubes", icon: "50d" }],
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
  cod: 400,
};

export const buenosAires: CiudadClima = {
  coord: { lon: -58.4371, lat: -34.6076 },
  weather: [
    { id: 800, main: "Clear", description: "cielo claro", icon: "01d" },
  ],
  base: "stations",
  main: {
    temp: 294.65,
    feels_like: 295.15,
    temp_min: 291.09,
    temp_max: 296.01,
    pressure: 1011,
    humidity: 88,
  },
  visibility: 10000,
  wind: { speed: 1.03, deg: 0 },
  clouds: { all: 0 },
  timezone: -10800,
  id: 3427458,
  name: "Villa Crespo",
  cod: 200,
};

const noche = ["#4c669f", "#3b5998", "#192f6a"];
