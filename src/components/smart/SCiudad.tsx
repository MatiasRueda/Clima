import { View, Text } from "react-native";
import { useCiudadContext } from "../../context/ClimaContext";
import DInfoClave from "../dumb/DInfoClave";

export default function SCiudad(): JSX.Element {
  const clima = useCiudadContext();
  return (
    <View>
      <DInfoClave
        nombre={clima.ciudad?.name!}
        grados={clima.ciudad?.main.temp!}
      />
    </View>
  );
}
