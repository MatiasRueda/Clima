import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useEstadoContext } from "../../context/EstadoContext";

export default function SError(): JSX.Element {
  const estado = useEstadoContext();

  const volver = (): void => {
    estado.sacarError();
  };

  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.texto}>{estado.error}</Text>
      <TouchableOpacity style={estilos.volver} onPress={volver}>
        <Text style={estilos.textoBoton}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    height: 300,
    width: 250,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },

  texto: {
    textAlign: "center",
  },
  volver: {
    marginTop: 40,
    height: 50,
    width: 120,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },

  textoBoton: {
    color: "#ffff",
    textAlign: "center",
  },
});
