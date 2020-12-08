// In App.js in a new project

import * as React from 'react';
import { SafeAreaView, Button, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { WebView } from 'react-native-webview';

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
        style={{ fontSize: 30, marginBottom: 30 }}
      >
        WebView das aplicações Beegray</Text>
      <Button
        title="Apresentação"
        onPress={() => navigation.navigate('Apresentacao')}
      />

      <Button
        title="Liloo Admin"
        onPress={() => navigation.navigate('LilooAdmin')}
      />

    </SafeAreaView>
  );
}

function Apresentacao() {
  return (
    <WebView source={{ uri: 'https://beegray.com.br/apresentacao/' }} />
  );
}

function LilooAdmin() {
  return (
    <WebView source={{ uri: 'https://liloo.com.br/admin5/_dash/dev/' }} />
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Apresentacao" component={Apresentacao} />
        <Stack.Screen name="LilooAdmin" component={LilooAdmin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;