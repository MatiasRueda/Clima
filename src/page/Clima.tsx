import Constants from "expo-constants";
import { View, StyleSheet } from "react-native";
import SCiudad from "../components/smart/SCiudad";
import SVolver from "../components/smart/SVolver";

export default function Clima(): JSX.Element {
  return (
    <View style={estilos.container}>
      <SVolver></SVolver>
      <SCiudad></SCiudad>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "#b2b2ff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
