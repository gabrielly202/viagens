import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
    viaje mais
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 20,
    backgroundColor: '#0077B6',
    justifyContent: 'center',
    alignItems: 'center',
  },

  texto: {
    color: '#fff',
    fontSize: 15,
  },
});