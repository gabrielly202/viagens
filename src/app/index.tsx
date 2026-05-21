import { StyleSheet, View } from 'react-native';
import Carossel from '@/components/Carossel';

export default function HomeScreen() {
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
