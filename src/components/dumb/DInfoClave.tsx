import { StyleSheet, Text, View } from "react-native";

type Parametros = {
  nombre: string;
  grados: number;
};

export default function DInfoClave({ ...rest }: Parametros): JSX.Element {
  return (
    <View style={estilos.contenedor}>
      <Text style={[estilos.texto, estilos.color]}>{rest.nombre}</Text>
      <Text style={[estilos.grados, estilos.color]}>{rest.grados}°C</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    width: 325,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  color: {
    color: "#ffff",
  },
  texto: {
    fontSize: 35,
  },
  grados: {
    fontSize: 50,
  },
});
