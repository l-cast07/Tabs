// components/ProfileEditScreen.js
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function ProfileEditScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Actualiza tu información</Text>
      <TextInput style={styles.input} placeholder="Nombre completo" defaultValue="Dyl Doe" />
      <TextInput style={styles.input} placeholder="Correo electrónico" keyboardType="email-address" defaultValue="john.doe@ejemplo.com" />
      
      <Button 
        title="Guardar Cambios" 
        color="#28a745"
        onPress={() => Alert.alert('Éxito', 'Perfil actualizado correctamente')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 20, color: '#333' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, marginBottom: 15, fontSize: 16 },
});