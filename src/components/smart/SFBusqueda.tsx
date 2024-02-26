import { AntDesign } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import { TextInput, View, Text, StyleSheet } from "react-native";
import { useEstadoContext } from "../../context/EstadoContext";
import { useCiudadContext } from "../../context/ClimaContext";
import { london } from "../../auxiliar/ejemplo";
import celcius from "../../auxiliar/celcius";

export default function SFBusqueda(): JSX.Element {
  const estado = useEstadoContext();
  const ciudad = useCiudadContext();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ciudad: "",
    },
  });

  const onSubmit = async (data: { ciudad: string }) => {
    const segundos: number = 3;
    estado.cambiarCargando();
    await new Promise((r) => setTimeout(r, segundos * 1000));
    const respuesta = london;
    const { feels_like, pressure, humidity, ...temperaturas } = respuesta.main;
    const nuevasTemperaturas = Object.fromEntries(
      Object.entries(temperaturas).map(([temp, valor]) => [
        temp,
        celcius(valor),
      ])
    );
    ciudad.agregarCiudad({
      ...respuesta,
      main: { ...respuesta.main, ...nuevasTemperaturas },
    });
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
              placeholder="Ingrese una ciudad"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            {errors.ciudad && (
              <Text style={estilos.error}>
                Es necesario ingresar una ciudad.
              </Text>
            )}
          </View>
        )}
        name="ciudad"
      />
      <AntDesign
        name="search1"
        size={30}
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
    height: 70,
    justifyContent: "flex-start",
  },
  input: {
    height: 30,
    width: 250,
    fontSize: 12,
    paddingLeft: 3,
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
  compartir: {
    height: 30,
    backgroundColor: "#ffff",
  },
});
