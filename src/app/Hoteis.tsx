import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Platform
} from 'react-native';

const HOTEIS_DATA = [
  {
    id: '1',
    nome: 'Hotel Plaza Athenee',
    local: 'Paris, Franca',
    preco: 'R$ 4.250',
    avaliacao: 5,
    imagem: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/692579166.jpg?k=3f7961add3d3d3f04a2bd5c478b35bb2bd43b9d40302d61b282faba4023abb85&o=',
  },
  {
    id: '2',
    nome: 'Aman Tokyo Resort',
    local: 'Toquio, Japao',
    preco: 'R$ 5.800',
    avaliacao: 5,
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSFoH1tnKJu2ESI01Ue-IQW7iid7JyROgPTQ&s',
  },
  {
    id: '3',
    nome: 'Copacabana Palace',
    local: 'Rio de Janeiro, Brasil',
    preco: 'R$ 2.100',
    avaliacao: 4,
    imagem: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/d8/0b/31/belmond-copacabana-palace.jpg?w=900&h=500&s=1',
  },
  {
    id: '4',
    nome: 'Fera Palace Hotel',
    local: 'Salvador, Brasil',
    preco: 'R$ 1.150',
    avaliacao: 4,
    imagem: 'https://simonde.com.br/wp-content/uploads/2021/06/fera-palace-hotel-salvador-bahia-centro-historico-antonio-mazzafera-luxo-melhores-hoteis-1200-20.jpg',
  },
  {
    id: '5',
    nome: 'IL Campanario Villaggio',
    local: 'Florianopolis, Brasil',
    preco: 'R$ 890',
    avaliacao: 5,
    imagem: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '6',
    nome: 'Hotel Colline de France',
    local: 'Gramado, Brasil',
    preco: 'R$ 1.500',
    avaliacao: 5,
    imagem: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80',
  },
];

type Hotel = (typeof HOTEIS_DATA)[0];

export default function Hoteis() {
  const [busca, setBusca] = useState('');

  const hoteisFiltrados = useMemo(() => {
    const termo = busca.trim().toLowerCase();
    if (!termo) return HOTEIS_DATA;
    return HOTEIS_DATA.filter(
      (h) =>
        h.nome.toLowerCase().includes(termo) ||
        h.local.toLowerCase().includes(termo)
    );
  }, [busca]);

  const renderStars = (rating: number) => {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
      stars += i <= rating ? '★' : '☆';
    }
    return (
      <View style={styles.starsContainer}>
        <Text style={styles.starIconText}>{stars}</Text>
        <Text style={styles.ratingText}>{`(${rating}.0)`}</Text>
      </View>
    );
  };

  const renderHotelCard = ({ item }: { item: Hotel }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imagem }} style={styles.image} />
      <View style={styles.cardInfo}>
        <View style={styles.headerRow}>
          <Text style={styles.hotelName} numberOfLines={1}>{item.nome}</Text>
        </View>
        {renderStars(item.avaliacao)}
        <View style={styles.locationRow}>
          <Text style={styles.pinIcon}>📍</Text>
          <Text style={styles.locationText}>{item.local}</Text>
        </View>
        <View style={styles.priceRow}>
          <Text style={styles.priceLabel}>A partir de</Text>
          <Text style={styles.priceValue}>
            {item.preco} <Text style={styles.priceNight}>/ noite</Text>
          </Text>
        </View>
      </View>
    </View>
  );

  const renderEmpty = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyIcon}>🔍</Text>
      <Text style={styles.emptyTitle}>Nenhum resultado</Text>
      <Text style={styles.emptySubtitle}>
        Tente buscar por outro nome ou cidade.
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      
      {/* CABEÇALHO UNIFICADO AZUL */}
      <View style={styles.headerTop}>
        <Text style={styles.headerTopText}>viaje mais ✈️</Text>
      </View>
      {/* A BARRA DE MENU BRANCA FOI REMOVIDA DAQUI */}

      {/* Barra de pesquisa */}
      <View style={styles.searchWrapper}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar hotel ou cidade..."
          placeholderTextColor="#A0A4AB"
          value={busca}
          onChangeText={setBusca}
          returnKeyType="search"
        />
        {busca.length > 0 && (
          <TouchableOpacity onPress={() => setBusca('')} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
            <Text style={styles.clearBtn}>✕</Text>
          </TouchableOpacity>
        )}
      </View>

      {busca.length > 0 && (
        <Text style={styles.resultCount}>
          {`${hoteisFiltrados.length} ${hoteisFiltrados.length === 1 ? 'resultado' : 'resultados'} para "${busca}"`}
        </Text>
      )}

      <FlatList
        data={hoteisFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={renderHotelCard}
        ListEmptyComponent={renderEmpty}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        keyboardShouldPersistTaps="handled"
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
    backgroundColor: '#F5F5F5', // Mantive o fundo claro para destacar os cards
    paddingTop: Platform.OS === 'android' ? 25 : 0 
  },

  // Estilos do Cabeçalho
  headerTop: { backgroundColor: '#0056D2', padding: 18, alignItems: 'center' },
  headerTopText: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  // Estilos do menu removidos daqui

  // Estilos do Rodapé
  footer: { backgroundColor: '#0056D2', padding: 15, alignItems: 'center' },
  footerText: { color: '#fff', fontSize: 14, fontWeight: '500' },

  // Estilos originais da página
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 8,
    borderRadius: 12,
    paddingHorizontal: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 4,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 46,
    fontSize: 15,
    color: '#2C2F33',
  },
  clearBtn: {
    fontSize: 14,
    color: '#A0A4AB',
    paddingHorizontal: 4,
  },
  resultCount: {
    fontSize: 13,
    color: '#666',
    marginHorizontal: 22,
    marginBottom: 6,
  },
  listContainer: {
    padding: 20,
    paddingBottom: 20,
  },
  emptyContainer: {
    alignItems: 'center',
    marginTop: 60,
  },
  emptyIcon: {
    fontSize: 48,
    marginBottom: 12,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
  },
  emptySubtitle: {
    fontSize: 14,
    color: '#666',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    overflow: 'hidden',
    maxWidth: 900,
    alignSelf: 'center',
    width: '100%',
  },
  image: {
    width: '100%',
    aspectRatio: 16 / 9,
    backgroundColor: '#E0E0E0',
  },
  cardInfo: {
    padding: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  hotelName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4B4E53',
    flex: 1,
  },
  starsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  starIconText: {
    fontSize: 18,
    color: '#FFD700',
    letterSpacing: 2,
  },
  ratingText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 6,
    fontWeight: 'bold',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  pinIcon: {
    fontSize: 14,
    marginRight: 4,
  },
  locationText: {
    fontSize: 14,
    color: '#666',
  },
  priceRow: {
    flexDirection: 'column',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    paddingTop: 12,
  },
  priceLabel: {
    fontSize: 12,
    color: '#888',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  priceValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  priceNight: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#666',
  },
});