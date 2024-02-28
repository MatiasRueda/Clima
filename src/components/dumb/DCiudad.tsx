import { View, Image, StyleSheet } from "react-native";
import DInfoClave from "./DInfoClave";
import DInfoAdicional from "./DInfoAdicional";
import { CiudadClima } from "../../types/types";

const imagenes: Record<string, any> = {
  "01d": require("../../../assets/clima/01d.png"),
  "01n": require("../../../assets/clima/01n.png"),
  "02d": require("../../../assets/clima/02d.png"),
  "02n": require("../../../assets/clima/02n.png"),
  "03d": require("../../../assets/clima/03d.png"),
  "03n": require("../../../assets/clima/03n.png"),
  "04d": require("../../../assets/clima/04d.png"),
  "04n": require("../../../assets/clima/04n.png"),
  "09d": require("../../../assets/clima/09d.png"),
  "09n": require("../../../assets/clima/09n.png"),
  "10d": require("../../../assets/clima/10d.png"),
  "10n": require("../../../assets/clima/10n.png"),
  "11d": require("../../../assets/clima/11d.png"),
  "11n": require("../../../assets/clima/11n.png"),
  "13d": require("../../../assets/clima/13d.png"),
  "13n": require("../../../assets/clima/13n.png"),
  "50d": require("../../../assets/clima/50d.png"),
  "50n": require("../../../assets/clima/50n.png"),
};

export default function DCiudad({ ...rest }: CiudadClima): JSX.Element {
  return (
    <View style={estilos.contenedor}>
      <Image source={imagenes[rest.weather[0].icon]} style={estilos.imagen} />
      <DInfoClave {...rest} />
      <DInfoAdicional {...rest} />
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imagen: {
    width: 200,
    height: 200,
  },
});
