import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuración de la App</Text>
      <Text style={styles.text}>Notificaciones: Activadas</Text>
      <Text style={styles.text}>Tema: Modo Claro</Text>
      <Text style={styles.text}>Idioma: Español</Text>
      <Text style={styles.text}>WSDA = Walk</Text>
      <Text style={styles.text}>SPACE = Jump</Text>
      <Text style={styles.text}>Hakers = No</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});