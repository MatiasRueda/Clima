import { Pressable, StyleSheet, Text, View } from "react-native";
import { useCiudadContext } from "../../context/ClimaContext";

export default function SVolver(): JSX.Element {
  const clima = useCiudadContext();
  return (
    <View style={estilos.contenedor}>
      <Pressable style={estilos.press} onPress={clima.sacarCiudad}>
        <Text>{"<"}</Text>
      </Pressable>
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    height: 50,
    width: "90%",
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },

  press: {
    width: 30,
  },
});
