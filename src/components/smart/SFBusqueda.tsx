import { AntDesign } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import { TextInput, View, Text, StyleSheet } from "react-native";

export default function SFBusqueda(): JSX.Element {
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

  const onSubmit = async (data: any) => {
    console.log(data);
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
    width: 200,
    fontSize: 12,
    paddingLeft: 3,
    marginRight: 3,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffff",
  },
  error: {
    height: 40,
    width: 200,
    textAlign: "center",
  },
  compartir: {
    height: 30,
    backgroundColor: "#ffff",
  },
});
