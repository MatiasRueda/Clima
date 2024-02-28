import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import SFBusqueda from "../components/smart/SFBusqueda";
import { LinearGradient } from "expo-linear-gradient";
import color from "../auxiliar/color";

export default function Busqueda(): JSX.Element {
  return (
    <LinearGradient
      colors={color()}
      style={estilos.contenedor}
      start={{ x: 0.9, y: 0 }}
    >
      <SFBusqueda />
    </LinearGradient>
  );
}
const estilos = StyleSheet.create({
  contenedor: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
