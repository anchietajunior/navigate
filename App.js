import 'react-native-gesture-handler';
import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from '@expo/vector-icons/Ionicons';

import HomeScreen from './screens/Home';
import InfoScreen from './screens/Info';
import AddModalScreen from './screens/AddModal';
import { Pressable } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();
const RootStack = createNativeStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const iconName = route.name === 'Home' ? 'home-outline' : 'person-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: 'Início' }} />
      <Tab.Screen name="Info" component={InfoScreen} options={{ tabBarLabel: 'Info' }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Group>
            <RootStack.Screen
              name="Main"
              component={MainTabs}
              options={{ headerShown: false }}
            />
          </RootStack.Group>
          <RootStack.Group screenOptions={{
             presentation: 'modal', animation: "slide_from_bottom" 
             }}>
            <RootStack.Screen
              name="AddModal"
              component={AddModalScreen}
              options={( {navigation}) => ({
                title: 'Adicionar',
                headerBackVisible: false,
                headerTintColor: "#000",
                headerRight: () => {
                  <Pressable onPress={() => navigation.goBack()}
                  style={{ paddingHorizontal: 16 }}
                  >
                    <Ionicons name="home-outline" size={24} color={"#000"} />
                  </Pressable>
                }
              })}
            />
          </RootStack.Group>
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
