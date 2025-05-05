import React from 'react';
import { Button, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AddModalScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex:1, alignItems:'center', justifyContent:'center' }}>
      <Text style={{ fontSize:18, marginBottom:20 }}>Nova entrada</Text>
      <Button title="Fechar" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
}