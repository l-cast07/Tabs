// components/ProfileStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from './ProfileScreen';
import ProfileDetailsScreen from './ProfileDetailsScreen';
import ProfileEditScreen from './ProfileEditScreen';
const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#e91e63' },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen name="Mi Perfil" component={ProfileScreen} />
      <Stack.Screen name="Detalles" component={ProfileDetailsScreen} />
      <Stack.Screen name="Editar" component={ProfileEditScreen} />
    </Stack.Navigator>
  );
}