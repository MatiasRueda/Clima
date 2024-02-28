import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useCiudadInicioContext } from "../../context/CiudadInicioContext";
import { useEstadoContext } from "../../context/EstadoContext";

export default function SComenzar(): JSX.Element {
  const ciudadInicio = useCiudadInicioContext();
  const estado = useEstadoContext();

  const comenzar = async (): Promise<void> => {
    estado.cambiarCargando();
    await ciudadInicio.agregarCiudad();
    await new Promise((r) => setTimeout(r, 3000));
    estado.cambiarCargando();
  };

  return (
    <TouchableOpacity style={estilos.contenedor} onPress={comenzar}>
      <Text>Holaaa</Text>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    height: 75,
    width: 300,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
