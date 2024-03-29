import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Inicio from "../../screen/Inicio";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import SStackClima from "./SStackClima";

const Tab = createBottomTabNavigator();

export default function SNavigation(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Inicio"
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 65,
            backgroundColor: "#8b8bb9",
          },
        }}
      >
        <Tab.Screen
          name="Inicio"
          component={Inicio}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <MaterialCommunityIcons
                  name="home"
                  size={24}
                  color={focused ? "white" : "black"}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Buscar"
          component={SStackClima}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <Feather
                  name="search"
                  size={24}
                  color={focused ? "white" : "black"}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
