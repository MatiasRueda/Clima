import { AntDesign } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import { TextInput, View, Text, StyleSheet } from "react-native";
import { useEstadoContext } from "../../context/EstadoContext";
import { useCiudadContext } from "../../context/CiudadContext";
import celcius from "../../auxiliar/celcius";
import { CiudadClima } from "../../types/types";
import { useNavigation } from "@react-navigation/native";
import buscarCiudad from "../../auxiliar/buscarCiudad";
import { MENSAJE_ERROR } from "../../auxiliar/mensajes";

export default function SFBusqueda(): JSX.Element {
  const estado = useEstadoContext();
  const ciudad = useCiudadContext();
  const navigate = useNavigation();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nombre: "",
    },
  });

  const onSubmit = async (data: { nombre: string }) => {
    estado.cambiarCargando();
    const respuesta = await buscarCiudad(data.nombre.split(" ").join(""));
    if (!respuesta) {
      estado.agregarMensajeError(MENSAJE_ERROR);
      estado.cambiarCargando();
      return;
    }
    const ciudadCelcius: CiudadClima = celcius(respuesta as CiudadClima);
    ciudad.agregarCiudad(ciudadCelcius);
    navigate.navigate("Ciudad" as never);
    estado.cambiarCargando();
  };

  return (
    <View style={estilos.contenedor}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={estilos.contInput}>
            <TextInput
              style={estilos.input}
              placeholder="Buscar"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            {errors.nombre && (
              <Text style={[estilos.error, estilos.color]}>
                Es necesario ingresar una ciudad.
              </Text>
            )}
          </View>
        )}
        name="nombre"
      />
      <AntDesign
        name="search1"
        size={40}
        style={estilos.compartir}
        color="black"
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
  contInput: {
    height: 80,
    justifyContent: "flex-start",
  },
  input: {
    height: 40,
    width: 250,
    fontSize: 12,
    paddingLeft: 10,
    marginRight: 3,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffff",
  },
  error: {
    height: 40,
    width: 250,
    textAlign: "center",
  },

  color: {
    color: "#ffff",
  },
  compartir: {
    height: 40,
    backgroundColor: "#ffff",
  },
});
