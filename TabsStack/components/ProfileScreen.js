// components/ProfileScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.avatarPlaceholder}>
        <Text style={styles.avatarText}>JD</Text>
      </View>
      <Text style={styles.name}>Dyl Doe</Text>
      
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Detalles')}
      >
        <Text style={styles.buttonText}>Ver Detalles del Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', paddingTop: 50, backgroundColor: '#fff' },
  avatarPlaceholder: { width: 100, height: 100, borderRadius: 50, backgroundColor: '#e91e63', justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  avatarText: { color: '#fff', fontSize: 32, fontWeight: 'bold' },
  name: { fontSize: 22, fontWeight: 'bold', marginBottom: 30, color: '#333' },
  button: { backgroundColor: '#1a1a1a', paddingVertical: 12, paddingHorizontal: 25, borderRadius: 25 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});