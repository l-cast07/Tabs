import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// Importar el Drawer Navigator
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
// Importar las nuevas pantallas
import ProfileScreen from './screens/ProfileScreen';
import AboutScreen from './screens/AboutScreen';

// Inicializar el Drawer Navigator
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    // El NavigationContainer sigue siendo el contenedor principal
    <NavigationContainer>
      {/* Usar Drawer.Navigator en lugar de Tab.Navigator */}
      <Drawer.Navigator
        initialRouteName="Home"
        // Opcional: Personalización básica del Drawer
        screenOptions={{
          headerTintColor: '#007AFF', // Color del texto del encabezado
          drawerActiveTintColor: 'tomato', // Color del ítem activo
        }}
      >
        {/* Usar Drawer.Screen en lugar de Tab.Screen */}
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Inicio Principal' }} // Título en el menú y encabezado
        />
        {/* Nuevas opciones en el menú */}
        <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: 'Mi Perfil' }}
        />
        <Drawer.Screen
          name="About"
          component={AboutScreen}
          options={{ title: 'Acerca de' }}
        />
        <Drawer.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ title: 'Ajustes' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}