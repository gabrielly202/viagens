import React from 'react';
import { View, StyleSheet } from 'react-native';

import Header from '../components/Header';
import Menu from '../components/Menu';
import Carossel from '../components/Carossel';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Menu />

      <View style={styles.content}>
        <Carossel />
      </View>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
  },
});