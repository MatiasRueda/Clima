import { Pressable, StyleSheet, Text, View } from "react-native";
import { useCiudadContext } from "../../context/CiudadContext";

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
    marginTop: 30,
    height: 50,
    width: "90%",
    alignItems: "flex-start",
    justifyContent: "center",
  },

  press: {
    height: "100%",
    width: 60,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
});
