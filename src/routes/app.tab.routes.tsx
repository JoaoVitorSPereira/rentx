import React from "react";

import { Platform } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { useTheme } from "styled-components";

import HomeSvg from "../assets/home.svg";
import CarSvg from "../assets/car.svg";
import PersonSvg from "../assets/people.svg";

import { MyCars } from "../screens/MyCars";

import { AppStackRoutes } from "./app.stack.routes";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes() {
  const theme = useTheme();
  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.main,
        tabBarInactiveTintColor: theme.colors.text_detail,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
          height: 70,
          backgroundColor: theme.colors.background_primary,
        },
      }}
    >
      <Screen
        name="AppStackRoutes"
        component={AppStackRoutes}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg width={20} height={20} fill={color} />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={AppStackRoutes}
        options={{
          tabBarIcon: ({ color }) => (
            <CarSvg width={20} height={20} fill={color} />
          ),
        }}
      />
      <Screen
        name="MyCars"
        component={MyCars}
        options={{
          tabBarIcon: ({ color }) => (
            <PersonSvg width={20} height={20} fill={color} />
          ),
        }}
      />
    </Navigator>
  );
}
