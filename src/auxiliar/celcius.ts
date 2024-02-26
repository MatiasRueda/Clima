export default function celcius(kelvin: number): number {
  return Number((kelvin - 273.15).toFixed(2));
}
