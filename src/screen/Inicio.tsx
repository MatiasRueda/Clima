import { StyleSheet } from "react-native";
import DTitulo from "../components/dumb/DTitulo";
import Constants from "expo-constants";
import { LinearGradient } from "expo-linear-gradient";
import color from "../auxiliar/color";
import { useCiudadInicioContext } from "../context/CiudadInicioContext";
import DCiudad from "../components/dumb/DCiudad";

export default function Inicio(): JSX.Element {
  const ciudadInicio = useCiudadInicioContext();
  return (
    <LinearGradient
      colors={color()}
      style={estilos.contenedor}
      start={{ x: 0.9, y: 0 }}
    >
      <DCiudad {...ciudadInicio.ciudad!} />
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
