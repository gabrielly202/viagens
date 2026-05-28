import React from 'react';
import { StyleSheet, View, Text, TextInput, FlatList, Image, TouchableOpacity, SafeAreaView } from 'react-native';

const lugares = [
  { id: '1', nome: 'Paris', pais: 'França', img: 'https://images.unsplash.com/photo-1502602898657-3491765c313d?q=80&w=500' },
  { id: '2', nome: 'Tóquio', pais: 'Japão', img: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=500' },
  { id: '3', nome: 'Rio de Janeiro', pais: 'Brasil', img: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c371?q=80&w=500' },
  { id: '4', nome: 'Salvador', pais: 'Brasil', img: 'https://images.unsplash.com/photo-1590059530514-93b593099955?q=80&w=500' },
  { id: '5', nome: 'Florianópolis', pais: 'Brasil', img: 'https://images.unsplash.com/photo-1549117621-c42387132159?q=80&w=500' },
  { id: '6', nome: 'Gramado', pais: 'Brasil', img: 'https://images.unsplash.com/photo-1596706935821-396564619379?q=80&w=500' },
];

export default function Explore() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Título e Pesquisa */}
      <Text style={styles.headerTitle}>Viagens</Text>
      <TextInput style={styles.searchBar} placeholder="🔍 Pesquisar destinos..." placeholderTextColor="#999" />
      
      <Text style={styles.sectionTitle}>Recomendações</Text>

      <FlatList 
        data={lugares}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.img }} style={styles.image} />
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.pais}>{item.pais}</Text>
            <TouchableOpacity style={styles.btnSaibaMais}>
              <Text style={styles.btnText}>Saiba mais</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa', paddingHorizontal: 15 },
  headerTitle: { fontSize: 28, fontWeight: 'bold', color: '#003366', marginTop: 10 },
  searchBar: {
    height: 50, backgroundColor: '#fff', borderRadius: 25, paddingHorizontal: 20, 
    marginVertical: 15, borderWidth: 1, borderColor: '#eee', elevation: 2
  },
  sectionTitle: { fontSize: 18, fontWeight: '600', marginBottom: 10, color: '#333' },
  list: { paddingBottom: 20 },
  card: {
    flex: 1, backgroundColor: '#fff', margin: 6, borderRadius: 20, padding: 10,
    alignItems: 'center', elevation: 3, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5
  },
  image: { width: '100%', height: 100, borderRadius: 15, marginBottom: 8 },
  nome: { fontWeight: 'bold', fontSize: 14 },
  pais: { fontSize: 12, color: '#666', marginBottom: 10 },
  btnSaibaMais: { backgroundColor: '#0055aa', paddingVertical: 6, paddingHorizontal: 15, borderRadius: 10 },
  btnText: { color: '#fff', fontSize: 12, fontWeight: 'bold' }
});