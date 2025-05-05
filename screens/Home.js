import React from 'react';
import { Button, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Página Home</Text>
      <Button
        title="Add"
        onPress={() => navigation.navigate('AddModal')}
      />
    </SafeAreaView>
  );
}