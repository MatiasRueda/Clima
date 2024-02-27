import { View, StyleSheet } from "react-native";
import SCiudad from "../components/smart/SCiudad";

export default function Clima(): JSX.Element {
  return (
    <View style={estilos.container}>
      <SCiudad></SCiudad>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b2b2ff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
