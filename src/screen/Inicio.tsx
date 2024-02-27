import { View, StyleSheet } from "react-native";
import DTitulo from "../components/dumb/DTitulo";
import Constants from "expo-constants";

export default function Inicio(): JSX.Element {
  return (
    <View style={estilos.container}>
      <DTitulo />
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
