import { View, Image, StyleSheet } from "react-native";
import { useCiudadContext } from "../../context/CiudadContext";
import DInfoClave from "../dumb/DInfoClave";
import Nube from "../../../assets/clima/04n.svg";
import DInfoAdicional from "../dumb/DInfoAdicional";

export default function SCiudad(): JSX.Element {
  const clima = useCiudadContext();

  return (
    <View style={estilos.container}>
      <Nube width={180} height={180} />
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
