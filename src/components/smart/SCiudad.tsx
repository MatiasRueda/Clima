import { View, Image, StyleSheet } from "react-native";
import { useCiudadContext } from "../../context/CiudadContext";
import DInfoClave from "../dumb/DInfoClave";

import DInfoAdicional from "../dumb/DInfoAdicional";
import SImagen from "./SImagen";

export default function SCiudad(): JSX.Element {
  const clima = useCiudadContext();

  return (
    <View style={estilos.container}>
      <SImagen icono={clima.ciudad!.weather[0].icon} />
      <DInfoClave {...clima.ciudad!} />
      <DInfoAdicional {...clima.ciudad!} />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imagen: {
    width: 50,
    height: 200,
  },
});
