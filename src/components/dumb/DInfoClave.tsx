import { StyleSheet, Text, View } from "react-native";
import { CiudadClima } from "../../types/types";

export default function DInfoClave({ ...rest }: CiudadClima): JSX.Element {
  return (
    <View style={estilos.contenedor}>
      <Text style={[estilos.texto, estilos.color]}>{rest.name}</Text>
      <Text style={[estilos.grados, estilos.color]}>{rest.main.temp}°</Text>
      <Text style={[estilos.color, estilos.textoDescripcion]}>
        {rest.weather[0].description}
      </Text>
      <View style={estilos.maxMin}>
        <Text style={[estilos.color, estilos.textoSecundario]}>
          Min: {rest.main.temp_min}°
        </Text>
        <Text style={[estilos.color, estilos.textoSecundario]}>
          Max: {rest.main.temp_max}°
        </Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    width: 325,
    alignContent: "space-around",
    alignItems: "center",
  },

  maxMin: {
    width: 250,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  color: {
    color: "#ffff",
  },
  texto: {
    fontSize: 45,
  },

  textoDescripcion: {
    fontSize: 25,
  },
  textoSecundario: {
    fontSize: 20,
  },
  grados: {
    fontSize: 50,
  },
});
