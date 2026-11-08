// components/ProfileDetailsScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ProfileDetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Correo: dyl.doe@gmail.com</Text>
      <Text style={styles.label}>Ubicación: Yahualica</Text>
      
      <View style={{ marginTop: 20 }}>
        <Button 
          title="Modificar Datos" 
          color="#e91e63"
          onPress={() => navigation.navigate('Editar')} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f9f9f9' },
  label: { fontSize: 18, color: '#444', marginBottom: 15, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: '#ddd' },
});