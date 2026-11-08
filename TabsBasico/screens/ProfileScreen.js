import React from 'react';
import { View, Text, StyleSheet, Image, Button, Alert } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.avatar}
      />
      <Text style={styles.name}>Usuario de Prueba</Text>
      <Text style={styles.bio}>Explorando nuevos elementos de UI</Text>
      
      <View style={styles.buttonContainer}>
        <Button
          title="Editar Perfil"
          color="#841584"
          onPress={() => Alert.alert('Aviso', 'Abriendo modo edición...')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6f7ff',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#0050b3',
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#002766',
  },
  bio: {
    fontSize: 16,
    color: '#595959',
    marginBottom: 30,
  },
  buttonContainer: {
    width: '60%',
    borderRadius: 10,
    overflow: 'hidden',
  }
});