import { LinearGradient } from "expo-linear-gradient";
import { View, Text, StyleSheet, Image } from "react-native";
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
      <View style={estilos.contenedorEncabezado}>
        <Image
          style={estilos.imagen}
          source={require("../../assets/clima/logo.png")}
          width={75}
          height={75}
        />
        <Text style={estilos.texto}>Mi Clima!</Text>
      </View>
      <SComenzar />
    </LinearGradient>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "space-around",
  },

  contenedorEncabezado: {
    alignItems: "center",
    justifyContent: "center",
  },

  texto: {
    color: "#ffff",
    fontSize: 35,
  },
  imagen: {
    width: 100,
    height: 100,
  },
});
