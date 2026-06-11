import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  SafeAreaView 
} from 'react-native';

// Dados de exemplo (substitua pelas suas URLs reais)
const destinos = [
  { id: '1', cidade: 'Paris', pais: 'França', imagem: 'https://img.magnific.com/fotos-premium/vista-de-paris-em-franca_110893-1675.jpg?semt=ais_hybrid&w=740&q=80' },
  { id: '2', cidade: 'Tóquio', pais: 'Japão', imagem: 'https://media.istockphoto.com/id/598919748/pt/foto/view-of-tokyo-skyline-at-sunset.jpg?s=612x612&w=0&k=20&c=gYChrry1kx3DXV03gAAyk9lQyqo357YPBEXlEqiMUYg=' },
  { id: '3', cidade: 'Rio de Janeiro', pais: 'Brasil', imagem: 'https://t3.ftcdn.net/jpg/05/07/09/94/360_F_507099488_q1Kj3G82kQRJCHmfFQRBwxeTv503RiCX.jpg' },
  { id: '4', cidade: 'Salvador', pais: 'Brasil', imagem: 'https://media.istockphoto.com/id/1244352030/pt/foto/lighthouse-in-salvador-bahia.jpg?s=612x612&w=0&k=20&c=k989i_2W5mSsS7bFkg8HF9mKDQvgtMyUw-0FtXgo3Zo=' },
];

export default function TelaTurismo() {
  const renderCard = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imagem }} style={styles.imagemCard} />
      <View style={styles.infoContainer}>
        <Text style={styles.tituloCard}>{item.cidade}</Text>
        <Text style={styles.subtituloCard}>{item.pais}</Text>
        
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>Adicionar no carrinho</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Barra de Pesquisa */}
      <View style={styles.header}>
        <TextInput 
          style={styles.inputPesquisa} 
          placeholder="🔍 " 
          placeholderTextColor="#4B4E53"
        />
      </View>

      {/* Título da Seção */}
      <Text style={styles.tituloSecao}></Text>

      {/* Grid de Destinos */}
      <FlatList
        data={destinos}
        keyExtractor={(item) => item.id}
        renderItem={renderCard}
        numColumns={2} // Mantém as caixas menores e lado a lado
        columnWrapperStyle={styles.linhaGrid}
        contentContainerStyle={styles.listaContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#464847', // Fundo mais moderno e claro
  },
  header: {
    padding: 20,
    paddingTop: 40, // Ajuste para status bar se necessário
    backgroundColor: '#4B4E53',
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEC',
  },
  inputPesquisa: {
    backgroundColor: '#F0F2F5',
    borderRadius: 25, // Formato pílula
    paddingHorizontal: 20,
    height: 60,
    fontSize: 16,
    color: '#333',
  },
  tituloSecao: {
    fontSize: 22,
    fontWeight: 'Helvetica',
    color: '#fff',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  listaContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  linhaGrid: {
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    margin: 8,
    borderRadius: 16, // Bordas mais arredondadas
    overflow: 'hidden',
    // Sombras para iOS e Android
    shadowColor: '#000',
    shadowOffset: { width:100, height: 40 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4, 
  },
  imagemCard: {
    width: '100%',
    height: 250, // Altura reduzida para deixar a caixa menor
    resizeMode: 'cover',
  },
  infoContainer: {
    padding: 15,
    alignItems: 'center',
  },
  tituloCard: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  subtituloCard: {
    fontSize: 12,
    color: '#7F8C8D',
    marginBottom: 15,
    marginTop: 2,
    textAlign: 'center',
  },
  botao: {
    backgroundColor: '#0056D2', // Azul mais vivo e moderno
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    width: '100%',
    alignItems: 'center',
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});