// components/SettingsScreen.js
import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export default function SettingsScreen() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Preferencias</Text>
      
      <View style={styles.settingRow}>
        <Text style={styles.settingText}>Modo Oscuro</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#e91e63' }}
          thumbColor={isDarkMode ? '#fff' : '#f4f3f4'}
          onValueChange={() => setIsDarkMode(!isDarkMode)}
          value={isDarkMode}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#1a1a1a', marginBottom: 30 },
  settingRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#eee' },
  settingText: { fontSize: 18, color: '#333' },
});