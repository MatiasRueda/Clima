import { Fragment } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, TabRouter } from "@react-navigation/native";
import Inicio from "../../screen/Inicio";
import Clima from "../../screen/Clima";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import SStackClima from "./SStackClima";

const Tab = createBottomTabNavigator();

export default function SNavigation(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Inicio"
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen
          name="Inicio"
          component={Inicio}
          options={{
            tabBarIcon: ({ color, size }) => {
              return (
                <MaterialCommunityIcons name="home" size={24} color="black" />
              );
            },
          }}
        />
        <Tab.Screen
          name="Buscar"
          component={SStackClima}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Feather name="search" size={24} color="black" />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
