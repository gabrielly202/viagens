import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

export default function Carossel() {
  // Imagem de avião da internet para não precisar da pasta assets agora
  const airplaneImage = {
    uri: 'https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?q=80&w=2069&auto=format&fit=crop'
  };

  return (
    <ImageBackground
      source={airplaneImage}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.overlay}
      >
        <View style={styles.loginBox}>
          <Text style={styles.title}>VIAGENS</Text>
          <Text style={styles.subtitle}>Prepare-se para decolar!</Text>

          <TextInput
            placeholder="Seu E-mail"
            style={styles.input}
            placeholderTextColor="#888"
          />

          <TextInput
            placeholder="Sua Senha"
            style={styles.input}
            secureTextEntry
            placeholderTextColor="#888"
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>ENTRAR</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.forgotPass}>
            <Text style={styles.forgotText}>
              Ainda não tem conta? Cadastre-se
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBox: {
    width: '85%',
    padding: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    borderRadius: 25,
    alignItems: 'center',
    boxShadow: '0px 4px 5px rgba(0,0,0,0.3)',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#003366',
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 25,
  },
  input: {
    width: '100%',
    height: 55,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#eee',
  },
  button: {
    width: '100%',
    height: 55,
    backgroundColor: '#0055aa',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  forgotPass: {
    marginTop: 20,
  },
  forgotText: {
    color: '#0055aa',
    fontSize: 13,
  },
});