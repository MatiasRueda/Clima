import { StyleSheet, Text } from "react-native";

export default function DTitulo(): JSX.Element {
  return <Text style={estilos.texto}>Mi Clima!</Text>;
}

const estilos = StyleSheet.create({
  texto: {
    fontSize: 30,
    color: "#ffff",
  },
});
