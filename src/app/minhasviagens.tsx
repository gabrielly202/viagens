import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const todasAsViagens = [
  {
    id: '1',
    destino: 'Paris, França',
    data: '10/05/2026',
    valor: 'R$ 4.500',
    status: 'Concluída',
    img: 'https://digital.ihg.com/is/image/ihg/intercontinental-paris-7596881385-2x1',
  },
  {
    id: '2',
    destino: 'Gramado, Brasil',
    data: '15/08/2026',
    valor: 'R$ 2.200',
    status: 'Agendada',
    img: 'https://minimundo.com.br/wp-content/uploads/2024/03/voesimples-1024x640.jpg',
  },
  {
    id: '3',
    destino: 'Tóquio, Japão',
    data: '12/12/2025',
    valor: 'R$ 7.800',
    status: 'Concluída',
    img: 'https://img.freepik.com/fotos-gratis/vista-aerea-da-paisagem-urbana-de-toquio-com-a-montanha-fuji-no-japao_335224-148.jpg?semt=ais_hybrid&w=740&q=80',
  },
  {
    id: '4',
    destino: 'Rio de Janeiro',
    data: '20/11/2026',
    valor: 'R$ 1.800',
    status: 'Agendada',
    img: 'https://content.r9cdn.net/rimg/dimg/54/ed/eb0f657a-lm-159298-16d6b936db3.jpg?crop=true&width=1020&height=498',
  },
];

export default function MinhasViagens() {
  const [abaAtiva, setAbaAtiva] = useState('Agendada');

  const dadosFiltrados = todasAsViagens.filter(
    viagem => viagem.status === abaAtiva
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.tituloPagina}>✈️ Minhas Viagens</Text>
        <Text style={styles.subtitulo}>
          Acompanhe suas aventuras pelo mundo
        </Text>
      </View>

      <View style={styles.abaContainer}>
        <TouchableOpacity
          style={[
            styles.aba,
            abaAtiva === 'Agendada' && styles.abaAtiva,
          ]}
          onPress={() => setAbaAtiva('Agendada')}
        >
          <Text
            style={
              abaAtiva === 'Agendada'
                ? styles.textoAbaAtivo
                : styles.textoAba
            }
          >
            Futuras
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.aba,
            abaAtiva === 'Concluída' && styles.abaAtiva,
          ]}
          onPress={() => setAbaAtiva('Concluída')}
        >
          <Text
            style={
              abaAtiva === 'Concluída'
                ? styles.textoAbaAtivo
                : styles.textoAba
            }
          >
            Histórico
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.contador}>
        {dadosFiltrados.length} viagem(ns) encontrada(s)
      </Text>

      <FlatList
        data={dadosFiltrados}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 80 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.img }} style={styles.imagem} />

            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>{item.status}</Text>
            </View>

            <View style={styles.info}>
              <Text style={styles.nomeLugar}>{item.destino}</Text>

              <Text style={styles.detalhes}>
                📅 Data: {item.data}
              </Text>

              <Text style={styles.valor}>
                💰 Valor: {item.valor}
              </Text>

              <TouchableOpacity style={styles.botaoDetalhes}>
                <Text style={styles.botaoTexto}>
                  Ver Detalhes
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <View style={styles.footer}>
        <Text style={styles.footerText}>✈️ Viaje Mais</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0055aa',
    paddingHorizontal: 15,
  },

  header: {
    marginTop: 15,
    marginBottom: 20,
  },

  tituloPagina: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffff',
    textAlign: 'center',
  },

  subtitulo: {
    textAlign: 'center',
    color: '#ffff',
    marginTop: 5,
    fontSize: 14,
  },

  abaContainer: {
    flexDirection: 'row',
    backgroundColor: '#E8EEF7',
    borderRadius: 15,
    padding: 5,
    marginBottom: 15,
  },

  aba: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },

  abaAtiva: {
    backgroundColor: '#0055aa',
  },

  textoAba: {
    color: '#666',
    fontWeight: '600',
  },

  textoAbaAtivo: {
    color: '#fff',
    fontWeight: 'bold',
  },

  contador: {
    color: '#fff',
    marginBottom: 15,
    fontWeight: '600',
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },

  imagem: {
    width: '100%',
    height: 220,
  },

  statusBadge: {
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: '#0055aa',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  statusText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },

  info: {
    padding: 18,
  },

  nomeLugar: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 10,
  },

  detalhes: {
    color: '#666',
    fontSize: 15,
    marginBottom: 5,
  },

  valor: {
    color: '#0055aa',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 5,
  },

  botaoDetalhes: {
    marginTop: 15,
    backgroundColor: '#0055aa',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },

  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 55,
    backgroundColor: '#0055aa',
    justifyContent: 'center',
    alignItems: 'center',
  },

  footerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});