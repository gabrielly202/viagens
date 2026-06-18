import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { router } from 'expo-router';

export default function Menu() {
  return (
    <View style={styles.container}>

      <Pressable onPress={() => router.push("/")}>
        <Text style={styles.item}>Início</Text>
      </Pressable>

      <Pressable onPress={() => router.push("/explore")}>
        <Text style={styles.item}>Lugares</Text>
      </Pressable>

      <Pressable onPress={() => router.push("/Hoteis")}>
        <Text style={styles.item}>Hotéis</Text>
      </Pressable>

      <Pressable onPress={() => router.push("/carrinho")}>
        <Text style={styles.item}>Carrinho</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 55,
    backgroundColor: '#ECECEC',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  item: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0077B6',
  },
});