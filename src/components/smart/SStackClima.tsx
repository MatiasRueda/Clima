import { createStackNavigator } from "@react-navigation/stack";
import Busqueda from "../../screen/Busqueda";
import Clima from "../../screen/Clima";

const Stack = createStackNavigator();

export default function SStackClima(): JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName="Busqueda"
      screenOptions={{ headerTitle: "" }}
    >
      <Stack.Screen
        name="Busqueda"
        component={Busqueda}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Ciudad"
        component={Clima}
        options={{ headerBackTitleVisible: false, headerShadowVisible: false }}
      />
    </Stack.Navigator>
  );
}
