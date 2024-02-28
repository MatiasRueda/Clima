import { Fragment } from "react";
import DespejadoD from "../../../assets/clima/01d.svg";
import DespejadoN from "../../../assets/clima/01n.svg";
import NubladoD from "../../../assets/clima/02d.svg";
import NubladoN from "../../../assets/clima/02n.svg";
import NubesD from "../../../assets/clima/03d.svg";
import NubesN from "../../../assets/clima/03n.svg";
import NubeD from "../../../assets/clima/04d.svg";
import NubeN from "../../../assets/clima/04n.svg";
import LluviaD from "../../../assets/clima/09d.svg";
import LluviaN from "../../../assets/clima/09n.svg";
import LluviznaD from "../../../assets/clima/10d.svg";
import LluviznaN from "../../../assets/clima/10n.svg";
import TruenosD from "../../../assets/clima/11d.svg";
import TruenosN from "../../../assets/clima/11n.svg";
import NieveD from "../../../assets/clima/13d.svg";
import NieveN from "../../../assets/clima/13n.svg";
import { Image, StyleSheet } from "react-native";
import { SvgProps } from "react-native-svg";

function obtenerImagen(icono: string): React.FC<SvgProps> {
  if (icono === "01d") return DespejadoD;
  else if (icono === "01n") return DespejadoN;
  else if (icono === "02d") return NubladoD;
  else if (icono === "02n") return NubladoN;
  else if (icono === "03d") return NubesD;
  else if (icono === "03n") return NubesN;
  else if (icono === "04d") return NubeD;
  else if (icono === "04n") return NubeN;
  else if (icono === "09d") return LluviaD;
  else if (icono === "09n") return LluviaN;
  else if (icono === "10d") return LluviznaD;
  else if (icono === "10n") return LluviznaN;
  else if (icono === "11d") return TruenosD;
  else if (icono === "11n") return TruenosN;
  else if (icono === "13d") return NieveD;
  else return NieveN;
}

export default function SImagen(props: { icono: string }): JSX.Element {
  const especiales: string[] = ["50d", "50n"];
  const Imagen = obtenerImagen(props.icono);

  return (
    <Fragment>
      {!especiales.find((icono) => icono === props.icono) ? (
        <Imagen width={180} height={180} />
      ) : (
        <Image
          source={require("../../../assets/clima/50d.png")}
          style={estilos.imagen}
        />
      )}
    </Fragment>
  );
}

const estilos = StyleSheet.create({
  imagen: { height: 180, width: 180 },
});
