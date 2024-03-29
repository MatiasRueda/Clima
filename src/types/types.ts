export type Coordenada = {
  name: string;
  display_name?: string;
  lat: number;
  lon: number;
  cod?: number;
};

export type CiudadClima = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number; // metros
  wind: { speed: number; deg: number; gust?: number };
  clouds: { all: number };
  timezone: number;
  id: number;
  name: string;
  cod: number;
};
