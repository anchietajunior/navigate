# Navigate project

Criar um novo app

```shell
npx create-expo-app MeuApp
cd navigate
```

## Instalar as dependências de navegação/roteamento

```shell
npm install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context
npm install @react-navigation/native-stack
```

Configurando o App.js

```javascript
import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import ProfileScreen from './screens/Profile';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
```

Crie suas Telas (screens) na pasta screens


```javascript
//Home Screen
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Página Home</Text>
      <Button
        title="Ir para Perfil"
        onPress={() => navigation.navigate('Profile')}
      />
    </SafeAreaView>
  );
}

// Profile Screen
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ProfileScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Página Perfil</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
}
```

