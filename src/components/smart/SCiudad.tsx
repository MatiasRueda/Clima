import { View, Image, StyleSheet } from "react-native";
import { useCiudadContext } from "../../context/CiudadContext";
import DInfoClave from "../dumb/DInfoClave";

export default function SCiudad(): JSX.Element {
  const clima = useCiudadContext();
  const imagen = require(`../../../assets/clima/04n.svg`);
  return (
    <View style={estilos.container}>
      <Image style={estilos.imagen} source={imagen} />
      <DInfoClave {...clima.ciudad!} />
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
