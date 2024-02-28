import { LinearGradient } from "expo-linear-gradient";
import { View, Text, StyleSheet, Pressable } from "react-native";
import color from "../auxiliar/color";
import Constants from "expo-constants";
import SComenzar from "../components/smart/SComenzar";

export default function Comenzar(): JSX.Element {
  return (
    <LinearGradient
      colors={color()}
      style={estilos.contenedor}
      start={{ x: 0.9, y: 0 }}
    >
      <Text>Mi Clima</Text>
      <SComenzar />
    </LinearGradient>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "center",
  },
});
