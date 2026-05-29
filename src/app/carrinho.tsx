import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  SafeAreaView,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

export default function Carrinho() {
  // Estados para guardar o que o usuario digita e seleciona
  const [endereco, setEndereco] = useState('');
  const [cidade, setCidade] = useState('');
  const [pagamentoSelecionado, setPagamentoSelecionado] = useState('cartao'); // Padrao: cartao

  // Funcao simulando o clique de finalizar
  const handleFinalizar = () => {
    if (!endereco || !cidade) {
      alert('Por favor, preencha seu endereço e cidade!');
      return;
    }
    alert(`Reserva finalizada com sucesso via ${pagamentoSelecionado.toUpperCase()}!`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        style={{ flex: 1 }} 
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          
          <Text style={styles.pageTitle}>Finalizar Reserva</Text>

          {/* Secao 1: Resumo do Pedido */}
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>🏨 Resumo do Hotel</Text>
            <Text style={styles.hotelName}>Copacabana Palace</Text>
            <Text style={styles.hotelDetails}>📍 Rio de Janeiro, Brasil</Text>
            <Text style={styles.hotelDetails}>📅 2 Noites (10/Nov - 12/Nov)</Text>
            
            <View style={styles.divider} />
            
            <View style={styles.priceRow}>
              <Text style={styles.priceLabel}>Total a pagar:</Text>
              <Text style={styles.priceValue}>R$ 4.200</Text>
            </View>
          </View>

          {/* Secao 2: Dados do Cliente e Endereco */}
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>📍 Seu Endereço</Text>
            
            <Text style={styles.inputLabel}>Rua, Numero e Bairro</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: Rua das Flores, 123 - Centro"
              value={endereco}
              onChangeText={setEndereco}
            />

            <Text style={styles.inputLabel}>Cidade / Estado</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: Sao Paulo - SP"
              value={cidade}
              onChangeText={setCidade}
            />
          </View>

          {/* Secao 3: Formas de Pagamento */}
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>💰 Forma de Pagamento</Text>
            
            <TouchableOpacity 
              style={[styles.paymentOption, pagamentoSelecionado === 'cartao' && styles.paymentOptionSelected]}
              onPress={() => setPagamentoSelecionado('cartao')}
            >
              <Text style={styles.paymentIcon}>💳</Text>
              <Text style={[styles.paymentText, pagamentoSelecionado === 'cartao' && styles.paymentTextSelected]}>
                Cartão de Crédito
              </Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.paymentOption, pagamentoSelecionado === 'pix' && styles.paymentOptionSelected]}
              onPress={() => setPagamentoSelecionado('pix')}
            >
              <Text style={styles.paymentIcon}>📱</Text>
              <Text style={[styles.paymentText, pagamentoSelecionado === 'pix' && styles.paymentTextSelected]}>
                PIX (Aprovação imediata)
              </Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.paymentOption, pagamentoSelecionado === 'boleto' && styles.paymentOptionSelected]}
              onPress={() => set