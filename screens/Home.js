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