import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  TextInput, 
  Image, 
  SafeAreaView 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Certifique-se de ter instalado ou use outro ícone

export default function CarrinhoViagem() {
  const [dias, setDias] = useState('7');
  const [viajantes, setViajantes] = useState('2');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Título da Tela */}
        <View style={styles.header}>
          <Text style={styles.title}>Finalizar Viagem</Text>
          <Text style={styles.subtitle}>Confira os detalhes do seu pacote</Text>
        </View>

        {/* Card do Destino Selecionado */}
        <View style={styles.cardDestino}>
          <Image 
            source={{ uri: 'https://www.embracon.com.br/_next/image?url=https%3A%2F%2Fembra-assets.nyc3.digitaloceanspaces.com%2Fpublic%2Fblog%2Fos-lugares-de-paris-que-voce-nao-pode-deixar-de-conhecer.jpg&w=3840&q=75' }} 
            style={styles.imgDestino} 
          />
          <View style={styles.infoDestino}>
            <Text style={styles.nomeLugar}>Paris, França</Text>
            <Text style={styles.tagline}>Hotel Boutique + Passagem Aérea</Text>
            <Text style={styles.precoUnitario}>R$ 4.500,00 / pessoa</Text>
          </View>
        </View>

        {/* Configurações da Viagem */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Configurações da Viagem</Text>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Quantos dias?</Text>
            <TextInput 
              style={styles.input} 
              value={dias} 
              onChangeText={setDias} 
              keyboardType="numeric"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Quantidade de viajantes:</Text>
            <TextInput 
              style={styles.input} 
              value={viajantes} 
              onChangeText={setViajantes} 
              keyboardType="numeric"
            />
          </View>
        </View>

        {/* Resumo de Valores */}
        <View style={styles.resumoContainer}>
          <Text style={styles.sectionTitle}>Resumo do Valor</Text>
          
          <View style={styles.linhaResumo}>
            <Text style={styles.resumoTexto}>Pacote base (x{viajantes})</Text>
            <Text style={styles.resumoValor}>R$ 9.000,00</Text>
          </View>

          <View style={styles.linhaResumo}>
            <Text style={styles.resumoTexto}>Taxas de embarque</Text>
            <Text style={styles.resumoValor}>R$ 450,00</Text>
          </View>

          <View style={styles.linhaTotal}>
            <Text style={styles.totalTexto}>Total</Text>
            <Text style={styles.totalValor}>R$ 9.450,00</Text>
          </View>
        </View>

        {/* Botão Finalizar */}
        <TouchableOpacity style={styles.btnFinalizar}>
          <Text style={styles.btnFinalizarTexto}>CONFIRMAR E PAGAR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnVoltar}>
          <Text style={styles.btnVoltarTexto}>Escolher outro destino</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#4B4E53' },
  scrollContent: { padding: 20 },
  
  header: { marginBottom: 25, marginTop: 10 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#fff' },
  subtitle: { fontSize: 14, color: '#fff' },

  cardDestino: { 
    backgroundColor: '#fff', 
    borderRadius: 20, 
    flexDirection: 'row', 
    padding: 15, 
    alignItems: 'center',
    elevation: 4,
    marginBottom: 25
  },
  imgDestino: { width: 80, height: 80, borderRadius: 15 },
  infoDestino: { marginLeft: 15, flex: 1 },
  nomeLugar: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  tagline: { fontSize: 12, color: '#0055aa' },
  precoUnitario: { fontSize: 13, color: '#666', marginTop: 5 },

  section: { backgroundColor: '#fff', borderRadius: 20, padding: 20, marginBottom: 25 },
  sectionTitle: { fontSize: 17, fontWeight: 'bold', color: '#003366', marginBottom: 15 },
  
  inputGroup: { marginBottom: 15 },
  label: { fontSize: 14, color: '#555', marginBottom: 5 },
  input: { 
    backgroundColor: '#f5f5f5', 
    borderRadius: 10, 
    padding: 12, 
    borderWidth: 1, 
    borderColor: '#ddd',
    fontSize: 16
  },

  resumoContainer: { backgroundColor: '#fff', borderRadius: 20, padding: 20, marginBottom: 25 },
  linhaResumo: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  resumoTexto: { color: '#666' },
  resumoValor: { fontWeight: '500' },
  
  linhaTotal: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: 15, 
    paddingTop: 15, 
    borderTopWidth: 1, 
    borderTopColor: '#eee' 
  },
  totalTexto: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  totalValor: { fontSize: 20, fontWeight: 'bold', color: '#0055aa' },

  btnFinalizar: { 
    backgroundColor: '#0055aa', 
    padding: 18, 
    borderRadius: 15, 
    alignItems: 'center',
    elevation: 3
  },
  btnFinalizarTexto: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  
  btnVoltar: { marginTop: 15, alignItems: 'center', padding: 10 },
  btnVoltarTexto: { color: '#fff', fontWeight: '500' }
});