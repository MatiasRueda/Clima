import { View, StyleSheet } from "react-native";
import SImagen from "../smart/SImagen";
import DInfoClave from "./DInfoClave";
import DInfoAdicional from "./DInfoAdicional";
import { CiudadClima } from "../../types/types";

export default function DCiudad({ ...rest }: CiudadClima): JSX.Element {
  return (
    <View style={estilos.contenedor}>
      <SImagen icono={rest.weather[0].icon} />
      <DInfoClave {...rest} />
      <DInfoAdicional {...rest} />
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imagen: {
    width: 50,
    height: 200,
  },
});
