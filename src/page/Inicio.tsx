import { ActivityIndicator, View, StyleSheet } from "react-native";
import DTitulo from "../components/dumb/DTitulo";
import SFBusqueda from "../components/smart/SFBusqueda";
import Constants from "expo-constants";

export default function Inicio(): JSX.Element {
  return (
    <View style={estilos.container}>
      <DTitulo />
      <SFBusqueda></SFBusqueda>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "#b2b2ff",
    alignItems: "center",
    justifyContent: "center",
  },
});
