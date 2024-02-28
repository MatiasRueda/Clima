const amanecer: string[] = ["#4776E6", "#8E54E9"];
const dia: string[] = ["#9CECFB", "#65C7F7", "#0052D4"];
const atardecer: string[] = ["#7474BF", "#348AC7"];
const noche: string[] = ["#4C669f", "#3B5998", "#192F6A"];

export default function color(): string[] {
  const hora: number = new Date().getHours();
  if (hora >= 20 || (hora >= 0 && hora < 6)) return noche;
  else if (hora >= 6 && hora <= 11) return amanecer;
  else if (hora >= 12 && hora <= 6) return dia;
  else return atardecer;
}
