import { View, StyleSheet } from "react-native";
import SCiudad from "../components/smart/SCiudad";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";
import color from "../auxiliar/color";

export default function Clima(): JSX.Element {
  return (
    <LinearGradient
      colors={color()}
      style={estilos.contenedor}
      start={{ x: 0.9, y: 0 }}
    >
      <SCiudad />
    </LinearGradient>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
