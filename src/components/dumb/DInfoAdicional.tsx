import { Text, View, StyleSheet } from "react-native";
import { CiudadClima } from "../../types/types";

export default function DInfoAdicional({ ...rest }: CiudadClima): JSX.Element {
  return (
    <View style={estilos.contenedor}>
      <View style={estilos.contenedorTitulo}>
        <Text style={estilos.texto}>Mas información:</Text>
      </View>
      <View style={estilos.contenedorInformacion}>
        <View style={estilos.contenedorInfoEspecifica}>
          <Text style={[estilos.texto, estilos.margen]}>
            Presión: {rest.main.pressure} MBAR
          </Text>
          <Text style={[estilos.texto]}>
            Sensación térmica: {rest.main.feels_like}°
          </Text>
        </View>
        <View style={estilos.contenedorInfoEspecifica}>
          <Text style={[estilos.texto, estilos.margen]}>
            Humedad: {rest.main.humidity}%
          </Text>
          <Text style={[estilos.texto]}>Visibilidad: {rest.visibility} KM</Text>
        </View>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    height: 200,
    width: 350,
    marginTop: 50,
    justifyContent: "flex-start",
    backgroundColor: "#8b8bb9",
    borderColor: "#00000",
    borderWidth: 1,
  },
  contenedorTitulo: {
    height: 50,
    justifyContent: "center",
    paddingLeft: 10,
  },
  texto: {
    color: "#ffff",
  },

  margen: {
    marginBottom: 10,
  },

  contenedorInformacion: {
    flex: 1,
    backgroundColor: "#9b9bce",
    justifyContent: "space-around",
    flexDirection: "row",
  },

  contenedorInfoEspecifica: {
    justifyContent: "center",
  },
});
