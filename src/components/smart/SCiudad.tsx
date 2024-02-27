import { View, Text, StyleSheet } from "react-native";
import { useCiudadContext } from "../../context/CiudadContext";
import DInfoClave from "../dumb/DInfoClave";

export default function SCiudad(): JSX.Element {
  const clima = useCiudadContext();
  return (
    <View style={estilos.container}>
      <DInfoClave
        nombre={clima.ciudad?.name!}
        grados={clima.ciudad?.main.temp!}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
