import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  SafeAreaView,
  Platform
} from 'react-native';

// Dados com as novas informações adicionadas
const pacotesDestinos = [
  { 
    id: '1', 
    cidade: 'Paris', 
    pais: 'França', 
    preco: 'R$ 6.200',
    duracao: '7 dias',
    avaliacao: '4.9',
    imagem: 'https://img.magnific.com/fotos-premium/vista-de-paris-em-franca_110893-1675.jpg?semt=ais_hybrid&w=740&q=80' 
  },
  { 
    id: '2', 
    cidade: 'Tóquio', 
    pais: 'Japão', 
    preco: 'R$ 8.500',
    duracao: '10 dias',
    avaliacao: '5.0',
    imagem: 'https://media.istockphoto.com/id/598919748/pt/foto/view-of-tokyo-skyline-at-sunset.jpg?s=612x612&w=0&k=20&c=gYChrry1kx3DXV03gAAyk9lQyqo357YPBEXlEqiMUYg=' 
  },
  { 
    id: '3', 
    cidade: 'Rio de Janeiro', 
    pais: 'Brasil', 
    preco: 'R$ 1.800',
    duracao: '5 dias',
    avaliacao: '4.7',
    imagem: 'https://t3.ftcdn.net/jpg/05/07/09/94/360_F_507099488_q1Kj3G82kQRJCHmfFQRBwxeTv503RiCX.jpg' 
  },
  { 
    id: '4', 
    cidade: 'Salvador', 
    pais: 'Brasil', 
    preco: 'R$ 1.450',
    duracao: '4 dias',
    avaliacao: '4.8',
    imagem: 'https://media.istockphoto.com/id/1244352030/pt/foto/lighthouse-in-salvador-bahia.jpg?s=612x612&w=0&k=20&c=k989i_2W5mSsS7bFkg8HF9mKDQvgtMyUw-0FtXgo3Zo=' 
  },
];

export default function TelaTurismo() {
  const [busca, setBusca] = useState('');

  const renderCard = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imagem }} style={styles.imagemCard} />
      
      {/* Etiqueta de avaliação sobre a imagem */}
      <View style={styles.badgeAvaliacao}>
        <Text style={styles.textoAvaliacao}>⭐ {item.avaliacao}</Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.cabecalhoCard}>
          <Text style={styles.tituloCard} numberOfLines={1}>{item.cidade}</Text>
          <Text style={styles.subtituloCard} numberOfLines={1}>{item.pais}</Text>
        </View>
        
        <View style={styles.detalhesRow}>
          <Text style={styles.iconeDetalhe}>⏱️ <Text style={styles.textoDetalhe}>{item.duracao}</Text></Text>
        </View>

        <View style={styles.rodapeCard}>
          <View>
            <Text style={styles.labelPreco}>A partir de</Text>
            <Text style={styles.precoCard}>{item.preco}</Text>
          </View>
          
          {/* Botão de ícone no lugar do texto */}
          <TouchableOpacity style={styles.botaoCarrinho}>
            <Text style={styles.iconeCarrinho}>🛒</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      
      {/* CABEÇALHO AZUL */}
      <View style={styles.headerTop}>
        <Text style={styles.headerTopText}>viaje mais ✈️</Text>
      </View>

      {/* BARRA DE PESQUISA (Fundo claro) */}
      <View style={styles.searchWrapper}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput 
          style={styles.searchInput} 
          placeholder="Buscar destinos incríveis..." 
          placeholderTextColor="#A0A4AB"
          value={busca}
          onChangeText={setBusca}
        />
      </View>

      {/* GRID DE DESTINOS */}
      <FlatList
        data={pacotesDestinos}
        keyExtractor={(item) => item.id}
        renderItem={renderCard}
        numColumns={2}
        columnWrapperStyle={styles.linhaGrid}
        contentContainerStyle={styles.listaContainer}
        showsVerticalScrollIndicator={false}
      />

      {/* RODAPÉ AZUL */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>viaje mais</Text>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Fundo claro para realçar os cards
    paddingTop: Platform.OS === 'android' ? 25 : 0 
  },

  // Cabeçalho e Rodapé
  headerTop: { 
    backgroundColor: '#0056D2', 
    padding: 18, 
    alignItems: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginBottom: 10,
  },
  headerTopText: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  
  footer: { 
    backgroundColor: '#0056D2', 
    padding: 15, 
    alignItems: 'center',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  footerText: { color: '#fff', fontSize: 14, fontWeight: '500' },

  // Barra de Pesquisa
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 15,
    marginVertical: 15,
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchIcon: {
    fontSize: 18,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },

  // Lista
  listaContainer: {
    paddingHorizontal: 5,
    paddingBottom: 20,
  },
  linhaGrid: {
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },

  // Cards Redesenhados
  card: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    margin: 8,
    borderRadius: 18,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4, 
  },
  imagemCard: {
    width: '100%',
    height: 140, // Altura ideal para o grid
    resizeMode: 'cover',
  },
  badgeAvaliacao: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  textoAvaliacao: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
  },
  infoContainer: {
    padding: 12,
  },
  cabecalhoCard: {
    marginBottom: 8,
  },
  tituloCard: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2C2F33',
  },
  subtituloCard: {
    fontSize: 13,
    color: '#7F8C8D',
  },
  detalhesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconeDetalhe: {
    fontSize: 12,
    color: '#666',
  },
  textoDetalhe: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
  },
  rodapeCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    paddingTop: 10,
  },
  labelPreco: {
    fontSize: 10,
    color: '#888',
    textTransform: 'uppercase',
  },
  precoCard: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#0056D2',
  },
  
  // Botão com ícone de carrinho
  botaoCarrinho: {
    backgroundColor: '#0056D2',
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#0056D2',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
  },
  iconeCarrinho: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});