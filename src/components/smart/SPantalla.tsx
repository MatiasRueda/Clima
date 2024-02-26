import { ReactNode } from "react";
import { View, StyleSheet } from "react-native";

import Constants from "expo-constants";

export default function SPantalla(props: { children: ReactNode }): JSX.Element {
  return <View style={estilos.contenedor}>{props.children}</View>;
}

const estilos = StyleSheet.create({
  contenedor: {
    marginTop: Constants.statusBarHeight,
    height: "100%",
    width: "100%",
    position: "absolute",
    backgroundColor: "rgba(52, 52, 52, 0.9)",
    alignItems: "center",
    justifyContent: "center",
  },
});
