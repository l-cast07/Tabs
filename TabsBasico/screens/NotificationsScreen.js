import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, ScrollView } from 'react-native';

export default function NotificationsScreen() {
  const [pushEnabled, setPushEnabled] = useState(true);
  const [emailEnabled, setEmailEnabled] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>Preferencias de Alertas</Text>
      
      <View style={styles.settingRow}>
        <View>
          <Text style={styles.title}>Notificaciones Push</Text>
          <Text style={styles.subtitle}>Alertas en tiempo real en tu dispositivo</Text>
        </View>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={pushEnabled ? '#1890ff' : '#f4f3f4'}
          onValueChange={() => setPushEnabled(!pushEnabled)}
          value={pushEnabled}
        />
      </View>

      <View style={styles.settingRow}>
        <View>
          <Text style={styles.title}>Correos Promocionales</Text>
          <Text style={styles.subtitle}>Ofertas y noticias por email</Text>
        </View>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={emailEnabled ? '#1890ff' : '#f4f3f4'}
          onValueChange={() => setEmailEnabled(!emailEnabled)}
          value={emailEnabled}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
    maxWidth: 200,
  },
});