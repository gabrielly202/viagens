import React from 'react';
import { View, StyleSheet } from 'react-native';
// Importando o componente da pasta components
import Carossel from '../components/Carossel'; 

export default function Home() {
  return (
    <View style={styles.container}>
      <Carossel />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


