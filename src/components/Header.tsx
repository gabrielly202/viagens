import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>viaje mais✈️</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: '#0077B6',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },

  titulo: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});