import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import SFBusqueda from "../components/smart/SFBusqueda";

export default function Busqueda(): JSX.Element {
  return (
    <View style={estilos.contenedor}>
      <SFBusqueda />
    </View>
  );
}
const estilos = StyleSheet.create({
  contenedor: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "#b2b2ff",
    alignItems: "center",
    justifyContent: "center",
  },
});
